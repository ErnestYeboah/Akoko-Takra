<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
const heroShell = ref<HTMLElement | null>(null);

let resizeObserver: ResizeObserver | undefined;
let animationFrame = 0;
let ctx: CanvasRenderingContext2D | null = null;
let width = 0;
let height = 0;
let dpr = 1;
let points: Point[] = [];
let pointer = { x: -1000, y: -1000 };

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isHub: boolean;
};

type RGB = [number, number, number];

// Theme RGB triplets corresponding to --color-1 .. --color-5 from main.css
const theme: Record<"c1" | "c2" | "c3" | "c4" | "c5", RGB> = {
  c1: [6, 54, 45], // #06362d - deep corporate forest
  c2: [12, 94, 55], // #0c5e37 - rich pine green
  c3: [0, 150, 49], // #009631 - classic business green
  c4: [10, 201, 24], // #0ac918 - crisp bright tech green
  c5: [94, 255, 5], // #5eff05 - electric neon lime accent
};

const hexToRgb = (hex: string, fallback: RGB): RGB => {
  const clean = hex.replace("#", "").trim();
  if (clean.length === 6) {
    const num = parseInt(clean, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }
  return fallback;
};

const syncThemeFromCSS = () => {
  if (typeof window === "undefined") return;
  const s = getComputedStyle(document.documentElement);
  theme.c1 = hexToRgb(s.getPropertyValue("--color-1"), theme.c1);
  theme.c2 = hexToRgb(s.getPropertyValue("--color-2"), theme.c2);
  theme.c3 = hexToRgb(s.getPropertyValue("--color-3"), theme.c3);
  theme.c4 = hexToRgb(s.getPropertyValue("--color-4"), theme.c4);
  theme.c5 = hexToRgb(s.getPropertyValue("--color-5"), theme.c5);
};

const createPoints = () => {
  const amount = Math.max(
    80,
    Math.min(160, Math.round((width * height) / 6000)),
  );
  points = Array.from({ length: amount }, (_, i) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    radius: Math.random() * 2 + 1.2,
    isHub: i % 8 === 0, // ~12% are prominent focal nodes
  }));
};

const resizeCanvas = () => {
  if (!canvas.value) return;
  const rect = canvas.value.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.value.width = Math.round(width * dpr);
  canvas.value.height = Math.round(height * dpr);
  ctx = canvas.value.getContext("2d");
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createPoints();
};

const draw = () => {
  const c = ctx;
  if (!c) return;
  c.clearRect(0, 0, width, height);

  // 1. Move network nodes slowly and reflect at canvas boundaries
  for (const p of points) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
    p.x = Math.max(0, Math.min(width, p.x));
    p.y = Math.max(0, Math.min(height, p.y));
  }

  // 2. Inter-node mesh connections with layered depth (color-2 / color-3 / color-4)
  for (let i = 0; i < points.length; i++) {
    const a = points[i] as Point;
    for (let j = i + 1; j < points.length; j++) {
      const b = points[j] as Point;
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.hypot(dx, dy);
      const maxDistance = Math.min(190, width * 0.17);

      if (distance < maxDistance) {
        const factor = 1 - distance / maxDistance;
        const alpha = factor * 0.42;

        c.beginPath();
        c.moveTo(a.x, a.y);
        c.lineTo(b.x, b.y);

        // Tiered color depth: tight connections pop in color-4 (#0ac918), wider in color-3 (#009631)
        if (distance < maxDistance * 0.45) {
          c.strokeStyle = `rgba(${theme.c4[0]}, ${theme.c4[1]}, ${theme.c4[2]}, ${alpha * 1.1})`;
          c.lineWidth = 0.85;
        } else {
          c.strokeStyle = `rgba(${theme.c3[0]}, ${theme.c3[1]}, ${theme.c3[2]}, ${alpha})`;
          c.lineWidth = 0.65;
        }
        c.stroke();
      }
    }
  }

  // 3. Pointer Convergence - all nearby lines meet gracefully at the cursor
  if (pointer.x >= 0 && pointer.y >= 0) {
    const pointerRadius = 380;

    for (const p of points) {
      const distance = Math.hypot(p.x - pointer.x, p.y - pointer.y);
      if (distance < pointerRadius) {
        const factor = 1 - distance / pointerRadius;
        const alpha = factor * 0.72;

        // Elegant gradient from node color-3/4 towards mouse neon lime (color-5)
        const gradient = c.createLinearGradient(p.x, p.y, pointer.x, pointer.y);
        gradient.addColorStop(
          0,
          `rgba(${theme.c3[0]}, ${theme.c3[1]}, ${theme.c3[2]}, ${alpha * 0.4})`,
        );
        gradient.addColorStop(
          0.6,
          `rgba(${theme.c4[0]}, ${theme.c4[1]}, ${theme.c4[2]}, ${alpha * 0.75})`,
        );
        gradient.addColorStop(
          1,
          `rgba(${theme.c5[0]}, ${theme.c5[1]}, ${theme.c5[2]}, ${alpha})`,
        );

        c.beginPath();
        c.moveTo(p.x, p.y);
        c.lineTo(pointer.x, pointer.y);
        c.strokeStyle = gradient;
        c.lineWidth = 0.75 + factor * 0.75;
        c.stroke();
      }
    }

    // Modern focal target at the cursor position
    // Outer subtle radar pulse
    c.beginPath();
    c.arc(pointer.x, pointer.y, 18, 0, Math.PI * 2);
    c.strokeStyle = `rgba(${theme.c5[0]}, ${theme.c5[1]}, ${theme.c5[2]}, 0.22)`;
    c.lineWidth = 1;
    c.stroke();

    // Mid halo ring
    c.beginPath();
    c.arc(pointer.x, pointer.y, 7, 0, Math.PI * 2);
    c.fillStyle = `rgba(${theme.c5[0]}, ${theme.c5[1]}, ${theme.c5[2]}, 0.28)`;
    c.fill();

    // Precise core dot
    c.beginPath();
    c.arc(pointer.x, pointer.y, 2.8, 0, Math.PI * 2);
    c.fillStyle = `rgba(${theme.c5[0]}, ${theme.c5[1]}, ${theme.c5[2]}, 0.95)`;
    c.fill();
  }

  // 4. Network Data Nodes
  for (const p of points) {
    const isNearPointer =
      pointer.x >= 0 && Math.hypot(p.x - pointer.x, p.y - pointer.y) < 200;

    // Outer glow halo
    c.beginPath();
    const haloRadius = p.radius + (p.isHub ? 4.5 : 2.5);
    c.arc(p.x, p.y, haloRadius, 0, Math.PI * 2);
    if (p.isHub || isNearPointer) {
      c.fillStyle = `rgba(${theme.c5[0]}, ${theme.c5[1]}, ${theme.c5[2]}, 0.16)`;
    } else {
      c.fillStyle = `rgba(${theme.c3[0]}, ${theme.c3[1]}, ${theme.c3[2]}, 0.08)`;
    }
    c.fill();

    // Solid core
    c.beginPath();
    c.arc(p.x, p.y, p.radius * (isNearPointer ? 1.25 : 1), 0, Math.PI * 2);
    if (p.isHub || isNearPointer) {
      c.fillStyle = `rgba(${theme.c5[0]}, ${theme.c5[1]}, ${theme.c5[2]}, 0.88)`;
    } else {
      c.fillStyle = `rgba(${theme.c4[0]}, ${theme.c4[1]}, ${theme.c4[2]}, 0.65)`;
    }
    c.fill();
  }

  animationFrame = requestAnimationFrame(draw);
};

const onPointerMove = (event: PointerEvent) => {
  const rect = canvas.value?.getBoundingClientRect();
  if (!rect) return;
  pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
};

const onPointerLeave = () => {
  pointer = { x: -1000, y: -1000 };
};

onMounted(() => {
  if (!canvas.value) return;
  syncThemeFromCSS();
  resizeCanvas();
  resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(canvas.value);

  const shell = heroShell.value ?? canvas.value;
  shell.addEventListener("pointermove", onPointerMove);
  shell.addEventListener("pointerleave", onPointerLeave);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    draw();
    cancelAnimationFrame(animationFrame);
    return;
  }
  draw();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
  resizeObserver?.disconnect();
  const shell = heroShell.value ?? canvas.value;
  shell?.removeEventListener("pointermove", onPointerMove);
  shell?.removeEventListener("pointerleave", onPointerLeave);
});
</script>

<template>
  <main class="geometry-layout relative h-[98vh] overflow-hidden text-white">
    <section ref="heroShell" class="geometry-shell relative isolate h-[98vh]">
      <!-- Atmospheric Glows derived from CSS variables -->
      <div
        class="ambient-glow ambient-glow-top pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>
      <div
        class="ambient-glow ambient-glow-center pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>

      <!-- Interactive Network Canvas -->
      <canvas
        ref="canvas"
        class="network-canvas pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      ></canvas>

      <!-- Slot Content rendered with full pointer interactivity -->
      <div
        class="relative z-10 w-full min-h-[calc(100vh-35px)] py-4 pointer-events-auto"
      >
        <slot />
      </div>
    </section>
  </main>
</template>

<style scoped>
.geometry-layout {
  background-color: var(--color-1, #06362d);
}

.geometry-shell {
  background:
    radial-gradient(
      ellipse 85% 65% at 50% 12%,
      rgba(12, 94, 55, 0.45) 0%,
      transparent 70%
    ),
    radial-gradient(
      circle at 15% 85%,
      rgba(6, 54, 45, 0.85) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 85% 75%,
      rgba(12, 94, 55, 0.35) 0%,
      transparent 55%
    ),
    linear-gradient(
      135deg,
      #02120e 0%,
      var(--color-1, #06362d) 48%,
      #031c17 100%
    );
  background-color: var(--color-1, #06362d);
}

.ambient-glow-top {
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(94, 255, 5, 0.09) 0%,
    rgba(10, 201, 24, 0.05) 30%,
    transparent 65%
  );
}

.ambient-glow-center {
  background: radial-gradient(
    circle at 50% 45%,
    rgba(0, 150, 49, 0.12) 0%,
    transparent 60%
  );
}

.network-canvas {
  z-index: 1;
  opacity: 0.95;
}
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import educationHubFrame from "@/assets/education_hub_frame.webp";
import frameImg from "@/assets/frame.webp";
import broilersEduHub from "@/assets/brolers_edu_hub.webp";
import farmDetails from "@/assets/farm_details.webp";
import forecast from "@/assets/forecast.webp";
import PartnersSection from "./PartnersSection.vue";

const mockups = [
  {
    src: educationHubFrame,
    alt: "Education Hub Page of Akoko Takra",
  },
  {
    src: frameImg,
    alt: "Home Page of Akoko Takra",
  },
  {
    src: broilersEduHub,
    alt: "Broilers Education Hub Page of Akoko Takra",
  },
  {
    src: farmDetails,
    alt: "Farm Details Page of Akoko Takra",
  },
  {
    src: forecast,
    alt: "Weather Forecast Page of Akoko Takra",
  },
];

const currentIndex = ref(0);

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % mockups.length;
  }, 3000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>
<template>
  <section id="about" class="scroll-mt-20 py-8 md:py-12">
    <div
      class="relative grid min-[992px]:grid-cols-2 justify-between min-h-[50vh] items-center gap-10 lg:gap-14"
    >
      <!-- Phone Mockup with Animated Orbital Rings -->
      <figure
        class="relative flex items-center justify-center min-h-95 sm:min-h-115 md:min-h-130 select-none"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <!-- Orbital Rings Background -->
        <div
          class="rings-container absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <svg
            class="orbital-svg w-[320px] h-80 sm:w-105 sm:h-105 md:w-120 md:h-120 lg:w-130 lg:h-130"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <!-- Arrowhead Marker for clockwise orbital cycle -->
              <marker
                id="orbit-arrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
              >
                <path d="M 1 2 L 8 5 L 1 8 Z" fill="#2d3748" />
              </marker>

              <!-- Radial glow behind the phone -->
              <radialGradient id="ring-ambient-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#65cbb9" stop-opacity="0.14" />
                <stop offset="65%" stop-color="#65cbb9" stop-opacity="0.03" />
                <stop offset="100%" stop-color="#65cbb9" stop-opacity="0" />
              </radialGradient>

              <!-- Smooth gradients for orbital arcs -->
              <linearGradient
                id="orbit-grad-right"
                x1="320"
                y1="50"
                x2="280"
                y2="460"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#2d3748" stop-opacity="0.25" />
                <stop offset="40%" stop-color="#2d3748" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#2d3748" stop-opacity="0.95" />
              </linearGradient>

              <linearGradient
                id="orbit-grad-left"
                x1="180"
                y1="450"
                x2="220"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#2d3748" stop-opacity="0.25" />
                <stop offset="40%" stop-color="#2d3748" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#2d3748" stop-opacity="0.95" />
              </linearGradient>

              <!-- Filter for glowing dots -->
              <filter
                id="teal-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Ambient glow halo -->
            <circle cx="250" cy="250" r="215" fill="url(#ring-ambient-glow)" />

            <!-- Outermost faint guide ring -->
            <circle
              cx="250"
              cy="250"
              r="240"
              stroke="#94a3b8"
              stroke-width="0.8"
              stroke-dasharray="3 8"
              opacity="0.3"
            />

            <!-- Counter-rotating dashed middle track with pulsing nodes -->
            <g class="orbit-layer-dashed">
              <circle
                cx="250"
                cy="250"
                r="180"
                stroke="#64748b"
                stroke-width="1.2"
                stroke-dasharray="5 7"
                opacity="0.35"
              />
              <circle
                cx="250"
                cy="70"
                r="3"
                fill="#65cbb9"
                filter="url(#teal-glow)"
                class="pulse-node"
              />
              <circle
                cx="250"
                cy="430"
                r="3"
                fill="#65cbb9"
                filter="url(#teal-glow)"
                class="pulse-node"
              />
            </g>

            <!-- Innermost fine accent track -->
            <circle
              cx="250"
              cy="250"
              r="145"
              stroke="#94a3b8"
              stroke-width="0.8"
              stroke-dasharray="2 5"
              opacity="0.22"
            />

            <!-- Primary Rotating Orbital Ring with Arrowheads -->
            <g class="orbit-layer-main">
              <!-- Right sweeping arc ending in arrowhead (clockwise down) -->
              <path
                d="M 323.5 47.9 A 215 215 0 0 1 287.3 461.7"
                stroke="url(#orbit-grad-right)"
                stroke-width="1.8"
                stroke-linecap="round"
                fill="none"
                marker-end="url(#orbit-arrow)"
              />
              <!-- Left sweeping arc ending in arrowhead (clockwise up) -->
              <path
                d="M 176.5 452.1 A 215 215 0 0 1 212.7 38.3"
                stroke="url(#orbit-grad-left)"
                stroke-width="1.8"
                stroke-linecap="round"
                fill="none"
                marker-end="url(#orbit-arrow)"
              />
            </g>
          </svg>
        </div>

        <!-- Phone Mockup Device -->
        <div
          class="phone-wrapper relative z-10 flex items-center justify-center min-h-95 sm:min-h-115 md:min-h-130"
        >
          <Transition name="slide-up" mode="out-in">
            <img
              :key="currentIndex"
              width="300"
              height="500"
              :src="mockups[currentIndex]?.src"
              :alt="mockups[currentIndex]?.alt"
              class="phone-device w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain pointer-events-none"
            />
          </Transition>
        </div>
      </figure>

      <div>
        <!-- Text Content -->
        <div>
          <h2
            class="heading capitalize mb-2"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            How It <span class="text-(--color-3)">Works</span>
          </h2>
          <p data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
            AkokoTakra is an all-in-one livestock farm management solution that
            simplifies farm operations, from feed and medication tracking to egg
            collection, sales, purchases, and payroll management. With real-time
            farm insights, weather forecasts, and an educational hub, AkokoTakra
            empowers farmers to make informed decisions, improve productivity,
            and manage their farms more efficiently.
          </p>
        </div>

        <PartnersSection />
      </div>
    </div>
  </section>
</template>

<style scoped>
p {
  width: 100%;
}

/* Perspective tilt on orbital rings container like in the reference image */
.rings-container {
  transform: rotate(-14deg);
  transition: transform 0.5s ease;
}

figure:hover .rings-container {
  transform: rotate(-10deg) scale(1.02);
}

/* Continuous smooth rotation of the main arrow orbit */
.orbit-layer-main {
  transform-origin: 250px 250px;
  animation: spin-clockwise 24s linear infinite;
}

/* Subtle counter-rotation for inner dashed track */
.orbit-layer-dashed {
  transform-origin: 250px 250px;
  animation: spin-counter 36s linear infinite;
}

/* Floating animation on the phone */
.phone-wrapper {
  animation: phone-float 4.5s ease-in-out infinite;
  overflow: hidden;
}

.phone-device {
  filter: drop-shadow(0 16px 28px rgba(0, 0, 0, 0.12))
    drop-shadow(0 4px 10px rgba(0, 0, 0, 0.08));
  transition: transform 0.3s ease;
}

figure:hover .phone-device {
  transform: scale(1.02);
}

/* Glowing pulse on nodes */
.pulse-node {
  animation: pulse-node 3s ease-in-out infinite alternate;
}

@keyframes spin-clockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-counter {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes phone-float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes pulse-node {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

/* Slide-up transition for changing phone screens */
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(40px) scale(0.97);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.97);
}
</style>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import heroBg from "@/assets/broilers.jpg";
import overlayComponent01 from "@/assets/overlays_uis/Component_01.png";
import overlayComponent03 from "@/assets/overlays_uis/Component_03.png";
import { ref, onMounted, onUnmounted } from "vue";

const goToStore = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.agroinnovagh.akokotakra",
    "_blank",
    "noopener,noreferrer",
  );
};

const takraNotes = [
  "Track farm activities",
  "Monitor your finances",
  "Get weather update",
  "Learn Best Practices",
  "Manage farm anywhere",
];

const currentIndex = ref(0);

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % takraNotes.length;
  }, 3000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <section
    id="home"
    class="hero-section relative min-h-screen overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32"
  >
    <!-- Top Sky & Clouds Layer -->
    <div
      class="sky-backdrop absolute top-0 left-0 right-0 h-[32%] sm:h-[65%] md:h-[68%] -z-20 overflow-hidden"
    >
      <img
        width="200"
        height="200"
        :src="heroBg"
        alt="Broilers"
        role="presentation"
        fetchpriority="high"
        class="hero_background_img"
      />
      <!-- Soft gradient overlay for atmospheric depth -->
      <div
        class="absolute inset-0 bg-linear-to-b from-[#66d6fe]/25 via-transparent to-white/30"
      ></div>
    </div>

    <!-- Curved White Horizon (Hill Crest) -->
    <div
      class="horizon-layer absolute top-[36%] sm:top-[30%] md:top-[20%] left-0 right-0 bottom-0 -z-10 flex flex-col pointer-events-none"
    >
      <!-- Convex SVG Arch peaking in center -->
      <svg
        class="w-full h-24 sm:h-36 md:h-48 text-white fill-current block shrink-0"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,140 Q720,15 1440,140 L1440,180 L0,180 Z" />
      </svg>
      <!-- Pure White Ground below horizon -->
      <div class="w-full flex-1 bg-white"></div>
    </div>

    <!-- Hero Content -->
    <div
      class="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center"
    >
      <!-- Split Headline flanking the central Phone Mockup -->
      <div
        class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2"
      >
        <!-- Left Headline (Aligned Right on Desktop) -->
        <div
          class="order-2 md:order-1 text-center min-[992px]:text-right min-[992px]:-translate-y-12 min-[992px]:translate-x-5"
        >
          <Transition name="slide-up" mode="out-in">
            <h1
              :key="currentIndex"
              class="hero-title text-(length:--step-1) min-[992px]:-skew-y-3 font-[600] text-(--text-color) tracking-tight whitespace-nowrap leading-[1.12]"
            >
              {{ takraNotes[currentIndex] }}
            </h1>
          </Transition>
        </div>

        <!-- Central Phone Frame (Replaces the can/toolbox) -->
        <div
          class="relative flex justify-center items-center order-1 md:order-2 py-2 sm:py-3"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div class="relative group">
            <img
              src="../../assets/frame.webp"
              width="310"
              height="550"
              alt="Akoko Takra Livestock App Preview"
              fetchpriority="high"
              class="phone_device w-46.25 sm:w-55 md:w-62.5 lg:w-72.5 h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            />

            <!-- Floating UI Card Overlay 1 (Top Left) -->
            <div
              class="hero-overlay-1 absolute -left-4 sm:-left-10 md:-left-14 top-1/4 -translate-y-1/2 z-20 hidden min-[540px]:block pointer-events-none"
            >
              <img
                :src="overlayComponent01"
                alt="App Widget Preview"
                class="w-28 sm:w-36 md:w-42 h-auto object-contain rounded-xl drop-shadow-2xl border border-white/60 bg-white/40 backdrop-blur-xs"
              />
            </div>

            <!-- Floating UI Card Overlay 2 (Bottom Right) -->
            <div
              class="hero-overlay-2 absolute -right-4 sm:-right-10 md:-right-14 bottom-1/4 translate-y-1/4 z-20 hidden min-[540px]:block pointer-events-none"
            >
              <img
                :src="overlayComponent03"
                alt="Farm Analytics Widget"
                class="w-32 sm:w-40 md:w-48 h-auto object-contain rounded-xl drop-shadow-2xl border border-white/60 bg-white/40 backdrop-blur-xs"
              />
            </div>
          </div>
        </div>

        <!-- Right Headline (Aligned Left on Desktop) -->
        <div
          class="text-center md:text-left order-3 md:order-3 min-[992px]:-translate-y-12 min-[992px]:-translate-x-5"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <h2
            class="hero-title text-(length:--step-1) font-[600] whitespace-nowrap tracking-tight min-[992px]:skew-y-3 text-(--text-color) leading-[1.12]"
          >
            One smart app.
          </h2>
        </div>
      </div>
    </div>

    <!-- Lower Section on the White Ground -->
    <div class="relative w-full bg-white pt-4 sm:pb-16 text-center">
      <div class="max-w-2xl mx-auto px-4 space-y-5">
        <p
          class="text-[#4b5563] text-sm sm:text-base md:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="150"
        >
          Move to effective record keeping, accurate data of your poultry farm
          and data driven decisions
        </p>

        <!-- CTA Button -->
        <div
          class="flex justify-center pt-2"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="250"
        >
          <Button :onclick="goToStore" label="GET STARTED" />
        </div>

        <!-- Bottom Trust & Capability Badges (Mirrors bottom row in reference) -->
        <div
          class="pt-8 sm:pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-500 font-medium"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="350"
        >
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-(--color-4)"></span>
            <span>Real-time Farm Tracking</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-(--color-2)"></span>
            <span>Offline-Ready Mobile App</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-(--color-1)"></span>
            <span>5000+ Active Farms</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero_background_img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 70%;
  margin-top: -2rem;
}

.phone_device {
  filter: drop-shadow(0px 4px 3px rgba(0 0 0 / 0.2));
}

/* Slide-up transition for takra notes */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}

/* Floating UI card overlays */
.hero-overlay-1 {
  animation: hero-float-left 5.5s ease-in-out infinite;
}

.hero-overlay-2 {
  animation: hero-float-right 6s ease-in-out infinite 0.8s;
}

@keyframes hero-float-left {
  0%,
  100% {
    transform: translateY(-50%) rotate(-3deg);
  }
  50% {
    transform: translateY(calc(-50% - 8px)) rotate(-1deg);
  }
}

@keyframes hero-float-right {
  0%,
  100% {
    transform: translateY(25%) rotate(3deg);
  }
  50% {
    transform: translateY(calc(25% - 8px)) rotate(1deg);
  }
}
</style>

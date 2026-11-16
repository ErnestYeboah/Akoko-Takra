<script setup lang="ts">
import screen3 from "@/assets/screen3.png";
import screen4 from "@/assets/screen4.png";
import screen5 from "@/assets/screen5.png";
import screen6 from "@/assets/screen6.png";

const screens = [screen3, screen4, screen5, screen6];
</script>

<template>
  <section class="slider_container" aria-label="App screenshots preview">
    <div class="slider">
      <div
        v-for="(screen, index) in screens"
        :key="`slider1-${index}`"
        class="screen_card"
      >
        <img
          width="339"
          height="735"
          :src="screen"
          :alt="`Akoko Takra Screen Preview ${index + 1}`"
          loading="lazy"
        />
      </div>
    </div>
    <div class="slider" aria-hidden="true">
      <div
        v-for="(screen, index) in screens"
        :key="`slider2-${index}`"
        class="screen_card"
      >
        <img
          width="339"
          height="735"
          :src="screen"
          :alt="`Akoko Takra Screen Preview ${index + 1}`"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider_container {
  margin-block: var(--padding);
  overflow-x: hidden;
  display: flex;
  position: relative;
  width: 100%;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}

.slider {
  animation: slide 45s linear infinite;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100%;
}

.slider_container:hover .slider {
  animation-play-state: paused;
}

.screen_card {
  height: 50vh;
  transition: transform 0.3s ease;

  & img {
    min-width: 100%;
    min-height: 50vh;
  }
}

.screen_card:hover {
  transform: translateY(-4px) scale(1.02);
}

.screen_card img {
  height: clamp(16rem, 30vh, 22rem);
  width: auto;
  aspect-ratio: 339 / 735;
  object-fit: cover;
  display: block;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>

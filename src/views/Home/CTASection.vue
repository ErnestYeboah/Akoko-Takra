<script setup lang="ts">
const goToStore = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.agroinnovagh.akokotakra",
    "_blank",
    "noopener,noreferrer",
  );
};
</script>
<template>
  <section
    id="cta-section"
    class="grid min-[992px]:grid-cols-2 mt-(--padding) items-center relative"
  >
    <div class="space-y-4" data-aos="fade-right" data-aos-duration="700">
      <h2 class="heading mb-2">
        Smart Livestock Care,
        <span class="text-(--color-3)"> Right in Your Pocket. </span>
      </h2>

      <!-- Description -->
      <p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
        Say goodbye to lost paper notebooks and guesswork. Track feed, egg
        production, bird mortality, treatments, and cashflow in real-time.
        Designed specifically for commercial and smallholder livestock farmers.
      </p>

      <button @click="goToStore" class="playstore_figure"></button>
    </div>
    <figure
      class="z-1 justify-self-center"
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      <img
        class="cta_image"
        width="300"
        height="300"
        loading="lazy"
        alt="Akoko_Takra_Home"
        src="../../assets/home_view.png"
      />
    </figure>

    <div
      class="max-[992px]:hidden back_shadow absolute right-30 top-15 h-[70%] w-[35%] -skew-x-4"
      data-aos="zoom-in"
      data-aos-duration="900"
      data-aos-delay="200"
    >
      <svg width="0" height="0" style="position: absolute">
        <defs>
          <clipPath id="rounded-poly-clip" clipPathUnits="objectBoundingBox">
            <path
              d="
        M 0.22 0.18
        L 0.95 0.05
        A 0.05 0.05 0 0 1 1.0 0.10
        L 1.0 0.90
        A 0.05 0.05 0 0 1 0.95 0.95
        L 0.15 0.73
        A 0.05 0.05 0 0 1 0.10 0.68
        L 0.16 0.23
        A 0.05 0.05 0 0 1 0.22 0.18
        Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.back_shadow {
  clip-path: url(#rounded-poly-clip);
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2));
  background-color: var(--accent-color);
  /* background-color: hsla(from var(--accent-color) h s l / 0.4); */
}

.playstore_figure {
  border-radius: 0px;
  height: 3rem;
  width: 10rem;
  background-image: url("../../assets/google_play.svg");
  background-size: cover;
  background-position: center;
  transition: scale 0.1s ease-in-out;

  &:hover {
    scale: 0.9;
  }
}

.cta_image {
  width: max(20vw, 200px);
}
</style>

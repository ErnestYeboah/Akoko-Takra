<script setup lang="ts">
const partners: string[] = [
  "Germany-giz.png",
  "kosmos.png",
  "gnapf_logo.png",
  "Gpp_Logo.png",
  "mest.png",
  "cta2.png",
];

const getImageUrl = (name: string) => {
  return new URL(`../../assets/${name}`, import.meta.url).href;
};
</script>

<template>
  <section id="partners" class="py-(--padding) scroll-mt-20">
    <h2
      class="text-3xl md:text-5xl lg:text-[4rem] font-bold uppercase text-center mt-(--padding) tracking-tight"
    >
      Smarter Farm Management. Better Productivity.
    </h2>
    <div
      class="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12 px-4 max-w-6xl mx-auto"
    >
      <figure
        v-for="logo in partners"
        :key="logo"
        class="flex items-center justify-center p-3 transition-transform duration-200 hover:scale-105"
      >
        <img
          :src="getImageUrl(logo)"
          width="120"
          height="80"
          class="h-12 md:h-16 w-auto object-contain brightness-95 hover:brightness-100"
          loading="lazy"
          :alt="logo.split('.')[0]"
        />
      </figure>
    </div>
  </section>
</template>

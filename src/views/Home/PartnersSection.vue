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
  <section id="partners" class="mt-8">
    <h2
      class="text-[1.3rem] font-bold mb-2"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      Our <span class="text-(--color-3)">Partners</span>
    </h2>
    <div class="flex flex-wrap items-center flex-no">
      <figure
        v-for="(logo, index) in partners"
        :key="logo"
        class="flex items-center justify-center p-3 transition-transform duration-200 hover:scale-105"
        data-aos="fade-up"
        data-aos-duration="600"
        :data-aos-delay="index * 80"
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

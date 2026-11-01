<script setup lang="ts"></script>
<template>
  <section id="about" class="scroll-mt-20">
    <div
      class="relative grid min-[992px]:grid-cols-[auto_1fr] justify-between min-h-[50vh] items-center"
    >
      <figure>
        <img
          width="300"
          height="100"
          src="../../assets/forecast_view.webp"
          alt="Weather Forecast of Akoko Takra on Iphone"
        />
      </figure>
      <div>
        <h2 class="text-(length:--step-2) uppercase mb-2 font-medium">
          How It <span class="text-(--accent-color)">Works</span>
        </h2>
        <p>
          AkokoTakra is an all-in-one livestock farm management solution that
          simplifies farm operations, from feed and medication tracking to egg
          collection, sales, purchases, and payroll management. With real-time
          farm insights, weather forecasts, and an educational hub, AkokoTakra
          empowers farmers to make informed decisions, improve productivity, and
          manage their farms more efficiently.
        </p>
      </div>
      <img
        class="rotate-x-20 absolute left-100 -bottom-10 max-[992px]:hidden"
        width="200"
        height="300"
        src="../../assets/curved-arrow.png"
        alt="Arrow"
      />
    </div>
    <figure class="mt-(--padding)">
      <img
        class="mx-auto"
        src="../../assets/how_akokotakra_poultry_farm_management_software_works.png"
        alt="Wireframe and Work Flow of Akoko Takra"
      />
    </figure>
  </section>
</template>

<style scoped>
p {
  width: 100%;
}
</style>

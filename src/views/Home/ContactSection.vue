<script setup lang="ts"></script>

<template>
  <section
    id="contact"
    class="contact_section scroll-mt-24 text-center py-28 max-[992px]:py-24"
    data-aos="fade-up"
    data-aos-duration="700"
  >
    <div class="custom-shape-divider-top-1794843270">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <!-- Top Header -->
    <div class="mx-auto mb-12 sm:mb-16">
      <h2 class="heading mb-4">
        Contact <span class="text-(--color-3)">Us</span>
      </h2>
      <p class="mx-auto">We want to hear from you</p>
      <p class="sm:text-base mx-auto">
        Pay us a visit at our office or give us a call or equally send us that
        email and lets the conversation.
      </p>
    </div>

    <!-- 3 Columns Layout -->
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14 max-w-5xl mx-auto items-start"
    >
      <!-- Column 1: Our Office -->
      <div class="flex flex-col items-center text-center group">
        <figure
          class="mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        >
          <img
            width="88"
            height="88"
            src="../../assets/office-building.png"
            alt=""
          />
        </figure>

        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Our Office
        </h3>

        <a
          href="https://www.google.com/maps/place/AkokoMarket+Ghana/@5.6695421,-0.1557767,15z/data=!3m1!4b1!4m5!3m4!1s0xfdf9dea827dc623:0xbd093fcdfba398a4!8m2!3d5.6694641!4d-0.1470546"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm sm:text-base text-gray-600 hover:text-(--color-3) transition-colors leading-relaxed block"
        >
          Ghana: No. 31 Ogbojo Koo Street, Ogbojo - East Legon, Accra
        </a>
      </div>

      <!-- Column 2: Call Us -->
      <div class="flex flex-col items-center text-center group">
        <figure
          class="mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        >
          <img
            width="88"
            height="88"
            src="../../assets/smartphone.png"
            alt=""
          />
        </figure>

        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Call Us
        </h3>

        <div class="space-y-1">
          <a
            href="tel:+233240956276"
            class="text-sm sm:text-base text-gray-600 hover:text-(--color-3) transition-colors font-medium block"
          >
            +233 240 956 276
          </a>
          <a
            href="tel:+233553368762"
            class="text-sm sm:text-base text-gray-600 hover:text-(--color-3) transition-colors font-medium block"
          >
            +233 553 368 762
          </a>
        </div>
      </div>

      <!-- Column 3: Email Us -->
      <div class="flex flex-col items-center text-center group">
        <figure
          class="mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        >
          <img width="88" height="88" src="../../assets/email.png" alt="" />
        </figure>

        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Email Us
        </h3>

        <a
          href="mailto:info@akokotakra.com"
          class="text-sm sm:text-base text-gray-600 hover:text-(--color-3) transition-colors font-medium block"
        >
          info@akokotakra.com
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
p,
a {
  font-family: "avenir", sans-serif;
}

.contact_section {
  background-color: hsla(from var(--color-3) h s l / 0.03);
}
.custom-shape-divider-top-1794843270 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-1794843270 svg {
  position: relative;
  display: block;
  width: calc(274% + 1.3px);
  height: 158px;
}

.custom-shape-divider-top-1794843270 .shape-fill {
  fill: #ffffff;
}
</style>

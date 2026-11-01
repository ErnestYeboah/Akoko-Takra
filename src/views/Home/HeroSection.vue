<script setup lang="ts">
import Button from "@/components/Button.vue";
import GeometryLayout from "@/components/GeometryLayout.vue";
import NetBackground from "@/components/NetBackground.vue";

const goToStore = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.agroinnovagh.akokotakra",
    "_blank",
    "noopener,noreferrer",
  );
};
</script>

<template>
  <GeometryLayout>
    <section id="home" class="content-center h-screen relative hero_section">
      <div class="space-y-3 p-(--padding) min-[992px]:w-[50%]">
        <h1 class="text-(length:--step-1) text-white/80 company_name">
          AKOKO TAKRA
        </h1>
        <h2 class="text-(length:--step-2)">LIVESTOCK FARM MANAGEMENT</h2>
        <p>
          Move to effective record keeping , accurate data of your live stock
          farm and data driven decisions
        </p>
        <Button :onclick="goToStore" />
      </div>
      <img
        width="350"
        height="300"
        src="../../assets/home_view.png"
        alt="Akoko Takra Home View"
        class="first_frame absolute right-50 -bottom-4 pointer-events-none"
        fetchpriority="high"
      />
      <img
        class="absolute right-50 bottom-0 max-[992px]:hidden"
        src="../../assets/details_view.webp"
        width="140"
        height="100"
        fetchpriority="high"
        alt="Details Page of a farm on Akoko Takra"
      />
    </section>
    <NetBackground />
  </GeometryLayout>
</template>

<style scoped>
.hero_section {
  overflow: hidden;
  p {
    color: white;
  }
}

.first_frame {
  @media (width < 992px) {
    right: -30px;
    bottom: -90px;
    width: 200px;
  }

  @media (min-width: 800px) and (max-width: 992px) {
    width: 400px;
  }
}

.company_name {
  position: relative;
  width: fit-content;
  white-space: nowrap;

  &::before {
    background-color: var(--accent-color);
    width: 90px;
    height: 2px;
    border-radius: 10px;
    aspect-ratio: 1;
    right: -90px;
    bottom: 2px;
  }
}
</style>

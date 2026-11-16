<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import AOS from "aos";
import NavBar from "@/components/NavBar.vue";
import Footer from "./Footer.vue";
import GeneralQuestionSection from "./GeneralQuestionSection.vue";
import HeroSection from "./HeroSection.vue";
import HowItWorksSection from "./HowItWorksSection.vue";
import SEOHeader from "@/components/SEOHeader.vue";
import CTASection from "./CTASection.vue";
import ContactSection from "./ContactSection.vue";

onMounted(() => {
  nextTick(() => {
    AOS.refresh();
  });
});
</script>

<template>
  <SEOHeader
    title="Akoko Takra | Livestock & Poultry Farm Management System"
    description="AkokoTakra is an all-in-one livestock farm management solution that simplifies farm operations, from feed and medication tracking to egg collection, sales, purchases, and payroll management."
    image="https://akokotakra.com/og-image.png"
    url="https://akokotakra.com/"
  />
  <NavBar />
  <HeroSection />
  <main class="py-(--padding)">
    <HowItWorksSection />
    <GeneralQuestionSection />
    <CTASection />
  </main>
  <ContactSection />
  <Footer />
</template>

<style scoped>
main > *:not(:nth-child(2)) {
  width: 85%;
  margin-inline: auto;
}
</style>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import ContactUsSection from "./ContactUsSection.vue";
import Footer from "./Footer.vue";
import GeneralQuestionSection from "./GeneralQuestionSection.vue";
import HeroSection from "./HeroSection.vue";
import HowItWorksSection from "./HowItWorksSection.vue";
import PartnersSection from "./PartnersSection.vue";
import SEOHeader from "@/components/SEOHeader.vue";
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
  <main class="w-[85%] mx-auto py-(--padding)">
    <HowItWorksSection />
    <PartnersSection />
    <GeneralQuestionSection />
    <ContactUsSection />
  </main>
  <Footer />
</template>

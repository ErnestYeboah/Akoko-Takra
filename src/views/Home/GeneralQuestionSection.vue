<script setup lang="ts">
import { ref } from "vue";
import broilersFarmImg from "@/assets/broilers_farm.jpg";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "What is Akoko Takra?",
    answer:
      "Akoko Takra is an all-in-one livestock farm management system designed for precision record keeping, flock mortality tracking, feed and medication management, and financial insights to ensure the profitability and stability of your livestock.",
  },
  {
    question: "What are the benefits of record keeping?",
    answer:
      "Effective record keeping helps you plan, forecast feed conversion, track mortality trends, and identify bottlenecks early so you can make data-driven adjustments before issues affect farm yields.",
  },
  {
    question: "Is my farm data safe on Akoko Takra?",
    answer:
      "We take data security and privacy very seriously. Akoko Takra is hosted in world-class data centers with 24/7 surveillance, automated cloud backups, SSL encryption, and strict privacy controls to keep your farm data protected at all times.",
  },
  {
    question: "I'm not a farmer. How can your system help me?",
    answer:
      "Whether you are an agricultural investor, credit institution, insurance provider, government agency, feed supplier, or distributor, Akoko Takra delivers aggregated, verified industry insights to assess farm productivity and finance modern poultry operations.",
  },
  {
    question: "How do I set up my farm account?",
    answer:
      "Setting up takes less than 3 minutes. Complete our guided onboarding, configure your flock batches, and access your dashboard right away. Our customer support team is always available via WhatsApp and phone to assist you.",
  },
];

const selectedQuestionIndex = ref(0);

const toggleQuestion = (index: number) => {
  selectedQuestionIndex.value =
    selectedQuestionIndex.value === index ? -1 : index;
};
</script>

<template>
  <section
    id="general_questions_section"
    class="general-questions-section my-(--padding) scroll-mt-24"
  >
    <!-- Card Container with Broilers Farm Background -->
    <div
      class="faq-container relative overflow-hidden min-h-160 flex items-center bg-cover bg-right bg-no-repeat"
      :style="{ backgroundImage: `url(${broilersFarmImg})` }"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <!-- Gradient Overlay: Opaque on the Left for text readability, Fading to Transparent on the Right to reveal the broilers farm -->
      <div
        class="gradient-overlay absolute inset-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <!-- Content Layer -->
      <div class="relative z-10 w-full px-(--padding)">
        <div class="max-w-2xl">
          <!-- Eyebrow Badge -->
          <div
            class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-(--color-3)/30 border border-(--color-4)/40 text-xs font-semibold tracking-wider uppercase text-(--color-5) mb-4"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-(--color-5)"></span>
            Frequently Asked Questions
          </div>

          <!-- Accordion Question List on Left -->
          <div
            class="space-y-3"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div
              v-for="(qa, index) in questions"
              :key="qa.question"
              class="faq-item rounded-2xl transition-all duration-200 overflow-hidden border"
              :class="[
                selectedQuestionIndex === index
                  ? 'bg-[#06362d]/90 border-(--color-4)/60 shadow-lg'
                  : 'bg-black/35 hover:bg-black/45 border-white/10',
              ]"
              @click="selectedQuestionIndex = index"
            >
              <!-- Question Header (Button) -->
              <button
                type="button"
                class="w-full flex items-center justify-between text-left p-4 sm:p-4.5 gap-3 cursor-pointer select-none transition-colors"
                @click="toggleQuestion(index)"
                :aria-expanded="selectedQuestionIndex === index"
              >
                <span
                  class="font-semibold text-sm sm:text-base transition-colors"
                  :class="[
                    selectedQuestionIndex === index
                      ? 'text-(--color-5)'
                      : 'text-white/95',
                  ]"
                >
                  {{ qa.question }}
                </span>

                <!-- Chevron Icon Indicator -->
                <span
                  class="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white transition-transform duration-250"
                  :class="[
                    selectedQuestionIndex === index
                      ? 'rotate-180 bg-(--color-3) text-white'
                      : 'rotate-0',
                  ]"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <!-- Expandable Answer Body -->
              <div
                class="grid transition-all duration-300 ease-in-out px-4 sm:px-4.5"
                :class="[
                  selectedQuestionIndex === index
                    ? 'grid-rows-[1fr] opacity-100 pb-4'
                    : 'grid-rows-[0fr] opacity-0 pb-0',
                ]"
              >
                <div class="overflow-hidden">
                  <p
                    class="text-white! text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3"
                  >
                    {{ qa.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Badge on the Right (over the visible broiler farm image) -->
      <div
        class="hidden lg:flex absolute bottom-8 right-8 z-10 items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium shadow-xl pointer-events-none"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="250"
      >
        <span class="w-2 h-2 rounded-full bg-(--color-5) animate-pulse"></span>
        <span>Commercial Broiler &amp; Layer Management</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.general-questions-section {
  position: relative;
  color: white;
}

/* Gradient overlay: Deep solid emerald on left -> smooth fade to 100% transparent on right */
.gradient-overlay {
  background: linear-gradient(
    to right,
    #06362d 0%,
    #06362d 42%,
    rgba(6, 54, 45, 0.95) 54%,
    rgba(6, 54, 45, 0.72) 68%,
    rgba(6, 54, 45, 0.3) 85%,
    rgba(6, 54, 45, 0) 100%
  );
}
/* 
.gradient-overlay {
  background: linear-gradient(
    to right,
    var(--color-3) 0%,
    var(--color-3) 42%,
    hsla(from var(--color-3) h s l / 0.95) 54%,
    hsla(from var(--color-3) h s l / 0.72) 68%,
    hsla(from var(--color-3) h s l / 0.3) 85%,
    hsla(from var(--color-3) h s l / 0) 100%
  );
} */

@media (max-width: 991px) {
  /* On tablets and mobile, vertical gradient ensures text is legible everywhere */
  .gradient-overlay {
    background: linear-gradient(
      to bottom,
      #06362d 0%,
      rgba(6, 54, 45, 0.96) 65%,
      rgba(6, 54, 45, 0.75) 100%
    );
  }
}
</style>

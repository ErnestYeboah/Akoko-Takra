<script setup lang="ts">
import QuestionStorySet from "@/components/QuestionStorySet.vue";
import { ref } from "vue";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "What is Akoko Takra",
    answer:
      "Is a livestock farm management system for effective record keeping of your farm for financial insights and stability of your livestocks.",
  },
  {
    question: "What are the benefit of record keeping",
    answer:
      "Effective record keeping helps you to plan, forecast and know where adjustments can be made should there be any short comings in your farm.",
  },
  {
    question: "Is my farm data safe on Akoko Takra",
    answer:
      "We take data security and privacy very seriously on Akokotakra. Akokotakra is hosted on world class data center under 24 hour surveillance with automatic backup of your precious farm data. We also ensure that our application is always up to date with the latest security patches and more importantly our plans includes SSL encryption to keep your data safe.",
  },
  {
    question: "I'm not a farmer.How can your system help me",
    answer:
      "Are you an individual, credit institution, insurance company, government, distributor, retailer? Do you need industry insights to help the modern poultry farmer? Kindly contact us and let's innovate and scale up the industry together.",
  },
  {
    question: "How do I set up my farm account",
    answer:
      "Setting up is very easy. After your 3 easy onboarding steps you have access to your dashboard to start managing your farm with ease. You can always use our onboarding and customer support contact if you have any problem.",
  },
];

const selectedQuestionIndex = ref(0);
</script>
<template>
  <section id="general_questions_section" class="mt-(--padding) min-h-[90vh]">
    <h2 class="text-(length:--step-2) uppercase mb-2">
      General <span class="text-(--accent-color)">Questions</span>
    </h2>
    <div class="grid min-[992px]:grid-cols-2 justify-between">
      <div>
        <div
          :class="`grid px-2 overflow-hidden grid-rows-[2.8rem_0fr]  duration-200 gap-(--gap) ${selectedQuestionIndex === index ? 'grid-rows-[2.8rem_1fr]' : ''}`"
          v-for="(question_answers, index) in questions"
          :key="question_answers.question"
          @mouseenter="selectedQuestionIndex = index"
        >
          <p
            class="bg-(--accent-color) text-white! px-(--gap) content-center rounded-[10px]"
          >
            {{ question_answers.question }}
          </p>
          <p
            :class="` card overflow-y-hidden  rounded-[10px] ${selectedQuestionIndex === index ? 'p-2 mb-(--gap)  outline-gray-300 ' : ''}`"
          >
            {{ question_answers.answer }}
          </p>
        </div>
      </div>
      <QuestionStorySet class="-mt-20 max-[992px]:hidden" />
    </div>
  </section>
</template>

<style scoped>
.card {
  box-shadow: 0px 4px 4px rgba(0 0 0 / 0.1);
}
</style>

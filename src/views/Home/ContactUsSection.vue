<script setup lang="ts"></script>

<template>
  <section id="contact" class="contact-section scroll-mt-24 my-(--padding)">
    <div
      class="contact-wrapper relative rounded-3xl overflow-hidden bg-linear-to-br from-[#06362d] via-[#094237] to-[#03201a] text-white p-6 sm:p-10 lg:p-14 border border-white/10"
    >
      <div
        class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-(--color-3)/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-(--color-5)/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div
        class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-(--color-3)/20 border border-(--color-4)/30 text-xs font-semibold tracking-wider uppercase text-(--color-5) w-fit"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-5) opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-(--color-5)"
          ></span>
        </span>
        Get In Touch
      </div>

      <div class="grid min-[992px]:grid-cols-2 gap-(--gap)">
        <div>
          <h2 class="text-(length:--step-2) font-bold text-white my-4">
            Let’s Grow Your Farm
            <span
              class="text-transparent bg-clip-text bg-linear-to-r from-(--color-4) to-(--color-5)"
            >
              Together.
            </span>
          </h2>
          <p>
            We want to hear from you. Pay us a visit at our office, give us a
            call, or send us an email to get the conversation started.
          </p>
        </div>

        <!-- Quick Contact Cards -->
        <div class="space-y-3.5 pt-2">
          <!-- Email -->
          <a
            href="mailto:info@akokotakra.com"
            class="flex items-center gap-4 p-4 rounded-2xl bg-white/4 border border-white/10 hover:border-(--color-4)/50 hover:bg-white/8 transition-all group duration-200"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-3)/25 text-(--color-5) border border-(--color-4)/30 group-hover:scale-105 transition-transform"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="min-w-0">
              <p
                class="text-xs font-semibold text-white/50 uppercase tracking-wider"
              >
                Email Support
              </p>
              <p
                class="text-sm font-medium text-white truncate group-hover:text-(--color-5) transition-colors"
              >
                info@akokotakra.com
              </p>
            </div>
          </a>

          <!-- Phone / WhatsApp -->
          <a
            href="tel:+233240956276"
            class="flex items-center gap-4 p-4 rounded-2xl bg-white/4 border border-white/10 hover:border-(--color-4)/50 hover:bg-white/8 transition-all group duration-200"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-3)/25 text-(--color-5) border border-(--color-4)/30 group-hover:scale-105 transition-transform"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div class="min-w-0">
              <p
                class="text-xs font-semibold text-white/50 uppercase tracking-wider"
              >
                Call / WhatsApp
              </p>
              <p
                class="text-sm font-medium text-white truncate group-hover:text-(--color-5) transition-colors"
              >
                +233 (0) 24 095 6276 / +233 (0) 50 123 4567
              </p>
            </div>
          </a>

          <!-- Head Office -->
          <div
            class="flex items-center gap-4 p-4 rounded-2xl bg-white/4 border border-white/10"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-3)/25 text-(--color-5) border border-(--color-4)/30"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p
                class="text-xs font-semibold text-white/50 uppercase tracking-wider"
              >
                Head Office
              </p>
              <p class="text-sm font-medium text-white">
                No. 31 Ogbojo Koo Street, Ogbojo - East Legon, Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Proof -->
      <div class="pt-2 flex items-center gap-3 text-xs text-white/60">
        <svg
          class="w-4 h-4 text-(--color-5) shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Trusted by 500+ commercial livestock farms & co-operatives</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

p {
  color: inherit;
}
</style>

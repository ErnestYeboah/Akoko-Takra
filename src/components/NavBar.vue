<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Button from "./Button.vue";

interface NavLinks {
  label: string;
  to: string;
}

const navlinks: NavLinks[] = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Partners", to: "/#partners" },
  { label: "Contact", to: "/#contact" },
];

const router = useRouter();
const selectedLink = ref("Home");

const selectedIndex = computed(() => {
  const index = navlinks.findIndex((l) => l.label === selectedLink.value);
  return index !== -1 ? index : 0;
});

const onSelectLink = (link: NavLinks) => {
  selectedLink.value = link.label;
  if (link.to.startsWith("/#")) {
    const hash = link.to.replace("/", "");
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(link.to);
    }
  } else {
    router.push(link.to);
  }
};

const goToStore = () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.agroinnovagh.akokotakra",
    "_blank",
    "noopener,noreferrer",
  );
};
</script>
<template>
  <nav>
    <img
      width="150"
      height="100"
      src="../assets/akokotakra-01.webp"
      alt="Akoko Takra Logo"
    />

    <div
      class="flex gap-(--gap) nav_link_wrapper items-center max-[992px]:hidden"
    >
      <div class="container">
        <div class="tabs">
          <template v-for="(link, index) in navlinks" :key="link.label">
            <input
              type="radio"
              :id="`tab-${index}`"
              name="tabs"
              :value="link.label"
              v-model="selectedLink"
            />
            <label class="tab" :for="`tab-${index}`">
              <RouterLink
                :to="link.to"
                class="tab-link"
                @click="onSelectLink(link)"
              >
                {{ link.label }}
              </RouterLink>
            </label>
          </template>
          <span
            class="glider"
            :style="{ transform: `translateX(${selectedIndex * 100}%)` }"
          ></span>
        </div>
      </div>
    </div>
    <Button :onclick="goToStore" class="max-[992px]:hidden" />

    <!-- Hamburger for mobile devices -->
    <div class="hamburger min-[992px]:hidden scale-[0.6]">
      <input id="checkbox" type="checkbox" />
      <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
      </label>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 4rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.6px);
  -webkit-backdrop-filter: blur(8.6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-inline: 1rem;
  z-index: 10;
  width: 95%;
  position: fixed;
  top: 2px;
  left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (width > 992px) {
    width: 90%;
    left: 6%;
  }

  img {
    background-color: white;
    border-radius: inherit;
    padding: 0.2rem 1rem;
  }
}
#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: rgb(253, 255, 243);
  border-radius: 5px;
  transition-duration: 0.3s;
}

#checkbox:checked + .toggle #bar2 {
  transform: translateY(14px) rotate(60deg);
  margin-left: 0;
  transform-origin: right;
  transition-duration: 0.3s;
  z-index: 2;
}

#checkbox:checked + .toggle #bar1 {
  transform: translateY(28px) rotate(-60deg);
  transition-duration: 0.3s;
  transform-origin: left;
  z-index: 1;
}

#checkbox:checked + .toggle {
  transform: rotate(-90deg);
}

/* Tabs & Glider */
.tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  border-radius: 99px;
  padding: 4px;
}

.tabs * {
  z-index: 2;
}

.container input[type="radio"] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 80px;
  font-size: 0.85rem;
  color: #2e2e2e;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.2s ease;
  user-select: none;
}

.tab-link {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
}

.container input[type="radio"]:checked + label {
  color: var(--color-2, #0c5e37);
  font-weight: 700;
}

.glider {
  position: absolute;
  top: 4px;
  left: 4px;
  height: 32px;
  width: 80px;
  background-color: rgba(12, 94, 55, 0.12);
  z-index: 1;
  border-radius: 99px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 700px) {
  .tabs {
    transform: scale(0.85);
  }
}
</style>

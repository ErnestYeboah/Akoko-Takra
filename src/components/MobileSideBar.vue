<script setup lang="ts">
import { navLinks, type NavLink } from "@/utils/links_data";
import { computed } from "vue";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
const selectedLink = ref("Home");

const selectedIndex = computed(() => {
  const index = navLinks.findIndex((l) => l.label === selectedLink.value);
  return index !== -1 ? index : 0;
});

const emit = defineEmits<{
  close: [];
}>();

const onSelectLink = (link: NavLink) => {
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
  emit("close");
};
</script>
<template>
  <div class="sidebar_wrapper overflow-hidden" @click.self="emit('close')">
    <ul class="sidebar bg-white w-[90%] h-fit mx-auto p-4">
      <li
        v-for="link in navLinks"
        :key="link.label"
        @click="onSelectLink(link)"
        class="rounded-2xl cursor-pointer duration-200 p-4 hover:bg-(--accent-color) hover:text-white"
      >
        <RouterLink :to="link.to">
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(19.5px);
  -webkit-backdrop-filter: blur(19.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  animation: in_view 500ms forwards;
  animation-timeline: scroll(root);
  animation-range: entry 400px exit 59px;
}

@keyframes in_view {
  to {
    color: black;
  }
}

.sidebar_wrapper {
  transition: height 300ms;
  height: 0px;

  &.active {
    height: 80vh;
  }
}
</style>

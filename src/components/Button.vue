<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    onclick?: () => void;
    href?: string;
    target?: string;
  }>(),
  {
    target: "_blank",
  },
);

const handleClick = () => {
  if (props.onclick) {
    props.onclick();
  } else if (props.href) {
    window.open(props.href, props.target, "noopener,noreferrer");
  }
};
</script>

<template>
  <!-- From Uiverse.io by doniaskima -->
  <button @click="handleClick" class="btn-12">
    <span>{{ label || "GET STARTED" }}</span>
  </button>
</template>

<style scoped>
/* From Uiverse.io by doniaskima */
.btn-12,
.btn-12 *,
.btn-12 :after,
.btn-12 :before,
.btn-12:after,
.btn-12:before {
  border: 0 solid;
  box-sizing: border-box;
}

.btn-12 {
  -webkit-tap-highlight-color: transparent;
  background-color: var(--accent-color);
  background-image: none;
  color: #fff;
  font-weight: 500;
  font-family: var(--p-font);
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  cursor: pointer;
}

.btn-12:disabled {
  cursor: default;
}

.btn-12:-moz-focusring {
  outline: auto;
}

.btn-12 svg {
  display: block;
}

.btn-12 [hidden] {
  display: none;
}

.btn-12 {
  border-radius: var(--radius);
  border-width: 1px;
  overflow: hidden;
  position: relative;
}

.btn-12 span {
  position: relative;
  z-index: 2;
  display: inline-block;
  color: #ffffff;
  transition: color 0.2s ease;
}

.btn-12:hover span {
  color: #000000;
}

.btn-12:after,
.btn-12:before {
  background: linear-gradient(
    90deg,
    #fff 25%,
    transparent 0,
    transparent 50%,
    #fff 0,
    #fff 75%,
    transparent 0
  );
  content: "";
  inset: 0;
  position: absolute;
  transform: translateY(var(--progress, 100%));
  transition: transform 0.2s ease;
  z-index: 1;
}

.btn-12:after {
  --progress: -100%;
  background: linear-gradient(
    90deg,
    transparent 0,
    transparent 25%,
    #fff 0,
    #fff 50%,
    transparent 0,
    transparent 75%,
    #fff 0
  );
  z-index: 1;
}

.btn-12:hover:after,
.btn-12:hover:before {
  --progress: 0;
}
</style>

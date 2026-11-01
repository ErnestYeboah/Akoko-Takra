<script setup lang="ts">
import { useHead, useSeoMeta } from "@unhead/vue";

const props = defineProps<{
  title: string;
  description: string;
  image?: string;
  url: string;
}>();

useSeoMeta({
  title: () => props.title,

  description: () => props.description,

  ogTitle: () => props.title,

  ogDescription: () => props.description,

  ogImage: () => props.image,

  ogUrl: () => props.url,

  ogType: "website",

  twitterCard: "summary_large_image",

  twitterTitle: () => props.title,

  twitterDescription: () => props.description,

  twitterImage: () => props.image,
});

useHead(() => ({
  link: props.url
    ? [
        {
          rel: "canonical",
          href: props.url,
        },
      ]
    : [],
}));
</script>

<template>
  <!-- Metadata is managed through Unhead. -->
</template>

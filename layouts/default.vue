<template>
  <div class="container" :dir="dir">
    <MainHeader />

    <slot />

    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { watch, computed } from "vue";

const { locale } = useI18n();

// Reactive text direction based on locale
const dir = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));

// Set initial lang in head
useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});

// Watch locale changes and update the lang attribute dynamically
watch(locale, (newLocale) => {
  useHead({
    htmlAttrs: {
      lang: newLocale,
    },
  });
});
</script>

<style lang="scss" scoped></style>

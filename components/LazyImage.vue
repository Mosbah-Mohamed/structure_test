<!-- components/LazyImage.vue -->
<template>
  <div ref="imageRef" class="lazy-image">
    <nuxt-img
      v-if="isIntersecting"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      loading="lazy"
      decoding="async"
      :class="{ 'fade-in': isIntersecting }"
    />
    <div v-else class="placeholder" :style="{ paddingBottom: aspect + '%' }" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  width?: number
  height?: number
  aspect?: number
}>();

const { target: imageRef, isIntersecting } = useIntersectionObserver({
  threshold: 0.1,
  rootMargin: '50px'
});
</script>

<style scoped>
.lazy-image {
  overflow: hidden;
  background-color: #f5f5f5;
}

.placeholder {
  background-color: #f5f5f5;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<template>
  <div ref="imageRef" class="optimized-image" :class="{ 'is-loaded': isVisible && isLoaded }">
    <!-- Placeholder -->
    <div
      v-if="!isVisible || !isLoaded"
      class="placeholder"
      :style="{
        paddingBottom: `${(height / width) * 100}%`,
        backgroundColor: placeholderColor
      }"
    />
    
    <!-- Actual Image -->
    <img
      v-show="isVisible && isLoaded"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :fetchpriority="priority ? 'high' : 'auto'"
      :loading="priority ? 'eager' : 'lazy'"
      decoding="async"
      @load="onLoad"
      class="actual-image"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  placeholderColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  priority: false,
  placeholderColor: '#f3f4f6'
});

const imageRef = ref<HTMLElement | null>(null);
const isLoaded = ref(false);

const { isIntersecting: isVisible } = useIntersectionObserver({
  target: imageRef,
  threshold: 0.1,
  rootMargin: '50px',
  freezeOnceVisible: true
});

const onLoad = () => {
  isLoaded.value = true;
};

// Emit loaded event when image is fully loaded
const emit = defineEmits<{
  (e: 'loaded'): void;
}>();

watch(isLoaded, (value) => {
  if (value) {
    emit('loaded');
  }
});
</script>

<style scoped>
.optimized-image {
  position: relative;
  overflow: hidden;
  background-color: v-bind(placeholderColor);
  width: 100%;
}

.placeholder {
  width: 100%;
  background-color: v-bind(placeholderColor);
  transition: opacity 0.2s ease-in-out;
}

.actual-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.is-loaded .actual-image {
  opacity: 1;
}

.is-loaded .placeholder {
  opacity: 0;
}
</style>
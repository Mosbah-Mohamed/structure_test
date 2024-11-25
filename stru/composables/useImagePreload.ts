import { ref, onMounted } from 'vue';

export function useImagePreload(imageSrc: string) {
  const isLoaded = ref(false);
  const error = ref<Error | null>(null);

  onMounted(() => {
    const img = new Image();
    
    img.onload = () => {
      isLoaded.value = true;
    };
    
    img.onerror = (e) => {
      error.value = e as Error;
    };
    
    img.src = imageSrc;
  });

  return {
    isLoaded,
    error
  };
}
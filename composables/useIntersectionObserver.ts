import { ref, onMounted, onUnmounted } from 'vue';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  root?: Element | Document | null;
  threshold?: number | number[];
  rootMargin?: string;
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {}
) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options;

  const isIntersecting = ref(false);
  const target = ref<Element | null>(null);
  const entry = ref<IntersectionObserverEntry | null>(null);
  let observer: IntersectionObserver | null = null;

  const frozen = ref(false);

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  const observe = () => {
    cleanup();

    if (target.value && !frozen.value) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isIntersecting.value = entry.isIntersecting;
          if (freezeOnceVisible && entry.isIntersecting) {
            frozen.value = true;
            cleanup();
          }
        },
        {
          threshold,
          root,
          rootMargin,
        }
      );

      observer.observe(target.value);
    }
  };

  onMounted(observe);
  onUnmounted(cleanup);

  return {
    isIntersecting,
    target,
    entry,
    observe,
    cleanup,
  };
}
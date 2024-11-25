import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  // Preload critical images
  const preloadImages = () => {
    const images = document.querySelectorAll('img[fetchpriority="high"]');
    images.forEach(img => {
      if ('loading' in HTMLImageElement.prototype) {
        (img as HTMLImageElement).loading = 'eager';
      }
      // Add to browser's preload cache
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = img.getAttribute('src') || '';
      document.head.appendChild(preloadLink);
    });
  };

  // Monitor long tasks
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log long tasks that block the main thread
      if (entry.duration > 50) {
        console.warn('Long task detected:', {
          duration: entry.duration,
          startTime: entry.startTime,
          name: entry.name
        });
      }
    }
  });

  // Start observing long tasks
  observer.observe({ entryTypes: ['longtask'] });

  // Implement quicklink for faster subsequent page loads
  if ('requestIdleCallback' in window) {
    // @ts-ignore
    window.requestIdleCallback(() => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        if (link.dataset.noPrefetch) return;
        
        const url = link.getAttribute('href');
        if (url && url.startsWith('/')) {
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'prefetch';
          preloadLink.href = url;
          document.head.appendChild(preloadLink);
        }
      });
    });
  }

  // Execute on page load
  if (process.client) {
    window.addEventListener('load', () => {
      preloadImages();
    });
  }
});
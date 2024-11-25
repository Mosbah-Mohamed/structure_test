import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Core Web Vitals
    onCLS(console.log);
    onFID(console.log);
    onLCP(console.log);
    // Other Web Vitals
    onFCP(console.log);
    onTTFB(console.log);
  }
});
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  const publicPages = ['/auth/login', '/auth/register', '/auth/forgot-password'];
  
  const isPublicPage = publicPages.includes(to.path);
  
  if (!isPublicPage && !authStore.isLoggedIn) {
    return navigateTo('/auth/login');
  }
  
  if (isPublicPage && authStore.isLoggedIn) {
    return navigateTo('/dashboard');
  }
});
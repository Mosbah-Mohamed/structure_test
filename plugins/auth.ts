import { useAuthStore } from "~/store/auth";

export default defineNuxtPlugin(async () => {
  if (process.client) {
    const authStore = useAuthStore();
    await authStore.initAuth();
  }
});

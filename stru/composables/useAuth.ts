import { useAuthStore } from '~/store/auth';

export function useAuth() {
  const authStore = useAuthStore();
  const router = useRouter();

  const login = async (credentials: { email: string; password: string }) => {
    const result = await authStore.login(credentials);
    if (result.success) {
      router.push('/dashboard');
    }
    return result;
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    const result = await authStore.register(userData);
    if (result.success) {
      router.push('/dashboard');
    }
    return result;
  };

  const logout = async () => {
    await authStore.logout();
    router.push('/auth/login');
  };

  const checkAuth = async () => {
    if (!authStore.isLoggedIn) {
      router.push('/auth/login');
      return false;
    }
    return true;
  };

  return {
    user: computed(() => authStore.user),
    isLoggedIn: computed(() => authStore.isLoggedIn),
    token: computed(() => authStore.token),
    login,
    register,
    logout,
    checkAuth
  };
}
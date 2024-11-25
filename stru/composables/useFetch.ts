import { UseFetchOptions } from 'nuxt/app';
import { useAuthStore } from '~/store/auth';

export function useCustomFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const router = useRouter();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseURL,
    key: url,
    headers: {
      Accept: 'application/json',
      ...(authStore.token && {
        Authorization: `Bearer ${authStore.token}`
      })
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        authStore.logout();
        router.push('/auth/login');
      }
    },
    ...options
  };

  return useFetch(url, defaults);
}
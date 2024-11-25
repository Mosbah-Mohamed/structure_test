import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    isAuthenticated: false
  }),

  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    isLoggedIn: (state) => state.isAuthenticated
  },

  actions: {
    async login(credentials: { email: string; password: string }) {
      try {
        const { data, error } = await useFetch('/auth/login', {
          method: 'POST',
          body: credentials
        });

        if (error.value) throw error.value;

        const { user, token } = data.value as any;
        
        this.setAuth(user, token);
        
        // Only access localStorage on client side
        if (process.client) {
          localStorage.setItem('auth_token', token);
        }
        
        return { success: true };
      } catch (error) {
        return {
          success: false,
          error: error.message || 'Login failed'
        };
      }
    },

    async register(userData: {
      name: string;
      email: string;
      password: string;
      password_confirmation: string;
    }) {
      try {
        const { data, error } = await useFetch('/auth/register', {
          method: 'POST',
          body: userData
        });

        if (error.value) throw error.value;

        const { user, token } = data.value as any;
        
        this.setAuth(user, token);
        
        // Only access localStorage on client side
        if (process.client) {
          localStorage.setItem('auth_token', token);
        }
        
        return { success: true };
      } catch (error) {
        return {
          success: false,
          error: error.message || 'Registration failed'
        };
      }
    },

    async logout() {
      try {
        await useFetch('/auth/logout', {
          method: 'POST'
        });
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        this.clearAuth();
        // Only access localStorage on client side
        if (process.client) {
          localStorage.removeItem('auth_token');
        }
      }
    },

    async fetchUser() {
      try {
        const { data } = await useCustomFetch('/auth/user');
        
        if (data.value) {
          this.user = data.value as User;
          this.isAuthenticated = true;
        }
        
        return { success: true };
      } catch (error) {
        this.clearAuth();
        return {
          success: false,
          error: 'Failed to fetch user'
        };
      }
    },

    setAuth(user: User, token: string) {
      this.user = user;
      this.token = token;
      this.isAuthenticated = true;
    },

    clearAuth() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
    },

    async initAuth() {
      // Only access localStorage on client side
      if (process.client) {
        const token = localStorage.getItem('auth_token');
        if (token) {
          this.token = token;
          await this.fetchUser();
        }
      }
    }
  }
});
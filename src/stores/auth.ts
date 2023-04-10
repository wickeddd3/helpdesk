import { defineStore } from 'pinia';
import { toRaw } from 'vue';
import router from '@/routes/router';
import usersData from '@/data/users.txt';

interface Auth {
  email?: String,
  password?: String,
}

interface User {
  id?: Number | String,
  role?: String,
  email?: String,
  password?: String,
}

interface AuthState {
  users: User[],
  authUser: User,
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    users: [],
    authUser: {},
  }),
  actions: {
    async getUsers () {
      const response = await fetch(usersData);
      const fileContent = await response.text();
      const { users } = JSON.parse(fileContent);
      this.users = users;
    },
    authenticate (user: Auth) {
      const authUser = this.users.find((item: User) => item.email === user.email && item.password === user.password);
      if (authUser) {
        localStorage.setItem('helpdesk.auth', JSON.stringify(toRaw(authUser)));
        router.replace('/tickets');
      }
    },
    logoutUser () {
      localStorage.removeItem('helpdesk.auth');
      router.push({ name: 'auth' });
    },
    async getAuthUser () {
      const authUser = localStorage.getItem('helpdesk.auth') || '';
      const authUserObj: User = authUser ? JSON.parse(authUser) : {};
      const user = this.users.find(user => user.id === authUserObj.id);
      if (user) {
      this.authUser = user as User;
      }
    },
  },
});

import { defineStore } from 'pinia';
import { toRaw } from 'vue';
import router from '@/routes/router';
import usersData from '@/data/users.txt';

interface Auth {
  email?: String,
  password?: String,
}

interface User {
  id?: Number,
  email?: String,
  password?: String,
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    async getUsers () {
      const response = await fetch(usersData);
      const fileContent = await response.text();
      const { users } = JSON.parse(fileContent);
      this.users = users;
    },
    logoutUser () {
      localStorage.removeItem('helpdesk.auth');
      router.push({ name: 'auth' });
    },
    authenticate (user: Auth) {
      const authUser = this.users.find((item: User) => item.email === user.email && item.password === user.password);
      if (authUser) {
        localStorage.setItem('helpdesk.auth', JSON.stringify(toRaw(authUser)));
        router.replace('/tickets');
      }
    },
  },
});

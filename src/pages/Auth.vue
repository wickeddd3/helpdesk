<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
    <div class="w-full max-w-md space-y-8 px-4">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-wider text-gray-900">helpdesk</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <span class="font-medium text-indigo-600 hover:text-indigo-500">Sign in to your account</span>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label
              for="email-address"
              class="sr-only"
            >Email address</label>
            <input
              v-model="auth.email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Email address"
              autofocus
            />
          </div>
          <div>
            <label
              for="password"
              class="sr-only"
            >Password</label>
            <input
              v-model="auth.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              for="remember-me"
              class="ml-2 block text-sm text-gray-900"
            >Remember me</label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >Forgot your password?</a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>

    <div class="w-full max-w-md py-4">
      <div class="rounded-2xl bg-gray-100 py-4 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
        <div class="mx-auto px-8">
          <p class="text-base font-semibold text-gray-600">Administrator</p>
          <p class="flex justify-between items-baseline gap-x-2 mt-4">
            <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">Email</span>
            <span class="text-sm font-normal leading-6 tracking-wide text-gray-600">admin@test.com</span>
          </p>
          <p class="flex justify-between items-baseline gap-x-1">
            <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">Password</span>
            <span class="text-sm font-normal leading-6 tracking-wide text-gray-600">password101</span>
          </p>
          <p class="mt-2 text-xs leading-5 text-gray-600 text-start">* Admin can show list of open & recently closed tickets and solved tickets</p>
        </div>
        <div class="mx-auto px-8">
          <p class="text-base font-semibold text-gray-600">User</p>
          <p class="flex justify-between items-baseline gap-x-2 mt-4">
            <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">Email</span>
            <span class="text-sm font-normal leading-6 tracking-wide text-gray-600">user@test.com</span>
          </p>
          <p class="flex justify-between items-baseline gap-x-1">
            <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">Password</span>
            <span class="text-sm font-normal leading-6 tracking-wide text-gray-600">password102</span>
          </p>
          <p class="mt-2 text-xs leading-5 text-gray-600 text-start">* User can show list of their current & recently closed tickets and add tickets</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import { Auth } from '@/types/auth';

const authStore = useAuthStore();

authStore.getUsers();

let auth: Auth = {
  email: '',
  password: '',
};

const submit = () => {
  authStore.authenticate(auth);
}
</script>

<style scoped>

</style>
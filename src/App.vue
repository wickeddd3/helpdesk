<template>
  <RouterView />
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useTicketsStore } from '@stores/tickets'
import { useAuthStore } from '@stores/auth';

const ticketsStore = useTicketsStore();
const authStore = useAuthStore();

ticketsStore.getTickets();

const route = useRoute();

watchEffect(async () => {
  route.fullPath;
  await authStore.getUsers();
  await authStore.getAuthUser();
})
</script>

<style scoped>

</style>
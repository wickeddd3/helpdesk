<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useTicketsStore } from '@stores/tickets'
const ticketsStore = useTicketsStore();
ticketsStore.getTickets();
</script>

<style scoped>

</style>
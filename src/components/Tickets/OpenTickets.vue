<template>
  <template v-if="total">
    <template v-for="ticket in tickets" :key="ticket.id">
      <TicketItem :ticket="ticket" />
    </template>
  </template>
  <template v-else>
    <Empty />
  </template>
</template>

<script setup lang="ts">
import { TicketData } from '@/types/ticket';
import TicketItem from '@components/Tickets/TicketItem.vue'
import Empty from '@components/Tickets/Empty.vue'

interface Tickets {
  tickets: TicketData[],
  total: Number,
}

const props = withDefaults(defineProps<Tickets>(), {
  tickets: () => [],
  total: () => 0,
})

const { total, tickets } = props;
</script>

<style scoped>

</style>
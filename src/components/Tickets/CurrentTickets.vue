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
import TicketItem from '@components/Tickets/TicketItem.vue'
import Empty from '@components/Tickets/Empty.vue'

interface TicketData {
  id?: Number,
  title?: String,
  description?: String,
  status?: String,
  urgency?: String,
  priority?: String,
  category?: String,
  subcategory?: String,
  created?: String,
  updated?: String,
}

interface Tickets {
  tickets: TicketData[] | TicketData,
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
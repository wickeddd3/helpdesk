<template>
  <RouterLink :to="`/tickets/${ticket.id}`">
    <div class="lg:flex lg:items-center lg:justify-between pb-3 border-solid border-b border-gray-200 mb-4">
      <div class="min-w-0 flex-1">
        <h2 class="text-gray-700 sm:truncate sm:text-sm tracking-wide mb-2">
          {{ ticket.title }}
        </h2>
        <div class="flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-3">
          <div class="bg-gray-200 dark:bg-gray-800 h-6 px-2 mb-4 md:mb-0 rounded-md flex items-center justify-center">
              <div class="flex items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Status</span>
                  <div class="h-1 w-1 rounded-full bg-gray-600 dark:bg-gray-400 mx-1"></div>
                  <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">{{ ticket.status }}</span>
              </div>
          </div>
          <div class="bg-gray-200 dark:bg-gray-800 h-6 px-2 mb-4 md:mb-0 rounded-md flex items-center justify-center">
              <div class="flex items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Urgency</span>
                  <div class="h-1 w-1 rounded-full bg-gray-600 dark:bg-gray-400 mx-1"></div>
                  <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">{{ ticket.urgency?.name }}</span>
              </div>
          </div>
          <div class="bg-gray-200 dark:bg-gray-800 h-6 px-2 mb-4 md:mb-0 rounded-md flex items-center justify-center">
              <div class="flex items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Priority</span>
                  <div class="h-1 w-1 rounded-full bg-gray-600 dark:bg-gray-400 mx-1"></div>
                  <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">{{ ticket.priority }}</span>
              </div>
          </div>          
          <div class="flex items-center text-sm text-gray-500 tracking-wide">
            {{ `Request time : ${ticket.created}` }}
          </div>
          <div class="flex items-center text-sm text-gray-500 tracking-wide">
            {{ `Modify time : ${ticket.updated}` }}
          </div>
        </div>
      </div>
      <!-- <div class="mt-5 flex lg:ml-4 lg:mt-0">
        <EllipsisVerticalIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
      </div> -->
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
// import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

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

interface Ticket {
  ticket: TicketData
}

const props = withDefaults(defineProps<Ticket>(), {
  ticket: () => ({}),
})

const { ticket } = props
</script>

<style scoped>

</style>
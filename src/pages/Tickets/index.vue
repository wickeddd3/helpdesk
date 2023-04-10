<template>
  <app-content>
    <div class="bg-white mt-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <!-- Search field and submit buttons-->
      <TicketsHeader />

      <!-- Ticket Tabs -->
      <TabGroup>
        <TabList class="flex px-7">
          <Tab
            v-for="panel in panels"
            as="template"
            class="flex"
            :key="panel.title"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'outline-0 focus py-2 mx-2',
                selected
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-800',
                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
              ]"
            >
              {{ panel.title }}
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-indigo-600 bg-blue-100 rounded-full dark:bg-indigo-900 dark:text-blue-300">
                {{ panel.total }}
              </span>
            </button>
          </Tab>
        </TabList>
        <TabPanels class="mt-2">
          <TabPanel
            v-for="panel in panels"
            :key="panel.id"
            :class="[
              'rounded-xl bg-white p-8',
              'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
            ]"
          >
            <component
              :is="panel.component"
              :tickets="panel.tickets"
              :total="panel.total"
            ></component>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </app-content>
</template>

<script setup lang="ts">
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@headlessui/vue'
import AppContent from '@components/App/AppContent.vue'
import ClosedTickets from '@components/Tickets/ClosedTickets.vue'
import OpenTickets from '@components/Tickets/OpenTickets.vue'
import TicketsHeader from '@components/Tickets/TicketsHeader.vue'
import { useTicketsStore } from '@stores/tickets'
import { useAuthStore } from '@stores/auth'
import { computed } from 'vue'

const ticketsStore = useTicketsStore();
const authStore = useAuthStore();

const panels = computed(() => [
  {
    id: 0,
    title: authStore.authUser?.role === 'Administrator' ? 'Open Tickets' : 'My Tickets',
    component: OpenTickets,
    tickets: ticketsStore.openTickets,
    total: ticketsStore.openTickets.length,
    show: authStore.authUser?.role === 'Administrator',
  },
  {
    id: 1,
    title: 'Recently Closed',
    component: ClosedTickets,
    tickets: ticketsStore.closedTickets,
    total: ticketsStore.closedTickets.length,
    show: authStore.authUser?.role === 'User' || authStore.authUser?.role === 'Administrator',
  },
]);
</script>

<style scoped>

</style>
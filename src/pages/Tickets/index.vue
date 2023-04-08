<template>
  <app-content>
    <div class="bg-white mt-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <!-- Search field and submit buttons-->
      <div class="lg:flex lg:items-center lg:justify-between px-8 pb-12">
        <div class="relative rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            class="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="search..."
          />
          <div class="absolute inset-y-0 left-3.5 flex items-center">
            <MagnifyingGlassIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-5 flex lg:ml-4 lg:mt-0">
          <RouterLink
            to="/tickets/incident/submit"
            type="button"
            class="inline-flex items-center rounded-md bg-white px-3 py-2 mr-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <ExclamationTriangleIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Submit an Incident
          </RouterLink>

          <RouterLink
            to="/tickets/request/submit"
            type="button"
            class="inline-flex items-center rounded-md bg-white px-3 py-2 mr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusCircleIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Submit a Request
          </RouterLink>
        </div>
      </div>

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
import {
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/vue/24/outline'
import AppContent from '@components/App/AppContent.vue'
import CurrentTickets from '@components/Tickets/CurrentTickets.vue'
import ClosedTickets from '@components/Tickets/ClosedTickets.vue'
import OpenTickets from '@components/Tickets/OpenTickets.vue'
import { useTicketsStore } from '@stores/tickets'
import { storeToRefs } from 'pinia'
import { onMounted, computed } from 'vue'

const ticketsStore = useTicketsStore();
const { getTickets } = ticketsStore;
const store = storeToRefs(ticketsStore);

onMounted(() => {
  getTickets();
})

const panels = computed(() => [
  {
    id: 0,
    title: 'My Tickets',
    component: CurrentTickets,
    tickets: [],
    total: [].length,
  },
  {
    id: 1,
    title: 'Recently Closed',
    component: ClosedTickets,
    tickets: store.closedTickets,
    total: store.closedTickets.value.length,
  },
  {
    id: 2,
    title: 'Open Tickets',
    component: OpenTickets,
    tickets: store.openTickets,
    total: store.openTickets.value.length,
  },
]);
</script>

<style scoped>

</style>
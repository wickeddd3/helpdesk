<template>
  <app-content>
    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Ticket #{{ id }}
        </h1>
      </div>

      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product information</h2>
        <p class="text-xl tracking-tight text-gray-900">
          Ticket Info
        </p>

        <form class="mt-10">
          <div class="mt-10">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Request time</h3>
              <h3 class="text-sm font-light text-gray-600 dark:text-gray-400 hover:text-indigo-500">{{ created }}</h3>
            </div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Modify time</h3>
              <h3 class="text-sm font-light text-gray-600 dark:text-gray-400 hover:text-indigo-500">{{ updated }}</h3>
            </div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Status</h3>
              <div class="bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">{{ status }}</span>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Urgency</h3>
              <div class="bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">{{ urgency?.name }}</span>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Priority</h3>
              <div class="bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">{{ priority }}</span>
              </div>
            </div>
          </div>

          <button
            v-if="isAdmin && isClosed"
            type="submit"
            class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click.prevent="reopenTicket()"
          >
            Reopen Ticket
          </button>
          <button
            v-if="isAdmin && isOpen"
            class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click.prevent="resolveTicket()"
          >
            Resolve Ticket
          </button>
        </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <h2 class="text-xl font-light leading-7 text-gray-900 sm:text-xl sm:tracking-tight">
          {{ title }}
        </h2>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-12">
            <div class="mt-2 flex items-center text-s text-gray-500">
              <DocumentTextIcon class="-ml-0.5 mr-1.5 h-6 w-6 text-gray-400" aria-hidden="true" />
              Description
            </div>
            <TextareaField
              title=""
              name="description"
              :rows="8"
              :value="description"
              :disabled="true"
            />
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-12">
            <div class="mt-2 flex items-center text-s text-gray-500">
              <LightBulbIcon class="-ml-0.5 mr-1.5 h-6 w-6 text-gray-400" aria-hidden="true" />
              Solution
            </div>
            <TextareaField
              title=""
              name="solution"
              :rows="8"
              :disabled="!isAdmin || isClosed"
              :value="solution"
              @input="solutionInput = $event.target.value"
            />
          </div>
        </div>
      </div>
    </div>
  </app-content>
</template>

<script setup lang="ts">
import { DocumentTextIcon, LightBulbIcon } from '@heroicons/vue/24/outline'
import AppContent from '@components/App/AppContent.vue';
import TextareaField from '@core/fields/TextareaField.vue';
import { useRoute } from 'vue-router';
import { useTicketsStore } from '@stores/tickets';
import { useAuthStore } from '@stores/auth';
import { computed } from 'vue';

const route = useRoute();

const ticketsStore = useTicketsStore();
const authStore = useAuthStore();

const currentRouteParamsId = route.params.id as string | number;

ticketsStore.getTicket(currentRouteParamsId);

const isAdmin = computed(() => authStore.isAdmin);
const isClosed = computed(() => ticketsStore.currentTicket.status === 'Closed');
const isOpen = computed(() => ticketsStore.currentTicket.status === 'Open');

const id = computed(() => ticketsStore.currentTicket.id);
const title = computed(() => ticketsStore.currentTicket.title);
const description = computed(() => ticketsStore.currentTicket.description);
const solution = computed(() => ticketsStore.currentTicket.solution);
const urgency = computed(() => ticketsStore.currentTicket.urgency);
const priority = computed(() => ticketsStore.currentTicket.priority);
const status = computed(() => ticketsStore.currentTicket.status);
const created = computed(() => ticketsStore.currentTicket.created);
const updated = computed(() => ticketsStore.currentTicket.updated);
let solutionInput = '';

const resolveTicket = () => ticketsStore.resolveTicket(ticketsStore.currentTicket, solutionInput);
const reopenTicket = () => ticketsStore.reopenTicket(ticketsStore.currentTicket, currentRouteParamsId);
</script>

<style scoped>

</style>
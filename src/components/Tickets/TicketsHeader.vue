<template>
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
</template>

<script setup lang="ts">
import {
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/vue/24/outline'
</script>

<style scoped>

</style>
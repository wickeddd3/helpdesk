<template>
  <div class="h-full bg-gray-100 rounded-xl">
    <div class="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75 flex justify-center align-middle">
      <svg class="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
        <defs>
          <pattern id="pattern-4d2f8758-2f66-4332-9b69-ca19e9dfc001" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect stroke="none" fill="url(#pattern-4d2f8758-2f66-4332-9b69-ca19e9dfc001)" width="100%" height="100%"></rect>
      </svg>
      <div class="flex flex-col justify-center align-center">
        <InformationCircleIcon class="h-20 w-20 text-gray-400 self-center mb-5" aria-hidden="true" />
        <p class="font-thin self-center">There are currently no active requests to display</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>

</style>
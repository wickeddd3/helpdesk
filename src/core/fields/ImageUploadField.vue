<template>
  <div class="col-span">
    <label
      for="cover-photo"
      class="block text-sm font-medium leading-6 text-gray-900"
    >
      {{ title }}
    </label>
    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div class="text-center">
        <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
        <div class="mt-4 flex text-sm leading-6 text-gray-600">
          <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
            <span>Upload a file</span>
            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
          </label>
          <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs leading-5 text-gray-600">PNG, JPG up to 2MB</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhotoIcon } from '@heroicons/vue/20/solid'

interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
})
</script>

<style scoped>

</style>
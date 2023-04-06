<template>
  <div class="col-span">
    <label
      for="description"
      class="block text-sm font-medium leading-6 text-gray-900"
    >
      {{ title }}
    </label>
    <div class="mt-2">
      <textarea
        :value="value"
        :rows="rows"
        :id="name"
        :name="name"
        :disabled="disabled"
        class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
        @input="$emit('input', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  value?: string,
  name?: string,
  rows?: number,
  disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  value: '',
  name: '',
  rows: 3,
  disabled: false,
})
</script>

<style scoped>

</style>
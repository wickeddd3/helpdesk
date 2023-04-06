<template>
  <div class="col-span">
    <label
      for="title"
      class="block text-sm font-medium leading-6 text-gray-900"
    >
      {{ title }}
    </label>
    <div class="mt-2">
      <input
        :value="value"
        :name="name"
        :id="name"
        :autocomplete="name"
        :disabled="disabled"
        type="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
  disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  value: '',
  name: '',
  disabled: false,
})
</script>

<style scoped>

</style>
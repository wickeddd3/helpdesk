<template>
  <div class="bg-white my-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Submit Incident</h2>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-12">
              <ComboBoxField
                title="Template"
                :value="template"
                :items="templateOptions"
                @input="template = $event"
              />
            </div>

            <div class="col-span-2">
              <ComboBoxField
                title="Category"
                :value="category"
                :items="categoryOptions"
                @input="category = $event"
              />
            </div>

            <div class="col-span-2">
              <ComboBoxField
                title="Subcategory"
                :value="subcategory"
                :items="subcategoryOptions"
                @input="subcategory = $event"
              />
            </div>

            <div class="col-span-12">
              <TextField
                title="Title"
                name="title"
                :value="title"
                @input="title = $event.target.value"
              />
            </div>

            <div class="col-span-12">
              <TextareaField
                title="Description"
                name="description"
                :value="description"
                @input="description = $event.target.value"
              />
            </div>

            <div class="col-span-2">
              <ComboBoxField
                title="Urgency"
                :value="urgency"
                :items="urgencyOptions"
                @input="urgency = $event"
              />
            </div>

            <div class="col-span-12">
              <ImageUploadField
                title="Attachments"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <RouterLink
          to="/tickets"
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900 px-8"
        >
          Cancel
        </RouterLink>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComboBoxField from '@core/fields/ComboBoxField.vue';
import TextField from '@core/fields/TextField.vue';
import TextareaField from '@core/fields/TextareaField.vue';
import ImageUploadField from '@core/fields/ImageUploadField.vue';

const templateOptions = [
  { id: 1, name: 'Default' },
  { id: 2, name: 'General Issue' },
  { id: 3, name: 'Error/Issue with Google Apps - Gmail/Drive/Contacts/Calendar' },
  { id: 4, name: 'Error/Issue with Microsoft Apps - Outlook/Excel/Word/Powerpoint' },
  { id: 5, name: 'Error/Issue with Adobe Application' },
  { id: 6, name: 'Phone issue with making or receiving calls' },
]

const categoryOptions = [
  { id: 1, name: 'Account Admin' },
  { id: 2, name: 'Facilities' },
  { id: 3, name: 'General Issue' },
  { id: 4, name: 'Hardware' },
  { id: 5, name: 'Internet' },
  { id: 6, name: 'Online Systems' },
  { id: 7, name: 'Permissions/Access' },
  { id: 8, name: 'Phones' },
  { id: 9, name: 'Server Software' },
  { id: 10, name: 'Software' },
]

const subcategoryOptions = [
  { id: 1, name: 'Keyboard' },
  { id: 2, name: 'Laptop' },
  { id: 3, name: 'Monitor' },
]

const urgencyOptions = [
  { id: 1, name: 'Urgent' },
  { id: 2, name: 'Very High' },
  { id: 3, name: 'High' },
  { id: 4, name: 'Normal' },
  { id: 5, name: 'Low' },
]

let template = ref()
let category = ref()
let subcategory = ref()
let title = ref()
let description = ref()
let urgency = ref()
</script>

<style scoped>

</style>
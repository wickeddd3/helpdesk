<template>
  <app-content>
    <div class="bg-white my-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <form @submit.prevent="submit">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Submit Incident</h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-12">
                <ComboBoxField
                  title="Template"
                  :value="template"
                  :items="incidentTemplates"
                  @input="template = $event"
                />
              </div>

              <div class="col-span-2">
                <ComboBoxField
                  title="Category"
                  :value="ticket.category"
                  :items="categoryOptions"
                  @input="ticket.category = $event"
                />
              </div>

              <div class="col-span-2">
                <ComboBoxField
                  title="Subcategory"
                  :value="ticket.subcategory"
                  :items="subcategoryOptions"
                  @input="ticket.subcategory = $event"
                />
              </div>

              <div class="col-span-12">
                <TextField
                  title="Title"
                  name="title"
                  :value="ticket.title"
                  @input="ticket.title = $event.target.value"
                />
              </div>

              <div class="col-span-12">
                <TextareaField
                  title="Description"
                  name="description"
                  :value="ticket.description"
                  @input="ticket.description = $event.target.value"
                />
              </div>

              <div class="col-span-2">
                <ComboBoxField
                  title="Urgency"
                  :value="ticket.urgency"
                  :items="urgencyOptions"
                  @input="ticket.urgency = $event"
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
  </app-content>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue';
import { useTicketsStore } from '@stores/tickets';
import { NewTicket, Item } from '@/types/ticket';
import AppContent from '@components/App/AppContent.vue';
import ComboBoxField from '@core/fields/ComboBoxField.vue';
import TextField from '@core/fields/TextField.vue';
import TextareaField from '@core/fields/TextareaField.vue';
import ImageUploadField from '@core/fields/ImageUploadField.vue';

const ticketsStore = useTicketsStore();
const incidentTemplates: Item[] = ticketsStore.incidentTemplates as Item[];
const categoryOptions: Item[] = ticketsStore.categoryOptions as Item[];
const subcategoryOptions: Item[] = ticketsStore.subcategoryOptions as Item[];
const urgencyOptions: Item[] = ticketsStore.urgencyOptions as Item[];

let template = ref();
let ticket = ref({
  category: undefined,
  subcategory: undefined,
  title: '',
  description: '',
  urgency: undefined,
}) as NewTicket;

const submit = () => {
  const newTicket = toRaw(ticket.value);
  ticketsStore.addTicket(newTicket);
}
</script>

<style scoped>

</style>
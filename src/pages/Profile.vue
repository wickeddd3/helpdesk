<template>
  <app-content>
    <div class="bg-white my-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <form>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-12">
                <TextField
                  title="Name"
                  name="name"
                />
              </div>

              <div class="col-span-12">
                <TextField
                  title="Email"
                  name="email"
                />
              </div>

              <div class="col-span-12">
                <TextField
                  title="Phone"
                  name="phone"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <RouterLink
            to="/"
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900 px-8"
          >
            Cancel
          </RouterLink>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </app-content>
</template>

<script setup lang="ts">
import AppContent from '@components/App/AppContent.vue';
import TextField from '@core/fields/TextField.vue';
</script>

<style scoped>

</style>
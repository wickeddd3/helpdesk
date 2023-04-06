<template>
  <app-content>
    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Ticket #1001
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
              <h3 class="text-sm font-light text-gray-600 dark:text-gray-400 hover:text-indigo-500">09-03-2023 | 17:56:20</h3>
            </div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Modify time</h3>
              <h3 class="text-sm font-light text-gray-600 dark:text-gray-400 hover:text-indigo-500">09-03-2023 | 18:14:19</h3>
            </div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Status</h3>
              <div class="bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Closed</span>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Urgency</h3>
              <div class="bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Low</span>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-medium text-gray-900">Priority</h3>
              <div class="bg-gray-200 dark:bg-gray-800 h-6 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Low</span>
              </div>
            </div>
          </div>

          <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Reopen Ticket
          </button>
        </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <h2 class="text-xl font-light leading-7 text-gray-900 sm:text-xl sm:tracking-tight">
          I reset my gmail password and after successfully resetting it and try to login using my new password is fails to login, showing error message
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
              name="description"
              :rows="8"
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

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
</script>

<style scoped>

</style>
<script setup lang="ts">
import { useAge } from '~/composables'

const { t } = useI18n()
const age = useAge()
</script>

<template>
  <div class="container mx-auto md:pa-8">
    <div
      class="flex md:gap-12 flex-col md:flex-row items-center md:items-start"
    >
      <Avatar />
      <div class="flex flex-col gap-4 pt-8">
        <span class="text-lighter font-italic">
          {{ t('about.facts', { age }) }}
        </span>
        <span class="text-justify">{{ t('about.text.first') }}</span>
        <span class="text-justify">{{ t('about.text.second') }}</span>
        <span class="text-justify" v-html="t('about.text.third')" />
      </div>
    </div>
    <div class="mt-16">
      <h1 class="text-serif text-5xl capitalize">
        {{ t('headings.most-recent-artwork') }}
      </h1>
      <div
        class="flex gap-4 flex-col lg:flex-row lg:justify-evenly children:min-w-0 children:flex-1"
      >
        <FeaturedContent />
        <FeaturedContent />
        <FeaturedContent />
      </div>
    </div>
  </div>
</template>

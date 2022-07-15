<script setup lang="ts">
import { useAge } from '~/composables'

const { t } = useI18n()
const age = useAge()
</script>

<template>
  <div class="container max-w-65rem mx-auto md:pa-8">
    <section
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
    </section>
  </div>
</template>

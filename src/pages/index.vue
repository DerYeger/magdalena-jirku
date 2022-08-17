<script setup lang="ts">
import { useAge } from '~/composables'

const { t } = useI18n()
const age = useAge()
</script>

<template>
  <div class="container max-w-65rem mx-auto md:pa-8">
    <section
      class="flex flex-col gap-16 lg:flex-row justify-center items-center"
    >
      <Avatar />
      <div class="max-w-full flex flex-col gap-4 children:text-justify">
        <span class="text-lighter font-italic">
          {{ t('about.facts', { age }) }}
        </span>
        <span>{{ t('about.text.first') }}</span>
        <span>{{ t('about.text.second') }}</span>
        <span v-html="t('about.text.third')" />
      </div>
    </section>
    <video
      controls
      controlslist="nodownload"
      playsinline
      class="mx-auto mt-16 max-w-[min(100%,600px)] display-block"
      poster="/img/reels/thumbnail.webp"
    >
      <source src="/img/reels/2022.webm" />
      <source src="/img/reels/2022.mp4" />
    </video>
  </div>
</template>

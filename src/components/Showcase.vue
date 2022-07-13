<script setup lang="ts">
import type { GalleryImage } from '~/types'

const props = defineProps<{ title: string; images: GalleryImage[] }>()

const { title, images } = toRefs(props)
</script>

<template>
  <section class="showcase max-w-85rem mx-auto">
    <h1 class="font-serif text-center">{{ title }}</h1>
    <slot />
    <Gallery :images="images" />
  </section>
</template>

<style scoped>
.showcase + .showcase {
  margin-top: 4rem;
}
</style>

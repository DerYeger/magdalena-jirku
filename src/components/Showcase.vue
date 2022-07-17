<script setup lang="ts">
import { useSlideIn } from '~/composables'
import type { GalleryImage } from '~/types'

const props = defineProps<{ title: string; images: GalleryImage[] }>()

const { title, images } = toRefs(props)

const showcase = ref<HTMLElement>()
useSlideIn(showcase)
</script>

<template>
  <section ref="showcase" class="showcase max-w-85rem mx-auto">
    <h1 class="font-serif text-center my-12">{{ title }}</h1>
    <slot />
    <Gallery :images="images" />
  </section>
</template>

<style scoped>
.showcase + .showcase {
  margin-top: 6rem;
}
</style>

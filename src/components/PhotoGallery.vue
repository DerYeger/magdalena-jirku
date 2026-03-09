<script setup lang="ts">
import { MasonryWall } from '@yeger/vue-masonry-wall'

const props = defineProps<{ images: GalleryImage[] }>()

export interface GalleryImage {
  src: string
  alt: string
  aspectRatio: number
  lazy: boolean
}
</script>

<template>
  <MasonryWall
    v-slot="{ item: image }"
    :items="props.images"
    :ssr-columns="1"
    :column-width="420"
    :gap="16"
    :max-columns="undefined"
    :key-mapper="(image) => image.src"
    class="photo-gallery w-full"
  >
    <div class="h-0" :style="{ paddingBottom: `${100 * (1 / image.aspectRatio)}%` }">
      <img
        :src="image.src"
        :alt="image.alt"
        :loading="image.lazy ? 'lazy' : 'eager'"
        draggable="false"
        decoding="async"
        class="w-full shadow-2xl select-none"
        style="pointer-events: none !important"
      />
    </div>
  </MasonryWall>
</template>

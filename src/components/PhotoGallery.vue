<script setup lang="ts">
import MasonryWall from '@yeger/vue-masonry-wall'

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
    :key-mapper="(image: GalleryImage) => image.src"
    class="w-full photo-gallery"
  >
    <div class="h-0" :style="{ paddingBottom: `${100 * (1 / image.aspectRatio)}%` }">
      <img
        :src="image.src"
        :alt="image.alt"
        :loading="image.lazy ? 'lazy' : 'eager'"
        draggable="false"
        decoding="async"
        class="w-full select-none shadow-2xl"
        style="pointer-events: none !important"
      />
    </div>
  </MasonryWall>
</template>

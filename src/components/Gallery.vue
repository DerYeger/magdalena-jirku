<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import Lightbox from 'vue-easy-lightbox'

import type { GalleryImage } from '~/types'

const props = withDefaults(
  defineProps<{
    images: GalleryImage[]
    imageWidth?: number
  }>(),
  { imageWidth: 200 }
)
const { images, imageWidth } = toRefs(props)

const selectedImage = ref<number | undefined>(undefined)

function selectImage(index: number) {
  selectedImage.value = index
}
function clearSelection() {
  selectedImage.value = undefined
}

const lightboxVisible = computed(() => selectedImage.value !== undefined)
</script>

<template>
  <div class="gallery flex w-full flex-row flex-wrap justify-center gap-4">
    <div
      v-for="(image, index) of images"
      :key="index"
      class="cursor-pointer"
      :style="{
        backgroundImage: `url(${image.thumbnail ?? image.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '64px',
        height: 'var(--image-width)',
        width: 'var(--image-width)',
        aspectRatio: '1',
      }"
      @click="() => selectImage(index)"
    />
  </div>
  <Lightbox
    move-disabled
    esc-disabled
    scroll-disabled
    :imgs="images"
    :visible="lightboxVisible"
    :index="selectedImage"
    @hide="clearSelection"
  >
    <template #toolbar />
  </Lightbox>
</template>

<style scoped>
.gallery {
  --image-width: v-bind(`${imageWidth}px`);
}

@media (max-width: 639px) {
  .gallery {
    --image-width: calc(v-bind(`${imageWidth}px`) / 1.5);
  }
}
</style>

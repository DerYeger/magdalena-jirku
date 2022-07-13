<script setup lang="ts">
import type { GalleryImage } from '~/types'

const props = withDefaults(
  defineProps<{
    images: GalleryImage[]
    imageWidth: number
  }>(),
  { imageWidth: 300 }
)
const { images } = toRefs(props)

const selectedImage = ref<number | undefined>(undefined)

function selectImage(index: number) {
  selectedImage.value = index
}
function clearSelection() {
  selectedImage.value = undefined
}

const lightboxVisible = computed(() => selectedImage.value !== undefined)

const { width } = useWindowSize()
</script>

<template>
  <masonry-wall
    v-slot="{ item, index }"
    :items="images"
    :column-width="width >= 767 ? imageWidth : imageWidth / 2"
    :gap="16"
    class="w-full"
  >
    <div
      class="w-full children:w-full"
      :style="{
        backgroundImage: `url(${item.thumbnail ?? item.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '64px',
        height: 'auto',
        aspectRatio: '1',
      }"
      @click="() => selectImage(index)"
    />
  </masonry-wall>
  <ClientOnly>
    <vue-easy-lightbox
      move-disabled
      esc-disabled
      scroll-disabled
      :imgs="images"
      :visible="lightboxVisible"
      :index="selectedImage"
      @hide="clearSelection"
    >
      <template #toolbar />
    </vue-easy-lightbox>
  </ClientOnly>
</template>

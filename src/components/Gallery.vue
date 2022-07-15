<script setup lang="ts">
import type { GalleryImage } from '~/types'

const props = withDefaults(
  defineProps<{
    images: GalleryImage[]
    imageWidth?: number
  }>(),
  { imageWidth: 300 }
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

const { width } = useWindowSize()

const imageSize = computed(() =>
  width.value >= 767 ? imageWidth.value : imageWidth.value / 2
)
</script>

<template>
  <div class="w-full flex flex-row justify-center flex-wrap gap-4">
    <div
      v-for="(image, index) of images"
      :key="index"
      :style="{
        backgroundImage: `url(${image.thumbnail ?? image.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '64px',
        height: `${imageSize}px`,
        width: `${imageSize}px`,
        aspectRatio: '1',
      }"
      @click="() => selectImage(index)"
    />
  </div>
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

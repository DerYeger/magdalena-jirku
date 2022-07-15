<script setup lang="ts">
import { useDrawingsGallery } from '~/composables'
import type { GalleryImage } from '~/types'

const images: GalleryImage[] = useDrawingsGallery()
</script>

<template>
  <div class="w-full max-w-85rem mx-auto">
    <Gallery :images="images" />
  </div>
</template>

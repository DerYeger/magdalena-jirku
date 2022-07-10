<script setup lang="ts">
import { useDrawingsGallery } from '~/composables'
import type { GalleryImage } from '~/types'

const images: GalleryImage[] = useDrawingsGallery()
</script>

<template>
  <Gallery :images="images" />
</template>

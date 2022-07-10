<script setup lang="ts">
import { useGraphicDesignGallery } from '~/composables'
import type { GalleryImage } from '~/types'

const images: GalleryImage[] = useGraphicDesignGallery()
</script>

<template>
  <Gallery :images="images" />
</template>

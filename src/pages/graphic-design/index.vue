<script setup lang="ts">
import { useGraphicDesignShowcases } from '~/composables'

const showcases = useGraphicDesignShowcases()
</script>

<template>
  <Showcase
    v-for="(showcase, index) of showcases"
    :key="index"
    :title="showcase.title"
    :images="showcase.images"
  />
</template>

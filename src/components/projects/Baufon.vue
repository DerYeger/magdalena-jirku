<script setup lang="ts">
import { useSlideIn } from '~/composables'
import type { GalleryImage } from '~/types'

const images: GalleryImage[] = [
  {
    src: '/img/projects/baufon/three-colors.webp',
    thumbnail: '/img/projects/baufon/three-colors_thumbnail.webp',
  },
  {
    src: '/img/projects/baufon/motion.webp',
  },

  {
    src: '/img/projects/baufon/downview.webp',
  },
  {
    src: '/img/projects/baufon/fan-animation.webp',
    thumbnail: '/img/projects/baufon/fan-animation_thumbnail.webp',
  },
]

const section = ref<HTMLElement>()
useSlideIn(section)
</script>

<template>
  <section ref="section" class="max-w-65rem flex flex-col items-center gap-8">
    <h1 class="font-serif">Baufon</h1>
    <h2 class="text-lighter font-serif mt--6 text-lg">January 2023</h2>
    <div class="flex flex-col items-center justify-center gap-8 lg:flex-row">
      <video
        controls
        controlslist="nodownload"
        playsinline
        class="w-full md:max-w-32rem flex-shrink-0 display-block"
        poster="/img/projects/baufon/thumbnail.webp"
      >
        <source src="/img/projects/baufon/Baufon.webm" />
        <source src="/img/projects/baufon/Baufon.mp4" />
      </video>
      <div>
        <span class="text-justify">
          Baufon, the result of my bachelor thesis, is a 3D advertising video
          that focuses on motion graphics in the Bauhaus style. The goal of this
          project was to create my own interpretation of the design language and
          to let the Bauhaus style recur throughout the whole video.
        </span>
        <div
          class="text-justify text-xs mt-4 children:display-block flex-col flex gap-1"
        >
          <span>3D Footage by me.</span>
          <span>
            Audio Track can be found on
            <a href="fesliyanstudios.com" target="_blank" rel="norefferer">
              fesliyanstudios.com</a
            >.
          </span>
        </div>
      </div>
    </div>
    <Gallery :images="images" :image-width="200" />
  </section>
</template>

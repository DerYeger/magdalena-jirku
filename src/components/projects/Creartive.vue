<script setup lang="ts">
import { useSlideIn } from '~/composables'
import type { GalleryImage } from '~/types'

const images: GalleryImage[] = [
  {
    src: '/img/projects/creartive/pencilrow.webp',
    thumbnail: '/img/projects/creartive/pencilrow_thumbnail.webp',
  },
  {
    src: '/img/projects/creartive/overview.webp',
    thumbnail: '/img/projects/creartive/overview_thumbnail.webp',
  },
  {
    src: '/img/projects/creartive/closing.webp',
    thumbnail: '/img/projects/creartive/closing_thumbnail.webp',
  },
  {
    src: '/img/projects/creartive/closing_overview.webp',
    thumbnail: '/img/projects/creartive/closing_overview_thumbnail.webp',
  },
]

const section = ref<HTMLElement>()
useSlideIn(section)
</script>

<template>
  <section ref="section" class="max-w-65rem flex flex-col items-center gap-8">
    <h1 class="font-serif">Creartive</h1>
    <h2 class="text-lighter font-serif mt--6 text-lg">July 2021</h2>
    <div class="flex flex-col items-center justify-center gap-8 md:flex-row">
      <video
        controls
        controlslist="nodownload"
        playsinline
        class="w-full md:max-w-32rem flex-shrink-0 display-block"
        :poster="images[0].src"
      >
        <source src="/img/projects/creartive/Creartive.webm" />
        <source src="/img/projects/creartive/Creartive.mp4" />
      </video>
      <span class="text-justify">
        Creative is the result of my diploma project. The goal was to create an
        advertisement for a colored pencil case. The color scheme is colorful
        and playful, yet classy. The focus was to achieve a flow within the
        video, along with advertising and simulations. All content in this video
        except the audio track was created by me.
      </span>
    </div>
    <Gallery :images="images" :image-width="200" />
  </section>
</template>

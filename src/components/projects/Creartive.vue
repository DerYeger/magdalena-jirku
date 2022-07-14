<script setup lang="ts">
import type { GalleryImage } from '~/types'

const images: GalleryImage[] = [
  { src: '/img/projects/creartive/1_Beautyshot_Pencils.webp' },
  { src: '/img/projects/creartive/3_Beautyshot_Overview.webp' },
  { src: '/img/projects/creartive/4_Beautyshot_Closing_Overview.1064.webp' },
  { src: '/img/projects/creartive/5_Beautyshot_Closing.webp' },
]
</script>

<template>
  <section class="max-w-65rem flex flex-col items-center gap-8">
    <h1 class="font-serif">Creartive</h1>
    <h2 class="text-lighter font-serif mt--6 text-lg">July 2021</h2>
    <div class="flex flex-col items-center justify-center gap-8 md:flex-row">
      <video
        controls
        controlslist="nodownload"
        class="w-full md:max-w-32rem display-block"
        poster="/img/projects/creartive/Creartive_Thumbnail.png"
      >
        <source src="/img/projects/creartive/Creartive.webm" />
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

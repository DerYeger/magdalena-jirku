<script setup lang="ts">
import { useSlideIn } from '~/composables'
import type { GalleryImage } from '~/types'

const images: GalleryImage[] = [
  {
    src: '/img/projects/keenscreen/waves.webp',
    thumbnail: '/img/projects/keenscreen/waves_thumbnail.webp',
  },
  {
    src: '/img/projects/keenscreen/animation.webp',
    thumbnail: '/img/projects/keenscreen/animation_thumbnail.webp',
  },
  {
    src: '/img/projects/keenscreen/hue.webp',
    thumbnail: '/img/projects/keenscreen/hue_thumbnail.webp',
  },
]

const section = ref<HTMLElement>()
useSlideIn(section)
</script>

<template>
  <section ref="section" class="max-w-65rem flex flex-col items-center gap-8">
    <h1 class="font-serif">Keenscreen</h1>
    <h2 class="text-lighter font-serif mt--6 text-lg">July 2022</h2>
    <div class="flex flex-col items-center justify-center gap-8 lg:flex-row">
      <video
        controls
        controlslist="nodownload"
        playsinline
        class="w-full md:max-w-32rem flex-shrink-0 display-block"
        :poster="images[0].src"
      >
        <source src="/img/projects/keenscreen/keenscreen.webm" />
        <source src="/img/projects/keenscreen/keenscreen.mp4" />
      </video>
      <div>
        <span class="text-justify">
          Keenscreen is another 3D animation project and promotes a new TV model
          designed by me. For this project I focused mainly on the use of motion
          graphics.
        </span>
        <div
          class="text-justify text-xs mt-4 children:display-block flex-col flex gap-1"
        >
          <span>3D Footage by me.</span>
          <span>Real Footage Videos by Pexels.</span>
          <span>
            Audio Track can be found on
            <a
              href="https://inaudio.org/track/digital-technology-background/"
              target="_blank"
              rel="norefferer"
            >
              inaudio.org</a
            >.
          </span>
        </div>
      </div>
    </div>
    <Gallery :images="images" :image-width="200" />
  </section>
</template>

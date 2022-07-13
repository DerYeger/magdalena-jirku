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
    <h1 class="font-serif position-relative">Creartive</h1>
    <h2 class="text-lighter font-serif mt--6 text-lg">July 2021</h2>
    <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
      <video
        controls
        controlslist="nodownload"
        class="w-full md:max-w-32rem display-block"
        poster="/img/projects/creartive/1_Beautyshot_Pencils.webp"
      >
        <source src="/img/projects/creartive/Creartive.webm" />
      </video>
      <span>
        The result of my diploma project during my studies at the SAE Institute.
        With the help of brainstorming, I came up with the idea of creating a
        wooden pencil box for high quality manufactured colored pencils. The
        scheme is colorful, playful and yet classy. The logo was created in
        Illustrator. The name is meant to combine art and creativity, which is
        why I chose a combination of the words «Creative» and «Art». After the
        logo was created, the 3D model, including textures, followed. Then
        lights and shadows were set. The most exciting part took place in SideFX
        Houdini. That is where the smoke volumes were created using Points and
        Attributes. In post-production, the scenes were combined and harmonized.
        Color grading, editing and sound were the final touches. Everything in
        this video is fictional, I did not use a pre-existing product. This
        video was created for private use only, it's not a real commercial.
      </span>
    </div>
    <Gallery :images="images" :image-width="200" />
  </section>
</template>

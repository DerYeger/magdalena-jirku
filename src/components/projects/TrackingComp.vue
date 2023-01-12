<script setup lang="ts">
import { useSlideIn } from '~/composables'

const section = ref<HTMLElement>()
useSlideIn(section)
</script>

<template>
  <section ref="section" class="max-w-65rem flex flex-col items-center gap-8">
    <h1 class="font-serif">Tracking Comp</h1>
    <h2 class="text-lighter font-serif mt--6 text-lg">January 2021</h2>
    <div class="flex flex-col items-center justify-center gap-8 lg:flex-row">
      <video
        controls
        controlslist="nodownload"
        playsinline
        class="w-full md:max-w-32rem flex-shrink-0 display-block"
        poster="/img/projects/tracking_comp/beautyshot.webp"
      >
        <source
          src="/img/projects/tracking_comp/Bycicle_Comp_Splitscreen_1.webm"
        />
        <source src="/img/projects/tracking_comp/splitscreen.mp4" />
      </video>
      <span class="text-justify">
        This is the result of my first tracking project. The goal was to embed a
        3D object into real footage. I chose an old gate in the woods with an
        already rusted bike leaning against it. All content in this video was
        created by me.
      </span>
    </div>
  </section>
</template>

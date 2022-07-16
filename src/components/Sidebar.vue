<script setup lang="ts">
import { useHighlightColor } from '~/composables'

const color = useHighlightColor(0.3)

const { t } = useI18n()

const route = useRoute()

const bannerImage = computed(() => {
  if (route.path === `/`) {
    return 'url(/img/drawings/A_Drop_Of_Water.webp)'
  } else if (route.path.startsWith(`/graphic-design`)) {
    return 'url(/img/graphic-design/Vector_Graphics/Howling_Sunset.webp)'
  } else if (route.path.startsWith(`/motion-design`)) {
    return 'url(/img/projects/Creartive/7_Beautyshot_Creartive_Overview_HD.jpg)'
  } else if (route.path.startsWith(`/drawings`)) {
    return 'url(/img/drawings/waiting_in_the_twilight.webp)'
  }
  return 'url(/banner.webp)'
})
</script>

<template>
  <aside
    class="sidebar display-none md:display-flex flex-col items-center justify-between"
  >
    <Logo class="pt-4" />
    <div class="text-white text-center flex flex-col gap-2">
      <span>{{ t('about.name') }}</span>
      <span class="text-serif text-xl uppercase">
        {{ t('about.creative-artist') }}
      </span>
    </div>
    <div class="flex gap-1 space-around pb-2">
      <a
        class="icon-btn"
        href="https://www.artstation.com/keshyx"
        rel="noopener"
        target="_blank"
        title="ArtStation"
      >
        <simple-icons-artstation />
      </a>
      <a
        class="icon-btn"
        href="https://www.deviantart.com/keshyx"
        rel="noopener"
        target="_blank"
        title="DeviantArt"
      >
        <simple-icons-deviantart />
      </a>
      <a
        class="icon-btn"
        href="https://www.linkedin.com/in/magdalena-jirku-81bb16210/?original_referer=https%3A%2F%2Fmagdalena-jirku.at%2F"
        rel="noopener"
        target="_blank"
        title="LinkedIn"
      >
        <simple-icons-linkedin />
      </a>
      <a
        class="icon-btn"
        href="https://www.xing.com/profile/Magdalena_Jirku"
        rel="noopener"
        target="_blank"
        title="XING"
      >
        <simple-icons-xing />
      </a>
    </div>
  </aside>
</template>

<style scoped>
.sidebar,
.sidebar::after,
.sidebar::before {
  width: 12rem;
}

.sidebar {
  height: 100%;
  /* TODO: Enable once Safari flickering is solved */
  /* filter: drop-shadow(0.25rem 0 0.25rem var(--c-shadow)); */
}
.sidebar,
.sidebar > * {
  z-index: 11;
}

.sidebar:after,
.sidebar::before {
  content: '';
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
}
.sidebar:before {
  background-image: v-bind(bannerImage);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale();
  z-index: 9;
  /* transition: background-image var(--anim-slow) ease; */
}

.sidebar:after {
  background-color: v-bind(color);
  transition: all var(--anim-slow) ease;
  z-index: 10;
}
</style>

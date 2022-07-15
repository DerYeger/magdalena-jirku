<script setup lang="ts">
import { useHighlightColor } from '~/composables'

const color = useHighlightColor(0.3)

const { t } = useI18n()
</script>

<template>
  <aside
    class="sidebar display-none md:display-flex flex-col items-center py-4"
  >
    <Logo />
    <Spacer />
    <div class="text-white text-center flex flex-col gap-2">
      <span>{{ t('about.name') }}</span>
      <span class="text-serif text-xl uppercase">{{
        t('about.creative-artist')
      }}</span>
    </div>
    <Spacer />
    <Logo class="hidden" />
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
  background-image: url('/banner.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale();
  z-index: 9;
}

.sidebar:after {
  background-color: v-bind(color);
  transition: all var(--anim-slow) ease;
  z-index: 10;
}
</style>

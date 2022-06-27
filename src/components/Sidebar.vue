<script setup lang="ts">
import { useHighlightColor } from '~/composables'

const color = useHighlightColor()
</script>

<template>
  <aside class="sidebar display-none md:display-initial"></aside>
</template>

<style scoped>
.sidebar,
.sidebar::after,
.sidebar::before {
  width: 12rem;
}

.sidebar {
  height: 100%;
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
  z-index: -2;
}

.sidebar:after {
  background-color: v-bind(color);
  transition: all var(--anim-slow) ease;
  z-index: -1;
}
</style>

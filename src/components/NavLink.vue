<script setup lang="ts">
import { useHighlightColor } from '~/composables'

const props = defineProps<{ to: string }>()
const { to } = toRefs(props)
const color = useHighlightColor()
</script>

<template>
  <router-link :to="to" class="nav-link position-relative text-black">
    <slot />
  </router-link>
</template>

<style scoped>
.nav-link::after {
  content: '';
  display: block;
  position: absolute;
  width: 2em;
  left: calc(50% - 2em / 2);
  top: 1.35em;
  height: 0.25em;
  background-color: v-bind(color);
  transition: all var(--anim-medium) ease;
}

.nav-link:hover {
  scale: 1.1;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
  top: 1.5em;
}
</style>

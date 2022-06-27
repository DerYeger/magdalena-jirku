<script setup lang="ts">
import { useHighlightColor } from '~/composables'

const props = defineProps<{ to: string }>()
const { to } = toRefs(props)
const color = useHighlightColor(0.8)
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
  height: 0.125em;
  background-color: v-bind(color);
  transition: all var(--anim-medium) ease;
}

.nav-link:hover {
  scale: 1.1;
}

.nav-link:hover::after {
  width: max(50%, 2em);
  left: calc(50% - max(50%, 2em) / 2);
  top: 1.5em;
}

.nav-link.router-link-exact-active::after {
  width: 100%;
  left: 0;
  height: 0.2em;
  top: calc(1.35em + 0.125em + 0.5 * 0.2em);
}
</style>

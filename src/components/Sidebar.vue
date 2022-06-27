<script setup lang="ts">
const route = useRoute()

const color = computed(() => {
  if (route.path === '/') {
    return 'rgba(255, 0, 0, 0.3)'
  } else if (route.path.startsWith('/projects')) {
    return 'rgba(0, 0, 255, 0.3)'
  }
  return 'rgba(0, 0, 0, 0)'
})
</script>

<template>
  <aside class="sidebar"></aside>
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

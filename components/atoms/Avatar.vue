<template>
  <v-avatar size="256px" class="avatar elevation-6">
    <asset-image
      src="images/avatar.webp"
      lazy-src="images/avatar-lazy.webp"
      alt="Magdalena"
      :allow-fullscreen="false"
    />
  </v-avatar>
</template>

<style scoped>
.avatar::after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
</style>

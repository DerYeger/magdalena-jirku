<template>
  <v-avatar size="100%" width="100%" class="avatar">
    <asset-image
      src="images/avatar.webp"
      lazy-src="images/avatar-lazy.webp"
      alt="Avatar"
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

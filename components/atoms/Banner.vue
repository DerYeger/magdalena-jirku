<template>
  <div class="banner">
    <v-img
      :src="require('~/assets/images/banner.webp')"
      :lazy-src="require('~/assets/images/banner-lazy.webp')"
      alt="Banner"
      class="mb-4 rounded"
      width="100%"
    />
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
}

.banner::v-deep .v-responsive__content {
  width: unset !important;
}

@media (max-width: 600px) {
  .banner {
    margin-left: -12px;
    margin-right: -12px;
    width: calc(100% + 24px) !important;
  }

  .banner::v-deep .v-image {
    border-radius: 0 !important;
  }
}
</style>

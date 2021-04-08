<template>
  <div class="link-container unselectable">
    <nuxt-link :to="localePath('/')" class="icon-link">
      <img :src="logo" alt="logo" />
    </nuxt-link>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      logo: require('~/assets/content/images/logo.svg'),
    }
  },
})
</script>

<style scoped>
.link-container {
  width: 48px;
  height: 48px;
}

img {
  width: 36px;
  height: 36px;
  margin: 6px;
}
</style>

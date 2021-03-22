<template>
  <v-img :src="imgSrc()" :lazy-src="lazyImgSrc()" :alt="alt" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    lazySrc: {
      type: String,
      default: undefined,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/content/${this.src}`)
      } catch (error) {
        return null
      }
    },
    lazyImgSrc() {
      try {
        return require(`~/assets/content/${this.lazySrc}`)
      } catch (error) {
        return null
      }
    },
  },
})
</script>

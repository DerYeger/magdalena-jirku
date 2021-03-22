<template>
  <video controls width="100%">
    <source :src="videoSrc()" />
  </video>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    videoSrc() {
      try {
        return require(`~/assets/content/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>

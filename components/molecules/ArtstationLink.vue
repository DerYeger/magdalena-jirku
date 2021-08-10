<template>
  <view-on-link
    :href="`https://www.artstation.com/artwork/${artwork}`"
    :icon="mdiArtstation"
    name="ArtStation"
    color="#00AFEB"
  />
</template>

<script lang="ts">
import { mdiArtstation } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    artwork: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mdiArtstation,
    }
  },
})
</script>

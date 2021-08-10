<template>
  <view-on-link
    :href="`https://www.deviantart.com/keshyx/art/${artwork}`"
    :icon="mdiDeviantart"
    name="DeviantArt"
    color="#00E5A1"
  />
</template>

<script lang="ts">
import { mdiDeviantart } from '@mdi/js'
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
      mdiDeviantart,
    }
  },
})
</script>

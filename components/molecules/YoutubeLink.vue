<template>
  <view-on-link
    :href="`https://www.youtube.com/watch?v=${video}`"
    :icon="mdiYoutube"
    name="YouTube"
    color="#FF001C"
  />
</template>

<script lang="ts">
import { mdiYoutube } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    video: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mdiYoutube,
    }
  },
})
</script>

<template>
  <p>
    Magdalena <b>//</b> {{ age }} <b>//</b> {{ $t('misc.vienna') }} <b>//</b>
    {{ $t('misc.graphic-design') }} <b>//</b> {{ $t('misc.studies') }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const now = Date.now()
    const birth = Date.UTC(1998, 5, 4)
    const age = Math.abs(new Date(now - birth).getUTCFullYear() - 1970)
    return {
      age,
    }
  },
})
</script>

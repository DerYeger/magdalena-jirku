<template>
  <v-btn
    rel="noopener"
    text
    :aria-label="$t('actions.view-on') + ' ' + name"
    :href="href"
    target="_blank"
    :color="color"
    class="mb-4"
  >
    {{ $t('actions.view-on') }}
    <v-icon class="ml-2" v-text="icon" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
})
</script>

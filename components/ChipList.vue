<template>
  <p class="program-chip-container">
    <v-chip
      v-for="(element, index) of elements"
      :key="index"
      class="program-chip"
    >
      {{ element }}
    </v-chip>
  </p>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    elements: {
      type: Object as () => string,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.program-chip-container {
  margin-top: -0.5rem;
}

.program-chip {
  margin-top: 0.5rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
}
</style>

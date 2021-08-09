<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :to="project.path"
      :elevation="hover ? 6 : 2"
      class="zoomable-card"
      :class="{ 'primary--text': hover, text: !hover, active: hover }"
    >
      <v-img
        v-if="project.thumbnail"
        :src="require('~/assets/content/' + project.thumbnail)"
        class="thumbnail"
        :class="{ hover }"
        :aspect-ratio="16 / 9"
        max-height="14rem"
      >
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="primary" />
          </v-row>
        </template>
      </v-img>
      <v-card-title>{{ project.title }}</v-card-title>
      <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Project } from '~/model/project'

export default defineComponent({
  props: {
    project: {
      type: Object as () => Project,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.zoomable-card {
  transition: transform 0.25s ease;

  &.active {
    transform: scale(1.05);
  }
}
</style>

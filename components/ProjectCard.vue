<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :to="project.path"
      :elevation="hover ? 12 : 2"
      :class="hover ? 'primary--text' : 'text'"
    >
      <v-img
        v-if="project.image"
        :src="require('~/assets/content/' + project.image)"
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
      <v-card-subtitle>
        {{ $d(new Date(project.createdAt), 'short') }}
      </v-card-subtitle>
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

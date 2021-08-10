<template>
  <v-list-item-group>
    <v-list-item
      v-for="(route, i) in routes"
      :key="i"
      :to="localePath(route.to)"
      exact
    >
      <v-list-item-icon>
        <v-icon>{{ route.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="$t(route.title)" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item
      rel="noopener"
      href="https://github.com/DerYeger"
      target="_blank"
      class="unselectable jan-link-container"
    >
      <v-list-item-icon>
        <v-icon>{{ mdiGithub }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Website by Jan Müller</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>

<script lang="ts">
import { mdiGithub } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  data() {
    return {
      mdiGithub,
      routes: Object.values(routes),
    }
  },
})
</script>

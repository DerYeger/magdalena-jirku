<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :to="hobby.path"
      :elevation="hover ? 6 : 2"
      :class="hover ? 'primary--text' : 'text'"
    >
      <v-img :src="image" :aspect-ratio="16 / 9" max-height="14rem">
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="primary" />
          </v-row>
        </template>
      </v-img>
      <v-card-title>{{ hobby.title }}</v-card-title>
      <v-card-subtitle>
        {{ $d(new Date(hobby.createdAt), 'short') }}
      </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Hobby } from '~/model/hobby'

export default defineComponent({
  props: {
    hobby: {
      type: Object as () => Hobby,
      required: true,
    },
  },
  computed: {
    image(): any {
      return require('~/assets/content/hobby/' +
        (this.hobby.thumbnail || this.hobby.image))
    },
  },
})
</script>

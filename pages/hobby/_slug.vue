<template>
  <div class="article-container">
    <article>
      <h1>{{ hobby.title }}</h1>
      <p>{{ formatDate(hobby.createdAt) }}</p>
      <v-img
        v-if="hobby.image"
        :src="image"
        contain
        class="mb-4 main-image"
        max-height="60vh"
        max-width="100%"
        @click.stop="overlay = true"
      />
      <nuxt-content :document="hobby" />
    </article>
    <document-switcher :prev="prev" :next="next" />
    <v-overlay :value="overlay" opacity="1">
      <v-img
        v-if="hobby.image"
        :src="image"
        contain
        height="100vh"
        width="100vw"
      />
      <v-btn icon class="close-button" @click.stop="overlay = false">
        <v-icon v-text="'mdi-close'" />
      </v-btn>
    </v-overlay>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { localizeDocumentPath, routes } from '~/model/routes'
import { formatDate } from '~/model/utils'
import {
  documentBreadcrumb,
  hobbyBreadcrumb,
  homeBreadcrumb,
} from '~/model/breadcrumbs'

export default defineComponent({
  async asyncData({ app, $content, params }) {
    const hobby = await $content(
      `${app.i18n.locale}/hobby`,
      params.slug
    ).fetch()

    const [prev, next] = await $content(`${app.i18n.locale}/hobby`)
      .only(['title', 'path'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      hobby,
      prev: localizeDocumentPath(prev, app.i18n.locale),
      next: localizeDocumentPath(next, app.i18n.locale),
    }
  },
  data() {
    return {
      overlay: false,
    }
  },
  computed: {
    image() {
      return require('~/assets/content/hobby/' + this.hobby.image)
    },
  },
  mounted() {
    this.$store.commit('setTitle', routes.hobby.title)
    this.$store.commit('setBreadcrumbs', [
      homeBreadcrumb,
      hobbyBreadcrumb,
      documentBreadcrumb(this.hobby, this.$i18n.locale),
    ])
  },
  methods: {
    formatDate,
  },
})
</script>

<style scoped>
.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.main-image {
  cursor: pointer;
}
</style>

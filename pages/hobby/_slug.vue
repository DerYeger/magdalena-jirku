<template>
  <div class="article-container">
    <article>
      <h1>{{ post.title }}</h1>
      <p>Last update: {{ formatDate(post.updatedAt) }}</p>
      <p v-if="hasTags(hobby)">Tags: {{ post.tags.join(', ') }}</p>
      <table-of-contents
        v-if="hobby.toc.length > 0"
        :document="hobby"
      ></table-of-contents>
      <nuxt-content :document="hobby" />
    </article>
    <document-switcher :prev="prev" :next="next"></document-switcher>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { hasTags } from '~/model/hobby'
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
      `${app.i18n.locale}/hobby/`,
      params.slug
    ).fetch()

    const [prev, next] = await $content(`${app.i18n.locale}/hobby`)
      .only(['title', 'path'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      hobby,
      prev: localizeDocumentPath(prev, app.i18n.locale),
      next: localizeDocumentPath(next, app.i18n.locale),
    }
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
    hasTags,
    formatDate,
  },
})
</script>

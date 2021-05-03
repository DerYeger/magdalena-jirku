<template>
  <div style="width: 100%">
    <article>
      <h1>{{ project.title }}</h1>
      <p>{{ project.subtitle }}</p>
      <chip-list :elements="project.programs" />
      <nuxt-content :document="project" />
      <document-switcher :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { localizeDocumentPath } from '~/model/routes'
import {
  documentBreadcrumb,
  homeBreadcrumb,
  projectsBreadcrumb,
} from '~/model/breadcrumbs'

export default defineComponent({
  async asyncData({ app, $content, params }) {
    const project = await $content(
      `${app.i18n.locale}/projects`,
      params.slug
    ).fetch()

    const [prev, next] = await $content(`${app.i18n.locale}/projects`)
      .only(['title', 'shortTitle', 'path', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      project,
      prev: localizeDocumentPath(prev, app.i18n.locale),
      next: localizeDocumentPath(next, app.i18n.locale),
    }
  },
  head() {
    return {
      title: this.$t(this.project.title),
    }
  },
  mounted() {
    this.$store.commit('setBreadcrumbs', [
      homeBreadcrumb,
      projectsBreadcrumb,
      documentBreadcrumb(this.project, this.$i18n.locale),
    ])
  },
})
</script>

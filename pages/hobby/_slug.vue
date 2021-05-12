<template>
  <div style="width: 100%">
    <article>
      <h1>{{ hobby.title }}</h1>
      <p>{{ $d(new Date(hobby.createdAt), 'long') }}</p>
      <div class="mb-4">
        <asset-image
          :src="'hobby/' + hobby.image"
          :alt="hobby.title"
          contain
          max-height="60vh"
          max-width="100%"
          :elevation="0"
        />
      </div>
      <nuxt-content :document="hobby" />
      <document-switcher :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { localizeDocumentPath } from '~/model/routes'
import {
  documentBreadcrumb,
  hobbyBreadcrumb,
  homeBreadcrumb,
} from '~/model/breadcrumbs'
import { generateSocialTags } from '~/model/meta'

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
  head() {
    const title = this.$t(this.hobby.title)
    const description = this.$t('meta.description')
    return {
      title,
      meta: [...generateSocialTags(title, description)],
    }
  },
  computed: {
    image() {
      return require('~/assets/content/hobby/' + this.hobby.image)
    },
  },
  mounted() {
    this.$store.commit('setBreadcrumbs', [
      homeBreadcrumb,
      hobbyBreadcrumb,
      documentBreadcrumb(this.hobby, this.$i18n.locale),
    ])
  },
})
</script>

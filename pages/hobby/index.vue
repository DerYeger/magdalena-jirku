<template>
  <vue-masonry-wall
    :items="hobbies"
    :ssr="{ columns: 1 }"
    :options="{ width: 400, padding: 12 }"
  >
    <template #default="{ item }">
      <hobby-card :hobby="item" />
    </template>
  </vue-masonry-wall>
</template>

<script lang="ts">
import { contentFunc } from '@nuxt/content/types/content'
import { defineComponent } from '@nuxtjs/composition-api'
import { NuxtAppOptions } from '@nuxt/types'
import { Hobby } from '~/model/hobby'
import { hobbyBreadcrumb, homeBreadcrumb } from '~/model/breadcrumbs'
import { localizeDocumentPaths, routes } from '~/model/routes'
import { generateSocialTags } from '~/model/meta'

export default defineComponent({
  async asyncData({
    app,
    $content,
  }: {
    app: NuxtAppOptions
    $content: contentFunc
  }) {
    const hobbies = (await $content(`${app.i18n.locale}/hobby`)
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch<Hobby>()) as Hobby[]
    return {
      hobbies: localizeDocumentPaths(hobbies, app.i18n.locale),
    }
  },
  head() {
    const title = (this.$t as Function)(routes.hobby.title)
    const description = (this.$t as Function)('meta.description')
    return {
      title,
      meta: [...generateSocialTags(title, description)],
    }
  },
  mounted() {
    this.$store.commit('setBreadcrumbs', [homeBreadcrumb, hobbyBreadcrumb])
  },
})
</script>

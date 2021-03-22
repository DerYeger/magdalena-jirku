<template>
  <vue-masonry-wall
    :items="hobbies"
    :ssr="{ columns: 1 }"
    :options="{ width: 400, padding: 12 }"
  >
    <h1>Under construction</h1>
  </vue-masonry-wall>
</template>

<script lang="ts">
import { contentFunc } from '@nuxt/content/types/content'
import { defineComponent } from '@nuxtjs/composition-api'
import { NuxtAppOptions } from '@nuxt/types'
import { Hobby, hasTags } from '~/model/hobby'
import { hobbyBreadcrumb, homeBreadcrumb } from '~/model/breadcrumbs'
import { localizeDocumentPaths, routes } from '~/model/routes'
import { formatDate } from '~/model/utils'

export default defineComponent({
  async asyncData({
    app,
    $content,
  }: {
    app: NuxtAppOptions
    $content: contentFunc
  }) {
    const hobbies = (await $content(`${app.i18n.locale}/hobby`)
      .only(['title', 'path', 'createdAt', 'tags', 'image'])
      .sortBy('createdAt', 'desc')
      .fetch<Hobby>()) as Hobby[]
    return {
      hobbies: localizeDocumentPaths(hobbies, app.i18n.locale),
    }
  },
  mounted() {
    this.$store.commit('setTitle', routes.hobby.title)
    this.$store.commit('setBreadcrumbs', [homeBreadcrumb, hobbyBreadcrumb])
  },
  methods: {
    hasTags,
    formatDate,
  },
})
</script>

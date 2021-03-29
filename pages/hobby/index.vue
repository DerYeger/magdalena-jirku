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

export default defineComponent({
  async asyncData({
    app,
    $content,
  }: {
    app: NuxtAppOptions
    $content: contentFunc
  }) {
    const hobbies = (await $content(`${app.i18n.locale}/hobby`)
      .only(['title', 'path', 'createdAt', 'thumbnail', 'image'])
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
})
</script>

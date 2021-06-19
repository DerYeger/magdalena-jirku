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
import { defineComponent } from '@nuxtjs/composition-api'
import { Context } from '@nuxt/types'
import { Hobby } from '~/model/hobby'
import { hobbyBreadcrumb, homeBreadcrumb } from '~/model/breadcrumbs'
import { localizeDocumentPaths, routes } from '~/model/routes'
import { generateSocialTags } from '~/model/meta'

export default defineComponent({
  async asyncData(context: Context) {
    const locale = context.app.i18n.locale
    const hobbies = (await context
      .$content(`${locale}/hobby`)
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch<Hobby>()) as Hobby[]
    return {
      hobbies: localizeDocumentPaths(hobbies, locale),
    }
  },
  head() {
    const title = this.$t(routes.hobby.title) as string
    const description = this.$t('meta.description') as string
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

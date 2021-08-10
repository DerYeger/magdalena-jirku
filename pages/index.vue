<template>
  <v-row class="bound-width" no-gutters>
    <v-col>
      <v-row>
        <v-col cols="12" sm="auto" class="d-flex flex-column align-center">
          <avatar class="mx-auto" />
          <account-link-row class="justify-center mt-4" />
        </v-col>
        <v-col>
          <h1 class="text-center text-sm-left mb-4">
            {{ $t('misc.about-me') }}
          </h1>
          <quick-facts />
          <nuxt-content :document="paragraphs[0]" />
          <banner />
          <nuxt-content :document="paragraphs[1]" />
          <nuxt-content :document="paragraphs[2]" />
          <h2 class="text-center text-sm-left mb-4">
            {{ $t('misc.software') }}
          </h2>
          <software-list class="justify-center justify-sm-start" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Context } from '@nuxt/types'
import { routes } from '~/model/routes'
import { generateSocialTags } from '~/model/meta'
import { Paragraph } from '~/model/paragraph'
import Banner from '~/components/atoms/Banner.vue'

export default defineComponent({
  components: { Banner },
  async asyncData(context: Context) {
    const paragraphs = (await context
      .$content(`${context.app.i18n.locale}/home`)
      .sortBy('part')
      .fetch()) as Paragraph[]
    return {
      paragraphs,
    }
  },
  head() {
    const title = this.$t(routes.home.title) as string
    const description = this.$t('meta.description') as string
    return {
      title,
      meta: [...generateSocialTags(title, description)],
    }
  },
  mounted() {
    this.$store.commit('setBreadcrumbs', [])
  },
})
</script>

<style scoped>
h1 {
  font-size: 4rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 0.25em;
}

h1,
h2 {
  line-height: 1;
}
</style>

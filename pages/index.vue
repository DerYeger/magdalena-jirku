<template>
  <v-col class="bound-width">
    <v-row>
      <v-col cols="12" sm="5" md="4" class="pt-0">
        <v-row justify="center" class="mb-4 mt-2 ml-1 mr-1">
          <avatar />
        </v-row>
        <v-row justify="center">
          <account-link
            v-for="(account, index) of accounts"
            :key="index"
            :name="account.name"
            :icon="account.icon"
            :href="account.href"
            :color="account.color"
          />
        </v-row>
      </v-col>
      <v-col
        class="pt-0"
        :style="
          $vuetify.breakpoint.xs ? 'padding-left: 0; padding-right: 0' : ''
        "
      >
        <article>
          <nuxt-content :document="document" />
        </article>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { NuxtAppOptions } from '@nuxt/types'
import { contentFunc } from '@nuxt/content/types/content'
import { routes } from '~/model/routes'
import { generateSocialTags } from '~/model/meta'

export default defineComponent({
  async asyncData({
    app,
    $content,
  }: {
    app: NuxtAppOptions
    $content: contentFunc
  }) {
    const document = await $content(`${app.i18n.locale}/home`).fetch()
    return {
      document,
    }
  },
  data() {
    return {
      accounts: [
        {
          name: 'ArtStation',
          href: 'https://www.artstation.com/keshyx',
          icon: 'mdi-artstation',
          color: '#00AFEB',
        },
        {
          name: 'DeviantArt',
          href: 'https://www.deviantart.com/keshyx',
          icon: 'mdi-deviantart',
          color: '#00E5A1',
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/keshyx_/',
          icon: 'mdi-instagram',
          color: '#ED3651',
        },
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/magdalena-jirku-81bb16210/',
          icon: 'mdi-linkedin',
          color: '#0077B0',
        },
        {
          name: 'XING',
          href: 'https://www.xing.com/profile/Magdalena_Jirku/cv',
          icon: 'mdi-xing',
          color: '#006566',
        },
      ],
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

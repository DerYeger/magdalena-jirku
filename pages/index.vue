<template>
  <v-col class="mt-4">
    <v-row class="flex-wrap">
      <v-col :xs="6" :sm="5" :md="4" :lg="3" :xl="2">
        <v-row justify="center" class="mb-4 mt-2 ml-1 mr-1"><avatar /></v-row>
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
      <v-col :xs="6" :sm="7" :md="8" :lg="9" :xl="10">
        <nuxt-content :document="document"></nuxt-content>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { NuxtAppOptions } from '@nuxt/types'
import { contentFunc } from '@nuxt/content/types/content'
import { routes } from '~/model/routes'

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
          icon: 'fab fa-artstation',
          color: '#00AFEB',
        },
        {
          name: 'DeviantArt',
          href: 'https://www.deviantart.com/keshyx',
          icon: 'fab fa-deviantart',
          color: '#00E5A1',
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/keshyx_/',
          icon: 'fab fa-instagram',
          color: '#ED3651',
        },
      ],
    }
  },
  mounted() {
    this.$store.commit('setTitle', routes.home.title)
    this.$store.commit('setBreadcrumbs', [])
  },
})
</script>

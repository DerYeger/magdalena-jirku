<template>
  <v-col class="mt-5">
    <v-row class="flex-wrap">
      <v-col :sm="3" :xl="2">
        <v-row justify="center" class="ma-3"><avatar /></v-row>
      </v-col>
      <v-col :sm="9" :xl="10">
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
  mounted() {
    this.$store.commit('setTitle', routes.home.title)
    this.$store.commit('setBreadcrumbs', [])
  },
})
</script>

<style lang="scss">
.account-link {
  text-decoration: none;
  color: unset !important;

  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.half-p {
  margin-bottom: 0.5rem !important;
}
</style>

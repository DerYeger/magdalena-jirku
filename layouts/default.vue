<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawerOpen"
      fixed
      app
      :expand-on-hover="$vuetify.breakpoint.lgAndUp"
    >
      <app-navigation />
    </v-navigation-drawer>
    <app-header :drawer-open="drawerOpen" :on-nav-icon-clicked="toggleDrawer" />
    <v-main>
      <breadcrumbs
        v-if="$vuetify.breakpoint.mdAndDown && breadcrumbs.length > 0"
        class="pa-3"
      />
      <v-container class="page-container">
        <nuxt />
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { mapState } from 'vuex'
import { routes } from '~/model/routes'

export default defineComponent({
  data() {
    return {
      drawerOpen: false,
      items: Object.values(routes),
    }
  },
  head() {
    return {
      title: this.$t(this.$store.state.title),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.description'),
        },
      ],
    }
  },
  computed: mapState(['title', 'breadcrumbs']),
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen
    },
  },
})
</script>

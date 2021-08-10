<template>
  <v-app-bar
    fixed
    app
    elevate-on-scroll
    dense
    :color="$vuetify.theme.dark ? '#121212' : 'white'"
  >
    <div>
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.mdAndDown"
        :aria-label="$t(value ? 'actions.close-menu' : 'actions.open-menu')"
        style="margin-left: -16px"
        @click="$emit('input', !value)"
      >
        <v-icon>{{ mdiMenu }}</v-icon>
      </v-app-bar-nav-icon>
      <breadcrumbs v-show="$vuetify.breakpoint.lgAndUp" class="pa-0" />
    </div>
    <div
      class="d-flex justify-center"
      :style="
        $vuetify.breakpoint.mdAndDown
          ? 'flex-basis: auto'
          : 'margin-left: -56px'
      "
    >
      <content-search />
    </div>
    <div style="margin-right: -16px">
      <logo />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mdiMenu } from '@mdi/js'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mdiMenu,
    }
  },
})
</script>

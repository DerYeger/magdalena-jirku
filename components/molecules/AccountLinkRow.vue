<template>
  <div class="responsive-list">
    <account-link
      v-for="(account, index) of accounts"
      :key="index"
      :name="account.name"
      :icon="account.icon"
      :href="account.href"
      :color="account.color"
    />
  </div>
</template>

<script lang="ts">
import {
  mdiArtstation,
  mdiDeviantart,
  mdiInstagram,
  mdiLinkedin,
  mdiXing,
} from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      accounts: [
        {
          name: 'ArtStation',
          href: 'https://www.artstation.com/keshyx',
          icon: mdiArtstation,
          color: '#00AFEB',
        },
        {
          name: 'DeviantArt',
          href: 'https://www.deviantart.com/keshyx',
          icon: mdiDeviantart,
          color: '#00E5A1',
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/keshyx_/',
          icon: mdiInstagram,
          color: '#ED3651',
        },
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/magdalena-jirku-81bb16210/',
          icon: mdiLinkedin,
          color: '#0077B0',
        },
        {
          name: 'XING',
          href: 'https://www.xing.com/profile/Magdalena_Jirku/cv',
          icon: mdiXing,
          color: '#006566',
        },
      ],
    }
  },
})
</script>

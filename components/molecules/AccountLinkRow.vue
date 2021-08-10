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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
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
})
</script>

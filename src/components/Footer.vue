<script setup lang="ts">
import { useAccounts } from '~/composables'

const { t } = useI18n()
const accounts = useAccounts()
</script>

<template>
  <footer class="footer pa-4 text-xs flex justify-center gap-8 mt-24">
    <div>
      <span>{{ t('pages.legal') }}</span>
      <router-link
        to="/impressum"
        :title="t('pages.impressum')"
        active-class="!text-$primary op90"
      >
        {{ t('pages.impressum') }}
      </router-link>
      <router-link
        to="/legal"
        :title="t('pages.legal')"
        active-class="!text-$primary op90"
      >
        {{ t('pages.legal') }}
      </router-link>
      <span class="text-lighter">
        2021 - {{ new Date().getFullYear() }} &copy;<br />
        Magdalena Jirku
      </span>
    </div>
    <div>
      <span>{{ t('footer.social') }}</span>
      <a
        v-for="(account, index) of accounts"
        :key="index"
        :href="account.link"
        rel="noopener"
        target="_blank"
      >
        {{ account.name }}
      </a>
    </div>
    <div>
      <span>{{ t('footer.credits') }}</span>
      <a
        href="https://github.com/DerYeger/magdalena-jirku"
        rel="noopener"
        target="_blank"
      >
        Website by Jan Müller
      </a>
      <a href="https://www.freepik.com" target="_blank" rel="noopener">
        Mockup by rawpixel.com
      </a>
      <a
        href="https://www.freepik.com/psd/brochure"
        target="_blank"
        rel="noopener"
      >
        Mockup by eightonesix
      </a>
      <a
        href="https://www.freepik.com/psd/brochure"
        target="_blank"
        rel="noopener"
      >
        Mockup by crowf
      </a>
      <a
        href="https://www.freepik.com/psd/brochure"
        target="_blank"
        rel="noopener"
      >
        Mockup by ehby
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer > div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.footer > div > span:first-child {
  font-weight: bold;
}
</style>

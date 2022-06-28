<script setup lang="ts">
import { useAccounts } from '~/composables'

const { t } = useI18n()
const accounts = useAccounts()
</script>

<template>
  <footer class="footer pa-4 text-xs flex flex-wrap justify-center gap-8">
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
        2021 - {{ new Date().getFullYear() }} &copy; Magdalena Jirku
      </span>
      <a
        href="https://github.com/DerYeger/magdalena-jirku"
        rel="noopener"
        target="_blank"
      >
        {{ t('source') }}
      </a>
    </div>
    <div>
      <span>Social</span>
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

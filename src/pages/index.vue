<script setup lang="ts">
import { useAge } from '~/composables'

const { t } = useI18n()
const age = useAge()
</script>

<template>
  <div class="flex gap-4 items-center">
    <Avatar />
    <span class="text-sm text-lighter">{{ t('about.facts', { age }) }}</span>
  </div>
</template>

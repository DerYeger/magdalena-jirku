<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav class="justify-end flex flex-row gap-4 px-4">
    <router-link to="/">{{ t('button.home') }}</router-link>
    <router-link to="/projects">Projects</router-link>
  </nav>
</template>

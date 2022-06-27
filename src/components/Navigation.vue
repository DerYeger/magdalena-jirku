<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav
    class="navigation text-xs sm:text-sm justify-center md:justify-end flex flex-row gap-8 px-8 flex-wrap"
  >
    <NavLink to="/">{{ t('pages.home') }}</NavLink>
    <NavLink to="/graphic-design">
      {{ t('pages.graphic-design') }}
    </NavLink>
    <NavLink to="/motion-design">
      {{ t('pages.motion-design') }}
    </NavLink>
    <NavLink to="/drawings">
      {{ t('pages.drawings') }}
    </NavLink>
  </nav>
</template>

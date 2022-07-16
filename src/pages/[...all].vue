<script setup lang="ts">
import { useHighlightColor } from '~/composables'

const { t } = useI18n()
const highlightColor = useHighlightColor(0.5)

const router = useRouter()
onMounted(() => router.push('/'))
</script>

<template>
  <div
    class="container mx-auto h-full flex flex-col gap-4 items-center justify-center"
  >
    <span class="text-xl text-light">{{ t('not-found') }}</span>
    <div class="w-full max-w-64 position-relative">
      <div class="ball" @mouseover="router.push('/')" />
    </div>
  </div>
</template>

<style scoped>
.ball {
  background-color: v-bind(highlightColor);
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: ball 5s infinite linear both;
  position: absolute;
}

.ball:hover {
  transform: scale(2);
}

@keyframes ball {
  0%,
  50%,
  100% {
    left: 50%;
  }
  25% {
    left: 100%;
  }
  75% {
    left: 0%;
  }
}
</style>

import type { Ref } from 'vue'

const siteTitle = 'Magdalena Jirku'

export function useTitleTemplate(title: string): void {
  const { t } = useI18n()
  const pageTitle: Ref<string> = computed(() => `${t(title)} · ${siteTitle}`)
  useHead({
    title: pageTitle,
    meta: [
      {
        property: 'og:title',
        content: pageTitle,
      },
      {
        property: 'og:image:alt',
        content: pageTitle,
      },
    ],
  })
}

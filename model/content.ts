import { FetchReturn } from '@nuxt/content/types/query-builder'

export interface Content extends FetchReturn {
  title: string
  shortTitle?: string
  description: string
}

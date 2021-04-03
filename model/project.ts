import { IContentDocument } from '@nuxt/content/types/content'

export interface Project extends IContentDocument {
  date: string
  thumbnail: string
  shortTitle?: string
}

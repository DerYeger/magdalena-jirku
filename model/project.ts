import { IContentDocument } from '@nuxt/content/types/content'

export interface Project extends IContentDocument {
  subtitle: string
  thumbnail: string
}

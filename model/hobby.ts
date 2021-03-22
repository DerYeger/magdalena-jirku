import { IContentDocument } from '@nuxt/content/types/content'

export interface Hobby extends IContentDocument {
  tags?: string[]
  image?: string
}

export function hasTags(hobby: Hobby): boolean {
  return (hobby.tags?.length ?? 0) > 0
}

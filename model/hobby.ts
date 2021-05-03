import { Content } from '~/model/content'

export interface Hobby extends Content {
  image: string
  thumbnail?: string
}

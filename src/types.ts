import type { ViteSSGContext } from 'vite-ssg'
import type { RouteMeta, RouteRecordNormalized } from 'vue-router'

export type UserModule = (ctx: ViteSSGContext) => void

export type RouteWithFrontmatter = RouteRecordNormalized & {
  meta: RouteMeta & {
    frontmatter: Record<string, string>
  }
}

export type ImageType = 'webp'

export type ImagePath = `/img/${string}.${ImageType}`

export interface GalleryImage {
  src: ImagePath
  title?: string
  thumbnail?: ImagePath
}

export interface Showcase {
  title: string
  images: GalleryImage[]
}

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

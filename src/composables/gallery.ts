import { getImage } from 'astro:assets'

import type { GalleryImage } from '@composables/types'

const drawings: GalleryImage[] = [
  {
    src: 'autumn_mystery.png',
    title: 'Autumn Mystery',
  },
  {
    src: 'beige-world.png',
    title: 'Beige World',
  },
  {
    src: 'Adulthood-suits-you-small.png',
    title: 'Adulthood Suits You',
  },
  {
    src: 'autumn-is-coming-small.png',
    title: 'Autumn Is Coming',
  },
  {
    src: 'Last-Flight.png',
    title: 'Last Flight',
  },
  {
    src: 'Kingfisher-small.png',
    title: 'Kingfisher',
  },
  {
    src: 'fire_on_fire.jpg',
    title: 'Fire On Fire',
  },
  {
    src: 'Springtime-small.png',
    title: 'Springtime',
  },
  {
    src: 'A_Drop_Of_Water.webp',
    thumbnail: 'A_Drop_Of_Water_Thumbnail.webp',
    title: 'A Drop Of Water',
  },
  {
    src: 'dragonfire.webp',
    thumbnail: 'dragonfire_Thumbnail.webp',
    title: 'Dragonfire',
  },
  {
    src: 'enjoying_the_night.webp',
    thumbnail: 'enjoying_the_night_Thumbnail.webp',
    title: 'Enjoying The Night',
  },
  {
    src: 'its_good_to_be_king.webp',
    thumbnail: 'its_good_to_be_king_Thumbnail.webp',
    title: `It's Good To Be King`,
  },
  {
    src: 'Jotunheim_Is_Calling.webp',
    thumbnail: 'Jotunheim_Is_Calling_Thumbnail.webp',
    title: 'Jotunheim Is Calling',
  },
  {
    src: 'leading_the_pack_by_keshyx.webp',
    thumbnail: 'leading_the_pack_by_keshyx_Thumbnail.webp',
    title: 'Leading The Pack By Keshyx',
  },
  {
    src: 'Underwater_Tour.webp',
    thumbnail: 'Underwater_Tour_Thumbnail.webp',
    title: 'Underwater Tour',
  },
  {
    src: 'underwater-cruise.webp',
    thumbnail: 'underwater-cruise_Thumbnail.webp',
    title: 'Underwater Cruise',
  },
  {
    src: 'waiting_in_the_twilight.webp',
    thumbnail: 'waiting_in_the_twilight_Thumbnail.webp',
    title: 'Waiting In The Twilight',
  },
]

async function importSrc(src: string) {
  const [rawSrc, fileType] = src.split('.')
  if (fileType === 'png') {
    return import(`../assets/drawings/${rawSrc}.png`)
  } else if (fileType === 'webp') {
    return import(`../assets/drawings/${rawSrc}.webp`)
  } else {
    return import(`../assets/drawings/${rawSrc}.jpg`)
  }
}

export async function useDrawingsGallery(): Promise<GalleryImage[]> {
  return Promise.all(
    drawings.map(async (drawing) => {
      const rawImage = await importSrc(drawing.src)
      const image = await getImage({ src: rawImage.default, quality: 'max', format: 'webp' })
      const rawThumbnail = await importSrc(drawing.thumbnail ?? drawing.src)
      const thumbnail = await getImage({ src: rawThumbnail.default, quality: 80, format: 'webp' })
      return {
        src: image.src,
        title: drawing.title,
        thumbnail: thumbnail.src,
      }
    }),
  )
}

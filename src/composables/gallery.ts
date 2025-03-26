import type { GalleryImage } from '~/types'

const drawings: GalleryImage[] = [
  {
    src: '/img/drawings/Adulthood-suits-you-small.png',
    title: 'Adulthood Suits You',
  },
  {
    src: '/img/drawings/beige-world-small.png',
    title: 'Beige World',
  },
  {
    src: '/img/drawings/Insanity.png',
    title: 'Insanity',
  },
  {
    src: '/img/drawings/autumn-is-coming-small.png',
    title: 'Autumn Is Coming',
  },
  {
    src: '/img/drawings/Kingfisher-small.png',
    title: 'Kingfisher',
  },
  {
    src: '/img/drawings/Rare-Smile-small.png',
    title: 'Rare Smile',
  },
  {
    src: '/img/drawings/Springtime-small.png',
    title: 'Springtime',
  },
  {
    src: '/img/drawings/A_Drop_Of_Water.webp',
    thumbnail: '/img/drawings/A_Drop_Of_Water_Thumbnail.webp',
    title: 'A Drop Of Water',
  },
  {
    src: '/img/drawings/dragonfire.webp',
    thumbnail: '/img/drawings/dragonfire_Thumbnail.webp',
    title: 'Dragonfire',
  },
  {
    src: '/img/drawings/enjoying_the_night.webp',
    thumbnail: '/img/drawings/enjoying_the_night_Thumbnail.webp',
    title: 'Enjoying The Night',
  },
  {
    src: '/img/drawings/its_good_to_be_king.webp',
    thumbnail: '/img/drawings/its_good_to_be_king_Thumbnail.webp',
    title: `It's Good To Be King`,
  },
  {
    src: '/img/drawings/Jotunheim_Is_Calling.webp',
    thumbnail: '/img/drawings/Jotunheim_Is_Calling_Thumbnail.webp',
    title: 'Jotunheim Is Calling',
  },
  {
    src: '/img/drawings/leading_the_pack_by_keshyx.webp',
    thumbnail: '/img/drawings/leading_the_pack_by_keshyx_Thumbnail.webp',
    title: 'Leading The Pack By Keshyx',
  },
  {
    src: '/img/drawings/Underwater_Tour.webp',
    thumbnail: '/img/drawings/Underwater_Tour_Thumbnail.webp',
    title: 'Underwater Tour',
  },
  {
    src: '/img/drawings/underwater-cruise.webp',
    thumbnail: '/img/drawings/underwater-cruise_Thumbnail.webp',
    title: 'Underwater Cruise',
  },
  {
    src: '/img/drawings/waiting_in_the_twilight.webp',
    thumbnail: '/img/drawings/waiting_in_the_twilight_Thumbnail.webp',
    title: 'Waiting In The Twilight',
  },
]

export function useDrawingsGallery(): GalleryImage[] {
  return drawings
}

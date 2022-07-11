import type { GalleryImage } from '~/types'

const drawings: GalleryImage[] = [
  { src: '/img/drawings/A_Drop_Of_Water.webp', title: 'A Drop Of Water' },
  { src: '/img/drawings/dragonfire.webp', title: 'Dragonfire' },
  {
    src: '/img/drawings/enjoying_the_night.webp',
    title: 'Enjoying The Night',
  },
  {
    src: '/img/drawings/its_good_to_be_king.webp',
    title: `It's Good To Be King`,
  },
  {
    src: '/img/drawings/Jotunheim_Is_Calling.webp',
    title: 'Jotunheim Is Calling',
  },
  {
    src: '/img/drawings/leading_the_pack_by_keshyx.webp',
    title: 'Leading The Pack By Keshyx',
  },
  {
    src: '/img/drawings/smaug_the_magnificent_by_keshyx.webp',
    title: 'Smaug The Magnificent By Keshyx',
  },
  { src: '/img/drawings/Underwater_Tour.webp', title: 'Underwater Tour' },
  { src: '/img/drawings/underwater-cruise.webp', title: 'Underwater Cruise' },
  {
    src: '/img/drawings/waiting_in_the_twilight.webp',
    title: 'Waiting In The Twilight',
  },
]

export function useDrawingsGallery(): GalleryImage[] {
  return drawings
}

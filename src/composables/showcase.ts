import type { Showcase } from '~/types'

const birthdayCardShowcase: Showcase = {
  title: 'Birthday Cards',
  images: [
    {
      src: '/img/graphic-design/birthday_cards/birthday_card_1.webp',
    },
    {
      src: '/img/graphic-design/birthday_cards/birthday_card_2.webp',
    },
  ],
}

const exhibitionCatalogShowcase: Showcase = {
  title: 'Exhibition Catalog',
  images: [
    {
      src: '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/01_Gestern_Heute_Morgen_Cover.webp',
    },
    {
      src: '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/02_Gestern_Heute_Morgen_Margit_Doppler.webp',
    },
    {
      src: '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/03_Gestern_Heute_Morgen_Trude_Fleischmann.webp',
    },
    {
      src: '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/04_Gestern_Heute_Morgen_Grafikdesign.webp',
    },
  ],
}

const logoDesignShowcase: Showcase = {
  title: 'Logo Designs',
  images: [
    {
      src: '/img/graphic-design/Luminosity_Pictures/LP_Logo.webp',
    },
    {
      src: '/img/graphic-design/Luminosity_Pictures/LP_Businesscard_V2.webp',
    },
    {
      src: '/img/graphic-design/VollesPotenzial/Mockup_Volles_Potenzial.webp',
    },
  ],
}

const storyboardShowcase: Showcase = {
  title: 'Storyboards',
  images: [
    {
      src: '/img/graphic-design/Storyboards/High_Rise_Storyboard.webp',
    },
    {
      src: '/img/graphic-design/Storyboards/Monday_Morning_Storyboard_Final.webp',
    },
    {
      src: '/img/graphic-design/Storyboards/Storyboard_tv_v4.webp',
    },
  ],
}

const vectorGraphicsShowcase: Showcase = {
  title: 'Vector Graphics',
  images: [
    {
      src: '/img/graphic-design/Vector_Graphics/Dangerous_Eyes.webp',
    },
    {
      src: '/img/graphic-design/Vector_Graphics/Howling_Sunset.webp',
    },
    {
      src: '/img/graphic-design/Vector_Graphics/Snacking.webp',
    },
  ],
}

const showcases = [
  logoDesignShowcase,
  vectorGraphicsShowcase,
  storyboardShowcase,
  exhibitionCatalogShowcase,
  birthdayCardShowcase,
]

export function useGraphicDesignShowcases(): Showcase[] {
  return showcases
}

import type { Showcase } from '~/types'

const illustratedCardsShowcase: Showcase = {
  title: 'Illustrated Cards',
  images: [
    {
      src: '/img/graphic-design/illustrated_cards/mockup_realistic.webp',
      thumbnail:
        '/img/graphic-design/illustrated_cards/mockup_realistic_thumbnail.webp',
    },
    {
      src: '/img/graphic-design/illustrated_cards/mockup_comic.webp',
      thumbnail:
        '/img/graphic-design/illustrated_cards/mockup_comic_thumbnail.webp',
    },
  ],
}

const exhibitionCatalogShowcase: Showcase = {
  title: 'Exhibition Catalog',
  images: [
    {
      src: '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/01_Gestern_Heute_Morgen_Cover.webp',
      thumbnail:
        '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/01_Gestern_Heute_Morgen_Cover_Thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/02_Gestern_Heute_Morgen_Margit_Doppler.webp',
      thumbnail:
        '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/02_Gestern_Heute_Morgen_Margit_Doppler_Thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/03_Gestern_Heute_Morgen_Trude_Fleischmann.webp',
      thumbnail:
        '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/03_Gestern_Heute_Morgen_Trude_Fleischmann_Thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/04_Gestern_Heute_Morgen_Grafikdesign.webp',
      thumbnail:
        '/img/graphic-design/Gestern_Heute_Morgen_Ausstellungskatalog/04_Gestern_Heute_Morgen_Grafikdesign_Thumbnail.webp',
    },
  ],
}

const logoDesignShowcase: Showcase = {
  title: 'Logo Designs',
  images: [
    {
      src: '/img/graphic-design/dreamteam.webp',
      thumbnail: '/img/graphic-design/dreamteam-thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Luminosity_Pictures/LP_Logo.webp',
      thumbnail:
        '/img/graphic-design/Luminosity_Pictures/LP_Logo_Thumbnail.webp',
    },
    {
      src: '/img/graphic-design/VollesPotenzial/Mockup_Volles_Potenzial.webp',
      thumbnail:
        '/img/graphic-design/VollesPotenzial/Mockup_Volles_Potenzial_Thumbnail.webp',
    },
  ],
}

const storyboardShowcase: Showcase = {
  title: 'Storyboards',
  images: [
    {
      src: '/img/graphic-design/Storyboards/bauhaus.webp',
      thumbnail: '/img/graphic-design/Storyboards/bauhaus-thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Storyboards/Storyboard_tv_v4.webp',
      thumbnail:
        '/img/graphic-design/Storyboards/Storyboard_tv_v4_Thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Storyboards/Monday_Morning_Storyboard_Final.webp',
      thumbnail:
        '/img/graphic-design/Storyboards/Monday_Morning_Storyboard_Final_Thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Storyboards/High_Rise_Storyboard.webp',
      thumbnail:
        '/img/graphic-design/Storyboards/High_Rise_Storyboard_Thumbnail.webp',
    },
  ],
}

const vectorGraphicsShowcase: Showcase = {
  title: 'Vector Graphics',
  images: [
    {
      src: '/img/graphic-design/Vector_Graphics/mountains.webp',
      thumbnail: '/img/graphic-design/Vector_Graphics/mountains-thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Vector_Graphics/Howling_Sunset.webp',
      thumbnail:
        '/img/graphic-design/Vector_Graphics/Howling_Sunset_Thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Vector_Graphics/Dangerous_Eyes.webp',
      thumbnail:
        '/img/graphic-design/Vector_Graphics/Dangerous_Eyes_Thumbnail.webp',
    },
    {
      src: '/img/graphic-design/Vector_Graphics/Snacking.webp',
      thumbnail: '/img/graphic-design/Vector_Graphics/Snacking_Thumbnail.webp',
    },
  ],
}

export function useGraphicDesignShowcases() {
  return {
    logoDesignShowcase,
    vectorGraphicsShowcase,
    storyboardShowcase,
    exhibitionCatalogShowcase,
    illustratedCardsShowcase,
  }
}

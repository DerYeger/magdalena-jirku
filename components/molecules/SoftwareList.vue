<template>
  <div class="responsive-list align-center">
    <icon-link
      v-for="(element, index) of software"
      :key="index"
      :name="element.name"
      :icon="element.icon"
      :author="element.author"
      :href="element.href"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  toRefs,
} from '@nuxtjs/composition-api'

interface Software {
  name: string
  icon: string
  author?: string
  href?: string
}

const defaultSoftware: Record<string, Software | undefined> = {
  photoshop: {
    name: 'Photoshop',
    icon: 'photoshop',
    author: 'Flatart',
    href: 'https://www.iconfinder.com/Flatart',
  },
  inDesign: {
    name: 'InDesign',
    icon: 'indesign',
    author: 'Flatart',
    href: 'https://www.iconfinder.com/Flatart',
  },
  illustrator: {
    name: 'Illustrator',
    icon: 'illustrator',
    author: 'Flatart',
    href: 'https://www.iconfinder.com/Flatart',
  },
  afterEffects: {
    name: 'After Effects',
    icon: 'after_effects',
    author: 'Flatart',
    href: 'https://www.iconfinder.com/Flatart',
  },
  premiere: {
    name: 'Premiere Pro',
    icon: 'premiere',
    author: 'PNG Store',
    href: 'https://www.iconfinder.com/Akhil284',
  },
  lightroom: {
    name: 'Lightroom',
    icon: 'lightroom',
    author: 'Flatart',
    href: 'https://www.iconfinder.com/Flatart',
  },
  maya: {
    name: 'Autodesk Maya',
    icon: 'maya',
    author: 'seeklogo',
    href: 'https://seeklogo.com/vector-logo/308077/autodesk-maya',
  },
  substancePainter: {
    name: 'Substance Painter',
    icon: 'substance_painter',
    author: 'seeklogo',
    href: 'https://seeklogo.com/vector-logo/373349/substance-by-adobe',
  },
  redshift: {
    name: 'Redshift',
    icon: 'redshift',
    author: 'seeklogo',
    href: 'https://seeklogo.com/vector-logo/399625/redshift',
  },
  pfTrack: {
    name: 'PFTrack',
    icon: 'pftrack',
    author: 'seeklogo',
    href: 'https://seeklogo.com/vector-logo/317002/pftrack',
  },
}

const additionalSoftware: Record<string, Software> = {
  animate: {
    name: 'Animate',
    icon: 'animate',
    author: 'Flatart',
    href: 'https://www.iconfinder.com/Flatart',
  },
  houdini: {
    name: 'Houdini',
    icon: 'houdini',
    author: 'SideFX',
    href: 'https://www.sidefx.com/company/press/',
  },
}

export default defineComponent({
  props: {
    filter: {
      type: Array as PropType<string[] | undefined>,
      default: undefined,
    },
  },
  setup(props) {
    const filterSoftware = function (filter: string[]): Software[] {
      return filter
        .map(
          (element: string) =>
            additionalSoftware[element] ?? defaultSoftware[element]
        )
        .filter((element) => element !== undefined) as Software[]
    }
    const { filter } = toRefs(props)
    const software = computed(() =>
      filterSoftware(filter?.value ?? Object.keys(defaultSoftware))
    )
    return {
      software,
    }
  },
})
</script>

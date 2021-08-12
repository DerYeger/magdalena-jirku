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

export default defineComponent({
  props: {
    filter: {
      type: Array as PropType<string[] | undefined>,
      default: undefined,
    },
  },
  setup(props) {
    const { filter } = toRefs(props)
    const software = computed(() => {
      const filterValue = filter.value
      if (filterValue !== undefined) {
        return filterValue
          .map((element) => defaultSoftware[element])
          .filter((element) => element !== undefined)
      } else {
        return Object.values(defaultSoftware)
      }
    })
    return {
      software,
    }
  },
})
</script>

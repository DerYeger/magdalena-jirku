<template>
  <a
    rel="noopener"
    :href="href"
    target="_blank"
    class="svg-icon"
    :aria-label="title"
    style="margin: 6px"
  >
    <abbr :title="title">
      <img :src="require(`~/assets/images/icons/${icon}.svg`)" :alt="title" />
    </abbr>
  </a>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    author: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    href: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { name, author } = toRefs(props)
    const {
      app: { i18n },
    } = useContext()
    const title = computed(() =>
      author.value !== undefined
        ? `${name.value}. ${i18n.t('misc.icon-attribution', [author.value])}`
        : name.value
    )
    return {
      title,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../assets/style';

img {
  @extend .unselectable;

  width: 36px;
  height: 36px;
}
</style>

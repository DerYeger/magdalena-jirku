export function useHighlightColor(opacity = 1) {
  const route = useRoute()
  return computed(() => {
    if (route.path === `/`) {
      return `rgba(255, 0, 0, ${opacity})`
    } else if (route.path.startsWith(`/graphic-design`)) {
      return `rgba(0, 50, 255, ${opacity})`
    } else if (route.path.startsWith(`/motion-design`)) {
      return `rgba(46, 204, 113, ${opacity})`
    } else if (route.path.startsWith('/drawings')) {
      return `rgba(165, 55, 253, ${opacity})`
    }
    return `rgba(0, 0, 0, ${opacity})`
  })
}

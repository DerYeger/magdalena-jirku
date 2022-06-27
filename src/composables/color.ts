export function useHighlightColor() {
  const route = useRoute()
  return computed(() => {
    if (route.path === '/') {
      return 'rgba(255, 0, 0, 0.3)'
    } else if (route.path.startsWith('/graphic-design')) {
      return 'rgba(0, 50, 255, 0.3)'
    } else if (route.path.startsWith('/motion-design')) {
      return 'rgba(255, 255, 0, 0.3)'
    }
    return 'rgba(0, 0, 0, 0.3)'
  })
}

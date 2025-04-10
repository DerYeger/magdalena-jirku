export function getHighlightColor(path: string, opacity = 1) {
  if (path === `/`) {
    return `rgba(0, 50, 255, ${opacity})`
  } else if (path.startsWith(`/graphic-design`)) {
    return `rgba(7, 87, 152, ${opacity})`
  } else if (path.startsWith(`/motion-design`)) {
    return `rgba(46, 204, 113, ${opacity})`
  } else if (path.startsWith(`/photography`)) {
    return `rgba(74, 129, 50, ${opacity})`
  } else if (path.startsWith('/drawings')) {
    return `rgba(255, 168, 20, ${opacity})`
  }
  return `rgba(0, 0, 0, ${opacity})`
}

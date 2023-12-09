export {}

const videos = [
  ...document.querySelectorAll<HTMLVideoElement>('.video-gallery video'),
]
videos.forEach((video) =>
  video.addEventListener('mouseover', () => video.play()),
)
videos.forEach((video) =>
  video.addEventListener('mouseleave', () => video.pause()),
)

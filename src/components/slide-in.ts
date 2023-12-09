const slideIn = [...document.querySelectorAll('.slide-in')]

const observer = new IntersectionObserver(
  function (entries, slideInObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.add('slide-in-invisible')
        return
      }
      entry.target.classList.add('slide-in-visible')
      slideInObserver.unobserve(entry.target)
    })
  },
  { threshold: 0.2 },
)

slideIn.forEach((element) => observer.observe(element))

export {}

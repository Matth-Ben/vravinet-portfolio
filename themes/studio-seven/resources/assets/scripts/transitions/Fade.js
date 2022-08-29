import gsap from 'gsap'
import BaseTransition from './baseTransition'
import store from '../util/store'

export default class Fade extends BaseTransition {
  constructor(e) {
    super(e)
  }

  hideLoader() {
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onStart: () => {
          this.scrollToTop()
        },
        onComplete: () => {
          if (store.scrollEngine === 'locomotive-scroll') store.smoothScroll.update()

          this.resetScroll()
          resolve()
        }
      })

      tl.to(store.panel, {
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, 1)
    })
  }

  showLoader() {
    return new Promise((resolve) => {
      gsap.to(store.panel, {
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        onComplete: () => {
          resolve()
        }
      })
    })
  }
}

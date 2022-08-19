import Block from './Block'
import gsap from 'gsap'

export default class Gallery extends Block {
  onEnterCompleted() {
    super.onEnterCompleted()

    this.transform = 0
    this.oldTransform = 0
    this.oldValue = 0
    this.newValue = 0

    this.init()
  }

  getElems() {
    this.preview = this.el.querySelector('.b-gallery__preview')
    this.previewWrapper = this.preview.querySelector('.b-gallery__preview-wrapper')
  }

  init() {
    gsap.set(this.listWrapper, {
      y: 0 + 'px'
    })

    gsap.set(this.previewWrapper, {
      y: 0 + 'px'
    })
  }

  events() {
    // this.playButton && this.playButton.addEventListener('click', this.onPlayClick.bind(this))
    document.addEventListener('scroll', () => {
      this.newValue = window.pageYOffset
      if (this.oldValue < this.newValue) {
        this.oldTransform = this.transform
        this.transform -= 1
        this.scroll.bind(this)
      } else if (this.oldValue > this.newValue) {
        this.oldTransform = this.transform
        this.transform += 1
        this.scroll.bind(this)
      }
      this.oldValue = this.newValue
    })
  }

  scroll() {
    gsap.fromTo(this.previewWrapper, {
      y: this.oldTransform + 'px'
    }, {
      y: this.transform + 'px',
      duration: 0.6,
      ease: 'expo.out'
    })
  }
}

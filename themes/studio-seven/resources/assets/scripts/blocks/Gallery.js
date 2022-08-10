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
    this.list = this.el.querySelector('.b-gallery__list')
    this.listWrapper = this.list.querySelector('.b-gallery__list-wrapper')
    this.preview = this.el.querySelector('.b-gallery__preview')
    this.previewWrapper = this.preview.querySelector('.b-gallery__preview-wrapper')
    // this.poster = this.el.querySelector('.c-video__poster')
    // this.playButton = this.el.querySelector('.c-video__play')
  }

  init() {
    gsap.set(this.listWrapper, {
      yPercent: 0
    })

    gsap.set(this.previewWrapper, {
      yPercent: 0
    })
  }

  events() {
    // this.playButton && this.playButton.addEventListener('click', this.onPlayClick.bind(this))
    document.addEventListener('scroll', () => {
      this.newValue = window.pageYOffset
      if (this.oldValue < this.newValue) {
        this.oldTransform = this.transform
        this.transform -= 0.2
        this.scroll.bind(this)
      } else if (this.oldValue > this.newValue) {
        this.oldTransform = this.transform
        this.transform += 0.2
        this.scroll.bind(this)
      }
      this.oldValue = this.newValue
    })
  }

  scroll() {
    gsap.fromTo(this.listWrapper, {
      yPercent: this.oldTransform
    }, {
      yPercent: this.transform,
      duration: 0.6,
      ease: 'expo.out',
    })
  }
}

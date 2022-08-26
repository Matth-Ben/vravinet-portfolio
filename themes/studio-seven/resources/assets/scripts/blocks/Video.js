import Block from './Block'

export default class Video extends Block {
  onEnterCompleted() {
    this.observer()
  }

  getElems() {
    this.player = this.el.querySelector('.f-media__video')
    this.poster = this.el.querySelector('.c-video__poster')
    this.playButton = this.el.querySelector('.c-video__play')
  }

  events() {
    this.playButton && this.playButton.addEventListener('click', () => {
      this.onYouTubeIframeAPIReady(this.playButton.getAttribute('data-video'))
      this.playButton.classList.add('display-none')
      this.poster && this.poster.classList.add('a')
    })
  }

  onYouTubeIframeAPIReady(id) {
    this.player = new YT.Player(id, {
      height: '360',
      width: '640',
      playerVars: {
        'hd': 1,
        'autoplay': 1,
        'loop': 1,
        'background': 0,
        'mute': 1,
        'autopause': 0,
        'disablekb': 1,
        'modestbranding': 1,
        'showinfo': 0,
        'fs': 1,
        'iv_load_policy': 3,
        'controls': 1
      },
      videoId: id
    })
  }

  closeVideo() {
    const id = this.playButton.getAttribute('data-video')
    const video = this.el.querySelector('.c-video__video')

    if (video.tagName === 'IFRAME') {
      const iframe = document.querySelector('#' + id)
      const newItem = document.createElement('div')

      newItem.setAttribute('id', id)
      newItem.setAttribute('class', 'c-video__video')

      video.parentNode.replaceChild(newItem, iframe)
      this.playButton.classList.remove('a')
    }
  }

  observer() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.closeVideo()
          this.poster && this.poster.classList.remove('a')
        }
      });
    }, { threshold: 0.05 })

    observer.observe(this.player);
  }
}

import Block from './Block'

export default class ListProject extends Block {
  onEnterCompleted() {
    super.onEnterCompleted()
  }

  getElems() {
    this.scrollContainer = this.el
  }

  events() {
    this.scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      this.scrollContainer.scrollLeft += evt.deltaY;
    })
  }
}

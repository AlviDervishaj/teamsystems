class Carousel extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<h2>Carousel</h2>`
  }
}
customElements.define('carousel-component', Carousel);



const currentYear = new Date().getUTCFullYear();

// SCROLL TO TOP
function handleScrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <p>&copy; ${currentYear} Alvi Dervishaj. All rights reserved.</p>
    </footer>
`;
  }
}

customElements.define('footer-component', Footer);


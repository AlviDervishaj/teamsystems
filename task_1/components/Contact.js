class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<section id="contact" class="contact">
  <h2 class="header_name">Contact</h2>
  <p class="contact_description">Let me know how I can help you.</p>
  <div class="links">
    <a href="mailto:alvidervishaj9@gmail.com" class="contact_link">
      <img src="./images/envelope.png" alt="email" class="contact_link_image"/>
      alvidervishaj9@gmail.com
    </a>
    <a href="https://github.com/AlviDervishaj" class="contact_link">
      <img src="./images/github.png" alt="Github" class="contact_link_image"/>
      AlviDervishaj
    </a>
    <a href="https://www.linkedin.com/in/alviii/" class="contact_link">
      <img src="./images/linkedin.png" alt="LinkedIn" class="contact_link_image"/>
      Alvi Dervishaj
    </a>
  </div>
</section>
`;
  }
}

customElements.define('contact-component', Contact);

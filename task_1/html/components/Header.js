class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<img loading="lazy" src="./images/coding-bg.jpg" alt="Coding Background" class="coding_background"/>
<section class="cta" id="about">
  <h1 class="header_name">Alvi Dervishaj</h1>
  <p class="description">Junior Front-end developer. Mainly focused on React, NextJs.</p>
  <div class="button_group">
    <a href="#projects" class="view_work ease-in-out">
      <p class="button_text">
        View my Work
      </p>
    </a>
    <a href="./events.html" class="reserve_meeting ease-in-out">
      <p class="button_text">
        Reserve a meeting
      </p>
    </a>
  </div>
</section>
`
  }
}

customElements.define('header-component', Header);

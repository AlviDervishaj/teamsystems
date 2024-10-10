class Skills extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<section class="skills" id="skills">
  <h2 class="header_name">Skills</h2>
  <ul class="languages">
    <li class="react_lang">
      <p>React</p>
      <div class="progress_parent">
        <div class="progress" style="width: 70%"></div>
      </div>
    </li>
    <li class="nextjs_lang">
      <p>NextJs</p>
      <div class="progress_parent">
        <div class="progress" style="width: 60%"></div>
      </div>
    </li>
    <li class="typescript_lang">
      <p>Typescript</p>
      <div class="progress_parent">
        <div class="progress" style="width: 60%"></div>
      </div>
    </li>
  </ul>
</section>
`;
  }
}


customElements.define('skills-component', Skills);


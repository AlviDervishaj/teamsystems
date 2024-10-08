let isNavigationOpened = false;

function handleNavigationToggle() {
  isNavigationOpened = !isNavigationOpened;
  const navigation = document.querySelector("#openMe");
  const menu_toggle = document.querySelector("#menu_toggle");
  const close_menu = document.querySelector("#close_menu");
  const body = document.body;
  if (!navigation) return;
  if (isNavigationOpened) {
    navigation.style.display = "flex";
    body.style.overflowY = "hidden";
    if (!menu_toggle) return;
    close_menu.style.display = "block";
    menu_toggle.style.display = "none";
    return;
  }
  navigation.style.display = "none";
  body.style.overflowY = "auto";
  close_menu.style.display = "none";
  menu_toggle.style.display = "block";
  return;
}

class Navigation extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<nav class="navigation">
  <a href="./index.html">
    <img loading="lazy" width="20" height="20" src="./images/alvi-logo/svg/logo-no-background.svg" class="navigation_image" alt="Alvi's Logo" />
  </a>
  <button class="navigation_toggle" onClick={handleNavigationToggle()}>
    <img id="menu_toggle"src="./images/menu.png" alt="Burger Menu" />
    <img style="display: none" id="close_menu" src="./images/close.png" alt="Close Modal"  width="25" height="25"/>
  </button>
  <ul class="navigation_links">
    <li class="navigation_link ease-in-out">
      <a href="./index.html">Home</a>
    </li>
    <li class="navigation_link ease-in-out">
      <a href="#about">About</a>
    </li>
    <li class="navigation_link ease-in-out">
      <a href="#projects">Projects</a>
    </li>
    <li class="navigation_link ease-in-out">
      <a href="#skills">Skills</a>
    </li>
    <li class="navigation_link ease-in-out">
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>
<div id="openMe" class="ease-in-out">
  <ul>
    <li class="navigation_link ease-in-out">
      <a href="#">Home</a>
    </li>
    <li class="navigation_link ease-in-out">
      <a href="#about">About</a>
    </li>
    <li class="navigation_link ease-in-out">
      <a href="#projects">Projects</a>
    </li>
    <li class="navigation_link ease-in-out">
      <a href="#skills">Skills</a>
    </li>
    <li class="navigation_link ease-in-out">
      <a href="#contact">Contact</a>
    </li>
  </ul>
</div>
`;
  }
}

customElements.define('navigation-component', Navigation);

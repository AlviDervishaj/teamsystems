let isOpened = false;
function handleNavigationToggle() {
  isOpened = !isOpened;
  const navigation = document.querySelector("#openMe");
  const menu_toggle = document.querySelector("#menu_toggle");
  const body = document.body;
  if (!navigation) return;
  if (isOpened) {
    navigation.style.display = "flex";
    body.style.overflowY = "hidden";
    if (!menu_toggle) return;
    menu_toggle.src = "./images/close.png";
    return;
  }
  navigation.style.display = "none";
  body.style.overflowY = "auto";
  menu_toggle.src = "./images/menu.png";
  return;
}


class Navigation extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<nav class="navigation">
  <a href="#">
    <img loading="lazy" src="./images/alvi-logo/svg/logo-no-background.svg" class="navigation_image" alt="Alvi's Logo" />
  </a>
  <button class="navigation_toggle" onClick={handleNavigationToggle()}>
    <img  id="menu_toggle"src="./images/menu.png" alt="Burger Menu" />
  </button>
  <ul class="navigation_links">
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

class Projects extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<div class="projects">
  <section class="project">
    <img class="project_image" src="./images/aci-logo/aci-logo-dark-demo.jpg" loading="lazy" alt="ACI SH.A Image" />
    <a class="project_title" href="https://acilub.vercel.app/">ACI SH.A</a>
    <p class="project_description">ACI SH.A është themeluar në vitin 2003, si një kompani e shitjes dhe shpërndarjes së vajrave lubrifikantë. ekipi themelues ishte i specializuar në tregun produkteve te naftes me një ekperiencë të gjatë në kompani të tjera. që në fillimet e saj, kompania jonë ishte e përqendruar në shpërndarjen e produkteve PETROGAL nën emrin e markës GALP, duke pasur ekskluzivitet në territorin shqiptar për këto produkte. ne gjithmonë përpiqemi që të ruajmë një bashkëpunim të mirë me klientët tanë si edhe të ofrojmë një shërbim të shkëlqyer dhe me vlerë të kënaqshme. cilësia e produkteve që ofron kompania jonë është e garantuar nga galp përmes programit të partneritetit midis dy kompanive.</p>
    <div class="button_group">
      <a class="project_repo" href="https://github.com/AlviDervishaj/ACI.SH.A">Shiko Repon</a>
    </div>
  </section>
  <section class="project">
    <img class="project_image" src="./images/albanianslate-logo/svg/logo-no-background.svg" loading="lazy" alt="Albanianslate Image" />
    <a class="project_title" href="https://github.com/AlviDervishaj/Albanianslate">Albanianslate</a>
    <p class="project_description">
      Albanianslate është një aplikacion i thjeshtë dhe efektiv që lejon përdoruesit të shkarkojnë videot e tyre të preferuara nga YouTube dhe të përkthejnë titrat e tyre në shqip. Thjesht futni URL-në e videos dhe Albanianslate do t'a shkarkojë dhe përkthejë titrat për ju.
    <div class="button_group">
      <a class="project_repo" href="https://github.com/AlviDervishaj/Albanianslate">Shiko Repon</a>
    </div>
  </section>
  <section class="project">
    <img class="project_image" src="./images/gymify-logo/svg/logo-no-background.svg" loading="lazy" alt="Gymify Image" />
    <a class="project_title" href="https://github.com/Gymifyy/gymify">Gymify</a>
    <p class="project_description">
      Gymify është një aplikacion gjithëpërfshirës i krijuar për të racionalizuar operacionet e zinxhirëve të palestrave. Nga menaxhimi i anëtarësive dhe rezervimeve deri te monitorimi i pjesëmarrjes dhe gjenerimi i raporteve, Gymify ofron një zgjidhje të vetme për pronarët dhe menaxherët e palestrave. Me interfacen e tij përdorues-miqësor dhe veçoritë e fuqishme, Gymify ju ndihmon të optimizoni performancën e palestërve tuaj dhe të ofroni përvoja të jashtëzakonshme për klientët </p>
    <div class="button_group">
      <a class="project_repo" href="https://github.com/Gymifyy/gymify">Shiko Repon</a>
    </div>
  </section>
  <section class="project">
    <img class="project_image streched" src="./images/rite-logo/new-logo.webp" loading="lazy" alt="Rite Electric" />
    <a class="project_title" href="https://www.riteelectricllc.com/">Rite Electric</a>
    <p class="project_description">Rite Electric LLC fokusohet në ndërtimin dhe mirëmbajtjen elektrike. Disa nga shërbimet e tyre përfshijnë zgjidhjen e problemeve dhe riparimin e të gjitha instalimeve elektrike të jashtme të brendshme, instalimet e komponentëve për rimodelime dhe shtesa si ndërprerësit e qarkut të defektit në tokë (GFCI), instalime të tensionit të lartë dhe riparime elektrike parandaluese.</p>
    <div class="button_group">
      <a class="project_repo" href="https://github.com/AlviDervishaj/Rite-Electric">Shiko Repon</a>
    </div>
  </section>
  <section class="project">
    <img class="project_image" src="./images/nice-blue-background.png" loading="lazy" alt="Config" />
    <a class="project_title" href="https://github.com/AlviDervishaj/config">Config</a>
    <p class="project_description">Kjo repo eshte nje config i Arch Linux, Tmux, Neovim, Picom, Rofi, Polybar, Starship, Lazygit, i3, wezterm dhe alacritty per te maksimizuar produktivitetin e nje developer-i</p>
    <div class="button_group">
      <a class="project_repo" href="https://github.com/AlviDervishaj/config">Shiko Repon</a>
    </div>
  </section>
  <section class="project">
    <img class="project_image" src="./images/go-lsp-logo/go_lsp.png" loading="lazy" alt="GO LSP" />
    <a class="project_title" href="https://github.com/AlviDervishaj/LSP_GO">GO Language Server Protocol</a>
    <p class="project_description">LSP_GO është një librari e shkruar në Go, e dizajnuar për të lehtësuar krijimin e LSP (Language Server Protocols) që mund të komunikojnë ekeftivisht me Neovim ne kohe reale. Kjo librari mundeson krijimin e nje framework-u robust duke na dhene mundesine e krijimit te LSP-ve per gjuhe te ndryshme dhe perdorime te ndryshme.</p>
    <div class="button_group">
      <a class="project_repo" href="https://github.com/AlviDervishaj/LSP_GO">Shiko Repon</a>
    </div>
  </section>
</div>
`
  }
}

class Skills extends HTMLElement {
  constructor() {
    super();
  }
  /*
  <div class="skills_header">
    <img src="./images/code.png" alt="Code Icon" />
    <p>Languages</p>
  </div>
   * */

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

customElements.define('navigation-component', Navigation);
customElements.define('projects-component', Projects);
customElements.define('skills-component', Skills);
customElements.define('contact-component', Contact);

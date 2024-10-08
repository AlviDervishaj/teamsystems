function showModal(index) {
  // hide scroll
  const body = document.body;
  body.style.overflowY = "hidden";
  // parse index
  const parsedIndex = parseInt(index);
  // get all projects
  const elements = document.querySelectorAll("[data-project-index]").values().toArray();
  const project = elements.map((element, index) => index === parsedIndex ? element : null).filter(e => e)[0];
  if (!project) return;
  // hide detaje button
  const dialog_content = document.getElementById("dialog_content");
  dialog_content.innerHTML = project.innerHTML;
  const _button_group = dialog_content.querySelector(".button_group");
  if (_button_group) {
    _button_group.removeChild(_button_group.querySelector(".project_detailed"));
  };
  document.querySelector("dialog").showModal();
  return;
}

class Projects extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<div class="projects" id="parent_projects">
  <section data-project-index="0" class="project" data-categories="web_dev">
    <img class="project_image" src="./images/aci-logo/aci-logo-dark-demo.jpg" loading="lazy" alt="ACI SH.A Image" />
    <a class="project_title" href="https://acilub.vercel.app/">ACI SH.A</a>
    <p class="project_description">ACI SH.A është themeluar në vitin 2003, si një kompani e shitjes dhe shpërndarjes së vajrave lubrifikantë. ekipi themelues ishte i specializuar në tregun produkteve te naftes me një ekperiencë të gjatë në kompani të tjera. që në fillimet e saj, kompania jonë ishte e përqendruar në shpërndarjen e produkteve PETROGAL nën emrin e markës GALP, duke pasur ekskluzivitet në territorin shqiptar për këto produkte. ne gjithmonë përpiqemi që të ruajmë një bashkëpunim të mirë me klientët tanë si edhe të ofrojmë një shërbim të shkëlqyer dhe me vlerë të kënaqshme. cilësia e produkteve që ofron kompania jonë është e garantuar nga galp përmes programit të partneritetit midis dy kompanive.</p>
    <div class="button_group">
      <button class="project_detailed" onClick={showModal("0")}>Detaje</button>
      <a class="project_repo ease-in-out" href="https://github.com/AlviDervishaj/ACI.SH.A">Shiko Repon</a>
    </div>
  </section>
  <section data-project-index="1" class="project" data-categories="web_dev">
    <img class="project_image" src="./images/albanianslate-logo/svg/logo-no-background.svg" loading="lazy" alt="Albanianslate Image" />
    <a class="project_title" href="https://github.com/AlviDervishaj/Albanianslate">Albanianslate</a>
    <p class="project_description">
      Albanianslate është një aplikacion i thjeshtë dhe efektiv që lejon përdoruesit të shkarkojnë videot e tyre të preferuara nga YouTube dhe të përkthejnë titrat e tyre në shqip. Thjesht futni URL-në e videos dhe Albanianslate do t'a shkarkojë dhe përkthejë titrat për ju.
    <div class="button_group">
      <button class="project_detailed" onClick={showModal("1")}>Detaje</button>
      <a class="project_repo" href="https://github.com/AlviDervishaj/Albanianslate">Shiko Repon</a>
    </div>
  </section>
  <section  data-project-index="2" class="project" data-categories="web_dev">
    <img class="project_image" src="./images/gymify-logo/svg/logo-no-background.svg" loading="lazy" alt="Gymify Image" />
    <a class="project_title" href="https://github.com/Gymifyy/gymify">Gymify</a>
    <p class="project_description">
      Gymify është një aplikacion gjithëpërfshirës i krijuar për të racionalizuar operacionet e zinxhirëve të palestrave. Nga menaxhimi i anëtarësive dhe rezervimeve deri te monitorimi i pjesëmarrjes dhe gjenerimi i raporteve, Gymify ofron një zgjidhje të vetme për pronarët dhe menaxherët e palestrave. Me interfacen e tij përdorues-miqësor dhe veçoritë e fuqishme, Gymify ju ndihmon të optimizoni performancën e palestërve tuaj dhe të ofroni përvoja të jashtëzakonshme për klientët </p>
    <div class="button_group">
      <button class="project_detailed" onClick={showModal("2")}>Detaje</button>
      <a class="project_repo" href="https://github.com/Gymifyy/gymify">Shiko Repon</a>
    </div>
  </section>
  <section data-project-index="3" class="project" data-categories="web_dev">
    <img class="project_image streched" src="./images/rite-logo/new-logo.webp" loading="lazy" alt="Rite Electric" />
    <a class="project_title" href="https://www.riteelectricllc.com/">Rite Electric</a>
    <p class="project_description">Rite Electric LLC fokusohet në ndërtimin dhe mirëmbajtjen elektrike. Disa nga shërbimet e tyre përfshijnë zgjidhjen e problemeve dhe riparimin e të gjitha instalimeve elektrike të jashtme të brendshme, instalimet e komponentëve për rimodelime dhe shtesa si ndërprerësit e qarkut të defektit në tokë (GFCI), instalime të tensionit të lartë dhe riparime elektrike parandaluese.</p>
    <div class="button_group">
      <button class="project_detailed" onClick={showModal("3")}>Detaje</button>
      <a class="project_repo" href="https://github.com/AlviDervishaj/Rite-Electric">Shiko Repon</a>
    </div>
  </section>
  <section data-project-index="4"  class="project" data-categories="terminal">
    <img class="project_image" src="./images/nice-blue-background.png" loading="lazy" alt="Config" />
    <a class="project_title" href="https://github.com/AlviDervishaj/config">Config</a>
    <p class="project_description">Kjo repo eshte nje config i Arch Linux, Tmux, Neovim, Picom, Rofi, Polybar, Starship, Lazygit, i3, wezterm dhe alacritty per te maksimizuar produktivitetin e nje developer-i</p>
    <div class="button_group">
      <button class="project_detailed" onClick={showModal("4")}>Detaje</button>
      <a class="project_repo" href="https://github.com/AlviDervishaj/config">Shiko Repon</a>
    </div>
  </section>
  <section  data-project-index="5" class="project" data-categories="terminal">
    <img class="project_image" src="./images/go-lsp-logo/go_lsp.png" loading="lazy" alt="GO LSP" />
    <a class="project_title" href="https://github.com/AlviDervishaj/LSP_GO">GO Language Server Protocol</a>
    <p class="project_description">LSP_GO është një librari e shkruar në Go, e dizajnuar për të lehtësuar krijimin e LSP (Language Server Protocols) që mund të komunikojnë ekeftivisht me Neovim ne kohe reale. Kjo librari mundeson krijimin e nje framework-u robust duke na dhene mundesine e krijimit te LSP-ve per gjuhe te ndryshme dhe perdorime te ndryshme.</p>
    <div class="button_group">
      <button class="project_detailed" onClick={showModal("5")}>Detaje</button>
      <a class="project_repo" href="https://github.com/AlviDervishaj/LSP_GO">Shiko Repon</a>
    </div>
  </section>
</div>
`
  }
}
customElements.define('projects-component', Projects);


function closeModal() {
  const body = document.body;
  body.style.overflowY = "auto";
  const dialog_content = document.getElementById("dialog_content");
  dialog_content.replaceChildren();
  document.querySelector("dialog").close();
  return;
}

class Modal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<dialog close>
  <div class="dialog">
    <button onClick={closeModal()} id="close_dialog_button" autofocus>
      <img src="./images/close.png" alt="Close Modal"  width="20" height="20"/>
    </button>
    <div id="dialog_content"></div>
  </div>
</dialog>
`;
  }
}

customElements.define('modal-component', Modal);

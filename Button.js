class Button extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
    <style>
      button {
        height: 40px;
        width: 120px;
        border-radius: 30px; 
        border: none;
        color:#869775;
      }
    
    </style>
    
    <button>
      <slot></slot>
    </button>
       `;

    const variant = this.getAttribute("variant");
    if (variant) {
      shadow.querySelector("button").style.backgroundColor = variant;
    }
  }
}
customElements.define("routine-button", Button);

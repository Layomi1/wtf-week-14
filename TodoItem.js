class TodoList extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const isChecked = this.getAttribute("checked");
    const isLastChecked = this.hasAttribute("last-checked");

    shadow.innerHTML = `
    <style>
    label {
      color: #C6C6C6;
        display: block;
        font-size: 14px;
       
    }
    
    input[type="checkbox"] {
      outline: none;
      border: 2px solid green;
      border-radius: 50% !important;
      color: red;
      width: 15px;
      height: 15px;

    }
    
    input[type="checkbox"]:checked {
      background-color: green !important;
    }

    </style>

      <label>
        <input type="checkbox" $(isChecked ? 'checked' : '') />
        <slot></slot>
      </label>
    
    `;

    if (isLastChecked) {
      const input = shadow.querySelector('input[type="checkbox"]');
      input.checked = true;
      input.disabled = true;
    }
  }
}
customElements.define("todo-list", TodoList);

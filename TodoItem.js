class TodoList extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    this.shadow.innerHTML = `
    <style>
    label {
      
      display: flex;
      font-size: 14px;
      position: relative;
      gap: 8px;
    }
     slot{
      color: #C6C6C6;
      cursor:pointer;
     }

    input[type="checkbox"] {
      cursor:pointer;
      position:absolute;
      opacity:0;
    }
    
    label slot::before {
      content:'';
      width:1em;
      height:1em;
      display: flex;
      color:black;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid #B5EA81;
      
    }

    label slot:hover::before,
    input[type='checkbox']:hover + label slot::before{
      background-color: green;
     }

     label input[type='checkbox']:checked + label slot::before {
      content:'\\2714';
      color: white;
      background-color: #B5EA81;
      display: flex;
      align-items:center;
      justify-content:center;
    
     }
     
    </style>

      <label>
        <input type="checkbox" />
        <slot></slot>
      </label>
    
    `;
  }
}
customElements.define("todo-list", TodoList);

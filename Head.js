class Head extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <style>
    @font-face {
      font-family: 'Poppins'; /* Name your custom font */
      src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap')
      font-weight: normal;
      font-style: normal;
    }

    .header-area {
      font-family: 'Poppins', san-serif;
    }
    .head {
      color: #B3B3EF;
      margin-bottom: 0;
      padding: 0;
      display : flex;
      align-items : center;
      gap:5px;
      margin-bottom: 10px;
    }

    .head p {
      font-size: 20px;
      margin-left : 10px;
    }

    .mid-top {
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -40px;
    }

    .mid-top p {
      font-size : 30px;
      font-weight: lighter;
      color: #737373;
      font-family: 'Poppins', san-serif;
    }
     .mid-top span{
      font-size: 24px;
      width: 40px;
      height: 40px;
      border: 1px solid #B3B3EF;
      border-radius: 50%;
      display: grid;
      align-items: center;
      justify-content: center;
      color: #B3B3EF;
    }

    .bar {
      width: 100%;
      height: 15px;
      border: 1px solid #D5D5F6;
      border-radius: 15px;
      margin-bottom: 10px;
      
    }
        
    .level {
      background-color: #B3B3EF;
      width:33%;
      height:15px;
      border-radius:15px;
    }

     #description{
      margin: 0 auto;
      text-align:center;
      font-size: 20px;
      color: #B3B3EF;
      
     }
    </style>
    <div class ="header-area">
    <div class='head'>
      <slot>
        <i class="fas fa-arrow-left"></i>
        <p>Back to Lists</p>
      </slot>
    </div>

    <div class ="mid-top">
      <p>TODAY</p>
      <span>+</span>
    </div>

    <div class="bar">
      <div class="level"></div>
    </div>
    <p id="description">33% complete</p>
    </div>
    
    `;
  }
}

customElements.define("app-top", Head);

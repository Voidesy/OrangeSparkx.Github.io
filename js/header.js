const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
    sitename{
      color: darkgoldenrod;
}
  </style>
  <header><div class="sitename" style="color: darkgoldenrod; margin: 15px; font-size:30px">Sparkx Calculators</div>
    <nav>
      <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/calcs/standard.html">Standard(not made)</a></li>
        <li><a href="/calcs/circumference-calc.html">Circumfrence</a></li>
        <li><a href="#">Not made</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
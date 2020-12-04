//html template
const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>
            #side-menu {
                margin: 0;
                padding: 0;
                background-color: #f1f1f1;
                width:400px;
            }

            #side-menu li{
                list-style: none;
                height: 40px;
                line-height: 40px;
                padding: 5px;
                border-bottom: 1px solid blue ;
            }

            #side-menu a{
                text-decoration: none;
                color: #212121; 
            }
    </style>

    <ul id="side-menu">
        <li><a href="./index.html">Index</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./contact-us.html">Contact us</a></li>
        <li><a href="./contact-us.html">Help me</a></li>
        <li><a href="./contact-us.html">Our forum</a></li>
        <li><a href="./contact-us.html">Blogs</a></li>
        <li><a href="./contact-us.html">Template</a></li>
        <li><a href="./contact-us.html">Account</a></li>
    </ul>
`;

//shadow DOM
export default class SideMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('side-menu', SideMenu);
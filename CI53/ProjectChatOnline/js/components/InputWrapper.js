const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="../../css/input-wrapper.css"> 
    <div id="input-wrapper">
         <label id="input-label" for= "#input-main">Register name</label>
         <input id="input-main" type= "text" />
         <div id="input-error">Input name!!</div>
    </div>
`;


//shadow DOM
export default class InputWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$label = this.shadowRoot.getElementById('input-label');
        this.$main = this.shadowRoot.getElementById('input-main');
        this.$error = this.shadowRoot.getElementById('input-error');
    }


    static get observedAttributes() {
        return ['label', 'type', 'error', 'value'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case 'label':
                this.$label.innerHTML = newVal;
                break;
            case 'type':
                this.$main.type = newVal;
                break;
            case 'error':
                this.$error.innerHTML = newVal;
                break;
            case 'value':
                this.$main.value = newVal;
                break;
        }
    }

    value() {
        //$main la o input
        return this.$main.value;
    }


    error(message) {
        this.setAttribute('error', message);
    }

    static validate($inputWrapper, condition, message) {
        let value = $inputWrapper.value();
        if (condition(value)) {
            $inputWrapper.error('');
            return true;
        } else {
            $inputWrapper.error(message);
            return false;
        }
    }
}

window.customElements.define('input-wrapper', InputWrapper);
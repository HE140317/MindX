import InputWrapper from "./InputWrapper.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="../../css/login-form.css">
    <form id="login-form" action="">
        <h2>Dang nhap tai khoan</h2>
        <input-wrapper id="email" label="Email" type="email" error="" value=""></input-wrapper>
        <input-wrapper id="password" label="Pass" type="password" error="" value=""></input-wrapper>
        <button id="login-btn">Login</button>

        <div id="to-register">
             U didn't have account?  <b><a href="#!/sign-up">Register</a></b>
        </div>
    </form>
`;

export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$form = this.shadowRoot.getElementById('login-form');

        this.$email = this.shadowRoot.getElementById('email');
        this.$password = this.shadowRoot.getElementById('password');
    }

    connectedCallback() {
        this.$form.onsubmit = async(event) => {
            event.preventDefault();
            let email = this.$email.value();
            let password = this.$password.value();
            let isPassed =
                InputWrapper.validate(this.$email, (value) => value != '', "Nhap vao email") &
                InputWrapper.validate(this.$password, (value) => value != '', "Nhap vao password");

            if (isPassed) {
                let result = await firebase.firestore()
                    .collection('users').where('email', '==', email)
                    .where('password', '==', CryptoJS.MD5(password).toString())
                    .get();
                if (result.empty) {
                    alert("Email or password is incorrect");
                } else {
                    router.navigate('/chat');
                }
            }
        }
    }
}

window.customElements.define('login-form', LoginForm);
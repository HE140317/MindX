import InputWrapper from "./InputWrapper.js";
import { validateEmail } from "../utils.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="../../css/register-form.css">
    <form id="register-form" action="">
        <h2>Dang ki tai khoan</h2>
        <input-wrapper id="email" label="Email" type="email" error="" value=""></input-wrapper>
        <input-wrapper id="name" label="Ten dang ki" type="text" error="" value=""></input-wrapper>
        <input-wrapper id="password" label="Pass" type="password" error="" value=""></input-wrapper>
        <input-wrapper id="password-confirmation" label="Xac nhan pass" type="password" error="" value=""></input-wrapper>
        <button id="register-btn">Register</button>

        <div id="to-login">
             U already have account?  <b><a href="#!/sign-in">Log in</a></b>
        </div>
    </form>
`;

export default class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$form = this.shadowRoot.getElementById('register-form');
        this.$email = this.shadowRoot.getElementById('email');
        this.$name = this.shadowRoot.getElementById('name');
        this.$password = this.shadowRoot.getElementById('password');
        this.$passwordconfirmation = this.shadowRoot.getElementById('password-confirmation');
    }

    connectedCallback() {
        this.$form.onsubmit = async(event) => {
            event.preventDefault();
            let email = this.$email.value();
            let name = this.$name.value();
            let password = this.$password.value();
            let passwordconfirmation = this.$passwordconfirmation.value();
            let isPassed =

                (InputWrapper.validate(this.$email, (value) => value != '', "Nhap vao email") &&
                    InputWrapper.validate(this.$email, (value) => validateEmail(value), "Email ko hop le")) &
                InputWrapper.validate(this.$name, (value) => value != '', "Nhap vao name") &

                InputWrapper.validate(this.$password, (value) => value != '', "Nhap vao password") &

                (InputWrapper.validate(this.$passwordconfirmation, (value) => value != '', "Nhap vao passwordconfirmation") &&
                    InputWrapper.validate(this.$passwordconfirmation, (value) => value == password, "Pass incorrect"));


            if (isPassed) {
                let result = await firebase.firestore().collection('users')
                    .where('email', '==', email).get();
                console.log(result);

                if (result.empty) {
                    firebase.firestore().collection('users').add({
                        name: name,
                        email: email,
                        password: CryptoJS.MD5(password).toString()
                    });
                } else {
                    alert('Duplicate email');
                }
            }



            // console.log(this.$email.value());
        }
    }
}

window.customElements.define('register-form', RegisterForm);
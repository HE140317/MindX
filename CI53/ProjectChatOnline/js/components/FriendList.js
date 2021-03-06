import { getDataFromDoc } from "../utils.js";
import { getDataFromDocs } from "../utils.js";
import FriendContainer from "./FriendContainer.js";
import InputWrapper from "./InputWrapper.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

     <style>
         *{
             background-color: #f1f1f2;
         }
         #title{
             padding: 15px 0px;
             font-family: Arial;
             font-size: 20px;
             font-weight: bold;
             text-align: center;
             border-bottom: 1px solid #cccccc;
         }

         #search-friend-form{
             padding: 15px;
             display: flex;
             justify-content: space-between;
             align-items: center;
             border-bottom: 1px solid #cccccc;
         }
         #search-friend-btn{
             border: 1px solid #1995ad;
             background-color: #1995ad;
             height: 40px;
             width: 100px;
             color: #fff;
             border-radius: 5px;
         }
         #search-friend-keyword{
             width: calc(100% - 100px);
         }
     </style>
    <div id="title">Friends
    </div>
    <form id="search-friend-form">
        <input-wrapper id="search-friend-keyword" label="" type ="text" error=""></input-wrapper>
        <button id="search-friend-btn">Find</button>
    </form>
    
    <div id="friend-list"></div>
`;

export default class FriendList extends HTMLElement {
    constructor(data) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$friendList = this.shadowRoot.getElementById('friend-list');
        this.$searchFriendKeyword = this.shadowRoot.getElementById('search-friend-keyword');
        this.$searchFriendForm = this.shadowRoot.getElementById('search-friend-form');

        this.setAttribute('data', JSON.stringify(data));
    }

    connectedCallback() {
        this.$searchFriendForm.onsubmit = async(event) => {
            event.preventDefault();

            let keyword = this.$searchFriendKeyword.value();

            let isPassed = InputWrapper.validate(this.$searchFriendKeyword, (value) => value != '', "Nhap vao ten ban be");

            if (isPassed) {
                let result = await firebase.firestore().collection('users')
                    .where('name', '==', keyword).get();
                // console.log(result);
                // console.log(result.docs[0]);
                // console.log(getDataFromDoc(result.docs[0]));
                console.log(getDataFromDocs(result.docs));
            }
        }
    }

    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback(attriName, oldVal, newVal) {
        if (attriName == 'data') {
            let friendsData = JSON.parse(newVal);
            for (let friendData of friendsData) {
                let $friendContainer = new FriendContainer(friendData.name);
                this.$friendList.appendChild($friendContainer);
            }
        }
    }
}


window.customElements.define('friend-list', FriendList);
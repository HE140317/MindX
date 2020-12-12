import ItemContainer from "./ItemContainerComponent.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `

    <style>
        #item-list{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            
        }

        item-container{
            margin: 10px;
        }
    </style>

    <div id = "item-list">
    <item-container image="https://media-cdn.tripadvisor.com/media/photo-s/12/45/4d/03/anhr-tren-d-i-nhin-v.jpg" price="100" description="jahaha" address="Hanoi"></item-container>

    <item-container image="https://cdn1.dotesports.com/wp-content/uploads/2019/10/15202826/b8fbf5b3ce1fca11a1a741ddc49016d7.jpg"
        price="20" description="nooooo" address="nowhere"></item-container>

    <item-container image="https://media-cdn.tripadvisor.com/media/photo-s/12/45/4d/03/anhr-tren-d-i-nhin-v.jpg" price="2000" description="nope" address="nowhere"></item-container>
    </div>
`;

export default class ItemList extends HTMLElement {
    constructor(data) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$itemList = this.shadowRoot.getElementById('item-list');

        this.setAttribute('data', JSON.stringify(data));
    }

    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(JSON.parse(newVal));

        if (attrName == 'data') {
            let data = JSON.parse(newVal);
            for (let item of data) {
                let $itemContainer = new ItemContainer(item.image, item.price, item.description, item.address);
                // $itemContainer.setAttribute('image', item.image);
                // $itemContainer.setAttribute('description', item.description);
                // $itemContainer.setAttribute('price', item.price);
                // $itemContainer.setAttribute('address', item.address);
                this.$itemList.appendChild($itemContainer);
            }
        }
    }
}

window.customElements.define('item-list', ItemList);
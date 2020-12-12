import SideMenu from "./SideMenuComponent.js";
import ItemContainer from "./ItemContainerComponent.js";
import ItemList from "./ItemListComponent.js";
import data from "./fakeData.js";
let $root = document.getElementById('root');


// console.log(data);
// console.log("here is my data " + JSON.stringify(data));
// console.log("here is my data " + data);



let $itemList = new ItemList(data);
// $itemList.setAttribute('data', JSON.stringify(data));
$root.appendChild($itemList);


//object, array -> string : JSON.stringify(object/array)

// string(json) -> object, array : JSON.parse(string)
export default class Book {
    id;
    name;
    price;
    publishedDate;
    constructor(name, price, publishedDate) {
            this.name = name;
            this.price = price;
            this.publishedDate = publishedDate;
            this.id = uuid.v4(); //randomid
        }
        //{name:"aaaa",price="120",pubDate="2020/11/28"}
    update(data) {
        for (let key in data) {
            if (this[key] != undefined && key != "id") {
                this[key] = data[key];
            }
        }
    }
}
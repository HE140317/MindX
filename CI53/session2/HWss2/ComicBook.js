import Book from "./Book.js";
export default class ComicBook extends Book {
    funny;
    pageNumber;
    constructor(name, price, publishedDate, funny, pageNumber) {
        super(name, price, publishedDate);
        this.funny = funny;
        this.pageNumber = pageNumber;
    }
}
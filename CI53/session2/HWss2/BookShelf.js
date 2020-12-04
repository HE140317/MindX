import Book from "./Book.js";

export default class BookShelf {
    name;
    owner;
    dateModified;
    books;
    constructor(name, owner, dateModified) {
        this.name = name;
        this.owner = owner;
        this.dateModified = dateModified;
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book); //truyen vao
        }
    }

    updateBook(id, data) {
        //C1:
        // for (let book of this.books) {
        //     if (book.id === id) {
        //         book.update(data);
        //         break;
        //     }
        // }

        //find() cua array  //neu tim dc phan tu thoa ma -> return phan tu do
        //ngc lai return null;
        let book = this.books.find(function(item) {
            return item.id === id;
        });

        //let book = this.books.find(item => item.id ===id);

        if (book != null) book.update(data);
    }

    deleteBook(id) {
        //c2: findIndex() cua array: neu tim dc phan tu thoa man -> index >= 0. ngc lai return -1
        let bookIndex = this.books.findIndex(item => item.id === id);
        if (bookIndex >= 0) this.books.splice(bookIndex, 1);
    }

    showBooks() {
        console.log(this.books);
    }

    findBooks(name) {
        //filter() cua array. tra ve 1 mang moi gom nhung phan tu thoa man dieu kien
        return this.books.filter(item => item.name === name);
    }
}
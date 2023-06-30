let myLibrary = [];

function Book(title, author, pages) {
    // constructor function to create book
    this.title = title
    this.author = author
    this.pages = pages
}

let book1 = new Book('book1', 'author1', 100);
let book2 = new Book('book2', 'author2', 200)
let book3 = new Book('book3', 'author3', 300)

let inputTitle = 'Novel'
let inputAuthor = 'Sam'
let inputPages = 20;

function addBookToLibrary() {
    let newBook = new Book(inputTitle, inputAuthor, inputPages);
    myLibrary.push(newBook);
}

function showLibrary() {
    myLibrary.forEach(book => {
        console.log(book)
    })
}
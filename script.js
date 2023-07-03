let myLibrary = [];
let newBook;
const body = document.getElementById("body");
const createButton = document.getElementById("create");
const addButton = document.getElementById("addToLib");
const newBookForm = document.getElementById("new");


function Book(title, author, pages) {
    // constructor function to create book
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary() {
    let inputTitle = prompt("title");
    let inputAuthor = prompt("author");
    let inputPages = prompt("pages");
    newBook = new Book(inputTitle, inputAuthor, inputPages);
    myLibrary.push(newBook);
}

function showLibrary() {
    if (myLibrary.length >= 2) {
        const oldBooks = document.querySelectorAll('.item');
        for (const book of oldBooks) {
            book.remove();
        }
    }
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.innerText = `Title: ${myLibrary[i].title} \n Author: ${myLibrary[i].author} \n Pages: ${myLibrary[i].pages}`;
        div.style.border = '1px solid black';
        div.style.padding = '10px';
        div.style.margin = '10px';
        div.setAttribute('class', 'item');
        body.appendChild(div);
    }
}


createButton.addEventListener("click", () => {
    // show form which takes input items for book
    newBookForm.style.display = "block";
    console.log('click');
})
let myLibrary = [];
let newBook;
const body = document.getElementById("body")

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
    /*
    myLibrary.forEach(book => {
        // do stuff here
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        div.style.padding = '10px';
        div.style.margin = '10px';
        div.innerText = `Title: ${newBook.title} \n Author: ${newBook.author} \n Pages: ${newBook.pages}`;
        body.appendChild(div);
    })
    */
   
   for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement('div');
    div.innerText = `Title: ${myLibrary[i].title} \n Author: ${myLibrary[i].author} \n Pages: ${myLibrary[i].pages}`;
    body.appendChild(div);
   }
}

let myLibrary = [];
let newBook;
const body = document.getElementById('body');
const createButton = document.getElementById('create');
const addButton = document.getElementById('addToLib');
const newBookForm = document.getElementById('new');
const form = document.getElementById('form')
let inputTitle;
let inputAuthor;
let inputPages;
let inputStatus;

addButton.addEventListener('click', () => {
    inputTitle = document.getElementById('book_title').value;
    inputAuthor = document.getElementById('book_author').value;
    inputPages = document.getElementById('book_pages').value;
    inputStatus = document.querySelector('#status').value

    console.log(inputTitle + inputAuthor + inputPages + inputStatus);
    addBookToLibrary();
    showLibrary();
    newBookForm.style.display = 'none';
})

addButton.addEventListener('click', function(e) {
    e.preventDefault();
    form.reset();
})

function Book(title, author, pages) {
    // constructor function to create book
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary() {
    newBook = new Book(inputTitle, inputAuthor, inputPages, inputStatus);
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
        div.setAttribute('class', 'item');
        div.innerText = `Title: ${myLibrary[i].title} \n Author: ${myLibrary[i].author} \n Pages: ${myLibrary[i].pages}`;
        div.style.border = '1px solid black';
        div.style.padding = '10px';
        div.style.margin = '10px';
        body.appendChild(div);
    }
}

createButton.addEventListener('click', () => {
    // show form which takes input items for book
    newBookForm.style.display = 'block';
})


/* next steps 

1. add event listener to submit button - initialize variables containing input values
title, author, pages, status

2. somehow add these values into addBooktoLibrary func - let inputTitle = initialized variables

3. run showLibrary func on submit button to show books, and then hide form again


4. move library div styling to CSS!!
*/
let myLibrary = [];
let newBook;
const body = document.getElementById('body');
const createButton = document.getElementById('create');
const addButton = document.getElementById('addToLib');
const cancelButton = document.getElementById('closeForm');
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
    inputStatus = document.querySelector('#status_select').value === 'true' ? true : false;

    addBookToLibrary();
    showLibrary();
    newBookForm.style.display = 'none';
})

addButton.addEventListener('click', function(e) {
    e.preventDefault();
    form.reset();
})

function Book(title, author, pages, status) {
    // constructor to create book
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

Book.prototype.changeStatus = function() {
    this.status = !this.status;
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
       
        const itemTitle = document.createElement('div');
        itemTitle.setAttribute('class', 'itemDiv');
        itemTitle.innerText = `Title: ${myLibrary[i].title}`;
        div.appendChild(itemTitle);

        const itemAuthor = document.createElement('div');
        itemAuthor.setAttribute('class', 'itemDiv');
        itemAuthor.innerText = `Author: ${myLibrary[i].author}`;
        div.appendChild(itemAuthor);

        const itemPages = document.createElement('div');
        itemPages.setAttribute('class', 'itemDiv');
        itemPages.innerText = `Pages: ${myLibrary[i].pages}`;
        div.appendChild(itemPages);

        const itemStatus = document.createElement('div');
        itemStatus.setAttribute('class', 'itemDiv');
        itemStatus.innerText = 'Read: '
        div.appendChild(itemStatus);

        const readBtn = document.createElement('button');
        readBtn.setAttribute('id', 'read_btn');
        readBtn.innerText = myLibrary[i].status === true ? 'Yes' : 'No';
        readBtn.style.fontWeight = 'bold';

        myLibrary[i].status === true ? readBtn.style.color = 'green' : readBtn.style.color = 'red';
        itemStatus.appendChild(readBtn);
        div.style.border = '1px solid black';
        div.style.padding = '10px';
        div.style.margin = '10px';
        body.appendChild(div);
        readBtn.addEventListener('click', () => {
            myLibrary[i].changeStatus();
            readBtn.innerText = myLibrary[i].status === true ? 'Yes' : 'No';
            myLibrary[i].status === true ? readBtn.style.color = 'green' : readBtn.style.color = 'red';
        })

        


    }
}





createButton.addEventListener('click', () => {
    // show form which takes input items for book
    newBookForm.style.display = 'block';
})

cancelButton.addEventListener('click', () => {
    form.reset();
    newBookForm.style.display = 'none';
} )

/* next steps 

1. add event listener to submit button - initialize variables containing input values
title, author, pages, status

2. somehow add these values into addBooktoLibrary func - let inputTitle = initialized variables

3. run showLibrary func on submit button to show books, and then hide form again


4. move library div styling to CSS!!


5. set status as boolean and then change inner text with a function
so status = true or false
and then use if statement to change inner text on read - use
*/
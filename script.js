// main library
const container = document.querySelector('#books');
const addNew = document.querySelector('#new_book');

// form
const form = document.querySelector('#form');
const submit = document.querySelector('#confirm');
const cancel = document.querySelector('#cancel');
const dialog = document.querySelector('.dialog');
const checkbox = document.querySelector('#read');


// dialog actions
addNew.addEventListener('click', () => {
  dialog.showModal();
});

cancel.addEventListener('click', () => {
  dialog.close();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const pages = event.target.pages.value;
  let read;

  if (checkbox.checked) {
    read = 'Yes';
  } else {
    read = 'No'
  }
  addBookToLibrary(title, author, pages, read);
  event.target.reset();
  dialog.close();
})

// All of your book objects are going to be stored in an array, so you’ll need a constructor for books. 

const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID()
}

// Then, add a separate function to the script (not inside the constructor) that can take some arguments, create a book from those arguments, and store the new book object into an array. 

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  showBook(newBook);
}

// Also, all of your book objects should have a unique id, which can be generated using crypto.randomUUID(). This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged. Your code should look something like this (we’re showing only a basic skeleton without function parameters):


// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// myLibrary.forEach(showBook);

addBookToLibrary('Yellowface', 'R.F. Kuang', 285, 'Yes');
addBookToLibrary('Maybe You Should Talk to Someone', 'Lori Gottlieb', 359, 'Yes');
addBookToLibrary('1984', 'George Orwell', 328, 'No');

function showBook(book) {
    const newBook = document.createElement('div');
    newBook.setAttribute('class', 'book');

    const title = document.createElement('div');
    title.textContent = `${book.title}`;
    const author = document.createElement('div');
    author.textContent = `Author: ${book.author}`;
    const pages = document.createElement('div');
    pages.textContent - `${book.pages} pages`;
    const read = document.createElement('div');
    read.textContent = `Read: ${book.read}`;

    newBook.append(title);
    newBook.append(author);
    newBook.append(pages);
    newBook.append(read);
    container.append(newBook);
}
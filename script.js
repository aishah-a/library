// main library
const container = document.querySelector('#books');
const addNew = document.querySelector('#new_book');

// form
const form = document.querySelector('#form');
const submit = document.querySelector('#confirm');
const cancel = document.querySelector('#cancel');
const dialog = document.querySelector('.dialog');
const checkbox = document.querySelector('#read');

const myLibrary = []

// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  showBook(newBook, newBook.id);
}

function showBook(book, id) {
    const bookInfo = document.createElement('div');
    bookInfo.setAttribute('class', 'book');
    bookInfo.setAttribute('data-book-id', id);

    const title = document.createElement('div');
    title.textContent = `${book.title}`;
    const author = document.createElement('div');
    author.textContent = `Author: ${book.author}`;
    const pages = document.createElement('div');
    pages.textContent - `${book.pages} pages`;
    const read = document.createElement('div');
    read.textContent = `Read: ${book.read}`;

    bookInfo.append(title, author, pages, read);
    container.append(bookInfo);
}

// default books
addBookToLibrary('Yellowface', 'R.F. Kuang', 285, 'Yes');
addBookToLibrary('Maybe You Should Talk to Someone', 'Lori Gottlieb', 359, 'Yes');
addBookToLibrary('1984', 'George Orwell', 328, 'No');

remove.addEventListener('click', (event) => {
  console.log(event.target.id)
})


// form actions
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
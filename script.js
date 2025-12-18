const container = document.querySelector('#books');
const addNew = document.querySelector('#new_book');

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
  title.setAttribute('class', 'book_title');
  title.textContent = `${book.title}`;

  const author = document.createElement('div');
  author.textContent = `Author: ${book.author}`;
  
  const pages = document.createElement('div');
  pages.textContent = `${book.pages} pages`;

  const read = document.createElement('div');
  read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

  const toggleRead = document.createElement('button');
  toggleRead.setAttribute('id', 'toggle');
  updateStatus(toggleRead, book);

  toggleRead.addEventListener('click', () => {
    book.read ? book.read = false : book.read = true;
    updateStatus(toggleRead, book);
    read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
  })

  const remove = document.createElement('button');
  remove.textContent = 'Remove book';

  remove.addEventListener('click', () => {
  let clickID = bookInfo.getAttribute('data-book-id');
  removeBook(clickID)
  container.removeChild(bookInfo);
  })

  bookInfo.append(title, author, pages, read, toggleRead, remove);
  container.append(bookInfo);
}

function updateStatus(button, book) {
  button.textContent = `${book.read ? 'Mark as still reading' : 'Mark as read'}`;
}

function removeBook(clickID) {
  const bookIndex = myLibrary.findIndex((book) => book.id === clickID);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
  }
}

// default books
addBookToLibrary('Yellowface', 'R.F. Kuang', 285, true);
addBookToLibrary('Maybe You Should Talk to Someone', 'Lori Gottlieb', 359, true);
addBookToLibrary('1984', 'George Orwell', 328, false);

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
    read = true;
  } else {
    read = false;
  }

  addBookToLibrary(title, author, pages, read);
  event.target.reset();
  dialog.close();
})
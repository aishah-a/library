const container = document.querySelector('#container')

// All of your book objects are going to be stored in an array, so you’ll need a constructor for books. 

const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.pages = read;
  this.id = crypto.randomUUID()
}

// Then, add a separate function to the script (not inside the constructor) that can take some arguments, create a book from those arguments, and store the new book object into an array. 

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Also, all of your book objects should have a unique id, which can be generated using crypto.randomUUID(). This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged. Your code should look something like this (we’re showing only a basic skeleton without function parameters):


// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.


addBookToLibrary('Yellowface', 'R.F. Kuang', 285, true);
addBookToLibrary('Maybe You Should Talk to Someone', 'Lori Gottlieb', 359, true);
addBookToLibrary('1984', 'George Orwell', 328, false);

container.style.backgroundColor = 'pink';
container.style.height = '300px'

myLibrary.forEach(showBook) 

function showBook(book) {
    const newBook = document.createElement('div');
    newBook.innerText = book.title;
    container.append(newBook);
}
import Books from './script/classes.js';
import './script/NavbarButtons.js';

const container = document.querySelector('.collection');
const BookName = document.querySelector('#book');
const authorName = document.querySelector('#author');
const btn = document.querySelector('form');

const bookList = new Books();
bookList.books = JSON.parse(localStorage.getItem('book-list')) || [];

function addBook() {
  const title = BookName.value;
  const author = authorName.value;
  bookList.add(title, author);
  localStorage.setItem('book-list', JSON.stringify(bookList.books));
}
btn.addEventListener('submit', addBook);

// display books

function displayBooks() {
  container.innerHTML = '';
  bookList.books.forEach((books, index) => {
    container.innerHTML += `<ul>
    <li>"${books.title}" by ${books.author}</li>
    <li><button class = "remove" onlick= "removebook()" data-index="${index}">Remove</button></li>
    </ul>`;
  });
}

// remove button////

function removebook(index) {
  bookList.remove(index);
  localStorage.setItem('book-list', JSON.stringify(bookList.books));
  displayBooks();
}
displayBooks();

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.getAttribute('data-index');
    removebook(index);
  }
});

/// ///////Sections////////

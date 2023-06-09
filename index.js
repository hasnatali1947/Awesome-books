import Books from './modules/classes.js';
import './modules/NavbarButtons.js';
import { DateTime } from './modules/luxon.js';

const container = document.querySelector('.collection');
const BookName = document.querySelector('#book');
const authorName = document.querySelector('#author');
const btn = document.querySelector('form');
const timeDate = document.getElementById('timeDate');

const bookList = new Books();
bookList.books = JSON.parse(localStorage.getItem('book-list')) || [];

const addBook = () => {
  const title = BookName.value;
  const author = authorName.value;
  bookList.add(title, author);
  localStorage.setItem('book-list', JSON.stringify(bookList.books));
};
btn.addEventListener('submit', addBook);

const currentTime = () => {
  const now = DateTime.now();
  return now.toLocaleString({ ...DateTime.DATETIME_MED_WITH_SECONDS, hour12: true });
};

// display books

const displayBooks = () => {
  container.innerHTML = '';
  bookList.books.forEach((books, index) => {
    container.innerHTML += `<ul>
    <li>"${books.title}" by ${books.author}</li>
    <li><button class = "remove" onlick= "removebook()" data-index="${index}">Remove</button></li>
    </ul>`;
  });
};

// remove button////

const removebook = (index) => {
  bookList.remove(index);
  localStorage.setItem('book-list', JSON.stringify(bookList.books));
  displayBooks();
};
displayBooks();

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.getAttribute('data-index');
    removebook(index);
  }
});

// ---------------- Set time ---------------

setInterval(() => {
  timeDate.innerHTML = currentTime();
}, [1000]);

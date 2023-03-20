const form = document.getElementById('form');
const AddButton = document.getElementById('AddButton');
const author = document.getElementById('Author');
const todoList = document.getElementById('todoList');
const title = document.getElementById('title');

form.addEventListener('click', ((e) => {
  e.preventDefault();
}));

AddButton.addEventListener('click', (() => {
  if (title.value === '' && author.value === '') {
    alert('please fill all inputs');
  } else {
    const bookList = document.createElement('ul');
    bookList.classList.add('BookListul');

    const Titleli = document.createElement('li');
    Titleli.innerHTML = title.value;
    title.value = '';
    bookList.appendChild(Titleli);

    const authorli = document.createElement('li');
    authorli.innerHTML = author.value;
    author.value = '';
    bookList.appendChild(authorli);

    const RemoveButton = document.createElement('button');
    RemoveButton.classList.add('RemoveButton');
    RemoveButton.innerText = 'Remove';

    todoList.appendChild(bookList);
    bookList.appendChild(RemoveButton);
  }

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('RemoveButton')) {
      e.target.parentElement.remove();
    }
  });
}));

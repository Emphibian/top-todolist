import './style.css';

const body = document.querySelector('body');
const mainDiv = document.createElement('main');

const sidebarDiv = document.createElement('div');
sidebarDiv.classList.add('sidebar');

const defaultButton = document.createElement('button');
defaultButton.textContent = 'Default';
sidebarDiv.appendChild(defaultButton);

const todoListDiv = document.createElement('div');
todoListDiv.classList.add('todo-list');

function createTodoItem(text) {
  const itemDiv = document.createElement('div');
  itemDiv.textContent = text;
  itemDiv.classList.add('todo-item');
  return itemDiv;
}

const addButton = document.createElement('button');
addButton.classList.add('add-button');
addButton.textContent = '+';

todoListDiv.appendChild(createTodoItem('Do this'));
todoListDiv.appendChild(createTodoItem('Do that'));
todoListDiv.appendChild(addButton);

mainDiv.appendChild(sidebarDiv);
mainDiv.appendChild(todoListDiv);

body.appendChild(mainDiv);

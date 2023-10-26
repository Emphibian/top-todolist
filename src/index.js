import './style.css';
import createProjectController from './projectController.js';
import createListController from './listController.js';
import createList from './list.js';

const projectController = createProjectController();
const listController = createListController();

const listsArray = [];
const list = createList('Default');
list.createListItem('Do this', '');
list.createListItem('Do that', '');

const list2 = createList('test');
list2.createListItem("don't do this at work!", '');
list2.createListItem("definitely don't do this", '');

listsArray.push(list);
listsArray.push(list2);

listController.setList(list);
listController.render();

projectController.render(listsArray);

function closeDialog() {
  let dialog = document.querySelector('#addTask');
  dialog.close();
}

let closeButton = document.querySelector('dialog button');
closeButton.addEventListener('click', closeDialog);

let addTaskBtn = document.querySelector('form button');
addTaskBtn.addEventListener('click', () => {
  let desc = document.querySelector('input#desc');
  list.createListItem(desc.value, '');
  listController.render();
});

import './style.css';
import createProjectController from './projectController.js';
import createListController from './listController.js';
import createList from './list.js';

const listController = createListController();
const projectController = createProjectController(listController);

const list = createList('Default');
list.createListItem('Do this', '');
list.createListItem('Do that', '');

const list2 = createList('test');
list2.createListItem("don't do this at work!", '');
list2.createListItem("definitely don't do this", '');

projectController.addList(list);
projectController.addList(list2);

listController.setList(list);
listController.render();

projectController.render();

function closeDialog() {
  let dialog = document.querySelector('#add-task');
  dialog.close();
}

let closeButton = document.querySelector('dialog button');
closeButton.addEventListener('click', closeDialog);

let addTaskBtn = document.querySelector('form button');
addTaskBtn.addEventListener('click', () => {
  let desc = document.querySelector('input#desc');
  listController.addItem(desc.value, '');
});

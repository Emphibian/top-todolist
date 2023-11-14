import './style.css';
import createProjectController from './projectController.js';
import createListController from './listController.js';
import {
  createDialogController,
  createDetailDialog,
} from './dialogController.js';
import createList from './list.js';
import createAddButton from './addButton.js';

const listController = createListController(createDetailDialog);
const projectController = createProjectController(listController);
const dialogController = createDialogController(
  (desc, dueDate, priority) => listController.addItem(desc, dueDate, priority),
  (list) => projectController.addList(list),
);

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

const addButton = createAddButton(dialogController);
document.body.appendChild(addButton);

function closeDialog() {
  let dialog = document.querySelector('#add-task');
  dialog.close();
}

let closeButton = document.querySelector('dialog button');
closeButton.addEventListener('click', closeDialog);
const isVisible = 'is-visible';

document.addEventListener('keyup', (e) => {
  if (e.key == 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove('is-visible');
  }
});

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

if (!localStorage.getItem('projects')) {
  populateStorage();
} else {
  setUpProjects();
}

function populateStorage() {
  const list = createList('Default');
  list.createListItem('Do this');
  list.createListItem('Do that');

  const tempObj = {
    title: list.title,
    tasks: list.getItems(),
    completedTasks: list.getCompletedItems(),
  };

  localStorage.setItem('projects', JSON.stringify([tempObj]));
  setUpProjects();
}

function setUpProjects() {
  const projects = JSON.parse(localStorage.getItem('projects'));
  projects.forEach((project) => {
    const list = createList(project.title);
    project.tasks.forEach((item) =>
      list.createListItem(item.desc, new Date(item.dueDate), item.priority),
    );

    projectController.addList(list);
  });

  projectController.setList();
  listController.render();
  projectController.render();
}

const addButton = createAddButton(dialogController);
document.body.appendChild(addButton);

function closeDialog() {
  let dialog = document.querySelector('#add-task');
  dialog.close();
}

let closeButton = document.querySelector('dialog button');
closeButton.addEventListener('click', closeDialog);

document.addEventListener('keyup', (e) => {
  if (e.key == 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove('is-visible');
  }
});

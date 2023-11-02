import createList from './list.js';

export default function createDialogController(addTask, addProject) {
  function open() {
    const dialog = document.querySelector('dialog');
    const dialogSideDiv = document.querySelector('.dialog-side');
    dialogSideDiv.innerHTML = '';

    const taskButton = document.createElement('button');
    taskButton.textContent = 'Task';
    taskButton.addEventListener('click', () => createTaskForm());

    const projectButton = document.createElement('button');
    projectButton.textContent = 'Project';
    projectButton.addEventListener('click', () => createProjectForm('project'));

    dialogSideDiv.appendChild(taskButton);
    dialogSideDiv.appendChild(projectButton);
    dialog.showModal();
  }

  function createProjectForm() {
    const form = document.querySelector('form.dialog');
    form.innerHTML = '';

    const inputDiv = document.createElement('div');
    const label = document.createElement('label');
    label.htmlFor = 'desc';
    label.textContent = 'Project:';

    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.id = 'desc';
    inputDesc.name = 'desc';

    const button = document.createElement('button');
    button.textContent = 'Add project';

    button.addEventListener('click', () => {
      const listObj = createList(inputDesc.value);
      addProject(listObj);
    });

    inputDiv.appendChild(label);
    inputDiv.appendChild(inputDesc);
    form.appendChild(inputDiv);
    form.appendChild(button);
  }

  function createTaskForm() {
    const form = document.querySelector('form.dialog');
    form.innerHTML = '';

    const inputDiv = document.createElement('div');
    const labelDesc = document.createElement('label');
    labelDesc.htmlFor = 'desc';
    labelDesc.textContent = 'Task:';

    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.id = 'desc';
    inputDesc.name = 'desc';

    const labelDueDate = document.createElement('label');
    labelDueDate.htmlFor = 'due-date';
    labelDueDate.textContent = 'Due date';

    const inputDueDate = document.createElement('input');
    inputDueDate.type = 'date';
    inputDueDate.id = 'due-date';
    inputDueDate.name = 'due-date';

    const labelPriority = document.createElement('label');
    labelPriority.htmlFor = 'priority';
    labelPriority.textContent = 'Priority:';

    const inputPriority = document.createElement('select');
    inputPriority.id = 'priority';
    inputPriority.name = 'priority';

    const priorityOptions = ['Low', 'Medium', 'High'];
    priorityOptions.forEach((priority) => {
      const option = document.createElement('option');
      option.value = priority;
      option.text = priority;

      inputPriority.add(option);
    });

    const button = document.createElement('button');
    button.textContent = 'Add Task';

    button.addEventListener('click', () => {
      addTask(
        inputDesc.value,
        new Date(inputDueDate.value),
        inputPriority.value,
      );
    });

    inputDiv.append(
      labelDesc,
      inputDesc,
      labelDueDate,
      inputDueDate,
      labelPriority,
      inputPriority,
    );
    form.appendChild(inputDiv);
    form.appendChild(button);
  }

  return {
    open,
  };
}

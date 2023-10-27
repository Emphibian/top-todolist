export default function createDialogController(addTask, addProject) {
  function open() {
    const dialog = document.querySelector('dialog');
    const dialogSideDiv = document.querySelector('.dialog-side');
    dialogSideDiv.innerHTML = '';

    const taskButton = document.createElement('button');
    taskButton.textContent = 'Task';
    taskButton.addEventListener('click', () => createForm('task'));

    const projectButton = document.createElement('button');
    projectButton.textContent = 'Project';
    projectButton.addEventListener('click', () => createForm('project'));

    dialogSideDiv.appendChild(taskButton);
    dialogSideDiv.appendChild(projectButton);
    dialog.showModal();
  }

  function createForm(type) {
    const form = document.querySelector('form.dialog');
    form.innerHTML = '';

    const label = document.createElement('label');
    label.htmlFor = 'desc';
    label.textContent = type === 'task' ? 'Task:' : 'Project:';

    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.id = 'desc';
    inputDesc.name = 'desc';

    const button = document.createElement('button');
    button.textContent = `Add ${type}`;

    form.appendChild(label);
    form.appendChild(inputDesc);
    form.appendChild(button);
  }

  return {
    open,
  };
}

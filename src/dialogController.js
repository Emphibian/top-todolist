export default function createDialogController() {
  function open() {
    const dialog = document.querySelector('dialog');
    const dialogSideDiv = document.querySelector('.dialog-side');
    dialogSideDiv.innerHTML = '';

    const taskButton = document.createElement('button');
    taskButton.textContent = 'Task';
    taskButton.addEventListener('click', createTaskForm);

    dialogSideDiv.appendChild(taskButton);
    dialog.showModal();
  }

  function createTaskForm() {
    const form = document.querySelector('form.dialog');
    form.innerHTML = '';

    const label = document.createElement('label');
    label.htmlFor = 'desc';
    label.textContent = 'Task:';

    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.id = 'desc';
    inputDesc.name = 'desc';

    const button = document.createElement('button');
    button.textContent = 'Add task';

    form.appendChild(label);
    form.appendChild(inputDesc);
    form.appendChild(button);
  }

  return {
    open,
  };
}

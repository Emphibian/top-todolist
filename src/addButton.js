import createDialogController from './dialogController.js';
export default function createAddButton() {
  const addButton = document.createElement('button');
  addButton.textContent = '+';

  addButton.addEventListener('click', () => {
    const dialogController = createDialogController();
    dialogController.open();
  });

  return addButton;
}

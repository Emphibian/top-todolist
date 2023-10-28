export default function createAddButton(dialogController) {
  const addButton = document.createElement('button');
  addButton.textContent = '+';

  addButton.addEventListener('click', () => {
    dialogController.open();
  });

  return addButton;
}

export default function createAddButton() {
  const addButton = document.createElement('button');
  addButton.textContent = '+';

  addButton.addEventListener('click', () => {
    const dialogBox = document.querySelector('#add-task');
    dialogBox.showModal();
  });

  return addButton;
}

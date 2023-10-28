import './style.css';

export default function createListController() {
  let curList;

  function setList(list) {
    curList = list;
  }

  function render() {
    if (!curList) return;

    let todoListDiv = document.querySelector('.todo-list');
    todoListDiv.innerHTML = '';
    curList.getItems().forEach((item, index) => {
      const listItemDiv = document.createElement('div');
      listItemDiv.classList.add('todo-item');

      const titlePara = document.createElement('p');
      titlePara.textContent = item.title;

      const doneCheckbox = document.createElement('input');
      doneCheckbox.type = 'checkbox';
      doneCheckbox.addEventListener('click', () => {
        curList.markDone(index);
        render();
      });

      listItemDiv.appendChild(doneCheckbox);
      listItemDiv.appendChild(titlePara);

      todoListDiv.appendChild(listItemDiv);
    });
  }

  function addItem(title, desc) {
    curList.createListItem(title, desc);
    render();
  }

  return {
    setList,
    render,
    addItem,
  };
}

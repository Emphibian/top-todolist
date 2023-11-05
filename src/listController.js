import './style.css';
import trashCan from './assets/trash-can-outline.svg';

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

      const dueDatePara = document.createElement('p');
      dueDatePara.textContent = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
      }).format(item.dueDate);

      const priorityPara = document.createElement('p');
      priorityPara.textContent = item.priority;

      const descPara = document.createElement('p');
      descPara.textContent = item.desc;

      const doneCheckbox = document.createElement('input');
      doneCheckbox.type = 'checkbox';
      doneCheckbox.addEventListener('click', () => {
        curList.markDone(index);
        render();
      });

      const deleteButton = document.createElement('button');
      const deleteButtonImage = new Image();
      deleteButtonImage.src = trashCan;
      deleteButton.appendChild(deleteButtonImage);
      deleteButton.addEventListener('click', () => {
        curList.deleteListItem(index);
        render();
      });

      listItemDiv.appendChild(doneCheckbox);
      listItemDiv.appendChild(descPara);
      listItemDiv.appendChild(dueDatePara);
      listItemDiv.appendChild(priorityPara);
      listItemDiv.appendChild(deleteButton);

      todoListDiv.appendChild(listItemDiv);
    });

    const completedDiv = document.createElement('div');
    completedDiv.classList.add('completed');
    const completedHeading = document.createElement('h2');
    completedHeading.textContent = 'Completed Tasks';
    const completedPara = document.createElement('p');
    completedPara.textContent = 'Completed tasks show up here';

    completedDiv.append(completedHeading, completedPara);
    todoListDiv.appendChild(completedDiv);
  }

  function addItem(desc, dueDate, priority) {
    curList.createListItem(desc, dueDate, priority);
    render();
  }

  return {
    setList,
    render,
    addItem,
  };
}

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

      listItemDiv.appendChild(doneCheckbox);
      listItemDiv.appendChild(descPara);
      listItemDiv.appendChild(dueDatePara);
      listItemDiv.appendChild(priorityPara);

      todoListDiv.appendChild(listItemDiv);
    });
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

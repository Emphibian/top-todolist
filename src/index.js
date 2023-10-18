import "./style.css";
import createList from "./list.js";

const todoListDiv = document.querySelector(".todo-list");

function renderTodoListItems(listObj) {
  todoListDiv.innerHTML = "";
  const listItems = listObj.getItems();
  listItems.forEach((item, index) => {
    const listItemDiv = document.createElement("div");
    listItemDiv.classList.add("todo-item");

    const titlePara = document.createElement("p");
    titlePara.textContent = item.title;

    const doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.addEventListener("click", () => {
      listObj.markDone(index);
      renderTodoListItems(list);
    });

    listItemDiv.appendChild(doneCheckbox);
    listItemDiv.appendChild(titlePara);

    todoListDiv.appendChild(listItemDiv);
  });
}

const list = createList();
list.createListItem("Do this", "");
list.createListItem("Do that", "");
renderTodoListItems(list);

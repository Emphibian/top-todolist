import "./style.css";
import createList from "./list.js";

const todoListDiv = document.querySelector(".todo-list");
const sidebarDiv = document.querySelector(".sidebar");

const listsArray = [];
const list = createList("Default");
list.createListItem("Do this", "");
list.createListItem("Do that", "");
listsArray.push(list);

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

function renderLists(lists) {
  lists.forEach((list) => {
    const listButton = document.createElement("button");
    listButton.textContent = list.title;
    sidebarDiv.appendChild(listButton);
  });
}

renderTodoListItems(list);
renderLists(listsArray);

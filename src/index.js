import "./style.css";
import createList from "./list.js";
import createAddButton from './addButton.js';

const todoListDiv = document.querySelector(".todo-list");
const sidebarDiv = document.querySelector(".sidebar");

const listsArray = [];
const list = createList("Default");
list.createListItem("Do this", "");
list.createListItem("Do that", "");

const list2 = createList("test");
list2.createListItem("don't do this at work!", "");
list2.createListItem("definitely don't do this", "")

listsArray.push(list);
listsArray.push(list2);

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
      renderTodoListItems(listObj);
      renderAddTodoListItemsButton(listObj);
    });

    listItemDiv.appendChild(doneCheckbox);
    listItemDiv.appendChild(titlePara);

    todoListDiv.appendChild(listItemDiv);
    renderAddTodoListItemsButton(listObj);
  });
}

function renderAddTodoListItemsButton(listObj) {
  const addButton = createAddButton();
  todoListDiv.appendChild(addButton);
}

function renderLists(lists) {
  lists.forEach((list) => {
    const listButton = document.createElement("button");
    listButton.textContent = list.title;

    listButton.addEventListener("click", () => {
      renderTodoListItems(list);
      renderAddTodoListItemsButton(list);
    });

    sidebarDiv.appendChild(listButton);
  });

}

renderLists(listsArray);
renderTodoListItems(list);
renderAddTodoListItemsButton(list);

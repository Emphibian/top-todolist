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

    const doneButton = document.createElement("button");
    doneButton.textContent = "done";
    doneButton.addEventListener("click", () => {
      listObj.markDone(index);
      renderTodoListItems(list);
    });

    listItemDiv.appendChild(titlePara);
    listItemDiv.appendChild(doneButton);

    todoListDiv.appendChild(listItemDiv);
  });
}

const list = createList();
list.createListItem("Do this", "");
list.createListItem("Do that", "");
renderTodoListItems(list);

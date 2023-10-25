export default function projectController() {
  function render(projectArray) {
    projectArray.forEach((project) => {
      const sidebarDiv = document.querySelector(".sidebar");
      const listButton = document.createElement("button");
      listButton.textContent = list.title;

      listButton.addEventListener("click", () => {
        renderTodoListItems(list);
        renderAddTodoListItemsButton(list);
      });

      sidebarDiv.appendChild(listButton);
    });
  }

  return {
    render,
  };
}

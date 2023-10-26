export default function createProjectController() {
  function render(projectArray) {
    projectArray.forEach((project) => {
      const sidebarDiv = document.querySelector(".sidebar");
      const listButton = document.createElement("button");
      listButton.textContent = project.title;

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

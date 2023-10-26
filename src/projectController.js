export default function createProjectController(listController) {
  function render(projectArray) {
    projectArray.forEach((project) => {
      const sidebarDiv = document.querySelector(".sidebar");
      const listButton = document.createElement("button");
      listButton.textContent = project.title;

      listButton.addEventListener("click", () => {
        listController.setList(project);
        listController.render();
      });

      sidebarDiv.appendChild(listButton);
    });
  }

  return {
    render,
  };
}

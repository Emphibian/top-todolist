export default function createProjectController(listController) {
  const projectArray = [];

  function render() {
    projectArray.forEach((project) => {
      const sidebarDiv = document.querySelector('.sidebar');
      const listButton = document.createElement('button');
      listButton.textContent = project.title;

      listButton.addEventListener('click', () => {
        listController.setList(project);
        listController.render();
      });

      sidebarDiv.appendChild(listButton);
    });
  }

  function addList(listObj) {
    projectArray.push(listObj);
  }

  return {
    render,
    addList,
  };
}

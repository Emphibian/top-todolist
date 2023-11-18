export default function createProjectController(listController) {
  const projectArray = [];

  function render() {
    const sidebarDiv = document.querySelector('.sidebar');
    sidebarDiv.innerHTML = '';

    projectArray.forEach((project) => {
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
    render();
  }

  function setList() {
    if (!projectArray.length) listController.setList(projectArray[0]);
  }

  return {
    render,
    addList,
    setList,
  };
}

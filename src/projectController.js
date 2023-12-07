export default function createProjectController(listController) {
  const projectArray = [];
  let curList;

  function render() {
    const sidebarDiv = document.querySelector('.sidebar');
    sidebarDiv.innerHTML = '';

    projectArray.forEach((project) => {
      const listButton = document.createElement('button');
      listButton.textContent = project.title;
      if (project === curList) listButton.classList.add('selected');

      listButton.addEventListener('click', () => {
        listController.setList(project);
        listController.render();
        curList = project;
        render();
      });

      sidebarDiv.appendChild(listButton);
    });
  }

  function addList(listObj) {
    projectArray.push(listObj);

    if (!localStorage.getItem('projects'))
      localStorage.setItem('projects', JSON.stringify([]));
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.push(listObj.title);
    localStorage.setItem('projects', JSON.stringify(projects));

    const tempObj = {
      title: listObj.title,
      tasks: listObj.getItems(),
      completedTasks: listObj.getCompletedItems(),
    };
    localStorage.setItem(`${listObj.title}`, JSON.stringify(tempObj));

    render();
  }

  function deleteList(listObj) {
    let index = projectArray.find(listObj);
    projectArray.splice(index, 1);

    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.splice(projects.find(listObj.title), 1);
    localStorage.setItem('projects', JSON.stringify(projects));

    localStorage.removeItem(`${listObj.title}`);

    curList = projectArray[0];
    render();
  }

  function setList() {
    if (projectArray.length) listController.setList(projectArray[0]);
    curList = projectArray[0];
  }

  return {
    render,
    addList,
    setList,
  };
}

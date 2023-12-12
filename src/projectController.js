import './style.css';
import dotsVertical from './assets/dots-vertical.svg';

export default function createProjectController(listController) {
  const projectArray = [];
  let curList;

  function render() {
    const sidebarDiv = document.querySelector('.sidebar');
    sidebarDiv.innerHTML = '';

    projectArray.forEach((project) => {
      const listDiv = document.createElement('div');
      listDiv.classList.add('sidebar-list-div');
      const listButton = document.createElement('button');
      listButton.textContent = project.title;

      listButton.addEventListener('click', () => {
        listController.setList(project);
        listController.render();
        curList = project;
        render();
      });

      listDiv.append(listButton);

      if (project === curList) {
        listButton.classList.add('selected');
        const listOptionsDiv = document.createElement('div');
        listOptionsDiv.classList.add('list-options-div');
        const dotsImage = new Image();
        dotsImage.src = dotsVertical;

        const listOptionsList = document.createElement('div');
        listOptionsList.classList.add('is-invisible');
        const deletePara = document.createElement('p');
        deletePara.textContent = 'Delete';

        listOptionsList.append(deletePara);
        listOptionsDiv.append(dotsImage, listOptionsList);
        listDiv.append(listOptionsDiv);

        listOptionsDiv.addEventListener('click', () => {
          listOptionsList.classList.toggle('is-invisible');
        });

        listOptionsList.addEventListener('click', () => {
          deleteList(curList);
        });
      }

      sidebarDiv.appendChild(listDiv);
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
    let index = projectArray.findIndex((item) => item.title === listObj.title);
    projectArray.splice(index, 1);

    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.splice(
      projects.findIndex((item) => item.title === listObj.title),
      1,
    );
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

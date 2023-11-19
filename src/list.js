import createTodoItem from './item.js';
export default function createList(title) {
  const listItems = [];
  const doneItems = [];

  function addItem(itemObj, done = false) {
    if (done) {
      doneItems.push(itemObj);
      return;
    }
    listItems.push(itemObj);
  }

  function markDone(index) {
    doneItems.unshift(...listItems.splice(index, 1));
  }

  function createListItem(desc, dueDate, priority, markDone = false) {
    const item = createTodoItem(desc, dueDate, priority);
    addItem(item, markDone);
  }

  function deleteListItem(index) {
    listItems.splice(index, 1);
  }

  function deleteDoneItem(index) {
    doneItems.splice(index, 1);
  }

  function undoListItem(index) {
    addItem(...doneItems.splice(index, 1));
  }

  function getItems() {
    return [...listItems];
  }

  function getCompletedItems() {
    return [...doneItems];
  }

  return {
    title,
    createListItem,
    markDone,
    getItems,
    getCompletedItems,
    deleteListItem,
    undoListItem,
    deleteDoneItem,
  };
}

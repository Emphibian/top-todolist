import createTodoItem from './item.js';
export default function createList(title) {
  const listItems = [];
  const doneItems = [];

  function addItem(itemObj) {
    listItems.push(itemObj);
  }

  function markDone(index) {
    doneItems.unshift(...listItems.splice(index, 1));
  }

  function createListItem(desc, dueDate, priority) {
    const item = createTodoItem(desc, dueDate, priority);
    addItem(item);
  }

  function deleteListItem(index) {
    listItems.splice(index, 1);
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
  };
}

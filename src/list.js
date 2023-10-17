import createTodoItem from "./item.js";
export default function createList() {
  const listItems = [];

  function addItem(itemObj) {
    listItems.push(itemObj);
  }

  function markDone(index) {
    // implement the done function
    listItems.splice(index, 1);
  }

  function createListItem(title, desc) {
    const item = createTodoItem(title, desc);
    addItem(item);
  }

  function getItems() {
    return [...listItems];
  }

  return {
    createListItem,
    markDone,
    getItems,
  };
}

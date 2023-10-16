export default function createList() {
  const listItems = [];

  function addItem(itemObj) {
    listItems.push(itemObj);
  }

  function markDone(index) {
    // implement the done function
    listItems.splice(index, 1);
  }

  return {
    addItem,
    markDone,
  };
}

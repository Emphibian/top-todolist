export default function createTodoItem(title, desc, doneFunction) {
  return {
    title,
    desc,
    done() {
      doneFunction();
    },
  };
}

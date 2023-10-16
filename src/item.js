export default function createTodoItem(index, title, desc, doneFunction) {
  const index = index;

  let markDone = () => {
    markDoneFunction(index);
  };

  return {
    title,
    desc,
    done,
  };
}

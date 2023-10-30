export default function createTodoItem(title, desc, dueDate = new Date()) {
  return {
    title,
    desc,
    dueDate,
  };
}

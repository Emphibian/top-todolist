export default function createTodoItem(
  desc,
  dueDate = new Date(),
  priority = 'Low',
) {
  return {
    desc,
    dueDate,
    priority,
  };
}

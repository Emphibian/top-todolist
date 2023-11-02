export default function createTodoItem(
  desc,
  dueDate = new Date(),
  priority = 'low',
) {
  return {
    desc,
    dueDate,
    priority,
  };
}

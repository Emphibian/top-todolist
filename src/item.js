export default function createTodoItem(
  title,
  desc,
  dueDate = new Date(),
  priority = 'low',
) {
  return {
    title,
    desc,
    dueDate,
    priority,
  };
}

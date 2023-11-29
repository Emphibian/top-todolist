export default function createTodoItem(desc, dueDateValue, priority = 'Low') {
  let dueDate;
  if (!dueDateValue) dueDate = new Date();
  else dueDate = new Date(dueDateValue);

  return {
    desc,
    dueDate,
    priority,
  };
}

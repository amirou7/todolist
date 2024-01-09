function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Get the value of the input field
  const newTaskText = taskInput.value;

  if (newTaskText.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const newTask = document.createElement('li');
  newTask.textContent = newTaskText;

  // Add the new task to the list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = '';
}

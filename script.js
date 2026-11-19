// The tasks live here. The list on the page is drawn from this array.
const tasks = [];

// 1. Find the elements
const input = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("task-list");

// Draw the whole list again from the tasks array
function render() {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.done) {
      li.classList.add("done");
    }

    // Click a task to mark it done (or not done)
    li.addEventListener("click", () => {
      task.done = !task.done;
      render();
    });

    list.appendChild(li);
  });
}

// 2. Listen for the click
addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  // 3. Change: add to the array, then draw the list again
  tasks.push({ text: text, done: false });
  input.value = "";
  render();
});

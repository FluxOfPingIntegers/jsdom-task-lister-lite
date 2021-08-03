document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementsByTagName('form')[0];
  taskForm.addEventListener("submit", function(event) {
    let userText = document.getElementById("new-task-description").value;
    document.getElementById("tasks").innerHTML += `<li>${userText}</li>`;
    console.log(`${userText}`);
    event.preventDefault();
  }, false);


});

// #todolist is in index.html
const todolistUl = $("#todolist");
const newTodoInput = $("#new-todo");
const newTodoButton = $("#save");

// data and todo can be called any other name here. They're arbitrary.
$.get("/api/todos").then(data => {
    console.log(data);
    data.forEach(todo => {
        todolistUl.append(`
        <li>${todo.text}</li>
        `)
    })
})

// Event handler for save button. e is event
newTodoButton.click( e => {
e.preventDefault();
// What the user wrote in the form
const userText = newTodoInput.val();
console.log(userText);
})
// #todolist is in index.html
const todolistUl = $("#todolist");
const newTodoInput = $("#new-todo");
const newTodoButton = $("#save");

// Goes through each todo and appends a new list element to the page inside of todoListUl
function renderTodos(data) {
    todolistUl.empty();
    data.forEach(todo => {
        todolistUl.append(`
    <li>${todo.text}</li>
    `)
    })
}

// data and todo can be called any other name here. They're arbitrary.
$.get("/api/todos").then(data => {
    console.log(data);
    // Call the renderTodos function again otherwise refreshing will clear all todos
    renderTodos(data);
})

// Event handler for save button. e is event
newTodoButton.click(e => {
    // Prevents the form from clearing when submitted
    e.preventDefault();
    // What the user wrote in the form
    const userText = newTodoInput.val();
    console.log(userText);
    const newTodo = {
        text: userText,
        done: false
    };
    $.post("/api/todos", newTodo).then(() => {
        $.get("/api/todos").then(data => {
            console.log(data);
            renderTodos(data);
        })
    });
})
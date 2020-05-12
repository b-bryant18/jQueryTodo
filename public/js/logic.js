// #todolist is in index.html
const todolistUl = $("#todolist");
const newTodoInput = $("#new-todo");
const newTodoButton = $("#save");

// 
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
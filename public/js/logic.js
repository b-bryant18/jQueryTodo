// #todolist is in index.html
const todolistUl = $("#todolist");

// data and todo can be called any other name here. They're arbitrary.
$.get("/api/todos").then(data => {
    console.log(data);
    data.forEach(todo => {
        todolistUl.append(`
        <li>${todo.text}</li>
        `)
    })
})
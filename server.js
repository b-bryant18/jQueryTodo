// Dependencies tell node which packages are needed
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

const todos = [
    {
        text: "Walk the dog",
        done: false,
    },
    {
        text: "Wash the car",
        done: true,
    }

];

app.listen(PORT, () => {
    // Use this line to create routes for all files inside the public folder(top level folder).
    //  No need to make routes for every file
    app.use(express.static("public"))
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "public/index.html"));
    })

    app.get("/api/todos", (req, res) => {
        res.json(todos);
    })

    console.log("Server started at http://localhost:" + PORT);
});

// Use nodemon server.js to run a live server that updates itself as changes are saved




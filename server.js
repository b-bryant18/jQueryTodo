// Dependencies tell node which packages are needed
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "public/index.html"));
    })
console.log("Server started at http://localhost:" + PORT);
});

// Use nodemon server.js to run a live server that updates itself as changes are saved




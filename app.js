const bookmarksControllers = require("./controllers/bookmarksControllers");
const express = require("express");

const app = express();

app.use("/bookmarks", bookmarksControllers);
app.use(express.json());

app.get("/", (request, response) => {
  console.log("GET request to /");
  response.send("Welcome to Bookmarks 'R' Us");
});

app.get("*", (request, response) => {
  console.log("GET request to *");
  response.status(404).json({ Error: "Page not found!" });
});

bookmarks.post("/", (request, response) => {
  console.log("GET request to /:post");
  bookmarksArray.push(request.body);
  response.status(201).json(bookmarksArray);
});

module.exports = app;

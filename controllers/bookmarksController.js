const express = require("express");
const { send } = require("express/lib/response");

const bookmarksArray = require("../models/bookmarks");

const bookmarks = express.Router();

bookmarks.get("/", (_, response) => {
  console.log("GET request to /bookmarks");
  response.json(bookmarksArray);
});

bookmarks.get("/:id", (request, response) => {
  //    const id = request.params.id
  const { id } = request.params;
  console.log("GET request to /:id");
  if (bookmarksArray[id]) {
    response.json(bookmarksArray[id]);
  }
  response.redirect("/*");
});

bookmarks.get("/:index", (request, response) => {
  response.send(bookmarksArray[request.params.index]);
});

bookmarks.post("/", (request, response) => {
  response.send(request.body);
});

module.exports = bookmarks;

// bookmarksController.js
// Dependencies
const express = require("express");
// Files
const bookmarksArray = require("../models/bookmark");

// `.Router` creates a new controller
// that handles a sub-route.
// In this case, it will handle everything
// that starts with `/bookmarks`.
const bookmarks = express.Router();

// Routes
// The "/bookmarks" part of the route is already assumed because app.js
// has delegated it to us with its `app.use` line. So we just need "/"
// as our route here, and it's still /bookmarks.
bookmarks.get("/", (request, response) => {
  console.log("GET request to /bookmarks");
  response.json(bookmarksArray);
});

// Export the bookmarks controller/router
// so that `app` can delegate the `/bookmarks`
// route to it.
module.exports = bookmarks;

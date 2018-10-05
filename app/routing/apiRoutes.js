// --------------
// Route for data
// --------------

const friends = require("../data/friends");

// ------------
// Routing Data
// ------------

module.exports = app => {
  // Get data

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  // Post data

  app.post("/api/friends", (req, res) => {});
};

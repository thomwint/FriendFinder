// ------------
// Dependencies
// ------------

const path = require("path");

// -------
// Routing
// -------

module.exports = app => {
  //Home Page

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  //Survey Page

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //If no matching route

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

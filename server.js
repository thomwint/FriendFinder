// ------------
// Dependencies
// ------------

const express = require("express");
const path = require("path");

// --------------
// Express Server
// --------------

const app = express();

// ----
// Port
// ----

const PORT = process.env.PORT || 8080;

// -------------------
// Handle data parsing
// -------------------

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -------
// Routers
// -------

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ------------------
// Listener for serve
// ------------------

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

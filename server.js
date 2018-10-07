// ------------
// Dependencies
// ------------

const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

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
app.use(express.static(path.join(__dirname, './app/public')));
app.use(bodyParser.text());

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
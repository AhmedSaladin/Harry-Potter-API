const { port } = require("./env");
const express = require("express");
const routes = require("./app");
const app = express();

app.use(express.json());
app.use("", routes);

app.listen(port, () => {
  console.log("Working...........");
});

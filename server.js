const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  path = require("path");
require("dotenv").config();

// variable
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes");
routes(app);

app.use((req, res) => {
  res.send("halaman tidak ditemukan :)");
});

//server
app.listen(port, () => console.log(`server running at port ${port}`));

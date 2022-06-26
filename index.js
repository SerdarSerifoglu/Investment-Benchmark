const express = require("express");
var cors = require("cors");
const path = require("path");
require("./backend/helpers/database/mongo-connection.js");
const routers = require("./backend/routers/index");

const app = express();
app.use(cors());

app.use("/api", routers);

app.use(express.static(path.join(__dirname, "")));

const port = 3000;

app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  var url = req.get("User-Agent");
  res.send("<h1>" + url + "</h1>");
});

app.listen(3000, () => {
  console.log("Iniciando el servidor de express");
});

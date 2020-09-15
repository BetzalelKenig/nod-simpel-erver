let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.sendFile(index.html);
});
app.get("/home", (req, res) => {
  res.sendFile('./index.html');
});

app.listen(9999);

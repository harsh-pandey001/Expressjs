const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "templates"))) //  middleware 

app.use('/',require(path.join(__dirname, 'Routes/nav1.js')))

app.listen(port, () => {
  console.log(`project listening on port at http://localhost:${port}`);
});



const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ defaultLayout: 'main' });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/',require(path.join(__dirname, 'Routes/nav1.js')))
app.use(express.static(path.join(__dirname, "views"))) //  middleware 




app.listen(port, () => {
  console.log(`project listening on port at http://localhost:${port}`);
});



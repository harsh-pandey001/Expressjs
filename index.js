// const express = require("express");

// const app = express();
// app.use(express.json());
// app.listen(3000, () => {
//   console.log("The server is active on port 3000");
// });

const express = require("express");
const path = require("path");
const { nextTick } = require("process");

const app = express();
const port = 3000;

//we can create custom middleware 
const harshmiddleware  = (res, req, next)=>{
    console.log(req)
    next()
}

app.use(harshmiddleware)

app.use(express.static(path.join(__dirname, "public"))) //  middleware 

app.get("/hello/:name", (req, res) => {
  res.send("Hello World!"+ req.params.name);
});


app.get("/about", (req, res) => {
    res.send('its About Page')
}); // While changing the page

app.get("/json", (req, res) => {
    res.json({
        "Name" : "Harsh Pandey"
    })
}); //getting json file 



app.get("/file", function (req, res) {
  res.sendFile(path.join(__dirname, "/sample.html"));
});  //  Getting the Html file through routing

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


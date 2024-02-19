const express = require("express");
const path = require("path");
const connectDB = require('./db')
const router = require('./backend/routes/formRoute')
const app = express();
const port = 3000;
app.use(express.json())
//we can create custom middleware 
// const harshmiddleware  = (res, req, next)=>{
//     console.log(req)
//     next()
// }
// app.use(harshmiddleware)

// app.use(express.static(path.join(__dirname, "public"))) //  middleware 
app.use(express.static(path.join(__dirname, "public"))) //  middleware 

// app.get("/hello/:name", (req, res) => {
//   res.send("Hello World!"+ req.params.name);
// });
// var cors = require('cors')

connectDB(); 

// app.post('/', (req, res) => {
//   res.send(


//   )
// })

app.use("/form",router)


// app.use(cors())
// app.use(express.json())
// app.get("/about", (req, res) => {
//     res.send('its About Page')
// }); // While changing the page

// app.get("/json", (req, res) => {
//     res.json({
//         "Name" : "Harsh Pandey"
//     })
// }); //getting json file 

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "/form/form.html"));
// });  //  Getting the Html file through routing

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


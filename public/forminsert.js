// const User = require("../backend/models/user")
// const express = require('express');
// const router = express.Router();

let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");
let usn = document.getElementById("Username");
let city = document.getElementById("city");

let button = document.getElementById("sub");

// Insert a new user

button.addEventListener("click", forminsert);

//   newUser.save()
//     .then(() => {
//       console.log('User inserted successfully');
//       alert("User inserted successfully")
//     })
//     .catch((error) => {
//       console.error('Error inserting user:', error);
//       alert(error)
// });

function forminsert(e) {
  e.preventDefault();
  fetch("http://localhost:3000/form/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: fname.value + " " + lname.value,
      Username: usn.value,
      City: city.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

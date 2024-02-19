const User = require("../models/user");
const express = require("express");
const router = express.Router();

router.post(
  "/create",
  //   [
  //     body("name", "Enter a valid Name").isLength({ min: 3 }),
  //     body("email", "Enter a valid E-mail").isEmail(),
  //     body("password", "Password must be atleast 5 characters").isLength({
  //       min: 5,
  //     }),
  //   ],
 async (req, res) => {
    console.log("connected with backend", req.body);
   const newuser = new User({
    Name: req.body.Name,
    Username: req.body.Username,
    City : req.body.City 
   });

  let complete =  await newuser.save()
    // new User({
    //   Name: req.body.Name,
    //   Username: req.body.Username,
    //   City : req.body.City 
    // }).save().then(() => {
    //     console.log('User inserted successfully');
    //   })
    //   .catch((error) => {
    //     console.error('Error inserting user:', error);
    //   });
    res.json({complete})
  }
);

module.exports = router;

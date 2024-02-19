const mongoose = require("mongoose");


const connectDB = (props) => {
  mongoose.connect("mongodb://localhost:27017/latestdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Insert a new user
  // const newUser = new User({
  //     username: 'john_doe',
  //     email: 'john@example.com',
  //   });
  // newUser.save()
  //   .then(() => {
  //     console.log('User inserted successfully');
  //   })
  //   .catch((error) => {
  //     console.error('Error inserting user:', error);
  //   });

  // Event handling for successful connection
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  // Event handling for connection error
  mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
  });
};


module.exports = connectDB;

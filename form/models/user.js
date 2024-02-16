const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    Firstname:{
        type: String,
        require: true
    },
    Lastname:{
        type: String,
        require: true,
    },
    Username:{
        type: String,
        require: true
    },
    City:{
        type: String,
        require: true
    },
    Zip:{
        type: String,
        require: true
    },

  });

//module.exports = mongoose.model('user',UserSchema);
const User = mongoose.model('user',UserSchema);
User.createIndexes();
module.exports = User;
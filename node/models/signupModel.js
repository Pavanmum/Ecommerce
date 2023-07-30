const mongoose = require('mongoose'); // Erase if already required
const { Schema } = mongoose
const JWT = require("jsonwebtoken")


// Declare the Schema of the Mongo model
const userSchema = new Schema({
    firstname:{
        type: String,
        required: [true,'Please enter your name'],
        trim: true
    },
    lastname:{
        type: String,
        required: [true,'Please enter your name'],
        trim: true
    },
    email:{
        type: String,
        required: ['Please enter your email'],
        trim: true,
        lowercase:true,
      
    },
    mobile:{
        type: String,
        required: [true,'Please enter your number'],
        trim: true
    },
    password:{
        type:String,
        select: false,
    },
},{timestamps:true});

userSchema.method = {
    jwtToken(){
        return JWT.sign(
            {id: this.id, email: this.email},
            process.env.JWT_SECRET,
            { expiresIn: '24h'}
        )
    }
}

const userModel = mongoose.model('users', userSchema )
//Export the model
module.exports = userModel


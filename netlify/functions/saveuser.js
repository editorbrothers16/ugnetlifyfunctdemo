
require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoURI = process.env.MURI
const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    }
    connectToMongo();
const UserSchema = new Schema({
   
   
    email:{
        type: String,
        required: true, 
    },
    password:{
        type: String,
        required: true, 
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
const User = mongoose.models?.User || mongoose.model("User", UserSchema);
exports.handler = async(event)=>{
    const bod = JSON.parse(event.body)
    const {password,email,} = bod;
    const user = new User({
        email, password
            })
const sav = await user.save()

      return{
               statusCode:200,
                      body: JSON.stringify({email:sav.email}),
                          }
      }
import mongoose from "mongoose";
import { string } from "zod";

const Schema = mongoose.Schema


const UserSchema = new Schema({

  email : {
    type : String,
    unique : true,
    required : [true, "email is required"]
  },

  password : {
    type : String,
    required : [true, "password is required"]
  },

  firstName : {
    type : String,
  },

  lastName : {
    type : String,
  },

  phoneNumber : {
    type : Number,
    required : [true,"Phone number is required."],
    unique : true
  }


})

const UserModel = mongoose.model("Users",UserSchema)

export {UserModel}
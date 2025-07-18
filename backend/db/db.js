import mongoose from "mongoose";


const Schema = mongoose.Schema

const ObjectId = mongoose.SchemaTypes.ObjectId


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

const CourseSchema = new Schema({
  
  Title : {
    type : String,
    required : [true, "Course Title is required"]
  },

  CreatorID: {
    type:ObjectId,
  },

  Creator:{
    type:String,  // Obnject ID  in future 
    required:[true, "Creator is required"]
  },

  Language:{
    type:String,
    required:[true, "Course Language is required"]
  },

  Price:{
    type:Number,
    required:[true, "Price is required"]
  },

  shortDesc:{
    type:String,
  },

  TotalHours:{
    type:Number
  }
})

const UserModel = mongoose.model("Users",UserSchema)
const CourseModel = mongoose.model("Courses",CourseSchema)


export {UserModel}
export {CourseModel}
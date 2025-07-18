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

const InstituteSchema = new Schema({
  
  name : {
    type : String,
    required : [true,"Name is required"]
  },

  description : {
    type : String,
    required : [true,"Description is required"]
  },

  address : {
    type : String,
  },

  contactEmail : {
    type : String,
    required : [true,"Contact Email is mandatory"]
  },

  phone : {
    type : Number,
    required : [true ,"Phone Number is required."],
    unique : true
  },

  password : {
    type : String,
    required : [true ,"Password is required."]
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



const CourseModel = mongoose.model("Courses",CourseSchema)

const UserModel = mongoose.model("Users",UserSchema)

const InstituteModel = mongoose.model("Institutes",InstituteSchema)

export {UserModel,InstituteModel,CourseModel}
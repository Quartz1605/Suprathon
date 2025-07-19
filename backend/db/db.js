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

const CourseSchema = new Schema({    // Registration count pending
  
  Title : {
    type : String,
    required : [true, "Course Title is required"]
  },

  CreatorID: {
    type:ObjectId,
  },

  CreatorName:{
    type:String,   
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

  Desc:{
    type:String,
    default:""
  },

  TotalHours:{
    type:Number
  },

  registeredCount: {
    type: Number,
    default: 0
  }
})


const EventSchema = new Schema({    // Registration count pending
  Title : {
    type:String,
    required:[true, "Event Title is required"]
  },

  shortDesc:{
    type:String,
    required:[true, "Event short desc is required"]
  },

  Desc:{
    type:String,
    default:""
  },

  Creator:{
    type:String,
    required:[true, "Event creator is required"]
  },

  Category:{
    type:String,
    required:[true, "Event Category is required"]
  },

  endDate : {
    type:String,   // Fufuture mein Date Daalna Hai 
    required:[true, "Event Deadline is required"]
  },

  eventTypeMode : {  // Online or Offline
    type:String,
    required:[true, "Event Mode is required"]
  },

  eventTypeMember : {   // Solo or Team
    type:String,
    required :[true, "Event Member/Solo is required "]
  },

  Price : {
    type:Number,
    required:[true, "Event price is required"]
  },

  Prizes:{
    type:Number,
    required:[true, "Event Prizes are required"]
  },

  registeredCount: {
    type: Number,
    default: 0
  },

  ImageUrl : {
    type : String,
    default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jGXDtpoKU2QoWvZJinXfw7LeRGrzNA_Xmg&s"
  }
},{timestamps : true})

const BookmarkSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
  },
  itemId: {
    type: ObjectId,
    required: true,
  },
  itemType: {
    type: String,
    enum: ['event', 'course'],
    required: true,
  }
});

const RegistrationSchema = new Schema({

  eventCourseId : {
    type : ObjectId,
    required : [true,"Event Id is required !"],
    unique : true
  },

  userEmail : {
    type : String,
    required : [true,"User Email is required !"],
  },

  certificateIssued : {
    type : Boolean,
    default : false
  },

  type : {
    type : String,
    enum : ["Event","Course"],
    required : [true,"Event type is mandatory."]
  }

  // payemnt Can be added.

})

const ProfileSchema = new mongoose.Schema({
    emailId: {
      type: String,
      required: true,
      unique: true, // One profile per email
    },
    about: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
    college: {
      type: String,
      default: "",
    },
    education: {
      type: String,
      default: "",
    },
    socialLinks: {
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
      twitter: { type: String, default: "" },
      portfolio: { type: String, default: "" },
    },
    // certificates: [
    //   {
    //     title: String,
    //     issuedBy: String,
    //     date: Date,
    //     courseOrEvent: String,
    //     fileUrl: String, // Optional if you want to upload certificates
    //   },
    // ],
});

const ReviewSchema = new Schema({

  userEmail : {
    type : String,
    required : [true,"User Email is required !"],
  },

  eventCourseId : {
    type : ObjectId,
    required : [true,"Event Id is required !"],
    unique : true
  },

  type : {
    type : String,
    enum : ["Event","Course"],
    required : [true,"Event type is mandatory."]
  },

  review : {
    type : String,
    required : [true,"Review is mandatory."]
  },

  rating : {
    type : Number,
    enum : [1,2,3,4,5],
    default : 5
  }

})


const CourseModel = mongoose.model("Courses",CourseSchema)

const UserModel = mongoose.model("Users",UserSchema)

const InstituteModel = mongoose.model("Institutes",InstituteSchema)

const EventModel = mongoose.model("Events", EventSchema)

const BookmarkModel = mongoose.model("Bookmarks", BookmarkSchema)


const RegistrationModel = mongoose.model("Registrations",RegistrationSchema)

const ProfileModel = mongoose.model("Profile", ProfileSchema)

const ReviewModel = mongoose.model("Reviews",ReviewSchema)

export {UserModel,InstituteModel,CourseModel, EventModel,RegistrationModel, BookmarkModel, ProfileModel,ReviewModel}

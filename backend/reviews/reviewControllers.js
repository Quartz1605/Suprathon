import { UserModel } from "../db/db.js" 
import { EventModel } from "../db/db.js"
import { CourseModel } from "../db/db.js"
import { ReviewModel } from "../db/db.js"


const eventReviewController = async(req,res) => {

  const email = req.email
  const id = req.body.id

  try{

    const user = await UserModel.findOne({
      "email" : email
    })

    if(!user){
      return res.status(400).json({"message" : "User doesn't exist."})
    }

    const event = await EventModel.findById(id)

    if(!event){
      return res.status(400).json({"message" : "Event doesn't exist"})
    }

    const review = await ReviewModel.create({
      "eventCourseId" : event._id,
      "userEmail" : user.email,
      "type" : "Event",
      "review" : req.body.review,
      "rating" : req.body.rating
    })

    if(review){
      return res.status(201).json({"message" : "Review Added Successfully"})
    }else{
      return res.status(400).json({"message" : "Error adding review"})
    }
  }catch(e){
    return res.status(400).json({"message" : "Some backend error happenend " + e})
  }

}

const courseReviewController = async(req,res) => {

  const email = req.email
  const id = req.body.id
  
  

  const user = await UserModel.findOne({
    "email" : email
  })

  if(!user){
    return res.status(400).json({"message" : "User doesn't exist."})
  }

  const course = await CourseModel.findById(id)

  
  if(!course){
    return res.status(400).json({"message" : "Course doesn't exist"})
  }

  const review = await ReviewModel.create({
    "eventCourseId" : course._id,
    "userEmail" : email,
    "type" : "Course",
    "review" : req.body.review,
    "rating" : req.body.rating

  })

  if(review){
    return res.status(201).json({"message" : "Review Added successfully."})
  }else{
    return res.status(400).json({"message" : "Error Adding Review."})
  }

}

export {eventReviewController,courseReviewController}
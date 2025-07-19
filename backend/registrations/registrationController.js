import { UserModel } from "../db/db.js" 
import { EventModel } from "../db/db.js"
import { RegistrationModel } from "../db/db.js"
import { CourseModel } from "../db/db.js"


const eventRegistrationController = async(req,res) => {

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

    const registration = await RegistrationModel.create({
      "eventCourseId" : event._id,
      "userEmail" : user.email,
      "type" : "Event"
    });

    await EventModel.findByIdAndUpdate(event._id, {
      $inc: { registeredCount: 1 }
    });

    if(registration){
      return res.status(201).json({"message" : "Registered successfully"})
    }else{
      return res.status(400).json({"message" : "Error Registering User."})
    }
  }catch(e){
    return res.status(400).json({"message" : "Some backend error happenend " + e})
  }

}

const courseRegistrationController = async(req,res) => {

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

  const registration = await RegistrationModel.create({
    "eventCourseId" : course._id,
    "userEmail" : email,
    "type" : "Course"
  })

  await CourseModel.findByIdAndUpdate(event._id, {
    $inc: { registeredCount: 1 }
  });

  if(registration){
    return res.status(201).json({"message" : "Registered successfully"})
  }else{
    return res.status(400).json({"message" : "Error Registering User."})
  }

}

export {eventRegistrationController,courseRegistrationController}
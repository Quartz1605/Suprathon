import { InstituteModel } from "../db/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const maxAge = 15*24*60*60*100;

const createToken = (instituteId) => {

  return jwt.sign({"id" : instituteId},process.env.JWT_SECRET,{expiresIn : maxAge})

}


const instituteSignupController = async(req,res) => {

  const {contactEmail,password} = req.body
  
  if(!contactEmail || !password){
    return res.status(400).json({"message" : "Email and Password are required"})
  }

  try{

    const institueExist = await InstituteModel.findOne({"contactEmail" : contactEmail})

    if(institueExist){

      return res.status(400).json({"message" : "Institute already exists, Pls Login."})

    }

    const hashPassword = await bcrypt.hash(password,4);
    req.body.password = hashPassword

    const institue = await InstituteModel.create(req.body)

    if(institue){
      
      res.cookie("jwt",createToken(institue._id),{
        maxAge,
        secure:true, 
        sameSite:"None"
      })

      return res.status(201).json({"message" : "Institute registered successfully."})
    }else{
      return res.status(400).json({"message" : "Error registering institute"})
    }

}catch(e){
  return res.status(400).json({"message" : "Some backend error " + e})
}

}

const institueLoginController = async(req,res) => {

  const {contactEmail,password} = req.body

  if(!contactEmail || !password){
    return res.status(400).json({"message" : "ContactEmail, password are mandatory."})
  }

  const institute = await InstituteModel.findOne({
    "contactEmail" : contactEmail
  })

  if(!institute){
    return res.status(401).json({"message" : "Institute does not exist. Pls Signup First."})
  }

  const isPasswordCorrect = await bcrypt.compare(password,institute.password)

  if(isPasswordCorrect){
    
    res.cookie("jwt",createToken(institute._id),{
      maxAge,
      secure:true, 
      sameSite:"None"
    })

    return res.status(200).json({"message" : "Welcome","institute_name" : institute.name})

  }else{
    return res.status(401).json({"message" : "Password is incorrect"})
  }

}

export {instituteSignupController,institueLoginController}
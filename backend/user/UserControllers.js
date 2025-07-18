import { UserModel } from "../db/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const maxAge = 3*24*60*60*100;

const createToken = (email) => {

  return jwt.sign({"email" : email},process.env.JWT_SECRET,{expiresIn : maxAge})

}


const userSignupController = async(req,res) => {

  const {email,password} = req.body
  
  if(!email){
    return res.status(400).json({"message" : "Email not provided"})
  }

  try{

    const userExist = await UserModel.findOne({"email" : email})

    if(userExist){

      return res.status(400).json({"message" : "User already exsits,Pls signup"})

    }

    const hashPassword = await bcrypt.hash(password,4);
    req.body.password = hashPassword

    const user = await UserModel.create(req.body)

    if(user){
      
      res.cookie("jwt",createToken(email),{
        maxAge,
        secure:true, 
        sameSite:"None"
      })

      return res.status(201).json({"message" : "User created successfully."})
    }else{
      return res.status(400).json({"message" : "Error creating user."})
    }

}catch(e){
  return res.status(400).json({"message" : "Some backend error " + e})
}

}

export {userSignupController}
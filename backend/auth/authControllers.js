import { UserModel } from "../db/db.js";
import { ProfileModel } from "../db/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const maxAge = 20*24*60*60*100;

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

      return res.status(400).json({"message" : "User already exists,Pls Login."})

    }

    const hashPassword = await bcrypt.hash(password,4);
    req.body.password = hashPassword

    const user = await UserModel.create(req.body)

    if (user) {
      // 🌟 Create a default profile
      await ProfileModel.create({
        emailId: email,
        about: "",
        skills: [],
        college: "",
        education: "",
        socialLinks: {
          linkedin: "",
          github: "",
          twitter: "",
          portfolio: "",
        },
        // certificates: []
      });
      
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

const userLoginController = async(req,res) => {

  const {email,password} = req.body

  if(!email || !password){
    return res.status(400).json({"message" : "email, password are mandatory."})
  }

  const user = await UserModel.findOne({
    "email" : email
  })

  if(!user){
    return res.status(401).json({"message" : "User does not exist. Pls Signup First."})
  }

  const isPasswordCorrect = await bcrypt.compare(password,user.password)

  if(isPasswordCorrect){
    
    res.cookie("jwt",createToken(email),{
      maxAge,
      secure:true, 
      sameSite:"None"
    })

    return res.status(200).json({"message" : "Welcome","user" : {"firstName" : user.firstName}})

  }else{
    return res.status(401).json({"message" : "Password is incorrect"})
  }

}

export {userSignupController,userLoginController}
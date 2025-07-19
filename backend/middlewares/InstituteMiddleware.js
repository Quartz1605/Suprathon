import jwt from "jsonwebtoken"

const InstituteMiddleware = (req,res,next) => {

  const token = req.cookies.jwt

  if(!token){
    return res.status(401).send("You are not authenticated.")
  }

  const isVerified = jwt.verify(token,process.env.JWT_SECRET);

  if(isVerified){
    req.id = isVerified.id
    console.log(req.id)
    next();
  }else{
    res.status(403).send("Tokens are expired")
  }

}

export {InstituteMiddleware}

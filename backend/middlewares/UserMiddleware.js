import jwt from "jsonwebtoken"

const UserMiddleware = (req,res,next) => {

  const token = req.cookies.jwt

  if(!token){
    return res.status(401).send("You are not authenticated.")
  }

  const isVerified = jwt.verify(token,process.env.JWT_SECRET);

  if(isVerified){
    req.email = isVerified.email
    next();
  }else{
    return res.status(403).send("Tokens are expired")
  }

}

export {UserMiddleware}

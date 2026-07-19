 import { NextFunction, Request,Response } from "express";
 import  Jwt, { JwtPayload }  from "jsonwebtoken";
import { jwt_password } from "./config";
 export const usermiddleware=(req:Request,res:Response,
    next:NextFunction)=>{
        const header=req.headers["authorization"];
        const decoded= Jwt.verify(header as string,jwt_password)
     if(decoded){
        (req as any).userId= (decoded as JwtPayload). id;
        next()
     } else{
        res.status(403).json({
            message:"you are logged in"
        })
     }
     }  
 
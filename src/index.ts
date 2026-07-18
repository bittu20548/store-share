 
 import express from "express";
 import mongoose from "mongoose";

   mongoose.connect("mongodb://localhost:27017/brain");
 import { UserModel } from "./db";
 import jwt from "jsonwebtoken";
import { Jwt_password } from "jsonwebtoken";
     const app=express();
     app.use(express.json());

  app.post ("/api/v1/signup",async (req, res) =>{
   const Username=req.body.Username;
   const password=req.body.password;
  try{

    await UserModel.create({
    Username: Username,
    password: password});
    res.json({
        message:"User signdup"
    });
      } catch(e){
        res.status(411).json({
            message:"user alrady exixt"
        });
    }
      });
   
  

  app .post ("/api/v1/signin", async(req, res) => {
     const Username=req.body.Username;
     const password=req.body.password;
     const existingUser= await UserModel.findOne({
      Username ,
       password
     
  })
if (existingUser){
    const token =jwt.sign({
        id: existingUser._id},
        jwt_password);
        
         res.json({
            token

        })
     } else{
            res.status(403).json({
                message:"incorrect credantials"
            })
        }
    }
     );
  
  app .post ("/api/v1/content", (req, res) => {
    const link=req.body.link;
    const type=req.body.type;

  })
  
  app .get ("/api/v1/content", (req, res) => {
   res.send("hi");
  })
  
   app.listen(4000,() =>{
    console.log("backend is running ")
   });
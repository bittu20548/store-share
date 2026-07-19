 
 import express from "express";
 import mongoose from "mongoose";

   mongoose.connect("mongodb://localhost:27017/brain");
 import { contentMOdel, UserModel } from "./db";
 import jwt from "jsonwebtoken";
 import { jwt_password } from "./config";
import { usermiddleware } from "./middleware";
import { share } from "node:stream/iter";

//import { Jwt_password } from "jsonwebtoken";
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
  
  app .post ("/api/v1/content",usermiddleware,async (req, res) => {
    const link=req.body.link;
    const type=req.body.type;
    const title=req.body.title;
    contentMOdel.create({
      link,
      type,
      title,
      //@ts-ignore
      userId:req.userId,
      tags:[]
    })
    return res.json({
      message:"content added"
    })

  });
  
  app .get ("/api/v1/content",usermiddleware, async(req, res) => {
    //@ts-ignore8  
    const userId=req.userId;
      const content= await contentMOdel.find({
        userId
      }).populate("userId","Username");
      res.json({
        content
      })

   
  })
  
   app.listen(4000,() =>{
    console.log("backend is running ")
   });
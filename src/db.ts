
import mongoose, {Schema,Model}from "mongoose";
import { model } from "mongoose";
import { hash } from "node:crypto";
import { link } from "node:fs";
import { ref, title } from "node:process";
 
 const UserSchema=new Schema({
    Username:{type:String,unique:true},
    password:String
 })
export const UserModel= model ("User",UserSchema);


const contentSchema=new Schema({
   title:String,
   type:String,
   link:String,
   tags:[{ type: Schema.Types.ObjectId,ref:"tags"}],
   userId:{ type: Schema.Types.ObjectId,ref:'User',required:true}

});
export const contentMOdel = model("content",contentSchema);

const shareSchema=new Schema({
  hash:String,
  UserId:{
   type:Schema.Types.ObjectId,
   ref:"User",
   unique:true

  }

});
export const shareModel=model("link",shareSchema);
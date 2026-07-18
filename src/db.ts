
import mongoose, {Schema,Model}from "mongoose";
import { model } from "mongoose";
import { ref, title } from "node:process";
 
 const UserSchema=new Schema({
    Username:{type:String,unique:true},
    password:String
 })
export const UserModel= model ("User",UserSchema);


const contentSchema=new Schema({
   title:String,
   link:String,
   tags:[{ type: Schema.Types.ObjectId,ref:"tags"}],
   userId:{ type: Schema.Types.ObjectId,ref:'user',required:true}

})
export const contentMOdel = model("content",contentSchema);
import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
        unique:true
        // Unique true means when you create a  account using one email id  and 
        // again you want to create a account using the same mail id it can not create.
      },
      password:{
        type:String,
        required:true,
      },
      cartData:{
        type:Object,
        default:{}
      },
  
},{minimize:false})
// the above line helps to create a empty cart.

const userModel=mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;
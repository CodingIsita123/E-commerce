import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        //  we write required true to safe the name
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:Array,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    sizes:{
        type:Array,
        required:true
    },
    bestseller:{
        type:Boolean,
    },
    date:{
        type:Number,
        required:true
    }

})
const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel;

// If the model is already present then it used otherwise it create a new model then it used.
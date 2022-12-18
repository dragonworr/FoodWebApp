const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const cartSchema =new mongoose.Schema({
    addCart:[{type:ObjectId,ref:"Post"}],
    address:{
        type:String,
        required:true
    },
    sector:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Integer,
        required:true
    }
})
mongoose.model("Cart",cartSchema)
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
    },
    userEmail:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    userContact:{
        type:Number,
        required:true,

    },
    userAddress:{
        type:String,
        require:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        trim:true,
    },
    age:{
        type:Number,
        required:true,
    }
},{timestamps:true});

module.exports=new mongoose.model("user",userSchema);
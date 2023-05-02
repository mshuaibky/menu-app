const mongoose=require('mongoose')


const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    foodOne:{
        type:String,

    },
    foodTwo:{
        type:String,
        
    },
    foodThree:{
        type:String,
        
    },
    foodFour:{
        type:String,
        
    }
})

module.exports=mongoose.model('Menu',menuSchema)

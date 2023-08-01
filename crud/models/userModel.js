const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'Name is required'],
        trim:true,
        maxLength:[30,'Name mustbe less than 30 chars']

    },
    email:{
        type:String,
        required:[true,'Email is requierd'],
        unique:true,
    }
})

module.exports= mongoose.model('User',userSchema)
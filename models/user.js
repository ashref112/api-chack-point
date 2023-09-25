// require mongoose 
const mongoose = require('mongoose')

//create schema
const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone : number
})

//export 
module.exports = connect = mongoose.model('user',userSchema)
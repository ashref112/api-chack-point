// require mongoose 
const mongoose = require('mongoose')

//create schema
const schema = mongoose.Schema

const personSchema = new schema({
    name:{
        type:String,
        required:true
    },
    age :Number,
    favoriteFoods: [{type:String}],
})

//export 
module.exports = connect = mongoose.model('person',personSchema)
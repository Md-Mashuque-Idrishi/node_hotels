//import mongoose
const mongoose = require('mongoose');

//●	Each Person's Detail ( like chef, owner, manager, waiter )
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['like', 'chef', 'manager', 'waiter'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;
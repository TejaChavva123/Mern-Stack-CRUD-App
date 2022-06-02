const mongoose = require("mongoose");
const schema = mongoose.Schema;

var userSchema = new schema({
    name:{
        type:String,
        required:true,
        maxlength:32
    },
    job:{
        type: String,
        required:true,
        maxlength:32
    },
    company:{
        type: String,
        required: true,
        maxlength:32
    },
    salary:{
        type:Number,
        required: true,
        maxlength:32
    }
})

module.exports = mongoose.model("Person",userSchema)
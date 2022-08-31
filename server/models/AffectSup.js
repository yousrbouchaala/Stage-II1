const mongoose = require('mongoose') 
const Super = new mongoose.Schema({
    nomEtud : {
    type: String,
        required: [true, "Please provide un etud"],
        unique: false , 
    
    },
    
    nomSup : {
    type: String,
    required: [true, "Please provide a sup"],
    unique: true ,
    },
   

}); 
const AffectSup = mongoose.model("AffectSup", Super) 
module.exports= AffectSup
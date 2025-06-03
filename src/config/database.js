// npm i mongoose
const mongoose = require("mongoose");
const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://learningnodeuser:ZZAQF9ZzkzvBtujS@learningnodejs.3sout63.mongodb.net/devTinder?retryWrites=true&w=majority&appName=LearningNodejs");
};
module.exports = connectDB;



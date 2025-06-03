const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup",async (req,res)=>{
     
     const userObj = {
          firstName: "Padma",
          lastName: "vathy",
          emailId: "padmavathy@gmail.com",
          password: "Padu@123"
     }
     // Creating a new instance of user model
     const user = new User(userObj);
     try{
          await user.save();// Save this user data to database
          res.send("User Added successfully!");
     } catch(err){
          res.status(400).send("Error saving the user: ", err.message);
     }
});
connectDB(). then(()=>{
    console.log("Database connection established...");
    app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777");
    
});
})
.catch((err)=>{
    console.error("Database cannot be connected!!");
})



// These route handlers are called as Middlewares
// Get Request to /users => goes to chain of middlewares and handles
// What is Middleware
// How express js basically handles requests behind the scenes
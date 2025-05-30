const express = require("express");
const app = express();
//Order of the routes matter
// app.use("/route",rH1, rH2, rH3, rH4, rH5)
// app.use("/route",[rH1, rH2], rH3, rH4, rH5)
// app.use("/route",rH1, [rH2], rH3, rH4, rH5) handling multiple route handlers
app.use("/user",(req,res,next)=>{
    console.log("Handlingg the route user!!");
    // res.send("Response!!");
    next();
},
(req,res)=>{
    console.log("Handling the route user 2!!");
    res.send("2nd Response!!");
}
);
app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777");
    
});
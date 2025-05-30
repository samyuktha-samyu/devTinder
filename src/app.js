const express = require("express");
const app = express();
//Order of the routes matter
// app.get("/",(req,res)=>{
//     res.send({firstName: "sam", lastName:"yuktha"});
// });
// app.get(/a/,(req,res)=>{
//     res.send({firstName: "s", lastName:"hsaaa"});
// });
app.get("/user/:userid/:name",(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send({firstName: "s", lastName:"hssdfaaa"});
});
// app.get("/user",(req,res)=>{
//     res.send({firstName: "sam", lastName:"yuktha"});
// });
// app.post("/user",(req,res)=>{
//     res.send("Data successfully saved to the database!");
// });
// app.delete("/user",(req,res)=>{
//     res.send("Deleted successfully!");
// });
// app.use("/hello/2",(req, res)=>{
//     res.send("Hello Hello Hello22!");
// });
// app.use("/hello",(req, res)=>{
//     res.send("Hello Hello Hello!");
// });

// app.use("/test",(req, res)=>{
//     res.send("Hello from the server");
// });

// app.use((req, res)=>{
//     res.status(404).send("404 - Not Found");
// });
app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777");
});
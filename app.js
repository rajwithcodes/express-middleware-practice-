const express = require("express");
const app = express();
const port = 8080;

// Middleware to log the whole req object
app.use((req, res, next) => {
    console.log(req.method);  // stringify with indentation for readability
    next();
});
app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token === "give access"){
        console.log("Access Granted");
        next();
    }else{
        res.send("Access denied!");
    }
})
app.get("/api",(req,res)=>{
    res.send("Data");
})

// Routes
app.get("/", (req, res) => {
    res.send("Root");
});

app.get("/random", (req, res) => {
    res.send("HelloRandom");
});

// Start server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

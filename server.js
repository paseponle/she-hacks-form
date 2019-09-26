const express = require("express");
const bodyParser = require("body-parser");
const app=express();

app.use (bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true}));

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/colors",(req, res)=> {
    res.send(["red","blue","yellow","pink"])
});

app.get("/fruits",(req, res)=> {
    res.send(["Banana","Orange","Pineapple","Pawpaw"])
});
app.get("/details", (req, res) => {
    console.log(req.query);
    res.send(
        `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submitted`
    );
}
);
app.get("/bookTicket", (req, res) => {
    console.log(req.query);
    res.send(
        `hi ${req.query.name} you are traveling from <strong>${req.query.travelFrom}</strong> to <strong>${req.query.travelTo}</strong> on <strong>${req.query.Departure}</strong> form has been submitted`
    );
}
);

app.post("/login", (req, res) => {
    if(req.body.username==="paseponle" && req.body.password==="boy"){
        res.send("login sucessfull")
    }else{
        res.send("password or username incorrect")
    }
    console.log(req.body);
    res.send(`Username is ${req.body.username} and password is ${req.body.password}` );
    

}
);
app.use("*",(req,res)=>{
    res.status(404).send("<h1>404, page not found</h1>");
});
app.listen(3000, ()=>{
    console.log("server running at port 3000");
});
    
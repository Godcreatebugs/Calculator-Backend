const express= require("express")
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
//to get postt method
app.post("/",function(req,res){
  //calculattor logic
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1+n2;
  console.log("And the result is "+result);
  res.send("Thanks for posting your data.");
})
app.listen(3000,function(){
  console.log("Server started at 3000 port");
})

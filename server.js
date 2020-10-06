const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//gett file in this partticular format
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
//app retrieving data using ppost method
app.post("/", function(req, res) {
  var bodyWeight = Number(req.body.n1);
  var bodyHeight = Number(req.body.n2);
  var BMI = bodyWeight/(Math.pow(bodyHeight,2));
  res.send("Your BMI count is "+BMI);
})
//listten tto port 4000
app.listen(4000, function() {
  console.log("Listtening to Port 4000");
})

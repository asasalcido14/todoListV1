const express = require("express");
const bodyParser = require("body-parser");

const app  = express();

var items = ["Wake Up", "Brush Teeth", "Work Out"];

// app.use tellse express to use ejs
// app.set is REQUIRED to be directley under const = app express()
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

let day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
  let item = req.body.newItem;
  // body parser  //
  // newItem is packaged into item //


  items.push(item);
res.redirect("/");
// redirect to the home route //

});


app.listen(3000, function(){
  console.log("server is running on port 3000");
})

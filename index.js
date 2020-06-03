const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let campgrounds = [
  {name: "Salmon Creek", img: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"},
  {name: "Cheese Creek", img: "https://images.unsplash.com/photo-1559310589-2673bfe16970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
  {name: "Grand Creek",  img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
  {name: "Old Creek",    img: "https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"},
  {name: "Cousin Creek", img: "https://images.unsplash.com/photo-1505490096310-204ef067fe6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
  {name: "Milky Creek",  img: "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
  {name: "Stone Creek",  img: "https://images.unsplash.com/photo-1543039625-14cbd3802e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
  {name: "Boat Creek",   img: "https://images.unsplash.com/photo-1473706275339-3f28304fda5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
  {name: "Bridge Creek", img: "https://images.unsplash.com/photo-1550309510-626b2afc7970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
  {name: "Fisher Creek", img: "https://images.unsplash.com/photo-1590886252448-363529dba743?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}

];
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  let params = req.body;
  campgrounds.push(params);
  res.redirect("/campgrounds");
  console.log(campgrounds);
  //get data from form
  //add to campground array
  //redirect to show page(campground)
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(3000, process.env.IP, () => console.log("Server is running...."));
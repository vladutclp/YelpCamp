const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true}); //Create database
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup
const campgroundsSchema = new mongoose.Schema({
  name: String,
  image: String
});

 const Campground = mongoose.model("Campground", campgroundsSchema);



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



app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  //Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if(err){
      console.log(err);
    }
    else{
      res.render("campgrounds", {campgrounds: allCampgrounds});
    }
  });
  
});

app.post("/campgrounds", function(req, res){
  //Get data from the form in the params object
  let params = req.body;
  console.log(params);
  //Create a new campground with the data from the form
  Campground.create(
    {
      name: params.name, 
      image: params.image
    }, (err, campground) => {
      if(err){
        console.log(err);
      }
      else{
        //If the campground is created, redirect to #show page
        console.log(`Newly created campground:\n${campground}`);
        res.redirect("/campgrounds");
      }
    });
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(3000, process.env.IP, () => console.log("Server is running...."));
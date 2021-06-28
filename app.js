const express = require("express");
const bodyParser = require("body-parser");
//const request    = require("request");
const render = require("ejs");

const https = require("https");


const reviews = [

    {
        rating: 4,
        user: "",
        image: "../images/thinking.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
        rating: 4.5,
        user: "",
        image: "../images/thinking.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
        rating: 5,
        user: "",
        image: "../images/thinking.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },




]


const hair_types = [

    {
        description: "Beautiful Hair Beautiful Curls!",
        title: "Curly Hair",
        image: "../images/curly-hair.jpg"
    },
    {
        description: "Beautiful Hair Beautiful Curls!",
        title: "skin-fade",
        image: "../images/skin-fade.jpg"
    },
    {
        description: "Beautiful Hair Beautiful Curls!",
        title: "Braids",
        image: "../images/braids.jpg"
    },
    {
        description: "Beautiful Hair Beautiful Curls!",
        title: "ClipperCut",
        image: "../images/clippercut.png"
    },
    {
        description: "Beautiful Hair Beautiful Curls!",
        title: "cut back",
        image: "../images/cutback.png"

    },
    {
        description: "Beautiful Hair Beautiful Curls!",
        title: "Long Layers",
        image: "../images/longLayers.jpg"
    },





]


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    res.render("home", { hair_types, reviews });
});

app.listen(process.env.PORT || 3000, function() {

    console.log("connected server")

});
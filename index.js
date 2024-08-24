const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

app.use(
  express.urlencoded({ extend: true })
); /*data sent using anoother page is posted using this */

app.set(
  "view engine",
  "ejs"
); /* this line tells view engine to be ejs so we can change data in html using js*/
app.set(
  "views",
  path.join(__dirname, "views")
); /*tells to check for ejs file in views folder located in thsi directory*/
app.use(
  express.static(path.join(__dirname, "public"))
); /*tells to check for images which are static in public folder located in same directory*/

let posts = [
  {
    username: "ash",
    content: " I love coding",
  },
  {
    username: "dream",
    content: " i like dreaming",
  },
];

app.get("/viewposts", (req, res) => {
  /*renders view page*/
  res.render("index.ejs", { posts });
});

app.get("/newpost", (req, res) => {
  /*renders newpost page */
  res.render("new.ejs");
});

app.listen(port, () => {
  console.log("server is working");
});

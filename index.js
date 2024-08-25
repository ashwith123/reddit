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
    id: "1a",
    username: "@ash",
    content: " I love coding",
    imgurl:
      "https://imgs.search.brave.com/JEm7-kU7IBWtUlnJR7-0-uQirT8ns-EwNbRvc0ou_N0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDMvcm9iZXJ0LXBh/dHRpbnNvbi1hcy1i/cnVjZS13YXluZS1p/bi1mdWxsLWJhdG1h/bi1jb3N0dW1lLWlu/LWdjcGQtaHEtaW4t/dGhlLWJhdG1hbi5q/cGc",
  },
  {
    id: "2a",
    username: "@dream",
    content: " i like dreaming",
    imgurl:
      "https://imgs.search.brave.com/GKx3mkambU5Vau6fJsleYH1LfgsIXjUG70N_-0Fpm-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nbWVk/aWEucGxheXN0YXRp/b24uY29tL2lzL2lt/YWdlL1NJRVBEQy9z/cGlkZXItbWFuLTIt/c2NyZWVuc2hvdC1i/bGFja3N1aXQtZW4t/MjVtYXkyMy5qcGc_/JDEwMHB4JA",
  },
];

app.get("/viewposts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.get("/viewposts", (req, res) => {
  /*renders view page*/
  res.render("index.ejs", { posts });
});

app.get("/viewposts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/viewposts", (req, res) => {
  let { username, content, imgurl } = req.body;
  posts.push({
    username,
    content,
    imgurl,
  }); /* the above lone and this lne are adding username and content to array*/
  res.redirect("/viewposts");
});

app.listen(port, () => {
  console.log("server is working");
});

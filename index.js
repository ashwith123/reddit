const express = require("express");
const app = express();
const port = 8000;

app.use(
  express.urlencoded({ extend: true })
); /*sata sent using anoother page is posted using this */

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

app.listen(port, () => {
  console.log("server is working");
});

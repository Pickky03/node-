const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const { create } = require("express-handlebars"); // Updated import
const path = require("path");
const handlebars = create({ extname: ".hbs" });

app.use(express.static(path.join(__dirname, 'Public')))

// Template 
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.set("views", path.join(__dirname, "views"));

// HTTP logger
app.use(morgan("combined"));


app.get("/", (req, res) => {res.render("home");});
app.get("/News", (req, res) => {res.render("News");});
console.log(__dirname);


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");
// const parser = require('body-parser');
// const orm = require('./config/orm.js')

const app = express();

const burger_controller = require('./controllers/burger_contollers');

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', burger_controller);



app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}.`)
});

const express = require("express");
const ejs = require("ejs");
const path = require('path');

const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, HOST, () => {
    console.log(`Server is listening at http://${HOST}:${PORT}`);
});



app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
  });

  
app.get("/register", (req, res) => {
    res.render("register");
  });


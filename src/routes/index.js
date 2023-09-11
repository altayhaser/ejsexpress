const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.render('home');
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });
  
  
  router.get('/register', (req, res) => {
    res.render('register');
  });

  router.post('/register', (req, res) => {
    const data = req.body;
    const email = req.body.email;
    const password = req.body.password;
    console.log(data);
    console.log(email);
    console.log(password);

    const newUser = {"email" : email, "password": password };
    users.push(newUser);
    console.log(users);

    //bcrypt(password); // im working on this rigth now 

    //res.send(`your email : ${email} and your password :  ${password} have been save sucessfully`)
    res.redirect('/login');
  });
  
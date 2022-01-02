const express = require('express');
const router = express.Router();
// const dotenv = require("dotenv")
// dotenv.config()
const login = "admin";
const password = process.env.pass;

/* GET home page. */
router.get('/',(req, res)=> {
  res.render('index', { title: 'ㅋ ㅋ ㅋ' });
});

router.get('/login',(req, res)=> {
  res.render('login', { title: 'login' });
});

router.post('/login',(req, res)=> {
  const body = req.body;
  if(body.login === login && body.password === password){
    req.session.admin=1;
    
    res.redirect("/admin/");

  }else{
    res.redirect("/login"); 
  }

});

module.exports = router;

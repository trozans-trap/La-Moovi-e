var express = require('express');
var router = express.Router();


router.get('/home', (req,res)=>{
         res.render('home');
});

module.exports = router;
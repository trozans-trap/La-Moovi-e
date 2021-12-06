const express = require('express');
// const mongoose= require('mongoose');
const app = express();

app.set('view engine', 'ejs');

// const db = require('./config/keys').MongoURI;
// mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
//  .then(()=> console.log('MongoDb Connected...'))
//  .catch(err=> console.log(err));

app.use(express.static(__dirname + '/public'));

app.use('/',require('./routes/api'));

app.listen(process.env.PORT||8000,()=>{
    console.log("Port running Succesfully");
})
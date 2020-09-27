const express=require('express');
const app=express();
const port = 8000;
const path=require('path');
const cookieParser=require('cookie-parser');
const session = require('express-session');
const passport=require('passport');
const bodyParser = require('body-parser');


app.use(express.urlencoded({
    extended:true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
     console.log('error');
    }
    console.log('connected successfully');
 });
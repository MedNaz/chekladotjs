/**
 * Created by medjdoub on 13/03/17.
 */
var express = require("express");
var route = express.Router();
//var bcrypt = require('bcrypt');


route.get('/', function(req,res){

    res.render('signup');
});


route.post('/', function (req, res) {
    res.send('Sign up form submitted');
});

module.exports = route;
/**
 * Created by medjdoub on 13/03/17.
 */
var express = require("express");

var route = express.Router();


route.get('/', function(req, res){

    res.render('signin');
});

route.post('/', function (req, res) {
    res.send('Sign in Form submitted');

});

module.exports = route;


/**
 * Created by medjdoub on 13/03/17.
 */
var express = require("express");
var route = express.Router();


route.get('/',function(req,res){
    res.render('messaging');
});

module.exports = route;
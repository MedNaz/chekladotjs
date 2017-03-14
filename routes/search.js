/**
 * Created by medjdoub on 14/03/17.
 */
var express = require('express');

var route = express.Router();

route.get('/',function(req,res){
    res.render('search_result');
})

module.exports = route;

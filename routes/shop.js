/**
 * Created by medjdoub on 13/03/17.
 */
var express = require('express');

var route = express.Router();
var shopDetails = {
    "shopname" : "Medjdoub ",
    "shopCategory" : "Téléphonie",
    "shopAddress" : "Usto,Oran",
    "ShopDescription" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, quas, aperiam. Dolorum deserunt, non animi, sit illo natus numquam! Voluptatibus error voluptatem necessitatibus facilis adipisci quae eligendi eveniet vero maxime!",
    "sociallinks":{
        "facebook":"http://www.facebook.fr",
        "twitter": "http://www.twitter.com",
        "googleplus":"http://www.google.com"
    },
    "popularity":{
        "visitsNum" : 1,
        "popularity": 11111,
        "likes": 1886545
    }
};
var products = [
    {
        "name": "Iphone7",
        "productSeller": "Hichem Med",
        "publicationDate": "24 Avril 1995",
        "productDescription": "This is a product that I'm selling, you can find me on 07893545",
        "productRating": 5,
        "productPrice": 12154,
        "productLink": "www.youtube.com",
        "productImg":"../public/images/iphone_PNG5728.png"
    },

    {
        "name": "GalaxyS5",
        "productSeller": "Nazim Kissi",
        "publicationDate": "02 Mai 2014",
        "productDescription": "This is a product that I'm selling, you can find me on 07893545",
        "productRating": 5,
        "productPrice": 204,
        "productLink": "www.youtube.com",
        "productImg":"../public/images/iphone_PNG5728.png"
    },
    {
        "name": "EDGE",
        "productSeller": "Hichem Med",
        "publicationDate": "24 Avril 1995",
        "productDescription": "This is a product that I'm selling, you can find me on 07893545",
        "productRating": 5,
        "productPrice": 12154,
        "productLink": "www.youtube.com",
        "productImg":"../public/images/iphone_PNG5728.png"
    },
    {
        "name": "Nokia 3310",
        "productSeller": "Hichem Med",
        "publicationDate": "24 Avril 1995",
        "productDescription": "This is a product that I'm selling, you can find me on 07893545",
        "productRating": 5,
        "productPrice": 12154,
        "productLink": "www.youtube.com",
        "productImg":"../public/images/iphone_PNG5728.png"
    }

];



route.get('/',function(req,res){

    res.render('shop',{shop: shopDetails, products : products});

});

module.exports = route;

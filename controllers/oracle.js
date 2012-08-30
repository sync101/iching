//equivalent to example auth.js

/*
 * GET home page.
 */
//save this too!

var mongoose = require( 'mongoose' );
var Divination = require('../models/divination.js');

exports.begin = function(req, res){
  console.log(req.route);
  res.render('index', { title: 'iChing Oracle' });
};

exports.divine = function(req, res){
  console.log(req.body.primary);
  
  new Divination({ primary : req.body.primary 
  
  }).save(function(err){
  	if(!err){
  		console.log("i did it!");
  		}
  	});
  
  res.redirect('/iching'); 
};

exports.report = function(req, res){
	Divination.find(function(err, divs){
		if(err){
			console.log(err);
		} else {
			console.log(divs);
		}
	});
	
	res.redirect('/iching'); 

};

exports.speak = function(){
  console.log("you've reached the oracle");
};
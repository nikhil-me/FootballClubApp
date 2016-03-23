var express = require('express');
var router = express.Router();

var mongoose = require("mongoose"),
	Schema = mongoose.Schema;



var FCTeamSchema = mongoose.Schema({
	name : String,
	year : String,
	trophies : Number,
	manager : String,
	players : [{
		name : String,
		country : String,
		position : String,
		age : Number,
		tshirtNo : Number,
		goals : Number,
		fb : String,
		insta : String,
		twitter : String
	}]
});

var football = mongoose.model('Football',FCTeamSchema)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

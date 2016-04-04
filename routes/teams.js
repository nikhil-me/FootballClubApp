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
		imgsrc : String,
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

var footballs = mongoose.model('footballs',FCTeamSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/:team',function(req, res,next){
	var team= req.params.team;
	console.log(team);
	footballs.findOne({'name' : team},function(err,data){
		if(err){
			console.log(err);
		}
		else{
			console.log(data);
			res.send(data);
		}
	});
});

module.exports = router;

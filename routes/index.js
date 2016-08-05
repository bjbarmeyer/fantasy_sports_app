var express = require('express');
var router = express.Router();

var db = require('../client/database.js');

/* REDIRECT to home page. */
router.get('/', function(req, res, next) {
	db.initializeTables();
  	res.redirect('/home/');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
	var h_cur = true;
	var bb_cur = false;
	var fb_cur = false;
  	res.render('home', { title: 'Fantasy Sports App', h_cur:h_cur, bb_cur:bb_cur, fb_cur:fb_cur});
});

/* GET fantasy baseball page. */
router.get('/baseball', function(req, res, next) {
	var h_cur = false;
	var bb_cur = true;
	var fb_cur = false;
    res.render('baseball', {title:'Fantasy Baseball', h_cur:h_cur, bb_cur:bb_cur, fb_cur:fb_cur});
});

/* GET fantasy football page. */
router.get('/football', function(req, res, next) {
	var h_cur = false;
	var bb_cur = false;
	var fb_cur = true;
    res.render('football', {title:'Fantasy Football', h_cur:h_cur, bb_cur:bb_cur, fb_cur:fb_cur});
});

module.exports = router;

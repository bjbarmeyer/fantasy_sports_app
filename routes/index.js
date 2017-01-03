var express = require('express');
var router = express.Router();

var db = require('../client/database.js');

/* REDIRECT to home page. */
router.get('/', function(req, res, next) {
	db.initializeTables();
  	res.redirect('/dailyfantasyfootball2/');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
	var h_cur = true;
	var bb_cur = false;
	var fb_cur = false;
	var dfb_cur = false;
	var dfb2_cur = false;
  	res.render('home', { title: 'Fantasy Sports App', h_cur:h_cur, bb_cur:bb_cur, fb_cur:fb_cur, dfb_cur:dfb_cur, dfb2_cur:dfb2_cur});
});

/* GET fantasy baseball page. */
router.get('/baseball', function(req, res, next) {
	var h_cur = false;
	var bb_cur = true;
	var fb_cur = false;
	var dfb_cur = false;
	var dfb2_cur = false;
    res.render('baseball', {title:'Fantasy Baseball', h_cur:h_cur, bb_cur:bb_cur, fb_cur:fb_cur, dfb_cur:dfb_cur, dfb2_cur:dfb2_cur});
});

/* GET fantasy football page. */
router.get('/football', function(req, res, next) {
	var h_cur = false;
	var bb_cur = false;
	var fb_cur = true;
	var dfb_cur = false;
	var dfb2_cur = false;
    res.render('football', {title:'Fantasy Football', h_cur:h_cur, bb_cur:bb_cur, fb_cur:fb_cur, dfb_cur:dfb_cur, dfb2_cur:dfb2_cur});
});

/* GET daily fantasy football page. */
router.get('/dailyfantasyfootball', function(req, res, next) {
	var h_cur = false;
	var bb_cur = false;
	var fb_cur = false;
	var dfb_cur = true;
	var dfb2_cur = false;
    res.render('dailyfantasyfootball', {title:'Daily Fantasy Football', h_cur:h_cur, bb_cur:bb_cur, fb_cur:fb_cur, dfb_cur:dfb_cur, dfb2_cur:dfb2_cur});
});

/* GET daily fantasy football page. */
router.get('/dailyfantasyfootball2', function(req, res, next) {
	var h_cur = false;
	var bb_cur = false;
	var fb_cur = false;
	var dfb_cur = false;
	var dfb2_cur = true;
    res.render('dailyfantasyfootball2', {title:'Daily Fantasy Football - Fantasy Pros', h_cur:h_cur, bb_cur:bb_cur, fb_cur:fb_cur, dfb_cur:dfb_cur, dfb2_cur:dfb2_cur});
});

module.exports = router;

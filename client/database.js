// Configuration file
var config = require('../config.js');

// Initialize the postgres database
var options = {};
var pgp = require('pg-promise')(options);
var db = pgp(config.postgres_url);

/* EXAMPLE DB QUERY
  req.db.any("select * from users")
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
       console.log(error);
    });
*/

initializeTables = function(){

	var query1 = "CREATE TABLE Player(" + 
		"id SERIAL PRIMARY KEY," +
		"name char(50) NOT NULL," +
		"pos char(2) NOT NULL," +
		"team char(3) NOT NULL," +
    "c_a char(10) NOT NULL," +
    "p_yds FLOAT NOT NULL," +
    "p_td FLOAT NOT NULL," +
    "int FLOAT NOT NULL," +
    "rush FLOAT NOT NULL," +
    "ru_yds FLOAT NOT NULL," +
    "ru_tds FLOAT NOT NULL," +
    "rec FLOAT NOT NULL," +
    "re_yds FLOAT NOT NULL," +
    "re_tds FLOAT NOT NULL," +
		");";


	db.any(query1)
	    .then(function (data) {
	        console.log(data);
	    })
	    .catch(function (error) {
	       console.log(error);
	    });

}

addPlayer = function(name, pos, team, c_a, p_yds, p_td, int, rush, ru_yds, ru_tds, rec, re_yds, re_tds, done){
	var query = "INSERT INTO Answers" +
				 "(name, pos, team, c_a, p_yds, p_td, int, rush, ru_yds, ru_tds, rec, re_yds, re_tds, done) " + 
				 "VALUES ('"
				 	+ name + "', '"
				 	+ pos + "', '" 
				 	+ team + "', '"
				 	+ c_a + "', '"
				 	+ p_yds + "', '"
          + p_tds + "', '"
          + rush + "', '"
          + ru_yds + "', '"
          + ru_tds + "', '"
          + rec + "', '"
          + re_yds + "', '"
				 	+ re_tds + "');";
	db.any(query)
    .then(function (data) {
    	console.log(data);
        done(true);
    })
    .catch(function (error) {
    	console.log(error);
    	done(false);
    });
}

/*getHouse = function(n, done){
  var query = "SELECT * FROM Houses " +
              "WHERE name = '"+ n +"';";

  db.any(query)
    .then(function (data) {
      console.log(data);
      if (data.length > 0)
        done(data[0], true);
      else
        done(null, false);
    })
    .catch(function (error) {
      console.log(error);
      done(null, false);
    });

}

addPerson = function(n, h, done){
	var query = "INSERT INTO People" +
				 "(name, h_id) " + 
				 "VALUES ('"
				 	+ n + "', '"
				 	+ h + "');";
	db.any(query)
    .then(function (data) {
    	console.log(data);
        done(true);
    })
    .catch(function (error) {
    	console.log(error);
    	done(false);
    });
}

getPerson = function(n, done){
  var query = "SELECT * FROM People " +
              "WHERE name = '"+ n +"';";

  db.any(query)
    .then(function (data) {
      console.log(data);
      if (data.length > 0)
        done(data[0], true);
      else
        done(null, false);
    })
    .catch(function (error) {
      console.log(error);
      done(null, false);
    });

}

getPeopleInHouse = function(h, done){
  var query = "SELECT * FROM People p, Houses h" +
              "WHERE h.h_id = p.house_id'" +
              "AND h.name = '" + h + "';";

  db.any(query)
    .then(function (data) {
      console.log(data);
      if (data.length > 0)
        done(data[0], true);
      else
        done(null, false);
    })
    .catch(function (error) {
      console.log(error);
      done(null, false);
    });

}
*/

module.exports = {
	instance: db,
	initializeTables: initializeTables,
	addPlayer: addPlayer

}
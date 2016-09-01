var app = angular.module('Football', []);

app.controller('ctlr', function($scope) {
	$scope.rowCollection = [
{ name: 'Cam Newton ', 	pos: 'QB', 	team: 'CAR', 	att: 499.7, 	comp: 299.1, 	p_yds: 3723.4, 	p_td: 27.1, 	int: 12, 	rush: 121.4, 	ru_yds: 625.8, 	ru_td: 6.9, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.6, 	fpts: 330.2, 	st_marys: 122.7, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Aaron Rodgers', 	pos: 'QB', 	team: ' GB', 	att: 563, 	comp: 357.5, 	p_yds: 4227.7, 	p_td: 34.8, 	int: 7.7, 	rush: 54.1, 	ru_yds: 273.1, 	ru_td: 2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.1, 	fpts: 326.2, 	st_marys: 116.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Russell Wilson ', 	pos: 'QB', 	team: 'SEA', 	att: 478.9, 	comp: 309.1, 	p_yds: 3787.4, 	p_td: 28.9, 	int: 10.9, 	rush: 106.3, 	ru_yds: 578.6, 	ru_td: 3.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.8, 	fpts: 316.5, 	st_marys: 105.9, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Andrew Luck ', 	pos: 'QB', 	team: 'IND', 	att: 621, 	comp: 366.6, 	p_yds: 4274.6, 	p_td: 32.7, 	int: 17.3, 	rush: 60.9, 	ru_yds: 286.4, 	ru_td: 2.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.7, 	fpts: 301.7, 	st_marys: 111.3, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Drew Brees', 	pos: 'QB', 	team: ' NO', 	att: 641.9, 	comp: 432, 	p_yds: 4815.3, 	p_td: 31.5, 	int: 14.6, 	rush: 25.1, 	ru_yds: 40.9, 	ru_td: 1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.3, 	fpts: 293.3, 	st_marys: 100.5, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ben Roethlisberger ', 	pos: 'QB', 	team: 'PIT', 	att: 584, 	comp: 383.1, 	p_yds: 4631.2, 	p_td: 29.5, 	int: 14.2, 	rush: 27.1, 	ru_yds: 63.2, 	ru_td: 0.8, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.4, 	fpts: 281.5, 	st_marys: 93.3, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Carson Palmer ', 	pos: 'QB', 	team: 'ARI', 	att: 566.9, 	comp: 356.1, 	p_yds: 4438, 	p_td: 30.4, 	int: 13.9, 	rush: 26.3, 	ru_yds: 56, 	ru_td: 0.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.7, 	fpts: 273.7, 	st_marys: 95.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Blake Bortles ', 	pos: 'QB', 	team: 'JAC', 	att: 565, 	comp: 331.9, 	p_yds: 3960.6, 	p_td: 28.4, 	int: 17.6, 	rush: 55.3, 	ru_yds: 312.4, 	ru_td: 1.9, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 271.2, 	st_marys: 96.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tyrod Taylor ', 	pos: 'QB', 	team: 'BUF', 	att: 462.3, 	comp: 284.6, 	p_yds: 3396.7, 	p_td: 21, 	int: 11, 	rush: 103, 	ru_yds: 536.8, 	ru_td: 3.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.5, 	fpts: 267.4, 	st_marys: 84, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Eli Manning ', 	pos: 'QB', 	team: 'NYG', 	att: 621.1, 	comp: 405.8, 	p_yds: 4531, 	p_td: 28.9, 	int: 15.6, 	rush: 24.4, 	ru_yds: 50.4, 	ru_td: 0.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.1, 	fpts: 265.9, 	st_marys: 87.9, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Philip Rivers', 	pos: 'QB', 	team: ' SD', 	att: 602.8, 	comp: 377, 	p_yds: 4351.1, 	p_td: 29.7, 	int: 14.6, 	rush: 20.5, 	ru_yds: 62.5, 	ru_td: 0.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.7, 	fpts: 265.6, 	st_marys: 92.1, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Andy Dalton ', 	pos: 'QB', 	team: 'CIN', 	att: 510.8, 	comp: 325.3, 	p_yds: 3870.3, 	p_td: 25.6, 	int: 12.6, 	rush: 65.9, 	ru_yds: 189, 	ru_td: 2.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.5, 	fpts: 259.5, 	st_marys: 92.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kirk Cousins ', 	pos: 'QB', 	team: 'WAS', 	att: 554, 	comp: 360.6, 	p_yds: 4190.6, 	p_td: 26.4, 	int: 15.1, 	rush: 30.4, 	ru_yds: 82.1, 	ru_td: 2.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 258.3, 	st_marys: 94.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Matthew Stafford ', 	pos: 'QB', 	team: 'DET', 	att: 582.2, 	comp: 373.4, 	p_yds: 4202.8, 	p_td: 25.9, 	int: 14, 	rush: 36.3, 	ru_yds: 126.5, 	ru_td: 1.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.6, 	fpts: 257.7, 	st_marys: 86.1, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jameis Winston', 	pos: 'QB', 	team: ' TB', 	att: 536.5, 	comp: 321.3, 	p_yds: 3946.7, 	p_td: 23.5, 	int: 15.4, 	rush: 52.3, 	ru_yds: 210.1, 	ru_td: 3.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.6, 	fpts: 256.8, 	st_marys: 92.1, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Derek Carr ', 	pos: 'QB', 	team: 'OAK', 	att: 589.5, 	comp: 357.7, 	p_yds: 3950.7, 	p_td: 28.4, 	int: 13.9, 	rush: 30.9, 	ru_yds: 116.4, 	ru_td: 0.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.7, 	fpts: 252.3, 	st_marys: 89.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ryan Fitzpatrick ', 	pos: 'QB', 	team: 'NYJ', 	att: 518.2, 	comp: 342.3, 	p_yds: 3915.1, 	p_td: 29.1, 	int: 12.9, 	rush: 24.9, 	ru_yds: 69.5, 	ru_td: 0.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3, 	fpts: 251.8, 	st_marys: 90.9, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ryan Tannehill ', 	pos: 'QB', 	team: 'MIA', 	att: 549.3, 	comp: 325.3, 	p_yds: 3723.7, 	p_td: 24.7, 	int: 15.5, 	rush: 61, 	ru_yds: 266.8, 	ru_td: 2.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.4, 	fpts: 251.6, 	st_marys: 87.3, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Matt Ryan ', 	pos: 'QB', 	team: 'ATL', 	att: 582.1, 	comp: 362.4, 	p_yds: 4093.9, 	p_td: 24.2, 	int: 13.7, 	rush: 41.8, 	ru_yds: 181.9, 	ru_td: 1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.4, 	fpts: 250.5, 	st_marys: 78.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Alex Smith', 	pos: 'QB', 	team: ' KC', 	att: 607.7, 	comp: 401.7, 	p_yds: 4476.8, 	p_td: 25, 	int: 15.6, 	rush: 33.6, 	ru_yds: 75.9, 	ru_td: 0.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.9, 	fpts: 249.4, 	st_marys: 76.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Marcus Mariota ', 	pos: 'QB', 	team: 'TEN', 	att: 479.7, 	comp: 306.3, 	p_yds: 3411.7, 	p_td: 21.3, 	int: 9.4, 	rush: 72.4, 	ru_yds: 398.2, 	ru_td: 1.8, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.8, 	fpts: 248.1, 	st_marys: 74.7, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Joe Flacco ', 	pos: 'QB', 	team: 'BAL', 	att: 496.1, 	comp: 307.1, 	p_yds: 3567.9, 	p_td: 20.9, 	int: 14.7, 	rush: 58.7, 	ru_yds: 375.4, 	ru_td: 3.1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 244.7, 	st_marys: 81.3, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tom Brady', 	pos: 'QB', 	team: ' NE', 	att: 591.4, 	comp: 361.8, 	p_yds: 4044.4, 	p_td: 24.4, 	int: 15.2, 	rush: 29.6, 	ru_yds: 61.1, 	ru_td: 1.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.3, 	fpts: 238.7, 	st_marys: 83.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jay Cutler ', 	pos: 'QB', 	team: 'CHI', 	att: 472.7, 	comp: 301.3, 	p_yds: 3449, 	p_td: 25.8, 	int: 7, 	rush: 26.3, 	ru_yds: 48.8, 	ru_td: 1.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 1.9, 	fpts: 236.7, 	st_marys: 85.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Brock Osweiler ', 	pos: 'QB', 	team: 'HOU', 	att: 526.1, 	comp: 333.8, 	p_yds: 3808, 	p_td: 23.6, 	int: 15.9, 	rush: 39.6, 	ru_yds: 179, 	ru_td: 1.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.4, 	fpts: 233.6, 	st_marys: 78., 	status: 0, 	string: 0,	inj: '' },
{ name: 'Teddy Bridgewater ', 	pos: 'QB', 	team: 'MIN', 	att: 539.4, 	comp: 326.9, 	p_yds: 3807.4, 	p_td: 23.6, 	int: 14.2, 	rush: 44.9, 	ru_yds: 124.8, 	ru_td: 1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.1, 	fpts: 230.9, 	st_marys: 76.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Robert Griffin ', 	pos: 'QB', 	team: 'CLE', 	att: 468.1, 	comp: 297.1, 	p_yds: 3321.3, 	p_td: 19, 	int: 11.9, 	rush: 53.2, 	ru_yds: 256, 	ru_td: 2.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3, 	fpts: 218.3, 	st_marys: 70.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Sam Bradford ', 	pos: 'QB', 	team: 'PHI', 	att: 452.9, 	comp: 279.2, 	p_yds: 3252.3, 	p_td: 16.1, 	int: 13.5, 	rush: 95.6, 	ru_yds: 268.3, 	ru_td: 1.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.6, 	fpts: 196.8, 	st_marys: 57.9, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tony Romo ', 	pos: 'QB', 	team: 'DAL', 	att: 482.1, 	comp: 290.9, 	p_yds: 3306.9, 	p_td: 17.7, 	int: 15.1, 	rush: 38.3, 	ru_yds: 136.5, 	ru_td: 1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.4, 	fpts: 185.7, 	st_marys: 59.1, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Blaine Gabbert', 	pos: 'QB', 	team: ' SF', 	att: 434.2, 	comp: 271, 	p_yds: 2970.2, 	p_td: 16.8, 	int: 11.2, 	rush: 21.2, 	ru_yds: 50.7, 	ru_td: 0.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.4, 	fpts: 164.5, 	st_marys: 52.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jared Goff', 	pos: 'QB', 	team: ' LA', 	att: 346.7, 	comp: 209, 	p_yds: 2355.3, 	p_td: 11.8, 	int: 9.8, 	rush: 41.4, 	ru_yds: 210.1, 	ru_td: 1.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.9, 	fpts: 144, 	st_marys: 42.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Mark Sanchez ', 	pos: 'QB', 	team: 'DEN', 	att: 372, 	comp: 225.9, 	p_yds: 2553.7, 	p_td: 15, 	int: 12.9, 	rush: 28, 	ru_yds: 84.8, 	ru_td: 0.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.2, 	fpts: 143.9, 	st_marys: 48.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Dak Prescott ', 	pos: 'QB', 	team: 'DAL', 	att: 186.5, 	comp: 106, 	p_yds: 1194.6, 	p_td: 6.1, 	int: 5.2, 	rush: 32.3, 	ru_yds: 167.8, 	ru_td: 0.8, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0.5, 	fpts: 82.6, 	st_marys: 23.1, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Paxton Lynch ', 	pos: 'QB', 	team: 'DEN', 	att: 156.4, 	comp: 89.7, 	p_yds: 1036.7, 	p_td: 5.9, 	int: 4.8, 	rush: 16, 	ru_yds: 59.9, 	ru_td: 0.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0.3, 	fpts: 62.6, 	st_marys: 19.5, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Colin Kaepernick', 	pos: 'QB', 	team: ' SF', 	att: 149.2, 	comp: 88.5, 	p_yds: 981.2, 	p_td: 6.2, 	int: 3.6, 	rush: 8.3, 	ru_yds: 16.2, 	ru_td: 0.1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0.4, 	fpts: 58.5, 	st_marys: 19.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jimmy Garoppolo', 	pos: 'QB', 	team: ' NE', 	att: 110.7, 	comp: 65.3, 	p_yds: 733.9, 	p_td: 4, 	int: 3.6, 	rush: 11.2, 	ru_yds: 44.8, 	ru_td: 0.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0.6, 	fpts: 44.4, 	st_marys: 15, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Trevor Siemian ', 	pos: 'QB', 	team: 'DEN', 	att: 104.2, 	comp: 64.1, 	p_yds: 726.2, 	p_td: 4.2, 	int: 3, 	rush: 8.2, 	ru_yds: 36.7, 	ru_td: 0.1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0.9, 	fpts: 42.7, 	st_marys: 13.2, 	status: 0, 	string: 0,	inj: '' },
																			
																			
{ name: 'Todd Gurley', 	pos: 'RB', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 296.9, 	ru_yds: 1338.8, 	ru_td: 9.3, 	rec: 33.3, 	re_yds: 238.2, 	re_td: 1, 	fl: 3.1, 	fpts: 212.7, 	st_marys: 61.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Adrian Peterson ', 	pos: 'RB', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 282.7, 	ru_yds: 1262.1, 	ru_td: 9.2, 	rec: 35.1, 	re_yds: 294.1, 	re_td: 0.9, 	fl: 1.8, 	fpts: 212.2, 	st_marys: 60.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'David Johnson ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 223.5, 	ru_yds: 1085.8, 	ru_td: 8.5, 	rec: 48.7, 	re_yds: 376.7, 	re_td: 3.2, 	fl: 3.7, 	fpts: 209.5, 	st_marys: 70.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jamaal Charles', 	pos: 'RB', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 220.2, 	ru_yds: 947, 	ru_td: 8.2, 	rec: 55.8, 	re_yds: 508.1, 	re_td: 2.9, 	fl: 1.5, 	fpts: 208.9, 	st_marys: 66.6, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Lamar Miller ', 	pos: 'RB', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 260.8, 	ru_yds: 1147.3, 	ru_td: 7.2, 	rec: 46.6, 	re_yds: 362.9, 	re_td: 1.6, 	fl: 1.9, 	fpts: 200, 	st_marys: 52.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Le\'Veon Bell ', 	pos: 'RB', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 209, 	ru_yds: 944, 	ru_td: 7.5, 	rec: 52, 	re_yds: 417.5, 	re_td: 2, 	fl: 1.1, 	fpts: 190.9, 	st_marys: 57, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Ezekiel Elliott ', 	pos: 'RB', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 240.1, 	ru_yds: 1065.9, 	ru_td: 7.7, 	rec: 38.1, 	re_yds: 305.2, 	re_td: 1.4, 	fl: 1.6, 	fpts: 188, 	st_marys: 54.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Devonta Freeman ', 	pos: 'RB', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 214.3, 	ru_yds: 870.8, 	ru_td: 7.1, 	rec: 62.6, 	re_yds: 492.9, 	re_td: 2, 	fl: 2, 	fpts: 187.2, 	st_marys: 54.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Mark Ingram', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 250.6, 	ru_yds: 1078.3, 	ru_td: 6.3, 	rec: 40.6, 	re_yds: 301.9, 	re_td: 1.3, 	fl: 2.3, 	fpts: 179.3, 	st_marys: 45.6, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'LeSean McCoy ', 	pos: 'RB', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 228.4, 	ru_yds: 1011.6, 	ru_td: 7.1, 	rec: 34.2, 	re_yds: 291.8, 	re_td: 1.8, 	fl: 2.2, 	fpts: 179.2, 	st_marys: 53.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Eddie Lacy', 	pos: 'RB', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 215.6, 	ru_yds: 925.9, 	ru_td: 7.6, 	rec: 52.4, 	re_yds: 364.2, 	re_td: 1.2, 	fl: 1.7, 	fpts: 178.3, 	st_marys: 52.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Doug Martin', 	pos: 'RB', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 257.9, 	ru_yds: 1136.1, 	ru_td: 6.2, 	rec: 32.6, 	re_yds: 237.7, 	re_td: 0.9, 	fl: 3.2, 	fpts: 173.5, 	st_marys: 42.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'C.J. Anderson ', 	pos: 'RB', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 226.3, 	ru_yds: 1082, 	ru_td: 6.6, 	rec: 22.9, 	re_yds: 179.4, 	re_td: 0.9, 	fl: 1.9, 	fpts: 167.4, 	st_marys: 45., 	status: 0, 	string: 0,	inj: '' },
{ name: 'Latavius Murray ', 	pos: 'RB', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 220.2, 	ru_yds: 982, 	ru_td: 6.2, 	rec: 35.5, 	re_yds: 268.7, 	re_td: 1, 	fl: 1.9, 	fpts: 164.6, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Thomas Rawls ', 	pos: 'RB', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 210.2, 	ru_yds: 873, 	ru_td: 4.7, 	rec: 45.5, 	re_yds: 356.4, 	re_td: 1.7, 	fl: 1.9, 	fpts: 157.7, 	st_marys: 38.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Matt Forte ', 	pos: 'RB', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 239.4, 	ru_yds: 1002, 	ru_td: 5.7, 	rec: 33.9, 	re_yds: 209.8, 	re_td: 0.6, 	fl: 1.2, 	fpts: 156.3, 	st_marys: 37.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Carlos Hyde', 	pos: 'RB', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 222, 	ru_yds: 931, 	ru_td: 6, 	rec: 33.9, 	re_yds: 229.6, 	re_td: 0.8, 	fl: 1.8, 	fpts: 153.1, 	st_marys: 40.8, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Jonathan Stewart ', 	pos: 'RB', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 227.2, 	ru_yds: 982.6, 	ru_td: 6.1, 	rec: 22.2, 	re_yds: 154.7, 	re_td: 0.9, 	fl: 2, 	fpts: 151.7, 	st_marys: 42., 	status: 0, 	string: 0,	inj: '' },
{ name: 'DeMarco Murray ', 	pos: 'RB', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 221.1, 	ru_yds: 876.3, 	ru_td: 5.1, 	rec: 33.5, 	re_yds: 346, 	re_td: 1.3, 	fl: 4.9, 	fpts: 151.2, 	st_marys: 38.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jeremy Langford ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 209.8, 	ru_yds: 901.2, 	ru_td: 5.8, 	rec: 32.8, 	re_yds: 249.3, 	re_td: 1, 	fl: 2.7, 	fpts: 150.5, 	st_marys: 40.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jeremy Hill ', 	pos: 'RB', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 207.9, 	ru_yds: 875.8, 	ru_td: 7.7, 	rec: 19.1, 	re_yds: 134, 	re_td: 0.8, 	fl: 2.8, 	fpts: 146.3, 	st_marys: 51, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Matt Jones ', 	pos: 'RB', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 185, 	ru_yds: 751.7, 	ru_td: 5, 	rec: 36.5, 	re_yds: 330.3, 	re_td: 1.6, 	fl: 1.2, 	fpts: 145.5, 	st_marys: 39.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ryan Mathews ', 	pos: 'RB', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 188.7, 	ru_yds: 840.6, 	ru_td: 5.8, 	rec: 32.3, 	re_yds: 237.4, 	re_td: 1, 	fl: 2.9, 	fpts: 142.9, 	st_marys: 40.8, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Frank Gore ', 	pos: 'RB', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 200.4, 	ru_yds: 791, 	ru_td: 5.8, 	rec: 30.7, 	re_yds: 246.4, 	re_td: 1, 	fl: 2.5, 	fpts: 139.3, 	st_marys: 40.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Melvin Gordon', 	pos: 'RB', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 150.7, 	ru_yds: 661.3, 	ru_td: 3.5, 	rec: 48.3, 	re_yds: 418.1, 	re_td: 1.5, 	fl: 1.2, 	fpts: 136.1, 	st_marys: 30, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Giovani Bernard ', 	pos: 'RB', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 226.1, 	ru_yds: 879.9, 	ru_td: 4.4, 	rec: 32.2, 	re_yds: 205.9, 	re_td: 0.7, 	fl: 3.1, 	fpts: 133.1, 	st_marys: 30.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ameer Abdullah ', 	pos: 'RB', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 100.9, 	ru_yds: 416.3, 	ru_td: 3.1, 	rec: 67.3, 	re_yds: 591, 	re_td: 2.8, 	fl: 1.9, 	fpts: 132.3, 	st_marys: 35.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Danny Woodhead', 	pos: 'RB', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 184, 	ru_yds: 773.3, 	ru_td: 4.5, 	rec: 33.9, 	re_yds: 253.8, 	re_td: 1, 	fl: 1.9, 	fpts: 131.4, 	st_marys: 33, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Rashad Jennings ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 181.6, 	ru_yds: 743.2, 	ru_td: 4.7, 	rec: 30.2, 	re_yds: 245.9, 	re_td: 0.9, 	fl: 2, 	fpts: 128.4, 	st_marys: 33.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Arian Foster ', 	pos: 'RB', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 83.6, 	ru_yds: 318.3, 	ru_td: 2.1, 	rec: 72.5, 	re_yds: 623.5, 	re_td: 3.8, 	fl: 1.1, 	fpts: 127.4, 	st_marys: 35.4, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Duke Johnson ', 	pos: 'RB', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 141.9, 	ru_yds: 559.9, 	ru_td: 2.9, 	rec: 57.1, 	re_yds: 464.7, 	re_td: 1.7, 	fl: 1.7, 	fpts: 126.6, 	st_marys: 27.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'T.J. Yeldon ', 	pos: 'RB', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 171, 	ru_yds: 701.8, 	ru_td: 4, 	rec: 37, 	re_yds: 275.3, 	re_td: 1, 	fl: 1.2, 	fpts: 125.1, 	st_marys: 30, 	status: 0, 	string: 0,	inj: '' },
{ name: 'LeGarrette Blount', 	pos: 'RB', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 165.4, 	ru_yds: 651, 	ru_td: 4.2, 	rec: 35, 	re_yds: 281, 	re_td: 1.4, 	fl: 3, 	fpts: 120.9, 	st_marys: 33.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Isaiah Crowell ', 	pos: 'RB', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 170.7, 	ru_yds: 696.5, 	ru_td: 4.5, 	rec: 20.6, 	re_yds: 185.6, 	re_td: 0.8, 	fl: 1.3, 	fpts: 117.5, 	st_marys: 31.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Justin Forsett ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 161.7, 	ru_yds: 715.4, 	ru_td: 4, 	rec: 30, 	re_yds: 194.6, 	re_td: 0.8, 	fl: 1.1, 	fpts: 117.5, 	st_marys: 28.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Chris Ivory ', 	pos: 'RB', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 167.7, 	ru_yds: 687.2, 	ru_td: 6.1, 	rec: 10.1, 	re_yds: 70.3, 	re_td: 0.4, 	fl: 0.8, 	fpts: 112.9, 	st_marys: 39., 	status: 0, 	string: 0,	inj: '' },
{ name: 'Charles Sims', 	pos: 'RB', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 160.4, 	ru_yds: 667.3, 	ru_td: 4.6, 	rec: 23, 	re_yds: 164.3, 	re_td: 0.6, 	fl: 2, 	fpts: 110.7, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'DeAngelo Williams ', 	pos: 'RB', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 99.8, 	ru_yds: 431.7, 	ru_td: 2.1, 	rec: 43.6, 	re_yds: 398.4, 	re_td: 2.1, 	fl: 1.7, 	fpts: 104.6, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jay Ajayi ', 	pos: 'RB', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 128.4, 	ru_yds: 574.1, 	ru_td: 4.3, 	rec: 21.8, 	re_yds: 178.4, 	re_td: 0.8, 	fl: 1.1, 	fpts: 103.4, 	st_marys: 30.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Darren Sproles ', 	pos: 'RB', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 141.8, 	ru_yds: 602.8, 	ru_td: 3.4, 	rec: 23.8, 	re_yds: 185.5, 	re_td: 0.8, 	fl: 1, 	fpts: 101.9, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Shane Vereen ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 80.5, 	ru_yds: 362.8, 	ru_td: 2.8, 	rec: 50.6, 	re_yds: 401.2, 	re_td: 1.6, 	fl: 1.2, 	fpts: 100.2, 	st_marys: 26.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Theo Riddick ', 	pos: 'RB', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 69.7, 	ru_yds: 289.3, 	ru_td: 1.7, 	rec: 52.6, 	re_yds: 437.4, 	re_td: 2.4, 	fl: 1.1, 	fpts: 94.9, 	st_marys: 24.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Bilal Powell ', 	pos: 'RB', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 113.1, 	ru_yds: 464.2, 	ru_td: 2.3, 	rec: 35.1, 	re_yds: 279.6, 	re_td: 1.1, 	fl: 1, 	fpts: 92.8, 	st_marys: 20.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Derrick Henry ', 	pos: 'RB', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 56.2, 	ru_yds: 214.6, 	ru_td: 1.1, 	rec: 60.1, 	re_yds: 514.9, 	re_td: 2.5, 	fl: 1, 	fpts: 92.6, 	st_marys: 21.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'James Starks', 	pos: 'RB', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 118.5, 	ru_yds: 488.8, 	ru_td: 3, 	rec: 25.4, 	re_yds: 199.7, 	re_td: 0.9, 	fl: 1.9, 	fpts: 88.5, 	st_marys: 23.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Devontae Booker ', 	pos: 'RB', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 126, 	ru_yds: 524.2, 	ru_td: 3.8, 	rec: 14.5, 	re_yds: 132.4, 	re_td: 0.6, 	fl: 2, 	fpts: 88.3, 	st_marys: 26.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tevin Coleman ', 	pos: 'RB', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 107.4, 	ru_yds: 437.6, 	ru_td: 3, 	rec: 20, 	re_yds: 160.1, 	re_td: 0.7, 	fl: 1.2, 	fpts: 79.4, 	st_marys: 22.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Dion Lewis', 	pos: 'RB', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 108, 	ru_yds: 428.7, 	ru_td: 2.6, 	rec: 24.6, 	re_yds: 194.3, 	re_td: 0.8, 	fl: 1.9, 	fpts: 78.8, 	st_marys: 20.4, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Javorius Allen ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 74.4, 	ru_yds: 329.6, 	ru_td: 1.9, 	rec: 38.3, 	re_yds: 300.9, 	re_td: 1, 	fl: 1.2, 	fpts: 78.3, 	st_marys: 17.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jerick McKinnon ', 	pos: 'RB', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 98.1, 	ru_yds: 420.9, 	ru_td: 2.7, 	rec: 24.6, 	re_yds: 185.5, 	re_td: 0.7, 	fl: 2.1, 	fpts: 77, 	st_marys: 20.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'James White', 	pos: 'RB', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 105.9, 	ru_yds: 435.5, 	ru_td: 2.8, 	rec: 21.5, 	re_yds: 146.6, 	re_td: 0.7, 	fl: 2.2, 	fpts: 74.4, 	st_marys: 21., 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jordan Howard ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 111.7, 	ru_yds: 449.8, 	ru_td: 3, 	rec: 17, 	re_yds: 107.2, 	re_td: 0.2, 	fl: 1, 	fpts: 72.9, 	st_marys: 19.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Chris Johnson ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 77.9, 	ru_yds: 355.7, 	ru_td: 2.2, 	rec: 26.4, 	re_yds: 192, 	re_td: 0.9, 	fl: 0.9, 	fpts: 71.7, 	st_marys: 18.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'DeAndre Washington ', 	pos: 'RB', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 84, 	ru_yds: 370.8, 	ru_td: 3.1, 	rec: 12.7, 	re_yds: 99.9, 	re_td: 0.9, 	fl: 1.1, 	fpts: 69.2, 	st_marys: 24, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Chris Thompson ', 	pos: 'RB', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 84.3, 	ru_yds: 339.6, 	ru_td: 2.1, 	rec: 26.7, 	re_yds: 206.3, 	re_td: 0.9, 	fl: 1.8, 	fpts: 68.8, 	st_marys: 18, 	status: 0, 	string: 0,	inj: '' },
{ name: 'C.J. Prosise ', 	pos: 'RB', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 104.7, 	ru_yds: 427.6, 	ru_td: 2.9, 	rec: 12.2, 	re_yds: 88.9, 	re_td: 0.3, 	fl: 1.8, 	fpts: 67.6, 	st_marys: 19.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Spencer Ware', 	pos: 'RB', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 89.8, 	ru_yds: 366, 	ru_td: 1.9, 	rec: 21.3, 	re_yds: 169.3, 	re_td: 0.9, 	fl: 1.9, 	fpts: 66.4, 	st_marys: 16.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Cameron Artis-Payne ', 	pos: 'RB', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 92.6, 	ru_yds: 380.4, 	ru_td: 2, 	rec: 14.1, 	re_yds: 125.4, 	re_td: 0.6, 	fl: 1, 	fpts: 64.4, 	st_marys: 15.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tim Hightower', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 92.6, 	ru_yds: 380.4, 	ru_td: 2.2, 	rec: 14.4, 	re_yds: 113.6, 	re_td: 0.3, 	fl: 1.2, 	fpts: 62.1, 	st_marys: 15, 	status: 0, 	string: 0,	inj: '' },
{ name: 'C.J. Spiller', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 67.8, 	ru_yds: 275.9, 	ru_td: 3.2, 	rec: 17.7, 	re_yds: 142.5, 	re_td: 0.3, 	fl: 1, 	fpts: 61.2, 	st_marys: 21., 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Shaun Draughn', 	pos: 'RB', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 72.6, 	ru_yds: 337.5, 	ru_td: 3.7, 	rec: 7.9, 	re_yds: 49.5, 	re_td: 0.2, 	fl: 1.2, 	fpts: 59.8, 	st_marys: 23.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Christine Michael ', 	pos: 'RB', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 48.6, 	ru_yds: 198.9, 	ru_td: 1.2, 	rec: 35.1, 	re_yds: 272.4, 	re_td: 1.4, 	fl: 1.8, 	fpts: 59.2, 	st_marys: 15.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Darren McFadden ', 	pos: 'RB', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 74.8, 	ru_yds: 284.4, 	ru_td: 1.7, 	rec: 25.4, 	re_yds: 168.1, 	re_td: 0.3, 	fl: 0.8, 	fpts: 55.3, 	st_marys: 12, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Benny Cunningham', 	pos: 'RB', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 74, 	ru_yds: 308.7, 	ru_td: 1.7, 	rec: 18, 	re_yds: 135.9, 	re_td: 0.5, 	fl: 1.2, 	fpts: 55.1, 	st_marys: 13.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Alfred Blue ', 	pos: 'RB', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 59.3, 	ru_yds: 235.5, 	ru_td: 1.3, 	rec: 27.6, 	re_yds: 213.3, 	re_td: 0.7, 	fl: 0.9, 	fpts: 54.8, 	st_marys: 12, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Paul Perkins ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 48.8, 	ru_yds: 190.6, 	ru_td: 1.1, 	rec: 31.9, 	re_yds: 229.2, 	re_td: 1.2, 	fl: 1.1, 	fpts: 53.6, 	st_marys: 13.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Alfred Morris ', 	pos: 'RB', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 82.2, 	ru_yds: 344.4, 	ru_td: 1.6, 	rec: 13.8, 	re_yds: 107.8, 	re_td: 0.2, 	fl: 1.8, 	fpts: 52.9, 	st_marys: 10.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kenneth Dixon ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 82.7, 	ru_yds: 321.6, 	ru_td: 1.8, 	rec: 12.1, 	re_yds: 92.6, 	re_td: 0.3, 	fl: 0.9, 	fpts: 52.4, 	st_marys: 12.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Andre Ellington ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 77.4, 	ru_yds: 309.2, 	ru_td: 1.9, 	rec: 11.7, 	re_yds: 84.3, 	re_td: 0.7, 	fl: 1.8, 	fpts: 51.9, 	st_marys: 15.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Terrance West ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 52.4, 	ru_yds: 228.7, 	ru_td: 1.7, 	rec: 21, 	re_yds: 180.1, 	re_td: 0.8, 	fl: 2, 	fpts: 51.4, 	st_marys: 15, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ka\'Deem Carey ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 56, 	ru_yds: 231, 	ru_td: 1.2, 	rec: 19.8, 	re_yds: 158.3, 	re_td: 0.6, 	fl: 1.2, 	fpts: 47.6, 	st_marys: 10.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Karlos Willi', 	pos: 'RB', 	team: 'ams', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 54.9, 	ru_yds: 221.5, 	ru_td: 1.2, 	rec: 16, 	re_yds: 136.3, 	re_td: 0.7, 	fl: 0, 	fpts: 47.1, 	st_marys: 11.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ronnie Hillman ', 	pos: 'RB', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 65.6, 	ru_yds: 254.2, 	ru_td: 1.6, 	rec: 16.6, 	re_yds: 113.2, 	re_td: 0.4, 	fl: 0.9, 	fpts: 46.8, 	st_marys: 12., 	status: 0, 	string: 0,	inj: '' },
{ name: 'Reggie Bush ', 	pos: 'RB', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 74.4, 	ru_yds: 317, 	ru_td: 1.8, 	rec: 7.5, 	re_yds: 50.1, 	re_td: 0.2, 	fl: 0.9, 	fpts: 46.8, 	st_marys: 12, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Charcandrick West', 	pos: 'RB', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 60.1, 	ru_yds: 239, 	ru_td: 1.9, 	rec: 14, 	re_yds: 113.3, 	re_td: 0.5, 	fl: 1.8, 	fpts: 46.7, 	st_marys: 14.4, 	status: 0, 	string: 0,	inj: '' },
																			
																			
{ name: 'Antonio Brown ', 	pos: 'WR', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.1, 	ru_yds: 17, 	ru_td: 0, 	rec: 123.7, 	re_yds: 1649.1, 	re_td: 10.8, 	fl: 1.1, 	fpts: 229.1, 	st_marys: 64.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Julio Jones ', 	pos: 'WR', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.3, 	ru_yds: 1.6, 	ru_td: 0, 	rec: 116.6, 	re_yds: 1624.3, 	re_td: 8.8, 	fl: 0.8, 	fpts: 214.1, 	st_marys: 52.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Odell Beckham Jr. ', 	pos: 'WR', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.8, 	ru_yds: 4.6, 	ru_td: 0, 	rec: 98.1, 	re_yds: 1440, 	re_td: 11.1, 	fl: 0.1, 	fpts: 210.6, 	st_marys: 66.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'DeAndre Hopkins ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 100, 	re_yds: 1423.4, 	re_td: 9.6, 	fl: 0.1, 	fpts: 199.5, 	st_marys: 57.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'A.J. Green ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 85.6, 	re_yds: 1200.4, 	re_td: 10.1, 	fl: 0.1, 	fpts: 180.1, 	st_marys: 60.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Dez Bryant ', 	pos: 'WR', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.1, 	ru_td: 0, 	rec: 87.5, 	re_yds: 1256.3, 	re_td: 9.3, 	fl: 0.9, 	fpts: 179.5, 	st_marys: 55.8, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Jordy Nelson', 	pos: 'WR', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.4, 	ru_td: 0, 	rec: 87.9, 	re_yds: 1239.9, 	re_td: 8.8, 	fl: 0.1, 	fpts: 176.5, 	st_marys: 52.8, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Alshon Jeffery ', 	pos: 'WR', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.4, 	ru_yds: 4.8, 	ru_td: 0, 	rec: 85.4, 	re_yds: 1213.3, 	re_td: 8, 	fl: 0.1, 	fpts: 169.7, 	st_marys: 48, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Allen Robinson ', 	pos: 'WR', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 78.8, 	re_yds: 1146.2, 	re_td: 8.7, 	fl: 0.1, 	fpts: 166.3, 	st_marys: 52.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Brandon Marshall ', 	pos: 'WR', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 78.5, 	re_yds: 1194.4, 	re_td: 7.6, 	fl: 0.7, 	fpts: 163.8, 	st_marys: 45.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Mike Evans', 	pos: 'WR', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.6, 	ru_yds: 2.8, 	ru_td: 0, 	rec: 77.8, 	re_yds: 1188.3, 	re_td: 7.4, 	fl: 0.1, 	fpts: 163.5, 	st_marys: 44.4, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'T.Y. Hilton ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.2, 	ru_td: 0, 	rec: 87.1, 	re_yds: 1164.6, 	re_td: 8.2, 	fl: 1.1, 	fpts: 163.4, 	st_marys: 49.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Sammy Watkins ', 	pos: 'WR', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.8, 	ru_yds: 3.1, 	ru_td: 0, 	rec: 73.1, 	re_yds: 1106, 	re_td: 8.2, 	fl: 0.2, 	fpts: 159.7, 	st_marys: 49.2, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Keenan Allen', 	pos: 'WR', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 103.3, 	re_yds: 1192.3, 	re_td: 6.9, 	fl: 1.3, 	fpts: 158.2, 	st_marys: 41.4, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Brandin Cooks', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 86.3, 	re_yds: 1131.6, 	re_td: 7.4, 	fl: 1, 	fpts: 155.4, 	st_marys: 44.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Amari Cooper ', 	pos: 'WR', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 4.8, 	ru_yds: 26.9, 	ru_td: 0.1, 	rec: 84.2, 	re_yds: 1059.1, 	re_td: 7.5, 	fl: 0.2, 	fpts: 153.8, 	st_marys: 45.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Demaryius Thomas ', 	pos: 'WR', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 8.1, 	ru_yds: 37.3, 	ru_td: 0.1, 	rec: 81.7, 	re_yds: 1034.1, 	re_td: 7.5, 	fl: 0.2, 	fpts: 152, 	st_marys: 45.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Randall Cobb', 	pos: 'WR', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.4, 	ru_yds: 0, 	ru_td: 0, 	rec: 81, 	re_yds: 1081.7, 	re_td: 7.2, 	fl: 0.8, 	fpts: 149.7, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jeremy Maclin', 	pos: 'WR', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.6, 	ru_yds: 8.8, 	ru_td: 0, 	rec: 81.5, 	re_yds: 1040.8, 	re_td: 7.2, 	fl: 0.7, 	fpts: 146.8, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Eric Decker ', 	pos: 'WR', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	rec: 77, 	re_yds: 1011.4, 	re_td: 7.7, 	fl: 0.7, 	fpts: 145.7, 	st_marys: 46.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jarvis Landry ', 	pos: 'WR', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.2, 	ru_td: 0, 	rec: 72.9, 	re_yds: 951.6, 	re_td: 8, 	fl: 0.2, 	fpts: 143, 	st_marys: 48, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Doug Baldwin ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	rec: 70.5, 	re_yds: 955.8, 	re_td: 8.1, 	fl: 0.7, 	fpts: 142.6, 	st_marys: 48.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Golden Tate ', 	pos: 'WR', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 4.7, 	ru_yds: 29.7, 	ru_td: 0, 	rec: 91.6, 	re_yds: 1066.4, 	re_td: 5.6, 	fl: 0.7, 	fpts: 142.4, 	st_marys: 33.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kelvin Benjamin ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 9.3, 	ru_yds: 47.1, 	ru_td: 0.1, 	rec: 95.7, 	re_yds: 1008.1, 	re_td: 5.7, 	fl: 0.8, 	fpts: 138.8, 	st_marys: 34.8, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Julian Edelman', 	pos: 'WR', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.1, 	ru_td: 0, 	rec: 62.7, 	re_yds: 959.2, 	re_td: 7.2, 	fl: 0.2, 	fpts: 138.5, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Larry Fitzgerald ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 4, 	ru_yds: 24.9, 	ru_td: 0, 	rec: 89.5, 	re_yds: 972.3, 	re_td: 6.7, 	fl: 1, 	fpts: 138.1, 	st_marys: 40.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Michael Floyd ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 83.5, 	re_yds: 980.4, 	re_td: 6.8, 	fl: 1.1, 	fpts: 136.6, 	st_marys: 40.8, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Donte Moncrief ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 78.7, 	re_yds: 964.6, 	re_td: 6.6, 	fl: 0.7, 	fpts: 134.8, 	st_marys: 39.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jordan Matthews ', 	pos: 'WR', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.4, 	ru_yds: 7.1, 	ru_td: 0, 	rec: 61, 	re_yds: 967.5, 	re_td: 6.2, 	fl: 0.8, 	fpts: 132.9, 	st_marys: 37.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'DeSean Jackson ', 	pos: 'WR', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2.8, 	ru_yds: 17.1, 	ru_td: 0, 	rec: 69.7, 	re_yds: 962.4, 	re_td: 5.6, 	fl: 1, 	fpts: 129.8, 	st_marys: 33.6, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Emmanuel Sanders ', 	pos: 'WR', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.8, 	ru_td: 0, 	rec: 67, 	re_yds: 891.2, 	re_td: 6.4, 	fl: 0.2, 	fpts: 127.5, 	st_marys: 38.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'John Brown ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.8, 	ru_yds: 11.3, 	ru_td: 0, 	rec: 61.7, 	re_yds: 905.3, 	re_td: 6.2, 	fl: 0.8, 	fpts: 127.1, 	st_marys: 37.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Allen Hurns ', 	pos: 'WR', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 60.2, 	re_yds: 870.3, 	re_td: 6.4, 	fl: 0.7, 	fpts: 124.1, 	st_marys: 38.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Michael Crabtree ', 	pos: 'WR', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	rec: 58.8, 	re_yds: 858.6, 	re_td: 6, 	fl: 0.1, 	fpts: 121.6, 	st_marys: 36, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Marvin Jones ', 	pos: 'WR', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1, 	ru_yds: 5.5, 	ru_td: 0, 	rec: 73.8, 	re_yds: 826.8, 	re_td: 6.2, 	fl: 0.1, 	fpts: 120.5, 	st_marys: 37.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Torrey Smith', 	pos: 'WR', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.4, 	ru_yds: 7.4, 	ru_td: 0, 	rec: 62.6, 	re_yds: 814.5, 	re_td: 5.4, 	fl: 0.1, 	fpts: 114.4, 	st_marys: 32.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Stefon Diggs ', 	pos: 'WR', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 53.5, 	re_yds: 844, 	re_td: 5, 	fl: 0.1, 	fpts: 114.1, 	st_marys: 30, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Devante Parker ', 	pos: 'WR', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 56.1, 	re_yds: 791.1, 	re_td: 5.2, 	fl: 0.2, 	fpts: 110.1, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tyler Lockett ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.6, 	ru_yds: 2.5, 	ru_td: 0, 	rec: 61, 	re_yds: 794, 	re_td: 4.8, 	fl: 0.1, 	fpts: 108.4, 	st_marys: 28.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Vincent Jackson', 	pos: 'WR', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.3, 	ru_yds: 19.4, 	ru_td: 0, 	rec: 57.4, 	re_yds: 747.9, 	re_td: 5.3, 	fl: 0.9, 	fpts: 106.9, 	st_marys: 31.8, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Willie Snead', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 53.5, 	re_yds: 786.8, 	re_td: 4.7, 	fl: 0.2, 	fpts: 106.2, 	st_marys: 28.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Sterling Shepard ', 	pos: 'WR', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 63.3, 	re_yds: 817.9, 	re_td: 4.6, 	fl: 1.7, 	fpts: 105.9, 	st_marys: 27.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kevin White ', 	pos: 'WR', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 57.2, 	re_yds: 762.3, 	re_td: 4.6, 	fl: 0.3, 	fpts: 103.3, 	st_marys: 27.6, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Corey Coleman ', 	pos: 'WR', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2, 	ru_yds: 11.1, 	ru_td: 0, 	rec: 52.6, 	re_yds: 721.3, 	re_td: 4.7, 	fl: 0.7, 	fpts: 100.2, 	st_marys: 28.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Steve Smith ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 56, 	re_yds: 720.9, 	re_td: 4.6, 	fl: 0.8, 	fpts: 98.3, 	st_marys: 27.6, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Tavon Austin', 	pos: 'WR', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 27.8, 	ru_yds: 183.2, 	ru_td: 1.4, 	rec: 51.2, 	re_yds: 525.1, 	re_td: 3.3, 	fl: 1.1, 	fpts: 97, 	st_marys: 28.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Travis Benjamin', 	pos: 'WR', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1, 	ru_yds: 5.8, 	ru_td: 0, 	rec: 54.9, 	re_yds: 716.6, 	re_td: 3.9, 	fl: 0.6, 	fpts: 94.8, 	st_marys: 23.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Markus Wheaton ', 	pos: 'WR', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 42.4, 	re_yds: 661.1, 	re_td: 4.7, 	fl: 0.2, 	fpts: 93.8, 	st_marys: 28.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Josh Gordon ', 	pos: 'WR', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 50.1, 	re_yds: 709.6, 	re_td: 3.7, 	fl: 0.2, 	fpts: 92.9, 	st_marys: 22.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Mohamed Sanu ', 	pos: 'WR', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.3, 	ru_yds: 1.6, 	ru_td: 0, 	rec: 49, 	re_yds: 686.6, 	re_td: 4.2, 	fl: 0.9, 	fpts: 92.2, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Terrance Williams ', 	pos: 'WR', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	rec: 50.1, 	re_yds: 659, 	re_td: 4, 	fl: 0.2, 	fpts: 89.3, 	st_marys: 24, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Michael Thomas', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.8, 	ru_yds: 11.2, 	ru_td: 0.1, 	rec: 53.2, 	re_yds: 651.7, 	re_td: 3.8, 	fl: 0.2, 	fpts: 89.2, 	st_marys: 23.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Pierre Garcon ', 	pos: 'WR', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.1, 	ru_yds: 6.4, 	ru_td: 0, 	rec: 42.8, 	re_yds: 623.2, 	re_td: 4.3, 	fl: 0.2, 	fpts: 88.8, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kamar Aiken ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 55, 	re_yds: 650, 	re_td: 3.8, 	fl: 0.2, 	fpts: 87.7, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Phillip Dorsett ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 50.9, 	re_yds: 646.6, 	re_td: 3.6, 	fl: 0.8, 	fpts: 84.9, 	st_marys: 21.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Mike Wallace ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 45.7, 	re_yds: 613.7, 	re_td: 4.2, 	fl: 0.9, 	fpts: 84.7, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Rishard Matthews ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3, 	ru_yds: 16, 	ru_td: 0, 	rec: 46.5, 	re_yds: 599, 	re_td: 3.8, 	fl: 1.1, 	fpts: 82.6, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Laquon Treadwell ', 	pos: 'WR', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.1, 	ru_td: 0, 	rec: 39.7, 	re_yds: 611.6, 	re_td: 3.6, 	fl: 0.2, 	fpts: 82.6, 	st_marys: 21.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Devin Funchess ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.3, 	ru_yds: 2, 	ru_td: 0, 	rec: 44.4, 	re_yds: 592.2, 	re_td: 3.5, 	fl: 0.2, 	fpts: 79.8, 	st_marys: 21, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tyler Boyd ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.8, 	ru_yds: 4.6, 	ru_td: 0, 	rec: 41.2, 	re_yds: 560.3, 	re_td: 3.8, 	fl: 0.1, 	fpts: 79.1, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kenny Britt', 	pos: 'WR', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.2, 	ru_yds: 7, 	ru_td: 0, 	rec: 40.6, 	re_yds: 546.5, 	re_td: 4.2, 	fl: 0.9, 	fpts: 78.6, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Will Fuller ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 45.9, 	re_yds: 593.3, 	re_td: 3.4, 	fl: 1.1, 	fpts: 77.3, 	st_marys: 20.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kendall Wright ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.8, 	ru_td: 0, 	rec: 50.4, 	re_yds: 584.6, 	re_td: 3.2, 	fl: 0.2, 	fpts: 77.3, 	st_marys: 19.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Robert Woods ', 	pos: 'WR', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.4, 	ru_td: 0, 	rec: 39.7, 	re_yds: 534.2, 	re_td: 3.7, 	fl: 0.2, 	fpts: 75.6, 	st_marys: 22.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ted Ginn ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.1, 	ru_yds: 6.8, 	ru_td: 0, 	rec: 37, 	re_yds: 524.2, 	re_td: 3.3, 	fl: 0.2, 	fpts: 72.4, 	st_marys: 19.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jermaine Kearse ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.6, 	ru_yds: 3.2, 	ru_td: 0, 	rec: 45, 	re_yds: 551.6, 	re_td: 3.1, 	fl: 0.9, 	fpts: 72.3, 	st_marys: 18.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kenny Stills ', 	pos: 'WR', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.9, 	ru_yds: 13.5, 	ru_td: 0, 	rec: 32.1, 	re_yds: 469.5, 	re_td: 3.8, 	fl: 0.2, 	fpts: 70.6, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Sammie Coates ', 	pos: 'WR', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.5, 	ru_yds: 0.7, 	ru_td: 0, 	rec: 41.8, 	re_yds: 542.8, 	re_td: 2.9, 	fl: 0.6, 	fpts: 70.5, 	st_marys: 17.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Nelson Agholor ', 	pos: 'WR', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 41.7, 	re_yds: 537, 	re_td: 2.8, 	fl: 0.1, 	fpts: 70.1, 	st_marys: 16.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tajae Sharpe ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 37.2, 	re_yds: 469.6, 	re_td: 3.9, 	fl: 0.1, 	fpts: 69.9, 	st_marys: 23.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Anquan Boldin ', 	pos: 'WR', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 37.2, 	re_yds: 511, 	re_td: 3, 	fl: 0.2, 	fpts: 68.5, 	st_marys: 18, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Chris Hogan', 	pos: 'WR', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.4, 	ru_yds: 1.6, 	ru_td: 0, 	rec: 37.5, 	re_yds: 499.6, 	re_td: 2.8, 	fl: 0.2, 	fpts: 66.7, 	st_marys: 16.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jaelen Strong ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.8, 	ru_yds: 22.8, 	ru_td: 0.1, 	rec: 38.6, 	re_yds: 491.8, 	re_td: 2.6, 	fl: 0.8, 	fpts: 65.8, 	st_marys: 16.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Brandon LaFell ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 40.8, 	re_yds: 484.3, 	re_td: 3, 	fl: 1.2, 	fpts: 64.1, 	st_marys: 18, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jamison Crowder ', 	pos: 'WR', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 34.9, 	re_yds: 468.2, 	re_td: 2.8, 	fl: 0.2, 	fpts: 63.1, 	st_marys: 16.8, 	status: 0, 	string: 0,	inj: '' },
																			
																			
{ name: 'Rob Gronkowski', 	pos: 'TE', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 80.6, 	re_yds: 1099.7, 	re_td: 10.1, 	fl: 0.3, 	fpts: 170.1, 	st_marys: 60.6, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Greg Olsen ', 	pos: 'TE', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 77.5, 	re_yds: 973.9, 	re_td: 6.5, 	fl: 0.8, 	fpts: 134.6, 	st_marys: 39, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jordan Reed ', 	pos: 'TE', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 84.1, 	re_yds: 911.5, 	re_td: 7.1, 	fl: 1.6, 	fpts: 130.6, 	st_marys: 42.6, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Delanie Walker ', 	pos: 'TE', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 72.8, 	re_yds: 877.7, 	re_td: 4.9, 	fl: 0.3, 	fpts: 116.8, 	st_marys: 29.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Travis Kelce', 	pos: 'TE', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 72.6, 	re_yds: 835.7, 	re_td: 5.6, 	fl: 2.1, 	fpts: 112.8, 	st_marys: 33.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Gary Barnidge ', 	pos: 'TE', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 70.3, 	re_yds: 774.2, 	re_td: 5.6, 	fl: 0.3, 	fpts: 110.6, 	st_marys: 33.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Coby Fleener', 	pos: 'TE', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 60.9, 	re_yds: 728.6, 	re_td: 5.5, 	fl: 0.3, 	fpts: 105.4, 	st_marys: 33, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Antonio Gates', 	pos: 'TE', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 61.6, 	re_yds: 717.2, 	re_td: 5.4, 	fl: 0.2, 	fpts: 103.8, 	st_marys: 32.4, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Zach Ertz ', 	pos: 'TE', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 59.6, 	re_yds: 727.8, 	re_td: 5.2, 	fl: 0.3, 	fpts: 103.7, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jason Witten ', 	pos: 'TE', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 57.3, 	re_yds: 679.7, 	re_td: 5.8, 	fl: 0.3, 	fpts: 102, 	st_marys: 34.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jimmy Graham ', 	pos: 'TE', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 60.5, 	re_yds: 701.6, 	re_td: 5.1, 	fl: 0.8, 	fpts: 99.3, 	st_marys: 30.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Martellus Bennett', 	pos: 'TE', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 70.9, 	re_yds: 752.3, 	re_td: 4.3, 	fl: 0.8, 	fpts: 99.1, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Julius Thomas ', 	pos: 'TE', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 64.6, 	re_yds: 745.8, 	re_td: 4, 	fl: 0.9, 	fpts: 96.9, 	st_marys: 24, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Dwayne Allen ', 	pos: 'TE', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 55.6, 	re_yds: 604, 	re_td: 5.1, 	fl: 0.3, 	fpts: 90.7, 	st_marys: 30.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Tyler Eifert ', 	pos: 'TE', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 53.1, 	re_yds: 595.8, 	re_td: 5.2, 	fl: 0.3, 	fpts: 90, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Zach Miller ', 	pos: 'TE', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 52.3, 	re_yds: 577, 	re_td: 5.3, 	fl: 0.3, 	fpts: 88.8, 	st_marys: 31.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Charles Clay ', 	pos: 'TE', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 51.6, 	re_yds: 587.4, 	re_td: 4.9, 	fl: 0.1, 	fpts: 87.8, 	st_marys: 29.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Eric Ebron ', 	pos: 'TE', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 52.2, 	re_yds: 583.4, 	re_td: 4.3, 	fl: 0.2, 	fpts: 83.9, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ladarius Green ', 	pos: 'TE', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 54, 	re_yds: 590.5, 	re_td: 3.7, 	fl: 0.2, 	fpts: 80.6, 	st_marys: 22.2, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Kyle Rudolph ', 	pos: 'TE', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 47, 	re_yds: 484.2, 	re_td: 4.2, 	fl: 0.2, 	fpts: 73.2, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jordan Cameron ', 	pos: 'TE', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 44, 	re_yds: 508.8, 	re_td: 3.5, 	fl: 0.2, 	fpts: 71.4, 	st_marys: 21, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Clive Walford ', 	pos: 'TE', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 41.9, 	re_yds: 455, 	re_td: 3.8, 	fl: 0.2, 	fpts: 68, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jared Cook', 	pos: 'TE', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 34.6, 	re_yds: 433.7, 	re_td: 3.8, 	fl: 0.7, 	fpts: 64.5, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Austin Seferian-Jenkins', 	pos: 'TE', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 46.3, 	re_yds: 478.3, 	re_td: 2.6, 	fl: 0.3, 	fpts: 63.1, 	st_marys: 15.6, 	status: 0, 	string: 0,	inj: 'INJ' },
{ name: 'Jacob Tamme ', 	pos: 'TE', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 34.6, 	re_yds: 420.8, 	re_td: 3.4, 	fl: 0.7, 	fpts: 60.8, 	st_marys: 20.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Vance McDonald', 	pos: 'TE', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 35.9, 	re_yds: 366.9, 	re_td: 4, 	fl: 0.2, 	fpts: 60, 	st_marys: 24, 	status: 0, 	string: 0,	inj: '' },
																			
																			
{ name: 'Stephen Gostkowski', 	pos: 'K', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 127, 	st_marys: 127, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Mason Crosby', 	pos: 'K', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 121.4, 	st_marys: 121.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Justin Tucker ', 	pos: 'K', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 120.6, 	st_marys: 120.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Steven Hauschka ', 	pos: 'K', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 120.2, 	st_marys: 120.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Graham Gano ', 	pos: 'K', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 119.6, 	st_marys: 119.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Chris Boswell ', 	pos: 'K', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 118, 	st_marys: 118, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Dan Bailey ', 	pos: 'K', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 117.5, 	st_marys: 117.5, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Josh Brown ', 	pos: 'K', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 116.9, 	st_marys: 116.9, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Chandler Catanzaro ', 	pos: 'K', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 116.5, 	st_marys: 116.5, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Blair Walsh ', 	pos: 'K', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 114.2, 	st_marys: 114.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Brandon McManus ', 	pos: 'K', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 112.7, 	st_marys: 112.7, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Adam Vinatieri ', 	pos: 'K', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 111.3, 	st_marys: 111.3, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Mike Nugent ', 	pos: 'K', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 110.6, 	st_marys: 110.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Cairo Santos', 	pos: 'K', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 110.1, 	st_marys: 110.1, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Robbie Gould ', 	pos: 'K', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 109.7, 	st_marys: 109.7, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Matt Prater ', 	pos: 'K', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 107, 	st_marys: 107, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Dan Carpenter ', 	pos: 'K', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 106.4, 	st_marys: 106.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Nick Novak ', 	pos: 'K', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 106.2, 	st_marys: 106.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Matt Bryant ', 	pos: 'K', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 104.1, 	st_marys: 104.1, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Sebastian Janikowski ', 	pos: 'K', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 103.6, 	st_marys: 103.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Nick Folk ', 	pos: 'K', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 103.6, 	st_marys: 103.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Dustin Hopkins ', 	pos: 'K', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 103.3, 	st_marys: 103.3, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Jason Myers ', 	pos: 'K', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 101.8, 	st_marys: 101.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Josh Lambo', 	pos: 'K', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 99.9, 	st_marys: 99.9, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Roberto Aguayo', 	pos: 'K', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 99.3, 	st_marys: 99.3, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Phil Dawson', 	pos: 'K', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 97.6, 	st_marys: 97.6, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Greg Zuerlein', 	pos: 'K', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 96.8, 	st_marys: 96.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Andrew Franks ', 	pos: 'K', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 95.1, 	st_marys: 95.1, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Travis Coons ', 	pos: 'K', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 94.2, 	st_marys: 94.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Cody Parkey ', 	pos: 'K', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 92.8, 	st_marys: 92.8, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Caleb Sturgis ', 	pos: 'K', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 92.4, 	st_marys: 92.4, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Ryan Succop ', 	pos: 'K', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 88.2, 	st_marys: 88.2, 	status: 0, 	string: 0,	inj: '' },
{ name: 'Kai Forbath', 	pos: 'K', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 85.4, 	st_marys: 85.4, 	status: 0, 	string: 0,	inj: '' }

];

	
	$scope.sortType     = 'fpts'; // set the default sort type
 	$scope.sortReverse  = true;  // set the default sort order
 	$scope.posFilter   = '';     // set the default search/filter term
 	$scope.r_picked = false;
 	$scope.r_taken = false;
 	$scope.r_watch = false;
 	$scope.r_normal = true;
 	$scope.isqb = false;
 	$scope.isrb = false;
 	$scope.iswr = false;
 	$scope.iste = false;
 	$scope.isk = false;
 	$scope.pos_val = 0;
 	$scope.isgood = false;
 	$scope.isbad = false;
 	$scope.isnot = false;
 	$scope.cell_val = '';
 	$scope.selectedTabs = [];
 	$scope.idSelectedRow = null;

	$scope.setSelected = function (idSelectedRow) {
	   $scope.idSelectedRow = idSelectedRow;
	};

	$scope.colorRow = function(btn) {
		for (var i = 0; i < $scope.rowCollection.length; i++)
		{
			if ($scope.rowCollection[i].name == $scope.idSelectedRow) {
				if (btn == 'reset')
					$scope.rowCollection[i].status = 0; // clear
				else if (btn == 'taken')
					$scope.rowCollection[i].status = 1; // red
				else if (btn == 'bpicked')
					$scope.rowCollection[i].status = 2;
				else if (btn == 'bwatch')
					$scope.rowCollection[i].status = 3;
				else if (btn == 'apicked')
					$scope.rowCollection[i].status = 4;
				else if (btn == 'awatch')
					$scope.rowCollection[i].status = 5;
				else if (btn == 'gpicked')
					$scope.rowCollection[i].status = 6;
				else if (btn == 'gwatch')
					$scope.rowCollection[i].status = 7;
				return;
			}
		}
	}


	$scope.togg = function(r) {
		
			if (r.status < 3)
				r.status++;
			else
				r.status = 0;
	};

	$scope.multifunc = function() {
		$scope.bubbleSort();
		$scope.findTeammate();
	};

	$scope.bubbleSort = function() {
	   var len = $scope.rowCollection.length;
	   for (var i = len-1; i>=0; i--){
	     for(var j = 1; j<=i; j++){
	       if($scope.rowCollection[j-1].fpts<=$scope.rowCollection[j].fpts){
	           var temp = $scope.rowCollection[j-1];
	           $scope.rowCollection[j-1] = $scope.rowCollection[j];
	           $scope.rowCollection[j] = temp;
	        }
	     }
	   }
	   return $scope.rowCollection;
	};

	$scope.findTeammate = function() {

		for (var i = 0; i < $scope.rowCollection.length - 1; i++) {
			if ($scope.rowCollection[i].string == 0)
			{
				var pos1 = $scope.rowCollection[i].pos.trim();
				var team1 = $scope.rowCollection[i].team.trim();
				var no_match = true;
				for (var j = i + 1; j < $scope.rowCollection.length; j++) {
					var pos2 = $scope.rowCollection[j].pos.trim();
					var team2 = $scope.rowCollection[j].team.trim();
					if (((pos1 == pos2) || ((pos1 == 'WR' && pos2 == 'TE') || (pos1 == 'TE' && pos2 == 'WR'))) && (team1 == team2))
					{
						if ($scope.rowCollection[j].string == 0)
						{
							no_match = false;
							var pts1 = $scope.rowCollection[i].fpts;
							var pts2 = $scope.rowCollection[j].fpts;

							if (pos1 == 'QB')
							{
								if (pts1 > pts2)
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1;
									$scope.rowCollection[j].string = 2;
								}
								
							}
							else if (pos1 == 'RB')
							{
								if (pts1 >= (pts2 * 3.4))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1;
									$scope.rowCollection[j].string = 3;
								}
								else if (pts1 >= (pts2 * 2.7))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1;
									$scope.rowCollection[j].string = 2.5;
								}
								else if (pts1 >= (pts2 * 2.1))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1;
									$scope.rowCollection[j].string = 2;
								}
								else if (pts1 >= (pts2 * 1.4))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1.25;
									$scope.rowCollection[j].string = 1.75;
								}
								else
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1.5;
									$scope.rowCollection[j].string = 1.5;
								}
							}
							else if ((pos1 == 'WR') || (pos1 == 'TE') || ((pos1 == 'WR') && (pos2 == 'TE')) || ((pos2 == 'WR') && (pos1 == 'TE')))
							{
								if (pts1 >= (pts2 * 2.7))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1;
									$scope.rowCollection[j].string = 3.5;
								}
								else if (pts1 >= (pts2 * 2.4))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1;
									$scope.rowCollection[j].string = 3;
								}
								else if (pts1 >= (pts2 * 2.1))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1;
									$scope.rowCollection[j].string = 2.5;
								}
								else if (pts1 >= (pts2 * 1.7))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1;
									$scope.rowCollection[j].string = 2;
								}
								else if (pts1 >= (pts2 * 1.3))
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1.25;
									$scope.rowCollection[j].string = 1.75;
								}
								else if (pts2 >= (pts1 * 1.25))
								{
									if ($scope.rowCollection[j].string == 0)
										$scope.rowCollection[j].string = 1.25;
									$scope.rowCollection[i].string = 1.75;
								}
								else if (pts2 >= (pts1 * 1.6))
								{
									if ($scope.rowCollection[j].string == 0)
										$scope.rowCollection[j].string = 1;
									$scope.rowCollection[i].string = 2;
								}
								else if (pts2 >= (pts1 * 2))
								{
									if ($scope.rowCollection[j].string == 0)
										$scope.rowCollection[j].string = 1;
									$scope.rowCollection[i].string = 2.5;
								}
								else if (pts2 >= (pts1 * 2.3))
								{
									if ($scope.rowCollection[j].string == 0)
										$scope.rowCollection[j].string = 1;
									$scope.rowCollection[i].string = 3;
								}
								else
								{
									if ($scope.rowCollection[i].string == 0)
										$scope.rowCollection[i].string = 1.5;
									$scope.rowCollection[j].string = 1.5;
								}
							}
						}
					}
				}
				if (no_match)
				{
					$scope.rowCollection[i].string = 1;
				}
			}		
		}
	};

	$scope.findPos = function(p) {
		var pos = p.trim();
		if (pos == 'QB') {
			$scope.pos_val = 0;
			$scope.isqb = true;
			$scope.isrb = false;
			$scope.iswr = false;
			$scope.iste = false;
			$scope.isk = false;
		}
		else if (pos == 'RB') {
			$scope.pos_val = 1;
			$scope.isqb = false;
			$scope.isrb = true;
			$scope.iswr = false;
			$scope.iste = false;
			$scope.isk = false;
		} 
		else if (pos == 'WR') {
			$scope.pos_val = 2;
			$scope.isqb = false;
			$scope.isrb = false;
			$scope.iswr = true;
			$scope.iste = false;
			$scope.isk = false;
		} 
		else if (pos == 'TE') {
			$scope.pos_val = 3;
			$scope.isqb = false;
			$scope.isrb = false;
			$scope.iswr = false;
			$scope.iste = true;
			$scope.isk = false;
		} 
		else if (pos == 'K') {
			$scope.pos_val = 4;
			$scope.isqb = false;
			$scope.isrb = false;
			$scope.iswr = false;
			$scope.iste = false;
			$scope.isk = true;
		} 
		return pos;
	}

	$scope.qbs = function(tm) {
		var team = tm.trim();
		if (team == "NE" || team == "PIT" || team == "NYG" || team == "IND" || team == "GB" || team == "NO" || team == "ARI" || team == "SEA")
		{
			$scope.isgood = true;
			$scope.isbad = false;
			$scope.isnot = false;
			return "+++";
		}
		else if (team == "TEN" || team == "CLE" || team == "DEN" || team == "SF" || team == "PHI" || team == "MIN" || team == "BUF" || team == "LA")
		{
			$scope.isbad = true;
			$scope.isgood = false;
			$scope.isnot = false;
			return "---";
		}
		else {
			$scope.isbad = false;
			$scope.isgood = false;
			$scope.isnot = true;
		}
	};

	$scope.receivers = function(tm) {
		var team = tm.trim();
		if (team == "ARI" || team == "JAC" || team == "WAS" || team == "NE" || team == "GB") {
			$scope.isgood = true;
			$scope.isbad = false;
			$scope.isnot = false;
			return "+++";
		}
		else if (team == "CLE" || team == "LA" || team == "SF" || team == "DET") {
			$scope.isbad = true;
			$scope.isgood = false;
			$scope.isnot = false;
			return "---";
		}
		else {
			$scope.isbad = false;
			$scope.isgood = false;
			$scope.isnot = true;
		}
	};

	$scope.teams = function(tm) {
		var team = tm.trim();
		if (team == "NE" || team == "PIT" || team == "OAK" || team == "DAL" || team == "GB" || team == "CAR" || team == "ARI" || team == "SEA") {
			$scope.isgood = true;
			$scope.isbad = false;
			$scope.isnot = false;
			return "+++";
		}
		else if (team == "TEN" || team == "CLE" || team == "SD" || team == "SF" || team == "PHI" || team == "DET" || team == "ATL" || team == "LA") {
			$scope.isbad = true;
			$scope.isgood = false;
			$scope.isnot = false;
			return "---";
		}
		else {
			$scope.isbad = false;
			$scope.isgood = false;
			$scope.isnot = true;
		}
	};

	$scope.ols = function(tm) {
		var team = tm.trim();
		if (team == "MIN" || team == "DAL" || team == "PIT" || team == "GB" || team == "CIN" || team == "OAK" || team == "PHI" || team == "MIA") {
			$scope.isgood = true;
			$scope.isbad = false;
			$scope.isnot = false;
			return "+++";
		}
		else if (team == "SEA" || team == "KC" || team == "SF" || team == "JAC" || team == "NYG" || team == "DET") {
			$scope.isbad = true;
			$scope.isgood = false;
			$scope.isnot = false;
			return "---";
		}
		else {
			$scope.isbad = false;
			$scope.isgood = false;
			$scope.isnot = true;
		}
	};

	$scope.defenses = function(tm) {
		var team = tm.trim();
		if (team == "MIN" || team == "DEN" || team == "ARI" || team == "HOU" || team == "CIN" || team == "CAR" || team == "LA" || team == "SEA")
		{
			$scope.isgood = true;
			$scope.isbad = false;
			return "+++";
		}
		else if (team == "NO" || team == "CLE" || team == "SF" || team == "WAS" || team == "IND" || team == "PHI" || team == "BUF" || team == "NYG")
		{
			$scope.isgood = false;
			$scope.isbad = true;
			return "---";
		}
		else {
			$scope.isbad = false;
			$scope.isgood = false;
			$scope.isnot = true;
		}
	};

	$scope.rbs = function(tm) {
		var team = tm.trim();
		if (team == "MIN" || team == "LA" || team == "ARI" || team == "KC" || team == "PIT" || team == "DAL" || team == "ATL" || team == "HOU")
		{
			$scope.isgood = true;
			$scope.isbad = false;
			return "+++";
		}
		else if (team == "NYG" || team == "CLE" || team == "IND" || team == "DET" || team == "BAL" || team == "CHI" || team == "WAS" || team == "SD")
		{
			$scope.isgood = false;
			$scope.isbad = true;
			return "---";
		}
		else {
			$scope.isbad = false;
			$scope.isgood = false;
			$scope.isnot = true;
		}
	};


});

app.factory("httpLoader", ["$http", function ($http) {
    function load(href, done) {
        $http.get(href)
            .success(function(data, status, headers, config){
                done(null, data);
            })
            .error(function(data, status, headers, config){
                console.log(status);
                var err = new Error(data);
                err.code = status;
                done(err);
            });
    }
    return {
        load: load
    };
}]);


// Categories directive - html Element
app.directive("football", [function (){
    return {
        restrict: 'E',
        templateUrl: 'http://localhost:3000/views/football.html',
        controller: ["httpLoader", '$http', function (httpLoader, $http) {
            var ctlr = this;

            
            /*ctlr.runQuery = function(){
                var category = $('#categorySelect').val();
                ctlr.getData(category);
            }*/

            $(document).ready(function(){
			    $("#data td.defense_cell:contains('Good')").css('background-color','#fcc');
			});

        }],
        controllerAs: "ctlr"
    };
}]);

/*app.filter("colorCell", function(){
   return function(input){
      // Your logic
      	var output;

      	//var table = document.getElementById('data');
		//var tbody = table.getElementsByTagName('tbody')[0];
		//var cell = tbody.getElementByTagName(this);
		var cell = document.getElementById('d_cell');

		//for (var i=0, len=cells.length; i<len; i++){
		    if (input > 5){
		        cell.style.color = 'red';
		    }
		    else if (input < -5){
		        cell.style.color = 'green';
		    }
		//}
      return output; 
   }
});*/


$(function() {
	var url = window.location;
	// Will only work if string in href matches with location
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

	// Will also work for relative and absolute hrefs
	$('ul.nav a').filter(function() {
	    return this.href == url;
	}).parent().addClass('active');
});






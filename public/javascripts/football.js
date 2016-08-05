var app = angular.module('Football', []);

app.controller('ctlr', function($scope) {
	$scope.rowCollection = [
{ name: 'Cam Newton ', 	pos: 'QB', 	team: 'CAR', 	att: 499.6, 	comp: 299.1, 	p_yds: 3722.7, 	p_td: 27.1, 	int: 12, 	rush: 121.4, 	ru_yds: 625.9, 	ru_td: 7, 	fl: 3.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 330.8, 	st_marys: 123.3 },
{ name: 'Aaron Rodgers', 	pos: 'QB', 	team: ' GB', 	att: 563.2, 	comp: 357.5, 	p_yds: 4229.4, 	p_td: 34.9, 	int: 7.7, 	rush: 54.3, 	ru_yds: 273.3, 	ru_td: 2, 	fl: 3.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 326.1, 	st_marys: 116.7 },
{ name: 'Russell Wilson ', 	pos: 'QB', 	team: 'SEA', 	att: 478.8, 	comp: 309, 	p_yds: 3785.9, 	p_td: 28.9, 	int: 10.9, 	rush: 106.5, 	ru_yds: 578.7, 	ru_td: 3.2, 	fl: 3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 316.1, 	st_marys: 105.9 },
{ name: 'Andrew Luck ', 	pos: 'QB', 	team: 'IND', 	att: 621, 	comp: 366.4, 	p_yds: 4272.7, 	p_td: 32.7, 	int: 17.3, 	rush: 60.9, 	ru_yds: 286.4, 	ru_td: 2.2, 	fl: 3.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 301.6, 	st_marys: 111.3 },
{ name: 'Drew Brees', 	pos: 'QB', 	team: ' NO', 	att: 642, 	comp: 432.1, 	p_yds: 4815.7, 	p_td: 31.6, 	int: 14.6, 	rush: 25.1, 	ru_yds: 40.9, 	ru_td: 1, 	fl: 3.1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 293.8, 	st_marys: 100.8 },
{ name: 'Ben Roethlisberger ', 	pos: 'QB', 	team: 'PIT', 	att: 584.2, 	comp: 383.1, 	p_yds: 4631, 	p_td: 29.6, 	int: 14.2, 	rush: 27.1, 	ru_yds: 63.2, 	ru_td: 0.8, 	fl: 2.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 281.9, 	st_marys: 93.6 },
{ name: 'Carson Palmer ', 	pos: 'QB', 	team: 'ARI', 	att: 567.1, 	comp: 356.2, 	p_yds: 4437.9, 	p_td: 30.5, 	int: 13.9, 	rush: 26.4, 	ru_yds: 56.2, 	ru_td: 0.7, 	fl: 3.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 275.1, 	st_marys: 95.7 },
{ name: 'Blake Bortles ', 	pos: 'QB', 	team: 'JAC', 	att: 565, 	comp: 331.7, 	p_yds: 3958.6, 	p_td: 28.5, 	int: 17.6, 	rush: 55.3, 	ru_yds: 312.4, 	ru_td: 1.9, 	fl: 4.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 271, 	st_marys: 96.9 },
{ name: 'Tyrod Taylor ', 	pos: 'QB', 	team: 'BUF', 	att: 462.4, 	comp: 284.7, 	p_yds: 3398.7, 	p_td: 21, 	int: 11, 	rush: 103, 	ru_yds: 537.2, 	ru_td: 3.4, 	fl: 2.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 267.2, 	st_marys: 83.4 },
{ name: 'Eli Manning ', 	pos: 'QB', 	team: 'NYG', 	att: 602.6, 	comp: 376.8, 	p_yds: 4349, 	p_td: 29.7, 	int: 14.6, 	rush: 20.5, 	ru_yds: 62.7, 	ru_td: 0.5, 	fl: 3.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 265.7, 	st_marys: 92.1 },
{ name: 'Philip Rivers', 	pos: 'QB', 	team: ' SD', 	att: 621.4, 	comp: 405.9, 	p_yds: 4531.3, 	p_td: 28.9, 	int: 15.6, 	rush: 24.4, 	ru_yds: 50.4, 	ru_td: 0.2, 	fl: 3.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 265.5, 	st_marys: 87.9 },
{ name: 'Andy Dalton ', 	pos: 'QB', 	team: 'CIN', 	att: 511.1, 	comp: 325.4, 	p_yds: 3868.9, 	p_td: 25.7, 	int: 12.6, 	rush: 66.1, 	ru_yds: 189.2, 	ru_td: 2.6, 	fl: 3.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 259.8, 	st_marys: 92.7 },
{ name: 'Matthew Stafford ', 	pos: 'QB', 	team: 'DET', 	att: 582.2, 	comp: 373.1, 	p_yds: 4196.1, 	p_td: 25.9, 	int: 14.1, 	rush: 36.3, 	ru_yds: 126.5, 	ru_td: 1.4, 	fl: 3.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 257.8, 	st_marys: 86.1 },
{ name: 'Kirk Cousins ', 	pos: 'QB', 	team: 'WAS', 	att: 552.4, 	comp: 359.3, 	p_yds: 4177.8, 	p_td: 26.2, 	int: 15, 	rush: 30.3, 	ru_yds: 75.9, 	ru_td: 2.6, 	fl: 3.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 257.7, 	st_marys: 94.2 },
{ name: 'Jameis Winston', 	pos: 'QB', 	team: ' TB', 	att: 536.5, 	comp: 321.3, 	p_yds: 3946, 	p_td: 23.7, 	int: 15.4, 	rush: 52.3, 	ru_yds: 210.1, 	ru_td: 3.7, 	fl: 3.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 257.6, 	st_marys: 93.3 },
{ name: 'Derek Carr ', 	pos: 'QB', 	team: 'OAK', 	att: 589.7, 	comp: 357.7, 	p_yds: 3948.8, 	p_td: 28.4, 	int: 13.9, 	rush: 30.9, 	ru_yds: 116.4, 	ru_td: 0.7, 	fl: 3.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 252.2, 	st_marys: 89.4 },
{ name: 'Tony Romo ', 	pos: 'QB', 	team: 'DAL', 	att: 518.4, 	comp: 342.5, 	p_yds: 3914, 	p_td: 29.1, 	int: 12.9, 	rush: 24.9, 	ru_yds: 69.7, 	ru_td: 0.6, 	fl: 3.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 250.7, 	st_marys: 90.9 },
{ name: 'Ryan Tannehill ', 	pos: 'QB', 	team: 'MIA', 	att: 582.2, 	comp: 362.4, 	p_yds: 4093.5, 	p_td: 24.2, 	int: 13.7, 	rush: 41.6, 	ru_yds: 181.4, 	ru_td: 1, 	fl: 3.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 250.6, 	st_marys: 78.6 },
{ name: 'Matt Ryan ', 	pos: 'QB', 	team: 'ATL', 	att: 607.9, 	comp: 401.9, 	p_yds: 4477.1, 	p_td: 25, 	int: 15.6, 	rush: 33.6, 	ru_yds: 75.9, 	ru_td: 0.3, 	fl: 3.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 249.8, 	st_marys: 76.8 },
{ name: 'Alex Smith', 	pos: 'QB', 	team: ' KC', 	att: 479.6, 	comp: 306.4, 	p_yds: 3411.4, 	p_td: 21.4, 	int: 9.4, 	rush: 72.4, 	ru_yds: 398.1, 	ru_td: 1.8, 	fl: 2.8, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 248.5, 	st_marys: 75. },
{ name: 'Ryan Fitzpatrick ', 	pos: 'QB', 	team: 'NYJ', 	att: 542.2, 	comp: 321, 	p_yds: 3677.1, 	p_td: 24.3, 	int: 15.3, 	rush: 60.3, 	ru_yds: 263.5, 	ru_td: 2.1, 	fl: 2.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 247.8, 	st_marys: 85.5 },
{ name: 'Marcus Mariota ', 	pos: 'QB', 	team: 'TEN', 	att: 496.1, 	comp: 307.1, 	p_yds: 3567.3, 	p_td: 20.8, 	int: 14.7, 	rush: 58.9, 	ru_yds: 387.7, 	ru_td: 3, 	fl: 4.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 243.9, 	st_marys: 80.4 },
{ name: 'Joe Flacco ', 	pos: 'QB', 	team: 'BAL', 	att: 591.4, 	comp: 361.6, 	p_yds: 4044.5, 	p_td: 24.4, 	int: 15.2, 	rush: 29.6, 	ru_yds: 61.1, 	ru_td: 1.7, 	fl: 3.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 237.9, 	st_marys: 83.4 },
{ name: 'Tom Brady', 	pos: 'QB', 	team: ' NE', 	att: 472.7, 	comp: 301.3, 	p_yds: 3449.5, 	p_td: 25.9, 	int: 7, 	rush: 26.3, 	ru_yds: 48.8, 	ru_td: 1.4, 	fl: 2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 236.6, 	st_marys: 86.1 },
{ name: 'Jay Cutler ', 	pos: 'QB', 	team: 'CHI', 	att: 526.1, 	comp: 333.8, 	p_yds: 3807.7, 	p_td: 23.7, 	int: 15.9, 	rush: 39.6, 	ru_yds: 179, 	ru_td: 1.2, 	fl: 3.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 233.4, 	st_marys: 78.3 },
{ name: 'Brock Osweiler ', 	pos: 'QB', 	team: 'HOU', 	att: 539.5, 	comp: 326.9, 	p_yds: 3807.7, 	p_td: 23.6, 	int: 14.2, 	rush: 45.1, 	ru_yds: 124.4, 	ru_td: 1.1, 	fl: 3.8, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 229.6, 	st_marys: 77.4 },
{ name: 'Teddy Bridgewater ', 	pos: 'QB', 	team: 'MIN', 	att: 468.1, 	comp: 297.1, 	p_yds: 3321.9, 	p_td: 19, 	int: 11.9, 	rush: 53.2, 	ru_yds: 256.3, 	ru_td: 2.4, 	fl: 3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 219.2, 	st_marys: 71.4 },
{ name: 'Robert Griffin ', 	pos: 'QB', 	team: 'CLE', 	att: 452.7, 	comp: 279.2, 	p_yds: 3251.3, 	p_td: 16, 	int: 13.5, 	rush: 95.3, 	ru_yds: 267.9, 	ru_td: 1.6, 	fl: 3.8, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 196, 	st_marys: 57.6 },
{ name: 'Jared Goff', 	pos: 'QB', 	team: ' LA', 	att: 482.3, 	comp: 291, 	p_yds: 3308, 	p_td: 17.7, 	int: 15, 	rush: 38.5, 	ru_yds: 137, 	ru_td: 1, 	fl: 3.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 186.1, 	st_marys: 59.1 },
{ name: 'Sam Bradford ', 	pos: 'QB', 	team: 'PHI', 	att: 435.3, 	comp: 271.5, 	p_yds: 2978.8, 	p_td: 17, 	int: 11.1, 	rush: 21.3, 	ru_yds: 50.9, 	ru_td: 0.4, 	fl: 3.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 166.1, 	st_marys: 53.4 },
{ name: 'Blaine Gabbert', 	pos: 'QB', 	team: ' SF', 	att: 346.8, 	comp: 208.9, 	p_yds: 2355.9, 	p_td: 11.8, 	int: 9.8, 	rush: 41.4, 	ru_yds: 209.9, 	ru_td: 1.2, 	fl: 2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 145.8, 	st_marys: 42.6 },
{ name: 'Mark Sanchez ', 	pos: 'QB', 	team: 'DEN', 	att: 372.9, 	comp: 226.3, 	p_yds: 2558, 	p_td: 15, 	int: 12.9, 	rush: 28.1, 	ru_yds: 85, 	ru_td: 0.6, 	fl: 3.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 141.9, 	st_marys: 48.6 },
{ name: 'Colin Kaepernick', 	pos: 'QB', 	team: ' SF', 	att: 186.2, 	comp: 105.8, 	p_yds: 1192.6, 	p_td: 6.1, 	int: 5.2, 	rush: 32.3, 	ru_yds: 167.3, 	ru_td: 0.8, 	fl: 2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 79.5, 	st_marys: 23.1 },
{ name: 'Paxton Lynch ', 	pos: 'QB', 	team: 'DEN', 	att: 155.7, 	comp: 89.4, 	p_yds: 1033.2, 	p_td: 5.9, 	int: 4.8, 	rush: 16, 	ru_yds: 59.7, 	ru_td: 0.3, 	fl: 0.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 62, 	st_marys: 19.5 },
{ name: 'Jimmy Garoppolo', 	pos: 'QB', 	team: ' NE', 	att: 149.4, 	comp: 88.5, 	p_yds: 981.6, 	p_td: 6.2, 	int: 3.6, 	rush: 8.3, 	ru_yds: 16.2, 	ru_td: 0.1, 	fl: 0.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 57.8, 	st_marys: 19.2 },
{ name: 'Carson Wentz ', 	pos: 'QB', 	team: 'PHI', 	att: 109.9, 	comp: 64.9, 	p_yds: 729.9, 	p_td: 4, 	int: 3.6, 	rush: 11, 	ru_yds: 44.4, 	ru_td: 0.5, 	fl: 0.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 43.9, 	st_marys: 15 },
{ name: 'Josh McCown ', 	pos: 'QB', 	team: 'CLE', 	att: 104.6, 	comp: 64.3, 	p_yds: 726.9, 	p_td: 4.2, 	int: 3, 	rush: 8.2, 	ru_yds: 36.7, 	ru_td: 0.1, 	fl: 0.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 43.4, 	st_marys: 13.2 },
																
																
{ name: 'Adrian Peterson ', 	pos: 'RB', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 296.7, 	ru_yds: 1344.4, 	ru_td: 9.2, 	fl: 33.3, 	rec: 238, 	re_yds: 1, 	re_td: 3.1, 	fpts: 213.1, 	st_marys: 61.2 },
{ name: 'Todd Gurley', 	pos: 'RB', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 282.6, 	ru_yds: 1255.9, 	ru_td: 9.2, 	fl: 35.1, 	rec: 295.4, 	re_yds: 0.9, 	re_td: 1.8, 	fpts: 211.6, 	st_marys: 60.6 },
{ name: 'Jamaal Charles', 	pos: 'RB', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 223.6, 	ru_yds: 1093.9, 	ru_td: 8.6, 	fl: 48.7, 	rec: 377, 	re_yds: 3.2, 	re_td: 3.7, 	fpts: 210.5, 	st_marys: 70.8 },
{ name: 'David Johnson ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 220.2, 	ru_yds: 946.7, 	ru_td: 8.2, 	fl: 55.8, 	rec: 508.1, 	re_yds: 2.9, 	re_td: 1.5, 	fpts: 209.2, 	st_marys: 66.6 },
{ name: 'Lamar Miller ', 	pos: 'RB', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 260.6, 	ru_yds: 1159.8, 	ru_td: 7.2, 	fl: 46.6, 	rec: 362.8, 	re_yds: 1.6, 	re_td: 1.9, 	fpts: 201, 	st_marys: 52.8 },
{ name: 'Le\'Veon Bell ', 	pos: 'RB', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 209.1, 	ru_yds: 949.5, 	ru_td: 7.6, 	fl: 52.1, 	rec: 417.6, 	re_yds: 2, 	re_td: 1.1, 	fpts: 191.7, 	st_marys: 57.6 },
{ name: 'Devonta Freeman ', 	pos: 'RB', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 216.6, 	ru_yds: 880.8, 	ru_td: 7.2, 	fl: 63.2, 	rec: 498.5, 	re_yds: 2.1, 	re_td: 2, 	fpts: 189.3, 	st_marys: 55.8 },
{ name: 'Ezekiel Elliott ', 	pos: 'RB', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 240.1, 	ru_yds: 1069.9, 	ru_td: 7.7, 	fl: 38.1, 	rec: 305.3, 	re_yds: 1.4, 	re_td: 1.6, 	fpts: 188.5, 	st_marys: 54.6 },
{ name: 'Eddie Lacy', 	pos: 'RB', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 228.2, 	ru_yds: 1016.3, 	ru_td: 7.1, 	fl: 34.2, 	rec: 292, 	re_yds: 1.8, 	re_td: 2.2, 	fpts: 180, 	st_marys: 53.4 },
{ name: 'LeSean McCoy ', 	pos: 'RB', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 251.3, 	ru_yds: 1081.6, 	ru_td: 6.3, 	fl: 40.8, 	rec: 303.2, 	re_yds: 1.3, 	re_td: 2.3, 	fpts: 179.8, 	st_marys: 45.6 },
{ name: 'Mark Ingram', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 215.6, 	ru_yds: 934, 	ru_td: 7.6, 	fl: 52.4, 	rec: 364.2, 	re_yds: 1.2, 	re_td: 1.7, 	fpts: 179.3, 	st_marys: 52.8 },
{ name: 'Doug Martin', 	pos: 'RB', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 257.9, 	ru_yds: 1135.3, 	ru_td: 6.2, 	fl: 32.6, 	rec: 237.7, 	re_yds: 0.9, 	re_td: 3.2, 	fpts: 173.3, 	st_marys: 42.6 },
{ name: 'Thomas Rawls ', 	pos: 'RB', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 225.9, 	ru_yds: 1087.6, 	ru_td: 6.6, 	fl: 22.7, 	rec: 178.8, 	re_yds: 0.9, 	re_td: 1.9, 	fpts: 168, 	st_marys: 45. },
{ name: 'C.J. Anderson ', 	pos: 'RB', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 220, 	ru_yds: 992.5, 	ru_td: 6.2, 	fl: 35.5, 	rec: 269, 	re_yds: 1, 	re_td: 1.9, 	fpts: 165.4, 	st_marys: 43.2 },
{ name: 'Matt Forte ', 	pos: 'RB', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 213.6, 	ru_yds: 907.8, 	ru_td: 5.1, 	fl: 45.9, 	rec: 365.2, 	re_yds: 1.7, 	re_td: 1.9, 	fpts: 164.6, 	st_marys: 40.8 },
{ name: 'Carlos Hyde', 	pos: 'RB', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 239.4, 	ru_yds: 1001.3, 	ru_td: 5.6, 	fl: 33.9, 	rec: 209.5, 	re_yds: 0.6, 	re_td: 1.2, 	fpts: 156, 	st_marys: 37.2 },
{ name: 'Latavius Murray ', 	pos: 'RB', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 222.1, 	ru_yds: 927.6, 	ru_td: 6, 	fl: 34.3, 	rec: 229.7, 	re_yds: 0.8, 	re_td: 1.8, 	fpts: 152.7, 	st_marys: 40.8 },
{ name: 'Matt Jones ', 	pos: 'RB', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 224, 	ru_yds: 885.7, 	ru_td: 5.3, 	fl: 33.4, 	rec: 345.4, 	re_yds: 1.3, 	re_td: 5.4, 	fpts: 151.7, 	st_marys: 39.6 },
{ name: 'DeMarco Murray ', 	pos: 'RB', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 209.8, 	ru_yds: 903.2, 	ru_td: 5.9, 	fl: 32.8, 	rec: 249.3, 	re_yds: 1, 	re_td: 2.7, 	fpts: 151.2, 	st_marys: 41.4 },
{ name: 'Jonathan Stewart ', 	pos: 'RB', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 226.7, 	ru_yds: 985.3, 	ru_td: 6, 	fl: 22.2, 	rec: 154, 	re_yds: 0.9, 	re_td: 2, 	fpts: 151.2, 	st_marys: 41.4 },
{ name: 'Jeremy Langford ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 185, 	ru_yds: 750.4, 	ru_td: 5, 	fl: 36.5, 	rec: 329.8, 	re_yds: 1.6, 	re_td: 1.2, 	fpts: 145.4, 	st_marys: 39.6 },
{ name: 'Jeremy Hill ', 	pos: 'RB', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 206.7, 	ru_yds: 870.8, 	ru_td: 7.5, 	fl: 19.2, 	rec: 134.9, 	re_yds: 0.8, 	re_td: 2.8, 	fpts: 144.9, 	st_marys: 49.8 },
{ name: 'Ryan Mathews ', 	pos: 'RB', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 186.9, 	ru_yds: 834.3, 	ru_td: 5.8, 	fl: 32.6, 	rec: 239.1, 	re_yds: 1, 	re_td: 2.9, 	fpts: 142.2, 	st_marys: 40.8 },
{ name: 'Frank Gore ', 	pos: 'RB', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 198.4, 	ru_yds: 784, 	ru_td: 5.6, 	fl: 30.2, 	rec: 245.4, 	re_yds: 1, 	re_td: 2.2, 	fpts: 138.1, 	st_marys: 39.6 },
{ name: 'Giovani Bernard ', 	pos: 'RB', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 150.5, 	ru_yds: 661.4, 	ru_td: 3.6, 	fl: 48.3, 	rec: 418.2, 	re_yds: 1.6, 	re_td: 1.2, 	fpts: 136.4, 	st_marys: 31.2 },
{ name: 'Ameer Abdullah ', 	pos: 'RB', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 188, 	ru_yds: 790.4, 	ru_td: 4.8, 	fl: 34.7, 	rec: 259.2, 	re_yds: 1, 	re_td: 1.9, 	fpts: 136, 	st_marys: 34.8 },
{ name: 'Melvin Gordon', 	pos: 'RB', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 226.1, 	ru_yds: 880.5, 	ru_td: 4.4, 	fl: 32.2, 	rec: 205.7, 	re_yds: 0.7, 	re_td: 3.1, 	fpts: 133.1, 	st_marys: 30.6 },
{ name: 'Dion Lewis', 	pos: 'RB', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 99.4, 	ru_yds: 412.6, 	ru_td: 3.1, 	fl: 67.3, 	rec: 590.9, 	re_yds: 2.8, 	re_td: 1.9, 	fpts: 131.7, 	st_marys: 35.4 },
{ name: 'Danny Woodhead', 	pos: 'RB', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 83.6, 	ru_yds: 313.9, 	ru_td: 2.1, 	fl: 72.5, 	rec: 623.6, 	re_yds: 3.8, 	re_td: 1.1, 	fpts: 127, 	st_marys: 35.4 },
{ name: 'Rashad Jennings ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 181.1, 	ru_yds: 736, 	ru_td: 4.5, 	fl: 30.2, 	rec: 245.6, 	re_yds: 0.9, 	re_td: 2, 	fpts: 126.7, 	st_marys: 32.4 },
{ name: 'Duke Johnson ', 	pos: 'RB', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 142.4, 	ru_yds: 557.4, 	ru_td: 2.9, 	fl: 57.3, 	rec: 465.5, 	re_yds: 1.7, 	re_td: 1.7, 	fpts: 126.5, 	st_marys: 27.6 },
{ name: 'T.J. Yeldon ', 	pos: 'RB', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 171, 	ru_yds: 701.5, 	ru_td: 3.9, 	fl: 37, 	rec: 275.3, 	re_yds: 1, 	re_td: 1.2, 	fpts: 125, 	st_marys: 29.4 },
{ name: 'Justin Forsett ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 165.9, 	ru_yds: 744.6, 	ru_td: 4, 	fl: 30, 	rec: 194.6, 	re_yds: 0.8, 	re_td: 1.1, 	fpts: 120.3, 	st_marys: 28.8 },
{ name: 'Isaiah Crowell ', 	pos: 'RB', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 171.1, 	ru_yds: 698.1, 	ru_td: 4.6, 	fl: 20.6, 	rec: 186, 	re_yds: 0.8, 	re_td: 1.3, 	fpts: 117.8, 	st_marys: 32.4 },
{ name: 'LeGarrette Blount', 	pos: 'RB', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 169.2, 	ru_yds: 699.7, 	ru_td: 6.2, 	fl: 10.1, 	rec: 70.3, 	re_yds: 0.4, 	re_td: 0.8, 	fpts: 114.5, 	st_marys: 39.6 },
{ name: 'Jay Ajayi ', 	pos: 'RB', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 150.8, 	ru_yds: 631.5, 	ru_td: 3.7, 	fl: 26.5, 	rec: 216.7, 	re_yds: 1, 	re_td: 1, 	fpts: 111, 	st_marys: 28.2 },
{ name: 'Chris Ivory ', 	pos: 'RB', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 160.4, 	ru_yds: 667.3, 	ru_td: 4.5, 	fl: 23, 	rec: 164.4, 	re_yds: 0.6, 	re_td: 2, 	fpts: 110.3, 	st_marys: 30.6 },
{ name: 'Arian Foster ', 	pos: 'RB', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 144.3, 	ru_yds: 576, 	ru_td: 3.7, 	fl: 32.2, 	rec: 272.9, 	re_yds: 1.2, 	re_td: 3, 	fpts: 108.9, 	st_marys: 29.4 },
{ name: 'Charles Sims', 	pos: 'RB', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 99.1, 	ru_yds: 428.1, 	ru_td: 2.1, 	fl: 43.2, 	rec: 394.7, 	re_yds: 2.1, 	re_td: 1.7, 	fpts: 104.2, 	st_marys: 25.2 },
{ name: 'DeAngelo Williams ', 	pos: 'RB', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 128.4, 	ru_yds: 571.3, 	ru_td: 4.2, 	fl: 22, 	rec: 180.1, 	re_yds: 0.8, 	re_td: 1.1, 	fpts: 103, 	st_marys: 30. },
{ name: 'Darren Sproles ', 	pos: 'RB', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 77.9, 	ru_yds: 355.6, 	ru_td: 2.7, 	fl: 50.6, 	rec: 400.8, 	re_yds: 1.6, 	re_td: 1.2, 	fpts: 98.9, 	st_marys: 25.8 },
{ name: 'Shane Vereen ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 69.7, 	ru_yds: 289.1, 	ru_td: 1.7, 	fl: 52.6, 	rec: 437.3, 	re_yds: 2.4, 	re_td: 1.1, 	fpts: 95, 	st_marys: 24.6 },
{ name: 'Theo Riddick ', 	pos: 'RB', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 56.2, 	ru_yds: 210.4, 	ru_td: 1.1, 	fl: 61.1, 	rec: 523.6, 	re_yds: 2.6, 	re_td: 1, 	fpts: 93.4, 	st_marys: 22.2 },
{ name: 'Derrick Henry ', 	pos: 'RB', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 127.7, 	ru_yds: 534.5, 	ru_td: 3.9, 	fl: 14.7, 	rec: 136.9, 	re_yds: 0.6, 	re_td: 2, 	fpts: 90.2, 	st_marys: 27 },
{ name: 'James Starks', 	pos: 'RB', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 118.3, 	ru_yds: 490.5, 	ru_td: 3, 	fl: 25.2, 	rec: 199.3, 	re_yds: 0.9, 	re_td: 1.9, 	fpts: 88.2, 	st_marys: 23.4 },
{ name: 'Bilal Powell ', 	pos: 'RB', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 96, 	ru_yds: 391.7, 	ru_td: 1.9, 	fl: 35.8, 	rec: 284.8, 	re_yds: 1.1, 	re_td: 1, 	fpts: 83.7, 	st_marys: 18 },
{ name: 'Ronnie Hillman ', 	pos: 'RB', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 122.3, 	ru_yds: 490.7, 	ru_td: 3.4, 	fl: 17.9, 	rec: 113.2, 	re_yds: 0.2, 	re_td: 1, 	fpts: 80.2, 	st_marys: 21.6 },
{ name: 'Jordan Howard ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 107.4, 	ru_yds: 437, 	ru_td: 3, 	fl: 20, 	rec: 160.1, 	re_yds: 0.7, 	re_td: 1.2, 	fpts: 79.3, 	st_marys: 22.2 },
{ name: 'Javorius Allen ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 111.2, 	ru_yds: 441.3, 	ru_td: 2.7, 	fl: 23, 	rec: 180.6, 	re_yds: 0.7, 	re_td: 1.9, 	fpts: 79.1, 	st_marys: 20.4 },
{ name: 'Darren McFadden ', 	pos: 'RB', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 99.6, 	ru_yds: 424.1, 	ru_td: 2.7, 	fl: 25.1, 	rec: 189.4, 	re_yds: 0.7, 	re_td: 2.1, 	fpts: 77.7, 	st_marys: 20.4 },
{ name: 'Karlos Williams ', 	pos: 'RB', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 94.6, 	ru_yds: 414.1, 	ru_td: 3.4, 	fl: 16.9, 	rec: 126, 	re_yds: 1, 	re_td: 1.1, 	fpts: 77.7, 	st_marys: 26.4 },
{ name: 'C.J. Prosise ', 	pos: 'RB', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 72.8, 	ru_yds: 326, 	ru_td: 1.9, 	fl: 37.6, 	rec: 296.3, 	re_yds: 1, 	re_td: 1.2, 	fpts: 77.1, 	st_marys: 17.4 },
{ name: 'Tevin Coleman ', 	pos: 'RB', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 100.9, 	ru_yds: 419, 	ru_td: 2.7, 	fl: 20.2, 	rec: 138.7, 	re_yds: 0.7, 	re_td: 2.2, 	fpts: 71.3, 	st_marys: 20.4 },
{ name: 'Chris Johnson ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 108.3, 	ru_yds: 438.8, 	ru_td: 3, 	fl: 12.5, 	rec: 92.3, 	re_yds: 0.3, 	re_td: 1.8, 	fpts: 69.3, 	st_marys: 19.8 },
{ name: 'Josh Ferguson ', 	pos: 'RB', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 93.1, 	ru_yds: 378, 	ru_td: 1.9, 	fl: 22.1, 	rec: 174.7, 	re_yds: 0.9, 	re_td: 1.9, 	fpts: 68.3, 	st_marys: 16.8 },
{ name: 'Kenneth Dixon ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 84.5, 	ru_yds: 353, 	ru_td: 1.9, 	fl: 21.1, 	rec: 163.9, 	re_yds: 0.6, 	re_td: 1.2, 	fpts: 64.4, 	st_marys: 15. },
{ name: 'Cameron Artis-Payne ', 	pos: 'RB', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 92.6, 	ru_yds: 379.6, 	ru_td: 2, 	fl: 14.1, 	rec: 125.4, 	re_yds: 0.6, 	re_td: 1, 	fpts: 64.1, 	st_marys: 15.6 },
{ name: 'Tim Hightower', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 67.8, 	ru_yds: 276.8, 	ru_td: 3.2, 	fl: 17.7, 	rec: 142.1, 	re_yds: 0.3, 	re_td: 1, 	fpts: 61.3, 	st_marys: 21. },
{ name: 'Jerick McKinnon ', 	pos: 'RB', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 65.6, 	ru_yds: 294.1, 	ru_td: 2, 	fl: 23, 	rec: 166.4, 	re_yds: 0.7, 	re_td: 0.9, 	fpts: 60.3, 	st_marys: 16.2 },
{ name: 'DeAndre Washington ', 	pos: 'RB', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 75.3, 	ru_yds: 307.4, 	ru_td: 1.9, 	fl: 21.8, 	rec: 168.4, 	re_yds: 0.7, 	re_td: 1.8, 	fpts: 59.8, 	st_marys: 15.6 },
{ name: 'Chris Thompson ', 	pos: 'RB', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 48.6, 	ru_yds: 200.1, 	ru_td: 1.2, 	fl: 35, 	rec: 270.7, 	re_yds: 1.4, 	re_td: 1.8, 	fpts: 59, 	st_marys: 15.6 },
{ name: 'Spencer Ware', 	pos: 'RB', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 68.6, 	ru_yds: 322.5, 	ru_td: 3.6, 	fl: 7.3, 	rec: 46, 	re_yds: 0.2, 	re_td: 1.2, 	fpts: 57.3, 	st_marys: 22.8 },
{ name: 'Andre Ellington ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 56.7, 	ru_yds: 247.5, 	ru_td: 1.8, 	fl: 22.3, 	rec: 191.5, 	re_yds: 0.8, 	re_td: 2, 	fpts: 55.7, 	st_marys: 15.6 },
{ name: 'Damien Williams ', 	pos: 'RB', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 65.1, 	ru_yds: 241.1, 	ru_td: 1.8, 	fl: 23.5, 	rec: 175.7, 	re_yds: 0.8, 	re_td: 0.9, 	fpts: 55.4, 	st_marys: 15.6 },
{ name: 'Shaun Draughn', 	pos: 'RB', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 74.8, 	ru_yds: 283.4, 	ru_td: 1.7, 	fl: 25.4, 	rec: 167.7, 	re_yds: 0.3, 	re_td: 0.8, 	fpts: 55.3, 	st_marys: 12 },
{ name: 'Devontae Booker ', 	pos: 'RB', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 79, 	ru_yds: 329.4, 	ru_td: 2.1, 	fl: 12.6, 	rec: 98.4, 	re_yds: 0.2, 	re_td: 1.2, 	fpts: 54.4, 	st_marys: 13.8 },
{ name: 'Tre Mason', 	pos: 'RB', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 82.4, 	ru_yds: 318, 	ru_td: 1.8, 	fl: 17, 	rec: 124.9, 	re_yds: 0.2, 	re_td: 0.9, 	fpts: 54.1, 	st_marys: 12 },
{ name: 'Alfred Blue ', 	pos: 'RB', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 84.8, 	ru_yds: 330.3, 	ru_td: 1.8, 	fl: 12.5, 	rec: 96, 	re_yds: 0.3, 	re_td: 0.9, 	fpts: 53.8, 	st_marys: 12.6 },
{ name: 'C.J. Spiller', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 48.1, 	ru_yds: 190.9, 	ru_td: 1, 	fl: 31.9, 	rec: 228.5, 	re_yds: 1.2, 	re_td: 1.1, 	fpts: 53.3, 	st_marys: 13.2 },
{ name: 'Paul Perkins ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 82.2, 	ru_yds: 347.3, 	ru_td: 1.6, 	fl: 13.8, 	rec: 107.6, 	re_yds: 0.2, 	re_td: 1.8, 	fpts: 53.1, 	st_marys: 10.8 },
{ name: 'Ka\'Deem Carey ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 77.2, 	ru_yds: 307.4, 	ru_td: 1.9, 	fl: 11.7, 	rec: 83.9, 	re_yds: 0.8, 	re_td: 1.8, 	fpts: 51.8, 	st_marys: 16.2 },
{ name: 'Alfred Morris ', 	pos: 'RB', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 80.6, 	ru_yds: 342.7, 	ru_td: 1.9, 	fl: 8.8, 	rec: 58, 	re_yds: 0.2, 	re_td: 0.9, 	fpts: 50.7, 	st_marys: 12.6 },
{ name: 'Charcandrick West', 	pos: 'RB', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 63.9, 	ru_yds: 253.6, 	ru_td: 2.1, 	fl: 14.4, 	rec: 116.4, 	re_yds: 0.6, 	re_td: 1.8, 	fpts: 49.5, 	st_marys: 16.2 },
{ name: 'Benny Cunningham', 	pos: 'RB', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 52.6, 	ru_yds: 207, 	ru_td: 1.2, 	fl: 24.9, 	rec: 193.6, 	re_yds: 0.6, 	re_td: 0.9, 	fpts: 49, 	st_marys: 10.8 },
{ name: 'Kenyan Drake ', 	pos: 'RB', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 56.6, 	ru_yds: 233.4, 	ru_td: 1.2, 	fl: 19.8, 	rec: 158.7, 	re_yds: 0.6, 	re_td: 1.2, 	fpts: 47.8, 	st_marys: 10.8 },
																
																
{ name: 'Antonio Brown ', 	pos: 'WR', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2.9, 	ru_yds: 16.8, 	ru_td: 0, 	fl: 123.7, 	rec: 1647.3, 	re_yds: 10.8, 	re_td: 1.1, 	fpts: 229.1, 	st_marys: 64.8 },
{ name: 'Julio Jones ', 	pos: 'WR', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	fl: 116.6, 	rec: 1620.7, 	re_yds: 8.9, 	re_td: 0.8, 	fpts: 213.7, 	st_marys: 53.4 },
{ name: 'Odell Beckham Jr. ', 	pos: 'WR', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.5, 	ru_yds: 2.6, 	ru_td: 0, 	fl: 98, 	rec: 1436.2, 	re_yds: 11.1, 	re_td: 0.1, 	fpts: 210.1, 	st_marys: 66.6 },
{ name: 'DeAndre Hopkins ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 100, 	rec: 1424.6, 	re_yds: 9.6, 	re_td: 0.1, 	fpts: 199.7, 	st_marys: 57.6 },
{ name: 'Dez Bryant ', 	pos: 'WR', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 85.6, 	rec: 1201.8, 	re_yds: 10.1, 	re_td: 0.1, 	fpts: 180.2, 	st_marys: 60.6 },
{ name: 'Jordy Nelson', 	pos: 'WR', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.4, 	ru_td: 0, 	fl: 89.4, 	rec: 1260.2, 	re_yds: 8.9, 	re_td: 0.1, 	fpts: 179.2, 	st_marys: 53.4 },
{ name: 'A.J. Green ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.1, 	ru_td: 0, 	fl: 86.3, 	rec: 1240.2, 	re_yds: 9.2, 	re_td: 0.9, 	fpts: 177.5, 	st_marys: 55.2 },
{ name: 'Alshon Jeffery ', 	pos: 'WR', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.4, 	ru_yds: 4.8, 	ru_td: 0, 	fl: 85.4, 	rec: 1213.3, 	re_yds: 8.1, 	re_td: 0.1, 	fpts: 169.9, 	st_marys: 48.6 },
{ name: 'Allen Robinson ', 	pos: 'WR', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 78.8, 	rec: 1143.8, 	re_yds: 8.7, 	re_td: 0.1, 	fpts: 166.3, 	st_marys: 52.2 },
{ name: 'T.Y. Hilton ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.6, 	ru_yds: 3, 	ru_td: 0, 	fl: 77.8, 	rec: 1188.1, 	re_yds: 7.4, 	re_td: 0.1, 	fpts: 163.5, 	st_marys: 44.4 },
{ name: 'Mike Evans', 	pos: 'WR', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 78.5, 	rec: 1194.5, 	re_yds: 7.5, 	re_td: 0.7, 	fpts: 163.2, 	st_marys: 45 },
{ name: 'Brandon Marshall ', 	pos: 'WR', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.2, 	ru_td: 0, 	fl: 87, 	rec: 1162.4, 	re_yds: 8.2, 	re_td: 1.1, 	fpts: 163, 	st_marys: 49.2 },
{ name: 'Sammy Watkins ', 	pos: 'WR', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.8, 	ru_yds: 3.3, 	ru_td: 0, 	fl: 72.8, 	rec: 1101.8, 	re_yds: 8.1, 	re_td: 0.2, 	fpts: 159.2, 	st_marys: 48.6 },
{ name: 'Keenan Allen', 	pos: 'WR', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 103.2, 	rec: 1192.8, 	re_yds: 6.9, 	re_td: 1.3, 	fpts: 158.2, 	st_marys: 41.4 },
{ name: 'Demaryius Thomas ', 	pos: 'WR', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 86.3, 	rec: 1131.4, 	re_yds: 7.4, 	re_td: 1, 	fpts: 155.3, 	st_marys: 44.4 },
{ name: 'Brandin Cooks', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 4.6, 	ru_yds: 26.5, 	ru_td: 0.1, 	fl: 84.2, 	rec: 1058.6, 	re_yds: 7.5, 	re_td: 0.2, 	fpts: 153.8, 	st_marys: 45.6 },
{ name: 'Randall Cobb', 	pos: 'WR', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 8.1, 	ru_yds: 45, 	ru_td: 0.1, 	fl: 81.7, 	rec: 1033.3, 	re_yds: 7.5, 	re_td: 0.2, 	fpts: 152.6, 	st_marys: 45.6 },
{ name: 'Amari Cooper ', 	pos: 'WR', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.4, 	ru_yds: 0, 	ru_td: 0, 	fl: 81, 	rec: 1081.4, 	re_yds: 7.2, 	re_td: 0.8, 	fpts: 149.6, 	st_marys: 43.2 },
{ name: 'Jeremy Maclin', 	pos: 'WR', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.6, 	ru_yds: 8.8, 	ru_td: 0, 	fl: 81.5, 	rec: 1040.8, 	re_yds: 7.2, 	re_td: 0.7, 	fpts: 146.9, 	st_marys: 43.2 },
{ name: 'Eric Decker ', 	pos: 'WR', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	fl: 77.3, 	rec: 1012.5, 	re_yds: 7.6, 	re_td: 0.7, 	fpts: 145.6, 	st_marys: 45.6 },
{ name: 'Doug Baldwin ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.2, 	ru_td: 0, 	fl: 72.9, 	rec: 952.9, 	re_yds: 8, 	re_td: 0.2, 	fpts: 143.2, 	st_marys: 48 },
{ name: 'Kelvin Benjamin ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	fl: 70.5, 	rec: 956.3, 	re_yds: 8.1, 	re_td: 0.7, 	fpts: 142.8, 	st_marys: 48.6 },
{ name: 'Golden Tate ', 	pos: 'WR', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 4.5, 	ru_yds: 29.5, 	ru_td: 0, 	fl: 91.8, 	rec: 1067.5, 	re_yds: 5.6, 	re_td: 0.7, 	fpts: 142.5, 	st_marys: 33.6 },
{ name: 'Jarvis Landry ', 	pos: 'WR', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 9.1, 	ru_yds: 50.7, 	ru_td: 0.1, 	fl: 95.7, 	rec: 1008.2, 	re_yds: 5.7, 	re_td: 0.8, 	fpts: 139, 	st_marys: 34.8 },
{ name: 'Michael Floyd ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.1, 	ru_td: 0, 	fl: 62.5, 	rec: 958.3, 	re_yds: 7.2, 	re_td: 0.2, 	fpts: 138.6, 	st_marys: 43.2 },
{ name: 'Julian Edelman', 	pos: 'WR', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.8, 	ru_yds: 24.5, 	ru_td: 0, 	fl: 89.5, 	rec: 972.5, 	re_yds: 6.7, 	re_td: 1, 	fpts: 138.3, 	st_marys: 40.2 },
{ name: 'Larry Fitzgerald ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 83.5, 	rec: 981.7, 	re_yds: 6.8, 	re_td: 1.1, 	fpts: 136.9, 	st_marys: 40.8 },
{ name: 'Jordan Matthews ', 	pos: 'WR', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 78.8, 	rec: 966, 	re_yds: 6.6, 	re_td: 0.7, 	fpts: 135, 	st_marys: 39.6 },
{ name: 'DeSean Jackson ', 	pos: 'WR', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.4, 	ru_yds: 6.7, 	ru_td: 0, 	fl: 60.9, 	rec: 965.1, 	re_yds: 6.2, 	re_td: 0.8, 	fpts: 132.5, 	st_marys: 37.2 },
{ name: 'Emmanuel Sanders ', 	pos: 'WR', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2.6, 	ru_yds: 16.7, 	ru_td: 0, 	fl: 69.7, 	rec: 963, 	re_yds: 5.6, 	re_td: 1, 	fpts: 130, 	st_marys: 33.6 },
{ name: 'Donte Moncrief ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.8, 	ru_td: 0, 	fl: 66.9, 	rec: 890.5, 	re_yds: 6.5, 	re_td: 0.2, 	fpts: 127.6, 	st_marys: 39 },
{ name: 'John Brown ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.8, 	ru_yds: 11.3, 	ru_td: 0, 	fl: 61.5, 	rec: 904.5, 	re_yds: 6.2, 	re_td: 0.8, 	fpts: 127.1, 	st_marys: 37.2 },
{ name: 'Allen Hurns ', 	pos: 'WR', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 60.2, 	rec: 870.2, 	re_yds: 6.4, 	re_td: 0.7, 	fpts: 124.2, 	st_marys: 38.4 },
{ name: 'Devante Parker ', 	pos: 'WR', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	fl: 58.8, 	rec: 858.6, 	re_yds: 6, 	re_td: 0.1, 	fpts: 121.6, 	st_marys: 36 },
{ name: 'Michael Crabtree ', 	pos: 'WR', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1, 	ru_yds: 5.5, 	ru_td: 0, 	fl: 73.8, 	rec: 827.4, 	re_yds: 6.2, 	re_td: 0.1, 	fpts: 120.6, 	st_marys: 37.2 },
{ name: 'Torrey Smith', 	pos: 'WR', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 53.7, 	rec: 844.2, 	re_yds: 5, 	re_td: 0.1, 	fpts: 114.2, 	st_marys: 30 },
{ name: 'Stefon Diggs ', 	pos: 'WR', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.4, 	ru_yds: 7.6, 	ru_td: 0, 	fl: 62.5, 	rec: 812.2, 	re_yds: 5.4, 	re_td: 0.1, 	fpts: 114.1, 	st_marys: 32.4 },
{ name: 'Kevin White ', 	pos: 'WR', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 56.1, 	rec: 790.6, 	re_yds: 5.3, 	re_td: 0.2, 	fpts: 110.1, 	st_marys: 31.8 },
{ name: 'Marvin Jones ', 	pos: 'WR', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.6, 	ru_yds: 2.7, 	ru_td: 0, 	fl: 61.8, 	rec: 805.1, 	re_yds: 4.9, 	re_td: 0.1, 	fpts: 110, 	st_marys: 29.4 },
{ name: 'Steve Smith ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 60.7, 	rec: 814.7, 	re_yds: 4.7, 	re_td: 0.3, 	fpts: 109.1, 	st_marys: 28.2 },
{ name: 'Tyler Lockett ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.1, 	ru_yds: 18.8, 	ru_td: 0, 	fl: 57.4, 	rec: 746.8, 	re_yds: 5.3, 	re_td: 0.9, 	fpts: 106.8, 	st_marys: 31.8 },
{ name: 'Vincent Jackson', 	pos: 'WR', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 53.5, 	rec: 786.5, 	re_yds: 4.7, 	re_td: 0.2, 	fpts: 106.4, 	st_marys: 28.2 },
{ name: 'Willie Snead', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 63.4, 	rec: 817.7, 	re_yds: 4.6, 	re_td: 1.7, 	fpts: 105.8, 	st_marys: 27.6 },
{ name: 'Markus Wheaton ', 	pos: 'WR', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2, 	ru_yds: 10.9, 	ru_td: 0, 	fl: 51.5, 	rec: 706.2, 	re_yds: 4.6, 	re_td: 0.7, 	fpts: 98.1, 	st_marys: 27.6 },
{ name: 'Tavon Austin', 	pos: 'WR', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 27.2, 	ru_yds: 183.1, 	ru_td: 1.4, 	fl: 51.2, 	rec: 525, 	re_yds: 3.3, 	re_td: 1.1, 	fpts: 97.1, 	st_marys: 28.2 },
{ name: 'Sterling Shepard ', 	pos: 'WR', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 54.3, 	rec: 700.2, 	re_yds: 4.5, 	re_td: 0.8, 	fpts: 95.1, 	st_marys: 27 },
{ name: 'Corey Coleman ', 	pos: 'WR', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1, 	ru_yds: 6, 	ru_td: 0, 	fl: 55, 	rec: 714.3, 	re_yds: 3.9, 	re_td: 0.6, 	fpts: 94.5, 	st_marys: 23.4 },
{ name: 'Terrance Williams ', 	pos: 'WR', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 42.5, 	rec: 663, 	re_yds: 4.7, 	re_td: 0.2, 	fpts: 94, 	st_marys: 28.2 },
{ name: 'Travis Benjamin', 	pos: 'WR', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.3, 	ru_yds: 1.6, 	ru_td: 0, 	fl: 49, 	rec: 686.5, 	re_yds: 4.2, 	re_td: 0.9, 	fpts: 92.2, 	st_marys: 25.2 },
{ name: 'Josh Gordon ', 	pos: 'WR', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 49.7, 	rec: 701.9, 	re_yds: 3.7, 	re_td: 0.2, 	fpts: 91.8, 	st_marys: 22.2 },
{ name: 'Laquon Treadwell ', 	pos: 'WR', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	fl: 51.6, 	rec: 678.3, 	re_yds: 4, 	re_td: 0.2, 	fpts: 91.6, 	st_marys: 24 },
{ name: 'Mohamed Sanu ', 	pos: 'WR', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2, 	ru_yds: 11.6, 	ru_td: 0.1, 	fl: 53.2, 	rec: 651.7, 	re_yds: 3.8, 	re_td: 0.2, 	fpts: 89.2, 	st_marys: 23.4 },
{ name: 'Dorial Green-Beckham ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.2, 	ru_td: 0, 	fl: 43.2, 	rec: 629.5, 	re_yds: 4.3, 	re_td: 0.2, 	fpts: 88.7, 	st_marys: 25.8 },
{ name: 'Pierre Garcon ', 	pos: 'WR', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 55.5, 	rec: 655.9, 	re_yds: 3.9, 	re_td: 0.2, 	fpts: 88.5, 	st_marys: 23.4 },
{ name: 'Kenny Britt', 	pos: 'WR', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.1, 	ru_td: 0, 	fl: 39.7, 	rec: 611.3, 	re_yds: 3.6, 	re_td: 0.2, 	fpts: 82.6, 	st_marys: 21.6 },
{ name: 'Mike Wallace ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.8, 	ru_yds: 4.6, 	ru_td: 0, 	fl: 41.2, 	rec: 559.6, 	re_yds: 3.8, 	re_td: 0.1, 	fpts: 79, 	st_marys: 22.8 },
{ name: 'Kendall Wright ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.3, 	ru_yds: 7.3, 	ru_td: 0, 	fl: 50.4, 	rec: 584.8, 	re_yds: 3.2, 	re_td: 0.2, 	fpts: 78, 	st_marys: 19.2 },
{ name: 'Devin Funchess ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.2, 	ru_yds: 7, 	ru_td: 0, 	fl: 40, 	rec: 537, 	re_yds: 4.1, 	re_td: 0.9, 	fpts: 77.5, 	st_marys: 24.6 },
{ name: 'Nelson Agholor ', 	pos: 'WR', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 45.9, 	rec: 593.3, 	re_yds: 3.4, 	re_td: 1.1, 	fpts: 77.4, 	st_marys: 20.4 },
{ name: 'Michael Thomas', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 41.2, 	rec: 550.2, 	re_yds: 3.8, 	re_td: 0.9, 	fpts: 76.3, 	st_marys: 22.8 },
{ name: 'Kamar Aiken ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 46.3, 	rec: 582.3, 	re_yds: 3.2, 	re_td: 0.8, 	fpts: 75.8, 	st_marys: 19.2 },
{ name: 'Jermaine Kearse ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.4, 	ru_td: 0, 	fl: 39.5, 	rec: 533.9, 	re_yds: 3.7, 	re_td: 0.2, 	fpts: 75.6, 	st_marys: 22.2 },
{ name: 'Phillip Dorsett ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2.4, 	ru_yds: 13.9, 	ru_td: 0, 	fl: 40.2, 	rec: 528.9, 	re_yds: 3.4, 	re_td: 1.1, 	fpts: 73, 	st_marys: 20.4 },
{ name: 'Ted Ginn ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2, 	ru_yds: 14, 	ru_td: 0, 	fl: 32.8, 	rec: 482.7, 	re_yds: 3.9, 	re_td: 0.2, 	fpts: 72.7, 	st_marys: 23.4 },
{ name: 'Will Fuller ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.1, 	ru_yds: 6.8, 	ru_td: 0, 	fl: 37, 	rec: 524.2, 	re_yds: 3.3, 	re_td: 0.2, 	fpts: 72.5, 	st_marys: 19.8 },
{ name: 'Robert Woods ', 	pos: 'WR', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.7, 	ru_yds: 3.4, 	ru_td: 0, 	fl: 45, 	rec: 551.7, 	re_yds: 3.1, 	re_td: 0.9, 	fpts: 72.3, 	st_marys: 18.6 },
{ name: 'Justin Hunter ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 42.7, 	rec: 549.7, 	re_yds: 2.8, 	re_td: 0.1, 	fpts: 71.4, 	st_marys: 16.8 },
{ name: 'Brandon LaFell ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.5, 	ru_yds: 0.7, 	ru_td: 0, 	fl: 42, 	rec: 546.5, 	re_yds: 2.9, 	re_td: 0.6, 	fpts: 71.1, 	st_marys: 17.4 },
{ name: 'Breshad Perriman ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 38, 	rec: 522.8, 	re_yds: 3.1, 	re_td: 0.2, 	fpts: 70.3, 	st_marys: 18.6 },
{ name: 'Jaelen Strong ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 37.2, 	rec: 469.8, 	re_yds: 3.9, 	re_td: 0.1, 	fpts: 69.9, 	st_marys: 23.4 },
{ name: 'Rueben Randle ', 	pos: 'WR', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 38.8, 	rec: 510.9, 	re_yds: 3.1, 	re_td: 0.2, 	fpts: 69, 	st_marys: 18.6 },
{ name: 'Sammie Coates ', 	pos: 'WR', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.6, 	ru_td: 0, 	fl: 38.1, 	rec: 506.5, 	re_yds: 3.1, 	re_td: 0.2, 	fpts: 68.6, 	st_marys: 18.6 },
{ name: 'Victor Cruz ', 	pos: 'WR', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 37.2, 	rec: 495, 	re_yds: 3.1, 	re_td: 0.1, 	fpts: 67.8, 	st_marys: 18.6 },
{ name: 'Tyler Boyd ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.8, 	ru_yds: 22.8, 	ru_td: 0.1, 	fl: 39.7, 	rec: 503.9, 	re_yds: 2.7, 	re_td: 0.8, 	fpts: 67.5, 	st_marys: 16.8 },
{ name: 'Rishard Matthews ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.4, 	ru_yds: 1.6, 	ru_td: 0, 	fl: 37.5, 	rec: 500.6, 	re_yds: 2.8, 	re_td: 0.2, 	fpts: 66.8, 	st_marys: 16.8 },


{ name: 'Rob Gronkowski', 	pos: 'TE', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 80.3, 	rec: 1102.4, 	re_yds: 10, 	re_td: 0.3, 	fpts: 169.6, 	st_marys: 60 },
{ name: 'Greg Olsen ', 	pos: 'TE', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 77, 	rec: 956.7, 	re_yds: 6.7, 	re_td: 0.8, 	fpts: 134, 	st_marys: 40.2 },
{ name: 'Jordan Reed ', 	pos: 'TE', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 82, 	rec: 891.8, 	re_yds: 6.7, 	re_td: 1.6, 	fpts: 126.4, 	st_marys: 40.2 },
{ name: 'Delanie Walker ', 	pos: 'TE', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 71.3, 	rec: 858, 	re_yds: 4.9, 	re_td: 0.6, 	fpts: 114.1, 	st_marys: 29.4 },
{ name: 'Travis Kelce', 	pos: 'TE', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 72.6, 	rec: 836.6, 	re_yds: 5.6, 	re_td: 1.7, 	fpts: 113.7, 	st_marys: 33.6 },
{ name: 'Coby Fleener', 	pos: 'TE', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 69.8, 	rec: 759.1, 	re_yds: 5.8, 	re_td: 0.6, 	fpts: 109.5, 	st_marys: 34.8 },
{ name: 'Gary Barnidge ', 	pos: 'TE', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 62.1, 	rec: 754, 	re_yds: 5.7, 	re_td: 0.6, 	fpts: 108.1, 	st_marys: 34.2 },
{ name: 'Antonio Gates', 	pos: 'TE', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 63, 	rec: 735.3, 	re_yds: 5.6, 	re_td: 0.2, 	fpts: 106.6, 	st_marys: 33.6 },
{ name: 'Tyler Eifert ', 	pos: 'TE', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 59.2, 	rec: 701.9, 	re_yds: 5.8, 	re_td: 0.3, 	fpts: 104.4, 	st_marys: 34.8 },
{ name: 'Jason Witten ', 	pos: 'TE', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 72.6, 	rec: 768.8, 	re_yds: 4.6, 	re_td: 0.8, 	fpts: 102.8, 	st_marys: 27.6 },
{ name: 'Ladarius Green ', 	pos: 'TE', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 59.9, 	rec: 705.9, 	re_yds: 5.2, 	re_td: 0.3, 	fpts: 101.3, 	st_marys: 31.2 },
{ name: 'Jimmy Graham ', 	pos: 'TE', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 60.6, 	rec: 708.3, 	re_yds: 5.3, 	re_td: 0.8, 	fpts: 101, 	st_marys: 31.8 },
{ name: 'Zach Ertz ', 	pos: 'TE', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 64.9, 	rec: 748.8, 	re_yds: 4.2, 	re_td: 0.9, 	fpts: 98.2, 	st_marys: 25.2 },
{ name: 'Julius Thomas ', 	pos: 'TE', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 56.1, 	rec: 606.8, 	re_yds: 5.2, 	re_td: 0.3, 	fpts: 91.1, 	st_marys: 31.2 },
{ name: 'Dwayne Allen ', 	pos: 'TE', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 53.7, 	rec: 594.3, 	re_yds: 5.1, 	re_td: 0.3, 	fpts: 89.5, 	st_marys: 30.6 },
{ name: 'Zach Miller ', 	pos: 'TE', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 53.7, 	rec: 597.7, 	re_yds: 5, 	re_td: 0.3, 	fpts: 89.3, 	st_marys: 30 },
{ name: 'Eric Ebron ', 	pos: 'TE', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 53, 	rec: 581.9, 	re_yds: 4.4, 	re_td: 0.2, 	fpts: 83.8, 	st_marys: 26.4 },
{ name: 'Charles Clay ', 	pos: 'TE', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 56.9, 	rec: 607.9, 	re_yds: 3.9, 	re_td: 0.2, 	fpts: 83.8, 	st_marys: 23.4 },
{ name: 'Jordan Cameron ', 	pos: 'TE', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 46.2, 	rec: 533.1, 	re_yds: 3.8, 	re_td: 0.2, 	fpts: 75.8, 	st_marys: 22.8 },
{ name: 'Martellus Bennett', 	pos: 'TE', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 46, 	rec: 511.1, 	re_yds: 4.2, 	re_td: 0.1, 	fpts: 75.8, 	st_marys: 25.2 },
{ name: 'Kyle Rudolph ', 	pos: 'TE', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 48, 	rec: 496.1, 	re_yds: 4, 	re_td: 0.2, 	fpts: 73.4, 	st_marys: 24 },
{ name: 'Austin Seferian-Jenkins', 	pos: 'TE', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 37.5, 	rec: 461.6, 	re_yds: 3.8, 	re_td: 0.7, 	fpts: 67.8, 	st_marys: 22.8 },
{ name: 'Clive Walford ', 	pos: 'TE', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 41.6, 	rec: 449.2, 	re_yds: 3.8, 	re_td: 0.2, 	fpts: 67.4, 	st_marys: 22.8 },
{ name: 'Jacob Tamme ', 	pos: 'TE', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 46.3, 	rec: 474, 	re_yds: 2.8, 	re_td: 0.6, 	fpts: 63.2, 	st_marys: 16.8 },
{ name: 'Jared Cook', 	pos: 'TE', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 34.8, 	rec: 414.2, 	re_yds: 3.6, 	re_td: 0.7, 	fpts: 61.5, 	st_marys: 21.6 },
{ name: 'Richard Rodgers', 	pos: 'TE', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 35.2, 	rec: 361.6, 	re_yds: 3.7, 	re_td: 0.2, 	fpts: 58.1, 	st_marys: 22.2 },


{ name: 'Stephen Gostkowski', 	pos: 'K', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 127, 	st_marys: 127 },
{ name: 'Mason Crosby', 	pos: 'K', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 121.4, 	st_marys: 121.4 },
{ name: 'Justin Tucker ', 	pos: 'K', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 120.6, 	st_marys: 120.6 },
{ name: 'Steven Hauschka ', 	pos: 'K', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 120.2, 	st_marys: 120.2 },
{ name: 'Graham Gano ', 	pos: 'K', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 119.6, 	st_marys: 119.6 },
{ name: 'Chris Boswell ', 	pos: 'K', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 118, 	st_marys: 118 },
{ name: 'Dan Bailey ', 	pos: 'K', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 117.5, 	st_marys: 117.5 },
{ name: 'Josh Brown ', 	pos: 'K', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 116.9, 	st_marys: 116.9 },
{ name: 'Chandler Catanzaro ', 	pos: 'K', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 116.5, 	st_marys: 116.5 },
{ name: 'Blair Walsh ', 	pos: 'K', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 114.2, 	st_marys: 114.2 },
{ name: 'Brandon McManus ', 	pos: 'K', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 112.7, 	st_marys: 112.7 },
{ name: 'Adam Vinatieri ', 	pos: 'K', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 111.3, 	st_marys: 111.3 },
{ name: 'Mike Nugent ', 	pos: 'K', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 110.6, 	st_marys: 110.6 },
{ name: 'Cairo Santos', 	pos: 'K', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 110.1, 	st_marys: 110.1 },
{ name: 'Robbie Gould ', 	pos: 'K', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 109.7, 	st_marys: 109.7 },
{ name: 'Matt Prater ', 	pos: 'K', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 107, 	st_marys: 107 },
{ name: 'Dan Carpenter ', 	pos: 'K', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 106.4, 	st_marys: 106.4 },
{ name: 'Nick Novak ', 	pos: 'K', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 106.2, 	st_marys: 106.2 },
{ name: 'Matt Bryant ', 	pos: 'K', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 104.1, 	st_marys: 104.1 },
{ name: 'Sebastian Janikowski ', 	pos: 'K', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 103.6, 	st_marys: 103.6 },
{ name: 'Nick Folk ', 	pos: 'K', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 103.6, 	st_marys: 103.6 },
{ name: 'Dustin Hopkins ', 	pos: 'K', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 103.3, 	st_marys: 103.3 },
{ name: 'Jason Myers ', 	pos: 'K', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 101.8, 	st_marys: 101.8 },
{ name: 'Josh Lambo', 	pos: 'K', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 99.9, 	st_marys: 99.9 },
{ name: 'Roberto Aguayo', 	pos: 'K', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 99.3, 	st_marys: 99.3 },
{ name: 'Phil Dawson', 	pos: 'K', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 97.6, 	st_marys: 97.6 },
{ name: 'Greg Zuerlein', 	pos: 'K', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 96.8, 	st_marys: 96.8 },
{ name: 'Andrew Franks ', 	pos: 'K', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 95.1, 	st_marys: 95.1 },
{ name: 'Travis Coons ', 	pos: 'K', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 94.2, 	st_marys: 94.2 },
{ name: 'Cody Parkey ', 	pos: 'K', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 92.8, 	st_marys: 92.8 },
{ name: 'Caleb Sturgis ', 	pos: 'K', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 92.4, 	st_marys: 92.4 },
{ name: 'Ryan Succop ', 	pos: 'K', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 88.2, 	st_marys: 88.2 },
{ name: 'Kai Forbath', 	pos: 'K', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	fl: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fpts: 85.4, 	st_marys: 85.4 }

];

	/*$scope.st_marys = function (ptd, rutd, retd) {
		var sm = (ptd * 3) + (rutd + retd) * 6;
		return Math.round(sm * 10)/10;
	};*/

	$scope.receivers = function(tm) {
		var team = tm.trim();
		if (team == "ARI" || team == "JAC" || team == "WAS" || team == "NE" || team == "GB")
			return "Good";
		else if (team == "CLE" || team == "LA" || team == "SF" || team == "DET")
			return "Bad";
	};


	$scope.sortType     = 'fpts'; // set the default sort type
 	$scope.sortReverse  = true;  // set the default sort order
 	$scope.posFilter   = '';     // set the default search/filter term

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

        }],
        controllerAs: "ctlr"
    };
}]);

$(function() {
	var url = window.location;
	// Will only work if string in href matches with location
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

	// Will also work for relative and absolute hrefs
	$('ul.nav a').filter(function() {
	    return this.href == url;
	}).parent().addClass('active');
});
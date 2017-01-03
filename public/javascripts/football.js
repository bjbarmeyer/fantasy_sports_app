var app = angular.module('Football', []);

app.controller('ctlr', function($scope) {
	$scope.rowCollection = [
{ name: 'Cam Newton ', 	pos: 'QB', 	team: 'CAR', 	att: 501.6, 	comp: 299.8, 	p_yds: 3746.9, 	p_td: 27.1, 	int: 12.4, 	rush: 125.4, 	ru_yds: 629.9, 	ru_td: 6.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.9, 	fpts: 327.4, 	sae: 327.4, 	st_marys: 121.5, 	status: 0, 	string: 0,	inj: '',	comments: '1 Pass TD, 1 Rush TD' },
{ name: 'Aaron Rodgers', 	pos: 'QB', 	team: ' GB', 	att: 563.2, 	comp: 356, 	p_yds: 4269.6, 	p_td: 33.2, 	int: 7.9, 	rush: 56.2, 	ru_yds: 264.2, 	ru_td: 2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 318, 	sae: 318, 	st_marys: 111.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Russell Wilson ', 	pos: 'QB', 	team: 'SEA', 	att: 480.9, 	comp: 314.2, 	p_yds: 3843.5, 	p_td: 27.7, 	int: 11.1, 	rush: 108, 	ru_yds: 559.2, 	ru_td: 3.1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.5, 	fpts: 307.6, 	sae: 307.6, 	st_marys: 101.7, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Andrew Luck ', 	pos: 'QB', 	team: 'IND', 	att: 619, 	comp: 363.4, 	p_yds: 4297.7, 	p_td: 31.5, 	int: 16.9, 	rush: 63.5, 	ru_yds: 289.1, 	ru_td: 2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.5, 	fpts: 296.4, 	sae: 296.4, 	st_marys: 106.5, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Drew Brees', 	pos: 'QB', 	team: ' NO', 	att: 640.1, 	comp: 428.9, 	p_yds: 4833.3, 	p_td: 31.5, 	int: 14.7, 	rush: 21.2, 	ru_yds: 44.1, 	ru_td: 1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.4, 	fpts: 291.2, 	sae: 291.2, 	st_marys: 100.5, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Ben Roethlisberger ', 	pos: 'QB', 	team: 'PIT', 	att: 583, 	comp: 381.9, 	p_yds: 4596.6, 	p_td: 29.2, 	int: 14.1, 	rush: 24.9, 	ru_yds: 62, 	ru_td: 0.9, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.5, 	fpts: 277, 	sae: 277, 	st_marys: 93, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Carson Palmer ', 	pos: 'QB', 	team: 'ARI', 	att: 565.6, 	comp: 355.1, 	p_yds: 4400.6, 	p_td: 30.4, 	int: 13.9, 	rush: 21.8, 	ru_yds: 47.4, 	ru_td: 0.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 270.7, 	sae: 270.7, 	st_marys: 95.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Blake Bortles ', 	pos: 'QB', 	team: 'JAC', 	att: 559.3, 	comp: 327.9, 	p_yds: 3952.2, 	p_td: 28.4, 	int: 17.2, 	rush: 56.9, 	ru_yds: 301.1, 	ru_td: 1.9, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 270.1, 	sae: 270.1, 	st_marys: 96.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Philip Rivers', 	pos: 'QB', 	team: ' SD', 	att: 617.6, 	comp: 403.5, 	p_yds: 4516.5, 	p_td: 29.4, 	int: 15.4, 	rush: 21, 	ru_yds: 49.5, 	ru_td: 0.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4, 	fpts: 266.1, 	sae: 266.1, 	st_marys: 90., 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Eli Manning ', 	pos: 'QB', 	team: 'NYG', 	att: 606.2, 	comp: 379.3, 	p_yds: 4382.9, 	p_td: 29.8, 	int: 14.8, 	rush: 19.5, 	ru_yds: 61.2, 	ru_td: 0.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4, 	fpts: 265.5, 	sae: 265.5, 	st_marys: 91.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Tyrod Taylor ', 	pos: 'QB', 	team: 'BUF', 	att: 461.5, 	comp: 286.1, 	p_yds: 3368.8, 	p_td: 21, 	int: 10.8, 	rush: 107.5, 	ru_yds: 519.4, 	ru_td: 3.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.8, 	fpts: 262, 	sae: 262, 	st_marys: 83.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Jameis Winston', 	pos: 'QB', 	team: ' TB', 	att: 542.3, 	comp: 323.2, 	p_yds: 4012.8, 	p_td: 24.1, 	int: 16, 	rush: 52.8, 	ru_yds: 221.1, 	ru_td: 3.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4, 	fpts: 259.4, 	sae: 259.4, 	st_marys: 92.7, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Andy Dalton ', 	pos: 'QB', 	team: 'CIN', 	att: 507.3, 	comp: 323.5, 	p_yds: 3878.9, 	p_td: 25.5, 	int: 12.5, 	rush: 58.5, 	ru_yds: 210.5, 	ru_td: 2.4, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.3, 	fpts: 259, 	sae: 259, 	st_marys: 90.9, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Kirk Cousins ', 	pos: 'QB', 	team: 'WAS', 	att: 559.2, 	comp: 365.8, 	p_yds: 4220.1, 	p_td: 26.4, 	int: 14.8, 	rush: 29, 	ru_yds: 85.8, 	ru_td: 2.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.3, 	fpts: 258.1, 	sae: 258.1, 	st_marys: 92.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Matthew Stafford ', 	pos: 'QB', 	team: 'DET', 	att: 585.6, 	comp: 378.7, 	p_yds: 4204.2, 	p_td: 25.8, 	int: 14.2, 	rush: 36.3, 	ru_yds: 142.3, 	ru_td: 1.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 257, 	sae: 257, 	st_marys: 85.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Derek Carr ', 	pos: 'QB', 	team: 'OAK', 	att: 589.1, 	comp: 357.1, 	p_yds: 3987.3, 	p_td: 29.1, 	int: 14.5, 	rush: 30.7, 	ru_yds: 114.5, 	ru_td: 0.8, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 254.8, 	sae: 254.8, 	st_marys: 92.1, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Ryan Fitzpatrick ', 	pos: 'QB', 	team: 'NYJ', 	att: 547.7, 	comp: 327, 	p_yds: 3785.9, 	p_td: 25.3, 	int: 15.5, 	rush: 57.4, 	ru_yds: 248.5, 	ru_td: 2.1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.9, 	fpts: 251.1, 	sae: 251.1, 	st_marys: 88.5, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Alex Smith', 	pos: 'QB', 	team: ' KC', 	att: 480.8, 	comp: 307.6, 	p_yds: 3477.8, 	p_td: 21.3, 	int: 9.4, 	rush: 76.2, 	ru_yds: 399.8, 	ru_td: 2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.2, 	fpts: 248.8, 	sae: 248.8, 	st_marys: 75.9, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Marcus Mariota ', 	pos: 'QB', 	team: 'TEN', 	att: 500.1, 	comp: 312.7, 	p_yds: 3622.1, 	p_td: 21.8, 	int: 14.5, 	rush: 66.2, 	ru_yds: 368.1, 	ru_td: 2.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.3, 	fpts: 247.6, 	sae: 247.6, 	st_marys: 81.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Ryan Tannehill ', 	pos: 'QB', 	team: 'MIA', 	att: 584.9, 	comp: 361.4, 	p_yds: 4069.1, 	p_td: 24.2, 	int: 14.1, 	rush: 41.5, 	ru_yds: 183.1, 	ru_td: 1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.3, 	fpts: 247.1, 	sae: 247.1, 	st_marys: 78.6, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Matt Ryan ', 	pos: 'QB', 	team: 'ATL', 	att: 601.1, 	comp: 397.2, 	p_yds: 4415, 	p_td: 24.3, 	int: 16, 	rush: 30.1, 	ru_yds: 81.1, 	ru_td: 0.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.9, 	fpts: 243, 	sae: 243, 	st_marys: 75.9, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Joe Flacco ', 	pos: 'QB', 	team: 'BAL', 	att: 592.2, 	comp: 363.5, 	p_yds: 4048.8, 	p_td: 24.7, 	int: 15.5, 	rush: 25.6, 	ru_yds: 62.5, 	ru_td: 1.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.7, 	fpts: 238.1, 	sae: 238.1, 	st_marys: 83.7, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Tom Brady', 	pos: 'QB', 	team: ' NE', 	att: 472.7, 	comp: 301.3, 	p_yds: 3451, 	p_td: 25.4, 	int: 7.8, 	rush: 24.8, 	ru_yds: 56.8, 	ru_td: 1.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.8, 	fpts: 231.5, 	sae: 231.5, 	st_marys: 103.5, 	status: 0, 	string: 0,	inj: '',	comments: 'SSPD 4 games' },
{ name: 'Jay Cutler ', 	pos: 'QB', 	team: 'CHI', 	att: 527.5, 	comp: 333.4, 	p_yds: 3833, 	p_td: 22.9, 	int: 15.3, 	rush: 40.1, 	ru_yds: 169.1, 	ru_td: 1.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.9, 	fpts: 230.8, 	sae: 230.8, 	st_marys: 75.9, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Brock Osweiler ', 	pos: 'QB', 	team: 'HOU', 	att: 541.4, 	comp: 328.1, 	p_yds: 3766.5, 	p_td: 22.8, 	int: 14, 	rush: 44.7, 	ru_yds: 122.7, 	ru_td: 1.1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 3.7, 	fpts: 225.6, 	sae: 225.6, 	st_marys: 75, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Robert Griffin ', 	pos: 'QB', 	team: 'CLE', 	att: 475.3, 	comp: 292.7, 	p_yds: 3270, 	p_td: 16.5, 	int: 13.8, 	rush: 62.4, 	ru_yds: 299.2, 	ru_td: 1.7, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.1, 	fpts: 201.2, 	sae: 201.2, 	st_marys: 59.7, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Blaine Gabbert', 	pos: 'QB', 	team: ' SF', 	att: 479.5, 	comp: 286.6, 	p_yds: 3218.1, 	p_td: 16.5, 	int: 13.8, 	rush: 56.7, 	ru_yds: 261.1, 	ru_td: 1.8, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4.2, 	fpts: 195.5, 	sae: 195.5, 	st_marys: 60.3, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Sam Bradford ', 	pos: 'QB', 	team: 'MIN', 	att: 484.2, 	comp: 301.1, 	p_yds: 3404.7, 	p_td: 20.2, 	int: 13.3, 	rush: 24.5, 	ru_yds: 48.6, 	ru_td: 0.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 4, 	fpts: 190.4, 	sae: 190.4, 	st_marys: 82.8, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Tony Romo ', 	pos: 'QB', 	team: 'DAL', 	att: 305.9, 	comp: 199, 	p_yds: 2291.5, 	p_td: 16.2, 	int: 7.2, 	rush: 14, 	ru_yds: 39.9, 	ru_td: 0.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.5, 	fpts: 143.3, 	sae: 143.3, 	st_marys: 91.8, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Out 8 weeks' },
{ name: 'Carson Wentz ', 	pos: 'QB', 	team: 'PHI', 	att: 299.1, 	comp: 176.2, 	p_yds: 2136.9, 	p_td: 12.2, 	int: 10.8, 	rush: 29.8, 	ru_yds: 146.7, 	ru_td: 1.1, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.5, 	fpts: 129.1, 	sae: 129.1, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Dak Prescott ', 	pos: 'QB', 	team: 'DAL', 	att: 220.6, 	comp: 137.4, 	p_yds: 1792.6, 	p_td: 11.2, 	int: 7.7, 	rush: 30.1, 	ru_yds: 147.4, 	ru_td: 1.3, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.2, 	fpts: 119.5, 	sae: 119.5, 	st_marys: 41.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Trevor Siemian ', 	pos: 'QB', 	team: 'DEN', 	att: 332.8, 	comp: 199.7, 	p_yds: 2136.6, 	p_td: 11.4, 	int: 11.3, 	rush: 22.3, 	ru_yds: 80.1, 	ru_td: 0.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.4, 	fpts: 114.7, 	sae: 114.7, 	st_marys: 64.5, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jared Goff', 	pos: 'QB', 	team: ' LA', 	att: 291.7, 	comp: 173.8, 	p_yds: 1744.9, 	p_td: 9.6, 	int: 8.4, 	rush: 26.4, 	ru_yds: 83.9, 	ru_td: 0.6, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 1.3, 	fpts: 100.9, 	sae: 100.9, 	st_marys: 60, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Case Keenum', 	pos: 'QB', 	team: ' LA', 	att: 210.4, 	comp: 125.3, 	p_yds: 1603.4, 	p_td: 8.2, 	int: 7.2, 	rush: 13.7, 	ru_yds: 48.4, 	ru_td: 0.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.8, 	fpts: 84.5, 	sae: 84.5, 	st_marys: 27.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Paxton Lynch ', 	pos: 'QB', 	team: 'DEN', 	att: 208.5, 	comp: 122.1, 	p_yds: 1404.4, 	p_td: 8.1, 	int: 7.4, 	rush: 22.3, 	ru_yds: 83.7, 	ru_td: 0.5, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 1.6, 	fpts: 81.9, 	sae: 81.9, 	st_marys: 27.3, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jimmy Garoppolo', 	pos: 'QB', 	team: ' NE', 	att: 152.9, 	comp: 92.5, 	p_yds: 992.1, 	p_td: 6.3, 	int: 3.6, 	rush: 8.9, 	ru_yds: 28.6, 	ru_td: 0.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 1, 	fpts: 59.9, 	sae: 59.9, 	st_marys: 20.1, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Shaun Hill ', 	pos: 'QB', 	team: 'MIN', 	att: 170.5, 	comp: 107.5, 	p_yds: 1034.3, 	p_td: 6, 	int: 4, 	rush: 7.9, 	ru_yds: 18.4, 	ru_td: 0.2, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 2.1, 	fpts: 56.3, 	sae: 56.3, 	st_marys: 19.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
																					
																					
{ name: 'Todd Gurley', 	pos: 'RB', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 294.3, 	ru_yds: 1333.8, 	ru_td: 10.2, 	rec: 36.3, 	re_yds: 302.5, 	re_td: 0.9, 	fl: 2.2, 	fpts: 225.8, 	sae: 243.95, 	st_marys: 66.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'David Johnson ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 231.7, 	ru_yds: 1010, 	ru_td: 8.8, 	rec: 57, 	re_yds: 544.5, 	re_td: 3.2, 	fl: 2.1, 	fpts: 223.1, 	sae: 251.6, 	st_marys: 72, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Adrian Peterson ', 	pos: 'RB', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 302.8, 	ru_yds: 1348.9, 	ru_td: 10.1, 	rec: 30.6, 	re_yds: 221, 	re_td: 0.9, 	fl: 3, 	fpts: 216.8, 	sae: 232.1, 	st_marys: 66, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Lamar Miller ', 	pos: 'RB', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 267.9, 	ru_yds: 1191.8, 	ru_td: 7.7, 	rec: 48.2, 	re_yds: 368.5, 	re_td: 1.6, 	fl: 2.3, 	fpts: 207.5, 	sae: 231.6, 	st_marys: 55.8, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Ezekiel Elliott ', 	pos: 'RB', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 255.4, 	ru_yds: 1159.5, 	ru_td: 8.6, 	rec: 40.3, 	re_yds: 330, 	re_td: 1.7, 	fl: 1.8, 	fpts: 207.5, 	sae: 227.65, 	st_marys: 61.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Devonta Freeman ', 	pos: 'RB', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 215.4, 	ru_yds: 895.8, 	ru_td: 7.3, 	rec: 63.2, 	re_yds: 516.8, 	re_td: 2.4, 	fl: 2.6, 	fpts: 194.1, 	sae: 225.7, 	st_marys: 58.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Le\'Veon Bell ', 	pos: 'RB', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 212.7, 	ru_yds: 966.6, 	ru_td: 7.3, 	rec: 50.1, 	re_yds: 420.1, 	re_td: 1.9, 	fl: 1.4, 	fpts: 191, 	sae: 216.05, 	st_marys: 55.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'SSPD 3 games' },
{ name: 'Jamaal Charles', 	pos: 'RB', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 199.6, 	ru_yds: 995.6, 	ru_td: 7.7, 	rec: 42.3, 	re_yds: 351.5, 	re_td: 2.6, 	fl: 2.9, 	fpts: 190.9, 	sae: 212.05, 	st_marys: 61.8, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Not 100%' },
{ name: 'Mark Ingram', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 223.8, 	ru_yds: 975.4, 	ru_td: 7.9, 	rec: 51.6, 	re_yds: 397.8, 	re_td: 1.3, 	fl: 2.2, 	fpts: 188.3, 	sae: 214.1, 	st_marys: 55.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'LeSean McCoy ', 	pos: 'RB', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 252.9, 	ru_yds: 1100.9, 	ru_td: 6.7, 	rec: 39.9, 	re_yds: 303.6, 	re_td: 1.8, 	fl: 2.4, 	fpts: 186.6, 	sae: 206.55, 	st_marys: 51, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Eddie Lacy', 	pos: 'RB', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 235.3, 	ru_yds: 1068.1, 	ru_td: 7.4, 	rec: 32.7, 	re_yds: 289.7, 	re_td: 1.8, 	fl: 2.4, 	fpts: 186.1, 	sae: 202.45, 	st_marys: 55.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Doug Martin', 	pos: 'RB', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 270.8, 	ru_yds: 1207.6, 	ru_td: 6.7, 	rec: 32.1, 	re_yds: 241.8, 	re_td: 1, 	fl: 3.1, 	fpts: 184.8, 	sae: 200.85, 	st_marys: 46.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'C.J. Anderson ', 	pos: 'RB', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 233, 	ru_yds: 1031.5, 	ru_td: 7, 	rec: 34.4, 	re_yds: 262.9, 	re_td: 0.9, 	fl: 2.2, 	fpts: 172.7, 	sae: 189.9, 	st_marys: 47.4, 	status: 0, 	string: 0,	inj: '',	comments: '2 TDs already' },
{ name: 'Matt Forte ', 	pos: 'RB', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 215.1, 	ru_yds: 898.5, 	ru_td: 5.4, 	rec: 44.9, 	re_yds: 366.1, 	re_td: 2, 	fl: 2.1, 	fpts: 166.8, 	sae: 189.25, 	st_marys: 44.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Latavius Murray ', 	pos: 'RB', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 234.2, 	ru_yds: 982.9, 	ru_td: 6.4, 	rec: 35.9, 	re_yds: 247.6, 	re_td: 0.8, 	fl: 2.1, 	fpts: 162.3, 	sae: 180.25, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Thomas Rawls ', 	pos: 'RB', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 215.8, 	ru_yds: 1029.3, 	ru_td: 6.4, 	rec: 21.7, 	re_yds: 171.8, 	re_td: 0.9, 	fl: 2.1, 	fpts: 159.6, 	sae: 170.45, 	st_marys: 43.8, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Carlos Hyde', 	pos: 'RB', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 251.6, 	ru_yds: 1029, 	ru_td: 6.2, 	rec: 31.8, 	re_yds: 195.6, 	re_td: 0.5, 	fl: 2, 	fpts: 159.1, 	sae: 175, 	st_marys: 40.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Jonathan Stewart ', 	pos: 'RB', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 233.7, 	ru_yds: 1007.3, 	ru_td: 6.3, 	rec: 21.7, 	re_yds: 158.6, 	re_td: 0.9, 	fl: 2.3, 	fpts: 155, 	sae: 165.85, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'DeMarco Murray ', 	pos: 'RB', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 209.8, 	ru_yds: 907.5, 	ru_td: 6, 	rec: 32.5, 	re_yds: 245.2, 	re_td: 1, 	fl: 2.2, 	fpts: 153.2, 	sae: 169.45, 	st_marys: 42, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jeremy Hill ', 	pos: 'RB', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 218.7, 	ru_yds: 906.1, 	ru_td: 8, 	rec: 18.7, 	re_yds: 131.1, 	re_td: 0.8, 	fl: 2.7, 	fpts: 151.1, 	sae: 160.45, 	st_marys: 52.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jeremy Langford ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 199.5, 	ru_yds: 795.6, 	ru_td: 5.1, 	rec: 33.9, 	re_yds: 315.8, 	re_td: 1.7, 	fl: 1.6, 	fpts: 148.9, 	sae: 165.85, 	st_marys: 40.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Ryan Mathews ', 	pos: 'RB', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 198.9, 	ru_yds: 898.7, 	ru_td: 5.8, 	rec: 29.2, 	re_yds: 219.6, 	re_td: 0.9, 	fl: 2.4, 	fpts: 147.2, 	sae: 161.8, 	st_marys: 40.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Matt Jones ', 	pos: 'RB', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 205, 	ru_yds: 822.1, 	ru_td: 5, 	rec: 28, 	re_yds: 281.4, 	re_td: 1.2, 	fl: 3, 	fpts: 142.1, 	sae: 156.1, 	st_marys: 37.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Frank Gore ', 	pos: 'RB', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 199.7, 	ru_yds: 817.3, 	ru_td: 5.7, 	rec: 30.5, 	re_yds: 243.9, 	re_td: 1.1, 	fl: 2.5, 	fpts: 141.5, 	sae: 156.75, 	st_marys: 40.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Melvin Gordon', 	pos: 'RB', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 234.8, 	ru_yds: 904.7, 	ru_td: 4.6, 	rec: 34.4, 	re_yds: 221.6, 	re_td: 0.9, 	fl: 3, 	fpts: 139.8, 	sae: 157, 	st_marys: 33, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Giovani Bernard ', 	pos: 'RB', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 149.7, 	ru_yds: 648.9, 	ru_td: 3.4, 	rec: 48.1, 	re_yds: 426.3, 	re_td: 1.8, 	fl: 1.3, 	fpts: 136, 	sae: 160.05, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Ameer Abdullah ', 	pos: 'RB', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 186.3, 	ru_yds: 800.5, 	ru_td: 4.5, 	rec: 34.2, 	re_yds: 258.9, 	re_td: 1, 	fl: 1.7, 	fpts: 135.7, 	sae: 152.8, 	st_marys: 33, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Rashad Jennings ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 181.6, 	ru_yds: 791.9, 	ru_td: 4.9, 	rec: 30.5, 	re_yds: 252.6, 	re_td: 1, 	fl: 2.1, 	fpts: 135.5, 	sae: 150.75, 	st_marys: 35.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Danny Woodhead', 	pos: 'RB', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 91.9, 	ru_yds: 352.8, 	ru_td: 2.3, 	rec: 72.1, 	re_yds: 637, 	re_td: 4, 	fl: 1.3, 	fpts: 134.2, 	sae: 170.25, 	st_marys: 37.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Arian Foster ', 	pos: 'RB', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 167.1, 	ru_yds: 659.5, 	ru_td: 4.6, 	rec: 38.3, 	re_yds: 325.2, 	re_td: 1.7, 	fl: 1.6, 	fpts: 132.9, 	sae: 152.05, 	st_marys: 37.8, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Bad value' },
{ name: 'Duke Johnson ', 	pos: 'RB', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 136.5, 	ru_yds: 554.9, 	ru_td: 2.9, 	rec: 57.2, 	re_yds: 478.1, 	re_td: 2, 	fl: 1.4, 	fpts: 130.2, 	sae: 158.8, 	st_marys: 29.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'LeGarrette Blount', 	pos: 'RB', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 196, 	ru_yds: 801.5, 	ru_td: 6.9, 	rec: 11, 	re_yds: 73.9, 	re_td: 0.3, 	fl: 1.5, 	fpts: 127.6, 	sae: 133.1, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'T.J. Yeldon ', 	pos: 'RB', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 162.8, 	ru_yds: 678.4, 	ru_td: 3.9, 	rec: 37.7, 	re_yds: 289.7, 	re_td: 1.1, 	fl: 1.3, 	fpts: 124.4, 	sae: 143.25, 	st_marys: 30, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Isaiah Crowell ', 	pos: 'RB', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 179.3, 	ru_yds: 743.3, 	ru_td: 5.1, 	rec: 19.6, 	re_yds: 165.8, 	re_td: 0.6, 	fl: 1.6, 	fpts: 122, 	sae: 131.8, 	st_marys: 34.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Charles Sims', 	pos: 'RB', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 103.5, 	ru_yds: 455.4, 	ru_td: 2.2, 	rec: 50.9, 	re_yds: 493.9, 	re_td: 2.5, 	fl: 1.4, 	fpts: 120.1, 	sae: 145.55, 	st_marys: 28.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Chris Ivory ', 	pos: 'RB', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 163.1, 	ru_yds: 714.3, 	ru_td: 5, 	rec: 22, 	re_yds: 157.5, 	re_td: 0.6, 	fl: 2, 	fpts: 116.8, 	sae: 127.8, 	st_marys: 33.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'DeAngelo Williams ', 	pos: 'RB', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 127.1, 	ru_yds: 577.6, 	ru_td: 4.5, 	rec: 22.9, 	re_yds: 185.2, 	re_td: 0.9, 	fl: 1.3, 	fpts: 106.1, 	sae: 117.55, 	st_marys: 32.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Theo Riddick ', 	pos: 'RB', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 57, 	ru_yds: 221.5, 	ru_td: 1.3, 	rec: 62.5, 	re_yds: 559.9, 	re_td: 2.9, 	fl: 0.8, 	fpts: 101.4, 	sae: 132.65, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Bilal Powell ', 	pos: 'RB', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 119.1, 	ru_yds: 487.8, 	ru_td: 2.4, 	rec: 37.1, 	re_yds: 321.8, 	re_td: 1.3, 	fl: 0.9, 	fpts: 101, 	sae: 119.55, 	st_marys: 22.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Jay Ajayi ', 	pos: 'RB', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 136.7, 	ru_yds: 590.2, 	ru_td: 3.5, 	rec: 22.2, 	re_yds: 173.9, 	re_td: 0.8, 	fl: 1, 	fpts: 100.5, 	sae: 111.6, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Derrick Henry ', 	pos: 'RB', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 137.2, 	ru_yds: 574.6, 	ru_td: 4.3, 	rec: 15.6, 	re_yds: 140.6, 	re_td: 0.5, 	fl: 1.3, 	fpts: 97.6, 	sae: 105.4, 	st_marys: 28.8, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Shane Vereen ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 60.5, 	ru_yds: 259.5, 	ru_td: 1.4, 	rec: 53.2, 	re_yds: 450.4, 	re_td: 2.7, 	fl: 1, 	fpts: 93.2, 	sae: 119.8, 	st_marys: 24.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'James Starks', 	pos: 'RB', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 116.6, 	ru_yds: 485.9, 	ru_td: 2.9, 	rec: 25.4, 	re_yds: 214.8, 	re_td: 0.9, 	fl: 1.4, 	fpts: 90, 	sae: 102.7, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Justin Forsett ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 117.3, 	ru_yds: 549.6, 	ru_td: 3, 	rec: 20.1, 	re_yds: 140.6, 	re_td: 0.6, 	fl: 1.8, 	fpts: 86.8, 	sae: 96.85, 	st_marys: 21.6, 	status: 0, 	string: 0,	inj: '',	comments: 'Sketchy' },
{ name: 'Darren Sproles ', 	pos: 'RB', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 65.1, 	ru_yds: 283.2, 	ru_td: 2, 	rec: 48.3, 	re_yds: 380, 	re_td: 1.7, 	fl: 1.1, 	fpts: 86.6, 	sae: 110.75, 	st_marys: 22.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Devontae Booker ', 	pos: 'RB', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 117.8, 	ru_yds: 470.4, 	ru_td: 3.2, 	rec: 21.6, 	re_yds: 158.5, 	re_td: 0.6, 	fl: 0.9, 	fpts: 83.9, 	sae: 94.7, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Tevin Coleman ', 	pos: 'RB', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 117.4, 	ru_yds: 486.9, 	ru_td: 2.9, 	rec: 23.4, 	re_yds: 146.9, 	re_td: 0.6, 	fl: 2, 	fpts: 80.8, 	sae: 92.5, 	st_marys: 21, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Jerick McKinnon ', 	pos: 'RB', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 80.5, 	ru_yds: 365.3, 	ru_td: 2, 	rec: 28.7, 	re_yds: 225.4, 	re_td: 1, 	fl: 0.8, 	fpts: 75.4, 	sae: 89.75, 	st_marys: 18, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Spencer Ware', 	pos: 'RB', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 99.1, 	ru_yds: 424.7, 	ru_td: 4, 	rec: 14.2, 	re_yds: 77.4, 	re_td: 0.3, 	fl: 0.9, 	fpts: 74.5, 	sae: 81.6, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '',	comments: 'Starting Week 1' },
{ name: 'James White', 	pos: 'RB', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 49, 	ru_yds: 177.1, 	ru_td: 1.3, 	rec: 35.2, 	re_yds: 338.8, 	re_td: 2.3, 	fl: 0.9, 	fpts: 71.1, 	sae: 88.7, 	st_marys: 21.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Terrance West ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 118.2, 	ru_yds: 462.9, 	ru_td: 2.7, 	rec: 16.7, 	re_yds: 103.3, 	re_td: 0.3, 	fl: 1.6, 	fpts: 71.1, 	sae: 79.45, 	st_marys: 18., 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jordan Howard ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 99.1, 	ru_yds: 402.7, 	ru_td: 3, 	rec: 14.1, 	re_yds: 109.1, 	re_td: 0.4, 	fl: 0.9, 	fpts: 70.1, 	sae: 77.15, 	st_marys: 20.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Chris Thompson ', 	pos: 'RB', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 53.7, 	ru_yds: 224.3, 	ru_td: 1.2, 	rec: 39.1, 	re_yds: 309.2, 	re_td: 1.7, 	fl: 1, 	fpts: 68.9, 	sae: 88.45, 	st_marys: 17.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Dion Lewis', 	pos: 'RB', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 55.4, 	ru_yds: 228.3, 	ru_td: 1.6, 	rec: 31.5, 	re_yds: 286.7, 	re_td: 1.5, 	fl: 0.8, 	fpts: 68.3, 	sae: 84.05, 	st_marys: 18.6, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Out for 8 weeks' },
{ name: 'Shaun Draughn', 	pos: 'RB', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 85.6, 	ru_yds: 318.9, 	ru_td: 1.8, 	rec: 29.5, 	re_yds: 218, 	re_td: 0.9, 	fl: 0.8, 	fpts: 68.2, 	sae: 82.95, 	st_marys: 16.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'DeAndre Washington ', 	pos: 'RB', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 88.8, 	ru_yds: 342.5, 	ru_td: 2.1, 	rec: 25.2, 	re_yds: 182.3, 	re_td: 0.8, 	fl: 1, 	fpts: 67.5, 	sae: 80.1, 	st_marys: 17.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Tim Hightower', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 72.2, 	ru_yds: 325.2, 	ru_td: 3.5, 	rec: 15.2, 	re_yds: 129.3, 	re_td: 0.4, 	fl: 1, 	fpts: 66.6, 	sae: 74.2, 	st_marys: 23.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Kenneth Dixon ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 85.8, 	ru_yds: 352.4, 	ru_td: 2, 	rec: 20, 	re_yds: 170, 	re_td: 0.5, 	fl: 0.7, 	fpts: 65.8, 	sae: 75.8, 	st_marys: 15, 	status: 0, 	string: 0,	inj: '',	comments: 'Out for 6 weeks' },
{ name: 'Javorius Allen ', 	pos: 'RB', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 75.3, 	ru_yds: 306.7, 	ru_td: 1.8, 	rec: 27.5, 	re_yds: 213.7, 	re_td: 1, 	fl: 1.5, 	fpts: 65.3, 	sae: 79.05, 	st_marys: 16.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Chris Johnson ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 104.7, 	ru_yds: 425.7, 	ru_td: 2.7, 	rec: 8.8, 	re_yds: 60, 	re_td: 0.2, 	fl: 1.2, 	fpts: 63.2, 	sae: 67.6, 	st_marys: 17.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'C.J. Prosise ', 	pos: 'RB', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 56.4, 	ru_yds: 240.5, 	ru_td: 1.5, 	rec: 30.3, 	re_yds: 243.6, 	re_td: 1, 	fl: 0.7, 	fpts: 62.1, 	sae: 77.25, 	st_marys: 15, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Christine Michael ', 	pos: 'RB', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 92.2, 	ru_yds: 386.3, 	ru_td: 2, 	rec: 11.7, 	re_yds: 86.8, 	re_td: 0.3, 	fl: 1, 	fpts: 59.4, 	sae: 65.25, 	st_marys: 13.8, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Benny Cunningham', 	pos: 'RB', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 60.7, 	ru_yds: 232, 	ru_td: 1.3, 	rec: 30.3, 	re_yds: 241.1, 	re_td: 0.7, 	fl: 0.8, 	fpts: 58.1, 	sae: 73.25, 	st_marys: 12, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Cameron Artis-Payne ', 	pos: 'RB', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 80.9, 	ru_yds: 327.8, 	ru_td: 1.8, 	rec: 12.2, 	re_yds: 113.8, 	re_td: 0.5, 	fl: 0.9, 	fpts: 56.1, 	sae: 62.2, 	st_marys: 13.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Alfred Morris ', 	pos: 'RB', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 88.4, 	ru_yds: 370.1, 	ru_td: 2.4, 	rec: 6.7, 	re_yds: 50.8, 	re_td: 0.1, 	fl: 0.7, 	fpts: 55.6, 	sae: 58.95, 	st_marys: 15., 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'C.J. Spiller', 	pos: 'RB', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 50.9, 	ru_yds: 192.6, 	ru_td: 1.1, 	rec: 33.1, 	re_yds: 236.6, 	re_td: 1.3, 	fl: 0.8, 	fpts: 55.4, 	sae: 71.95, 	st_marys: 14.4, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Robert Kelley ', 	pos: 'RB', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 86.3, 	ru_yds: 337, 	ru_td: 2.3, 	rec: 10.3, 	re_yds: 74.4, 	re_td: 0.2, 	fl: 1.3, 	fpts: 53.3, 	sae: 58.45, 	st_marys: 15, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Paul Perkins ', 	pos: 'RB', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 76.1, 	ru_yds: 315.2, 	ru_td: 1.9, 	rec: 13.3, 	re_yds: 102.4, 	re_td: 0.3, 	fl: 1, 	fpts: 53, 	sae: 59.65, 	st_marys: 13.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Alfred Blue ', 	pos: 'RB', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 83.9, 	ru_yds: 334.9, 	ru_td: 1.9, 	rec: 10, 	re_yds: 79.9, 	re_td: 0.2, 	fl: 0.9, 	fpts: 52.3, 	sae: 57.3, 	st_marys: 12.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Andre Ellington ', 	pos: 'RB', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 51.7, 	ru_yds: 254, 	ru_td: 1.6, 	rec: 18, 	re_yds: 152.9, 	re_td: 0.7, 	fl: 1.6, 	fpts: 51.5, 	sae: 60.5, 	st_marys: 13.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Ka\'Deem Carey ', 	pos: 'RB', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 71.4, 	ru_yds: 291.4, 	ru_td: 1.9, 	rec: 12.2, 	re_yds: 85.8, 	re_td: 0.5, 	fl: 1, 	fpts: 50.4, 	sae: 56.5, 	st_marys: 14.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Keith Marshall ', 	pos: 'RB', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 72, 	ru_yds: 309.3, 	ru_td: 2.1, 	rec: 7.5, 	re_yds: 70.3, 	re_td: 0.1, 	fl: 0.9, 	fpts: 49.4, 	sae: 53.15, 	st_marys: 13.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Karlos Willi', 	pos: 'RB', 	team: 'ams', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 67.5, 	ru_yds: 276.7, 	ru_td: 2, 	rec: 10, 	re_yds: 75.7, 	re_td: 0.4, 	fl: 0.8, 	fpts: 47.8, 	sae: 52.8, 	st_marys: 14.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Unsigned' },
																					
																					
																					
																					
{ name: 'Antonio Brown ', 	pos: 'WR', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.7, 	ru_yds: 21, 	ru_td: 0, 	rec: 127.7, 	re_yds: 1711.1, 	re_td: 10.8, 	fl: 1.3, 	fpts: 235.4, 	sae: 299.25, 	st_marys: 64.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Julio Jones ', 	pos: 'WR', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.6, 	ru_yds: 2.7, 	ru_td: 0, 	rec: 121.5, 	re_yds: 1681.6, 	re_td: 8.8, 	fl: 1.2, 	fpts: 218.6, 	sae: 279.35, 	st_marys: 52.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Odell Beckham Jr. ', 	pos: 'WR', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1, 	ru_yds: 5, 	ru_td: 0, 	rec: 99.1, 	re_yds: 1456.8, 	re_td: 10.9, 	fl: 0.9, 	fpts: 210, 	sae: 259.55, 	st_marys: 65.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'DeAndre Hopkins ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 100, 	re_yds: 1379.2, 	re_td: 9.1, 	fl: 0.6, 	fpts: 191.4, 	sae: 241.4, 	st_marys: 54.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'A.J. Green ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.1, 	ru_td: 0, 	rec: 88.4, 	re_yds: 1290.6, 	re_td: 9.2, 	fl: 1.1, 	fpts: 182.3, 	sae: 226.5, 	st_marys: 55.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Allen Robinson ', 	pos: 'WR', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 80.4, 	re_yds: 1218.3, 	re_td: 9, 	fl: 0.6, 	fpts: 174.8, 	sae: 215, 	st_marys: 54, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Dez Bryant ', 	pos: 'WR', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 81.9, 	re_yds: 1153.1, 	re_td: 9.6, 	fl: 0.4, 	fpts: 172.1, 	sae: 213.05, 	st_marys: 57.6, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Rookie QB' },
{ name: 'Jordy Nelson', 	pos: 'WR', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.3, 	ru_td: 0, 	rec: 85.5, 	re_yds: 1221.1, 	re_td: 8.5, 	fl: 0.8, 	fpts: 171.9, 	sae: 214.65, 	st_marys: 51, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Brandon Marshall ', 	pos: 'WR', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.1, 	ru_td: 0, 	rec: 89.6, 	re_yds: 1192.6, 	re_td: 8.6, 	fl: 1.2, 	fpts: 168.2, 	sae: 213, 	st_marys: 51.6, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Alshon Jeffery ', 	pos: 'WR', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.7, 	ru_yds: 5.3, 	ru_td: 0, 	rec: 85.5, 	re_yds: 1215.9, 	re_td: 7.7, 	fl: 0.6, 	fpts: 167.3, 	sae: 210.05, 	st_marys: 46.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Mike Evans', 	pos: 'WR', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 79, 	re_yds: 1201.3, 	re_td: 7.7, 	fl: 0.7, 	fpts: 164.9, 	sae: 204.4, 	st_marys: 46.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'T.Y. Hilton ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.4, 	ru_yds: 7.4, 	ru_td: 0, 	rec: 78.9, 	re_yds: 1195.6, 	re_td: 7.4, 	fl: 0.6, 	fpts: 163.7, 	sae: 203.15, 	st_marys: 44.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Keenan Allen', 	pos: 'WR', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 104.6, 	re_yds: 1219.5, 	re_td: 7.1, 	fl: 1.3, 	fpts: 161.9, 	sae: 214.2, 	st_marys: 42.6, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Amari Cooper ', 	pos: 'WR', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.9, 	ru_yds: 6.7, 	ru_td: 0, 	rec: 82.7, 	re_yds: 1145.6, 	re_td: 7.8, 	fl: 1, 	fpts: 160.2, 	sae: 201.55, 	st_marys: 46.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Sammy Watkins ', 	pos: 'WR', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.8, 	ru_yds: 3.3, 	ru_td: 0, 	rec: 73.3, 	re_yds: 1106.6, 	re_td: 7.8, 	fl: 0.6, 	fpts: 157, 	sae: 193.65, 	st_marys: 46.8, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Brandin Cooks', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 6, 	ru_yds: 31.3, 	ru_td: 0.1, 	rec: 85, 	re_yds: 1084.7, 	re_td: 7.6, 	fl: 0.9, 	fpts: 156, 	sae: 198.5, 	st_marys: 46.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Demaryius Thomas ', 	pos: 'WR', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 85.9, 	re_yds: 1099.4, 	re_td: 7, 	fl: 0.9, 	fpts: 150.4, 	sae: 193.35, 	st_marys: 42, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jeremy Maclin', 	pos: 'WR', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2, 	ru_yds: 10.1, 	ru_td: 0.1, 	rec: 83.9, 	re_yds: 1080, 	re_td: 7.1, 	fl: 0.9, 	fpts: 150.1, 	sae: 192.05, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Randall Cobb', 	pos: 'WR', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 10.5, 	ru_yds: 46.7, 	ru_td: 0.1, 	rec: 81.5, 	re_yds: 1012.9, 	re_td: 7.4, 	fl: 0.6, 	fpts: 149.8, 	sae: 190.55, 	st_marys: 45, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Eric Decker ', 	pos: 'WR', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.2, 	ru_td: 0, 	rec: 78.4, 	re_yds: 1031.4, 	re_td: 8, 	fl: 0.9, 	fpts: 149, 	sae: 188.2, 	st_marys: 48, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Doug Baldwin ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 1, 	ru_td: 0, 	rec: 73.7, 	re_yds: 996.8, 	re_td: 8, 	fl: 0.4, 	fpts: 147.2, 	sae: 184.05, 	st_marys: 48, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jarvis Landry ', 	pos: 'WR', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 13.2, 	ru_yds: 66.7, 	ru_td: 0.2, 	rec: 98.1, 	re_yds: 1042.6, 	re_td: 6, 	fl: 1.1, 	fpts: 145.8, 	sae: 194.85, 	st_marys: 37.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Donte Moncrief ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.3, 	ru_yds: 1.3, 	ru_td: 0, 	rec: 74.4, 	re_yds: 983.2, 	re_td: 7.2, 	fl: 0.4, 	fpts: 141.3, 	sae: 178.5, 	st_marys: 43.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Larry Fitzgerald ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 85.3, 	re_yds: 990.5, 	re_td: 6.9, 	fl: 1.2, 	fpts: 138, 	sae: 180.65, 	st_marys: 41.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Julian Edelman', 	pos: 'WR', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 4.7, 	ru_yds: 27.4, 	ru_td: 0, 	rec: 88.4, 	re_yds: 974.8, 	re_td: 6.4, 	fl: 1.1, 	fpts: 137, 	sae: 181.2, 	st_marys: 38.4, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Bad value' },
{ name: 'Michael Floyd ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.4, 	ru_yds: 1.4, 	ru_td: 0, 	rec: 61.1, 	re_yds: 953.1, 	re_td: 7, 	fl: 0.3, 	fpts: 136.8, 	sae: 167.35, 	st_marys: 42, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Golden Tate ', 	pos: 'WR', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 5.8, 	ru_yds: 34.5, 	ru_td: 0.1, 	rec: 88.1, 	re_yds: 1005.2, 	re_td: 5.7, 	fl: 0.9, 	fpts: 136.6, 	sae: 180.65, 	st_marys: 34.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Kelvin Benjamin ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.2, 	ru_td: 0, 	rec: 66.5, 	re_yds: 919.4, 	re_td: 7.6, 	fl: 0.9, 	fpts: 135.7, 	sae: 168.95, 	st_marys: 45.6, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '1 TD already' },
{ name: 'John Brown ', 	pos: 'WR', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2.7, 	ru_yds: 15.7, 	ru_td: 0, 	rec: 60.6, 	re_yds: 919.5, 	re_td: 6.3, 	fl: 0.7, 	fpts: 130, 	sae: 160.3, 	st_marys: 37.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Emmanuel Sanders ', 	pos: 'WR', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.5, 	ru_yds: 20.7, 	ru_td: 0, 	rec: 70.8, 	re_yds: 971.3, 	re_td: 5.5, 	fl: 1.1, 	fpts: 130, 	sae: 165.4, 	st_marys: 33, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'DeSean Jackson ', 	pos: 'WR', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.5, 	ru_yds: 7.9, 	ru_td: 0, 	rec: 60.6, 	re_yds: 958.5, 	re_td: 5.8, 	fl: 0.9, 	fpts: 129.5, 	sae: 159.8, 	st_marys: 34.8, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Michael Crabtree ', 	pos: 'WR', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.6, 	ru_yds: 2.7, 	ru_td: 0, 	rec: 73.6, 	re_yds: 869.3, 	re_td: 6.7, 	fl: 0.3, 	fpts: 126.4, 	sae: 163.2, 	st_marys: 40.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jordan Matthews ', 	pos: 'WR', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 75.2, 	re_yds: 909.3, 	re_td: 6.1, 	fl: 0.7, 	fpts: 126.4, 	sae: 164, 	st_marys: 36.6, 	status: 0, 	string: 0,	inj: '',	comments: 'Rookie QB' },
{ name: 'Allen Hurns ', 	pos: 'WR', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.7, 	ru_td: 0, 	rec: 59.1, 	re_yds: 872, 	re_td: 6.3, 	fl: 0.6, 	fpts: 123.8, 	sae: 153.35, 	st_marys: 37.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Torrey Smith', 	pos: 'WR', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.7, 	ru_td: 0, 	rec: 55.9, 	re_yds: 911.2, 	re_td: 5.2, 	fl: 0.3, 	fpts: 121.6, 	sae: 149.55, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Tyler Lockett ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.6, 	ru_yds: 20.2, 	ru_td: 0, 	rec: 63.1, 	re_yds: 838.3, 	re_td: 6.2, 	fl: 1, 	fpts: 121.2, 	sae: 152.75, 	st_marys: 37.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Marvin Jones ', 	pos: 'WR', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.6, 	ru_yds: 8.3, 	ru_td: 0, 	rec: 68.4, 	re_yds: 891.3, 	re_td: 5.2, 	fl: 0.3, 	fpts: 120.7, 	sae: 154.9, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Devante Parker ', 	pos: 'WR', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.8, 	ru_td: 0, 	rec: 53.6, 	re_yds: 829.7, 	re_td: 5.4, 	fl: 0.5, 	fpts: 114.6, 	sae: 141.4, 	st_marys: 32.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Willie Snead', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.7, 	ru_td: 0, 	rec: 66.9, 	re_yds: 873.7, 	re_td: 4.8, 	fl: 1.1, 	fpts: 114.3, 	sae: 147.75, 	st_marys: 28.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Stefon Diggs ', 	pos: 'WR', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2.2, 	ru_yds: 10.8, 	ru_td: 0.1, 	rec: 62.8, 	re_yds: 816.7, 	re_td: 5.2, 	fl: 0.3, 	fpts: 113.8, 	sae: 145.2, 	st_marys: 31.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Tavon Austin', 	pos: 'WR', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 39.7, 	ru_yds: 249.3, 	ru_td: 1.8, 	rec: 54.2, 	re_yds: 564.1, 	re_td: 3.4, 	fl: 1.2, 	fpts: 110.1, 	sae: 137.2, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Sterling Shepard ', 	pos: 'WR', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 59.8, 	re_yds: 797.7, 	re_td: 5.2, 	fl: 0.6, 	fpts: 109.7, 	sae: 139.6, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Vincent Jackson', 	pos: 'WR', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 53.5, 	re_yds: 800.7, 	re_td: 4.7, 	fl: 0.3, 	fpts: 107.8, 	sae: 134.55, 	st_marys: 28.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Kevin White ', 	pos: 'WR', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.7, 	ru_td: 0, 	rec: 55.1, 	re_yds: 762.8, 	re_td: 5, 	fl: 0.4, 	fpts: 105.5, 	sae: 133.05, 	st_marys: 30, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Bad value' },
{ name: 'Travis Benjamin', 	pos: 'WR', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 1.2, 	ru_td: 0, 	rec: 52, 	re_yds: 757.3, 	re_td: 4.5, 	fl: 0.9, 	fpts: 101.2, 	sae: 127.2, 	st_marys: 27, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Corey Coleman ', 	pos: 'WR', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.5, 	ru_yds: 9.3, 	ru_td: 0, 	rec: 57.3, 	re_yds: 752.1, 	re_td: 4.3, 	fl: 0.6, 	fpts: 101.1, 	sae: 129.75, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Josh Gordon ', 	pos: 'WR', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 52, 	re_yds: 755.6, 	re_td: 4, 	fl: 0.3, 	fpts: 98.9, 	sae: 124.9, 	st_marys: 24, 	status: 0, 	string: 0,	inj: '',	comments: 'SSPD 4 games' },
{ name: 'Kamar Aiken ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 53.2, 	re_yds: 704.2, 	re_td: 4.4, 	fl: 0.6, 	fpts: 95.3, 	sae: 121.9, 	st_marys: 26.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Steve Smith ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 54.8, 	re_yds: 712.3, 	re_td: 4.1, 	fl: 0.3, 	fpts: 95.3, 	sae: 122.7, 	st_marys: 24.6, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Mohamed Sanu ', 	pos: 'WR', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.1, 	ru_yds: 16.8, 	ru_td: 0.1, 	rec: 57, 	re_yds: 704.2, 	re_td: 4, 	fl: 0.6, 	fpts: 95.1, 	sae: 123.6, 	st_marys: 24.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Rishard Matthews ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.3, 	ru_yds: 1, 	ru_td: 0, 	rec: 52.6, 	re_yds: 704.2, 	re_td: 4.2, 	fl: 0.3, 	fpts: 94.8, 	sae: 121.1, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Markus Wheaton ', 	pos: 'WR', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2, 	ru_yds: 11.1, 	ru_td: 0, 	rec: 50, 	re_yds: 688.5, 	re_td: 4.3, 	fl: 0.8, 	fpts: 94.3, 	sae: 119.3, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Mike Wallace ', 	pos: 'WR', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.1, 	ru_yds: 5, 	ru_td: 0, 	rec: 47, 	re_yds: 663.1, 	re_td: 4.5, 	fl: 0.2, 	fpts: 93.6, 	sae: 117.1, 	st_marys: 27, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Michael Thomas', 	pos: 'WR', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.7, 	ru_td: 0, 	rec: 50.4, 	re_yds: 653.5, 	re_td: 4.7, 	fl: 0.6, 	fpts: 92.7, 	sae: 117.9, 	st_marys: 28.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Phillip Dorsett ', 	pos: 'WR', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 3.6, 	ru_yds: 17.8, 	ru_td: 0, 	rec: 52.1, 	re_yds: 659.2, 	re_td: 4.4, 	fl: 0.8, 	fpts: 92.6, 	sae: 118.65, 	st_marys: 26.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Devin Funchess ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 44.6, 	re_yds: 631.5, 	re_td: 4.9, 	fl: 0.7, 	fpts: 91.4, 	sae: 113.7, 	st_marys: 29.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Terrance Williams ', 	pos: 'WR', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.7, 	ru_td: 0, 	rec: 40.8, 	re_yds: 647.5, 	re_td: 4.5, 	fl: 0.2, 	fpts: 91.3, 	sae: 111.7, 	st_marys: 27, 	status: 0, 	string: 0,	inj: '',	comments: 'Rookie QB' },
{ name: 'Will Fuller ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.2, 	ru_yds: 7.4, 	ru_td: 0, 	rec: 44.5, 	re_yds: 658.5, 	re_td: 4.1, 	fl: 0.5, 	fpts: 90.2, 	sae: 112.45, 	st_marys: 24.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Pierre Garcon ', 	pos: 'WR', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 54.2, 	re_yds: 664.9, 	re_td: 4, 	fl: 0.3, 	fpts: 89.9, 	sae: 117, 	st_marys: 24, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Laquon Treadwell ', 	pos: 'WR', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.3, 	ru_yds: 1.3, 	ru_td: 0, 	rec: 46.8, 	re_yds: 636.2, 	re_td: 4.2, 	fl: 0.3, 	fpts: 88, 	sae: 111.4, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Kenny Britt', 	pos: 'WR', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.2, 	ru_yds: 0.9, 	ru_td: 0, 	rec: 40.4, 	re_yds: 619.8, 	re_td: 3.4, 	fl: 0.2, 	fpts: 81.7, 	sae: 101.9, 	st_marys: 20.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Tyler Boyd ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 4.1, 	ru_yds: 24.5, 	ru_td: 0.1, 	rec: 44.7, 	re_yds: 555.4, 	re_td: 3.7, 	fl: 0.5, 	fpts: 79.5, 	sae: 101.85, 	st_marys: 22.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Robert Woods ', 	pos: 'WR', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.5, 	ru_yds: 2.7, 	ru_td: 0, 	rec: 46.9, 	re_yds: 588.7, 	re_td: 3.6, 	fl: 0.7, 	fpts: 79.3, 	sae: 102.75, 	st_marys: 21.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jermaine Kearse ', 	pos: 'WR', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.1, 	ru_yds: 0.3, 	ru_td: 0, 	rec: 40.3, 	re_yds: 558, 	re_td: 3.7, 	fl: 0.2, 	fpts: 77.9, 	sae: 98.05, 	st_marys: 22.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Anquan Boldin ', 	pos: 'WR', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 41.9, 	re_yds: 562.1, 	re_td: 3.4, 	fl: 0.6, 	fpts: 75.2, 	sae: 96.15, 	st_marys: 20.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Ted Ginn ', 	pos: 'WR', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 1.9, 	ru_yds: 12.8, 	ru_td: 0, 	rec: 32.7, 	re_yds: 498.2, 	re_td: 3.9, 	fl: 0.4, 	fpts: 73.6, 	sae: 89.95, 	st_marys: 23.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Kenny Stills ', 	pos: 'WR', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0.3, 	ru_td: 0, 	rec: 39.9, 	re_yds: 562.5, 	re_td: 2.9, 	fl: 0.2, 	fpts: 73.3, 	sae: 93.25, 	st_marys: 17.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Tajae Sharpe ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 44.4, 	re_yds: 543, 	re_td: 2.9, 	fl: 0.5, 	fpts: 70.7, 	sae: 92.9, 	st_marys: 17.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Bad value' },
{ name: 'Brandon LaFell ', 	pos: 'WR', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.4, 	ru_yds: 0.7, 	ru_td: 0, 	rec: 37, 	re_yds: 516.3, 	re_td: 3.1, 	fl: 0.7, 	fpts: 68.8, 	sae: 87.3, 	st_marys: 18.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Nelson Agholor ', 	pos: 'WR', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.3, 	ru_yds: 1.3, 	ru_td: 0, 	rec: 37.1, 	re_yds: 512.2, 	re_td: 3.1, 	fl: 0.8, 	fpts: 68.2, 	sae: 86.75, 	st_marys: 18.6, 	status: 0, 	string: 0,	inj: '',	comments: 'Rookie QB' },
{ name: 'Kendall Wright ', 	pos: 'WR', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 2.3, 	ru_yds: 11.9, 	ru_td: 0, 	rec: 39.4, 	re_yds: 498.5, 	re_td: 2.8, 	fl: 0.2, 	fpts: 67.6, 	sae: 87.3, 	st_marys: 16.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Dorial Green-Beckham ', 	pos: 'WR', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 30.9, 	re_yds: 481.4, 	re_td: 3.2, 	fl: 0.2, 	fpts: 67.1, 	sae: 82.55, 	st_marys: 19.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Rookie QB' },
{ name: 'Chris Hogan', 	pos: 'WR', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.6, 	ru_yds: 2.9, 	ru_td: 0, 	rec: 40.5, 	re_yds: 475.5, 	re_td: 3.2, 	fl: 0.2, 	fpts: 66.8, 	sae: 87.05, 	st_marys: 19.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jaelen Strong ', 	pos: 'WR', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 30.8, 	re_yds: 435.8, 	re_td: 3.5, 	fl: 0.2, 	fpts: 64, 	sae: 79.4, 	st_marys: 21, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jamison Crowder ', 	pos: 'WR', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0.9, 	ru_yds: 4.1, 	ru_td: 0, 	rec: 43.9, 	re_yds: 492.7, 	re_td: 2.5, 	fl: 0.8, 	fpts: 63.1, 	sae: 85.05, 	st_marys: 15, 	status: 0, 	string: 0,	inj: '',	comments: '' },
																					
																					
{ name: 'Rob Gronkowski', 	pos: 'TE', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 79.9, 	re_yds: 1108.8, 	re_td: 10.2, 	fl: 0.5, 	fpts: 171.1, 	sae: 211.05, 	st_marys: 61.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Out Week 1' },
{ name: 'Jordan Reed ', 	pos: 'TE', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 86.4, 	re_yds: 949.5, 	re_td: 7.5, 	fl: 1.2, 	fpts: 137.7, 	sae: 180.9, 	st_marys: 45, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Bad value' },
{ name: 'Greg Olsen ', 	pos: 'TE', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 75.2, 	re_yds: 971.2, 	re_td: 6.7, 	fl: 0.8, 	fpts: 135.6, 	sae: 173.2, 	st_marys: 40.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Delanie Walker ', 	pos: 'TE', 	team: 'TEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 73.3, 	re_yds: 894.9, 	re_td: 5.5, 	fl: 0.3, 	fpts: 121.8, 	sae: 158.45, 	st_marys: 33, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Coby Fleener', 	pos: 'TE', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 71.6, 	re_yds: 820.4, 	re_td: 6.2, 	fl: 0.4, 	fpts: 118.4, 	sae: 154.2, 	st_marys: 37.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Travis Kelce', 	pos: 'TE', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 72.3, 	re_yds: 854.6, 	re_td: 5.7, 	fl: 1.4, 	fpts: 117, 	sae: 153.15, 	st_marys: 34.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Gary Barnidge ', 	pos: 'TE', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 62.9, 	re_yds: 784.7, 	re_td: 5.8, 	fl: 0.3, 	fpts: 112.9, 	sae: 144.35, 	st_marys: 34.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Antonio Gates', 	pos: 'TE', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 63.4, 	re_yds: 731.5, 	re_td: 5.7, 	fl: 0.3, 	fpts: 106.8, 	sae: 138.5, 	st_marys: 34.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Zach Ertz ', 	pos: 'TE', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 67.7, 	re_yds: 784.8, 	re_td: 4.4, 	fl: 0.7, 	fpts: 103.6, 	sae: 137.45, 	st_marys: 26.4, 	status: 0, 	string: 0,	inj: '',	comments: 'Rookie QB' },
{ name: 'Julius Thomas ', 	pos: 'TE', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 56.2, 	re_yds: 627.2, 	re_td: 5.9, 	fl: 0.2, 	fpts: 97.8, 	sae: 125.9, 	st_marys: 35.4, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Martellus Bennett', 	pos: 'TE', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 57, 	re_yds: 651, 	re_td: 5.2, 	fl: 0.4, 	fpts: 95.7, 	sae: 124.2, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: '',	comments: 'Good value' },
{ name: 'Jason Witten ', 	pos: 'TE', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 67.9, 	re_yds: 714.1, 	re_td: 4.3, 	fl: 0.8, 	fpts: 95.6, 	sae: 129.55, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '',	comments: 'Rookie QB' },
{ name: 'Dwayne Allen ', 	pos: 'TE', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 54.4, 	re_yds: 603.9, 	re_td: 5.6, 	fl: 0.3, 	fpts: 93.3, 	sae: 120.5, 	st_marys: 33.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Zach Miller ', 	pos: 'TE', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 54.2, 	re_yds: 632.8, 	re_td: 5.1, 	fl: 0.3, 	fpts: 93.3, 	sae: 120.4, 	st_marys: 30.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Tyler Eifert ', 	pos: 'TE', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 49.2, 	re_yds: 619.4, 	re_td: 5.2, 	fl: 0.2, 	fpts: 92.8, 	sae: 117.4, 	st_marys: 31.2, 	status: 0, 	string: 0,	inj: 'INJ',	comments: 'Bad value' },
{ name: 'Jimmy Graham ', 	pos: 'TE', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 53.8, 	re_yds: 618.2, 	re_td: 4.6, 	fl: 0.6, 	fpts: 88.1, 	sae: 115, 	st_marys: 27.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Charles Clay ', 	pos: 'TE', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 56.3, 	re_yds: 615, 	re_td: 4.3, 	fl: 0.2, 	fpts: 86.5, 	sae: 114.65, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Eric Ebron ', 	pos: 'TE', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 53.4, 	re_yds: 593, 	re_td: 4.6, 	fl: 0.2, 	fpts: 86.2, 	sae: 112.9, 	st_marys: 27.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jared Cook', 	pos: 'TE', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 43.6, 	re_yds: 548.6, 	re_td: 4.4, 	fl: 0.5, 	fpts: 80.3, 	sae: 102.1, 	st_marys: 26.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Kyle Rudolph ', 	pos: 'TE', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 48.3, 	re_yds: 497.4, 	re_td: 4.3, 	fl: 0.2, 	fpts: 75.1, 	sae: 99.25, 	st_marys: 25.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Clive Walford ', 	pos: 'TE', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 44.4, 	re_yds: 480.9, 	re_td: 4.2, 	fl: 0.2, 	fpts: 72.7, 	sae: 94.9, 	st_marys: 25.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jordan Cameron ', 	pos: 'TE', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 43.4, 	re_yds: 499.5, 	re_td: 3.6, 	fl: 0.2, 	fpts: 71.4, 	sae: 93.1, 	st_marys: 21.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Crockett Gillmore ', 	pos: 'TE', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 35.6, 	re_yds: 423, 	re_td: 3.5, 	fl: 0.2, 	fpts: 63, 	sae: 80.8, 	st_marys: 21, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Austin Seferian-Jenkins', 	pos: 'TE', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 32, 	re_yds: 419.2, 	re_td: 3.6, 	fl: 0.4, 	fpts: 63, 	sae: 79, 	st_marys: 21.6, 	status: 0, 	string: 0,	inj: 'INJ',	comments: '' },
{ name: 'Jacob Tamme ', 	pos: 'TE', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 45, 	re_yds: 483.5, 	re_td: 2.5, 	fl: 0.2, 	fpts: 62.8, 	sae: 85.3, 	st_marys: 15, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Vance McDonald', 	pos: 'TE', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 40.4, 	re_yds: 437.6, 	re_td: 2.9, 	fl: 0.5, 	fpts: 60.1, 	sae: 80.3, 	st_marys: 17.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
																					
																					
{ name: 'Stephen Gostkowski', 	pos: 'K', 	team: ' NE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 135.3, 	sae: 135.3, 	st_marys: 135.3, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Justin Tucker ', 	pos: 'K', 	team: 'BAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 127.2, 	sae: 127.2, 	st_marys: 127.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Graham Gano ', 	pos: 'K', 	team: 'CAR', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 125.9, 	sae: 125.9, 	st_marys: 125.9, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Mason Crosby', 	pos: 'K', 	team: ' GB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 125.7, 	sae: 125.7, 	st_marys: 125.7, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Steven Hauschka ', 	pos: 'K', 	team: 'SEA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 125.6, 	sae: 125.6, 	st_marys: 125.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Chandler Catanzaro ', 	pos: 'K', 	team: 'ARI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 125.2, 	sae: 125.2, 	st_marys: 125.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Chris Boswell ', 	pos: 'K', 	team: 'PIT', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 124.8, 	sae: 124.8, 	st_marys: 124.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Dan Bailey ', 	pos: 'K', 	team: 'DAL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 123.7, 	sae: 123.7, 	st_marys: 123.7, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Cairo Santos', 	pos: 'K', 	team: ' KC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 118.4, 	sae: 118.4, 	st_marys: 118.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Brandon McManus ', 	pos: 'K', 	team: 'DEN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 117.4, 	sae: 117.4, 	st_marys: 117.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Blair Walsh ', 	pos: 'K', 	team: 'MIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 117.1, 	sae: 117.1, 	st_marys: 117.1, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Adam Vinatieri ', 	pos: 'K', 	team: 'IND', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 116.8, 	sae: 116.8, 	st_marys: 116.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Mike Nugent ', 	pos: 'K', 	team: 'CIN', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 115, 	sae: 115, 	st_marys: 115, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Josh Brown ', 	pos: 'K', 	team: 'NYG', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 113.6, 	sae: 113.6, 	st_marys: 113.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Nick Folk ', 	pos: 'K', 	team: 'NYJ', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 112.6, 	sae: 112.6, 	st_marys: 112.6, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Dustin Hopkins ', 	pos: 'K', 	team: 'WAS', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 112.4, 	sae: 112.4, 	st_marys: 112.4, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Matt Prater ', 	pos: 'K', 	team: 'DET', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 111.9, 	sae: 111.9, 	st_marys: 111.9, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Nick Novak ', 	pos: 'K', 	team: 'HOU', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 111.8, 	sae: 111.8, 	st_marys: 111.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Matt Bryant ', 	pos: 'K', 	team: 'ATL', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 111.5, 	sae: 111.5, 	st_marys: 111.5, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Dan Carpenter ', 	pos: 'K', 	team: 'BUF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 110.8, 	sae: 110.8, 	st_marys: 110.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Robbie Go', 	pos: 'K', 	team: 'uld', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 110.2, 	sae: 110.2, 	st_marys: 110.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Roberto Aguayo', 	pos: 'K', 	team: ' TB', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 107.3, 	sae: 107.3, 	st_marys: 107.3, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Sebastian Janikowski ', 	pos: 'K', 	team: 'OAK', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 107.2, 	sae: 107.2, 	st_marys: 107.2, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Josh Lambo', 	pos: 'K', 	team: ' SD', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 107.1, 	sae: 107.1, 	st_marys: 107.1, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Jason Myers ', 	pos: 'K', 	team: 'JAC', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 106, 	sae: 106, 	st_marys: 106, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Will Lutz', 	pos: 'K', 	team: ' NO', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 105.3, 	sae: 105.3, 	st_marys: 105.3, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Phil Dawson', 	pos: 'K', 	team: ' SF', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 104.8, 	sae: 104.8, 	st_marys: 104.8, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Kai Forb', 	pos: 'K', 	team: 'ath', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 103.9, 	sae: 103.9, 	st_marys: 103.9, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Caleb Sturgis ', 	pos: 'K', 	team: 'PHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 103.3, 	sae: 103.3, 	st_marys: 103.3, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Patrick Murray ', 	pos: 'K', 	team: 'CLE', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 103.1, 	sae: 103.1, 	st_marys: 103.1, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Andrew Franks ', 	pos: 'K', 	team: 'MIA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 101, 	sae: 101, 	st_marys: 101, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Greg Zuerlein', 	pos: 'K', 	team: ' LA', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 100.9, 	sae: 100.9, 	st_marys: 100.9, 	status: 0, 	string: 0,	inj: '',	comments: '' },
{ name: 'Connor Barth ', 	pos: 'K', 	team: 'CHI', 	att: 0, 	comp: 0, 	p_yds: 0, 	p_td: 0, 	int: 0, 	rush: 0, 	ru_yds: 0, 	ru_td: 0, 	rec: 0, 	re_yds: 0, 	re_td: 0, 	fl: 0, 	fpts: 98.4, 	sae: 98.4, 	st_marys: 98.4, 	status: 0, 	string: 0,	inj: '',	comments: '' }

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

	$scope.setComments = function() {
		for (var i = 0; i < $scope.rowCollection.length; i++)
		{
			if ($scope.rowCollection[i].pos.trim() == 'WR')
			{
				var team = $scope.rowCollection[i].team.trim();
				if (team == "NE" || team == "PIT" || team == "NYG" || team == "IND" || team == "GB" || team == "NO" || team == "ARI" || team == "SEA")
				{
					/*$scope.isgood = true;
					$scope.isbad = false;
					$scope.isnot = false;*/
					$scope.rowCollection[i].comments = "Good QB";
				}
				else if (team == "TEN" || team == "CLE" || team == "DEN" || team == "SF" || team == "PHI" || team == "MIN" || team == "HOU" || team == "LA")
				{
					/*$scope.isbad = true;
					$scope.isgood = false;
					$scope.isnot = false;*/
					$scope.rowCollection[i].comments = "Bad QB";
				}
			}
		}
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






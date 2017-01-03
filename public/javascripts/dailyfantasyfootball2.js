var app = angular.module('dailyfantasyfootball2', []);

app.controller('controller', function($scope) {
	$scope.rowCol = [
{ name: 'Alex Smith', 	team: ' KC', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: '@SD', 	spread: 'KC (-4.5)', 	ou: '44.5', 	score: 'KC 25', 	pts_rank: 14, 	sal_rank: 36, 	diff: 22, 	fpts: 16.7, 	salary: 5000, 	cpp: 299,	on: true },
{ name: 'Colin Kaepernick', 	team: ' SF', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: 'SEA', 	spread: 'SF (+9.5)', 	ou: '43', 	score: 'SF 17', 	pts_rank: 16, 	sal_rank: 27, 	diff: 11, 	fpts: 16.5, 	salary: 5100, 	cpp: 308,	on: true },
{ name: 'Aaron Rodgers', 	team: ' GB', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 1, 	sal_rank: 1, 	diff: 0, 	fpts: 24.8, 	salary: 7700, 	cpp: 310,	on: true },
{ name: 'Blake Bortles ', 	team: 'JAC', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@IND', 	spread: 'JAC ()', 	ou: '', 	score: 'JAC 0', 	pts_rank: 11, 	sal_rank: 18, 	diff: 7, 	fpts: 17.6, 	salary: 5600, 	cpp: 318,	on: true },
{ name: 'Matthew Stafford ', 	team: 'DET', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 8, 	sal_rank: 13, 	diff: 5, 	fpts: 18.8, 	salary: 6000, 	cpp: 319,	on: true },
{ name: 'Andrew Luck ', 	team: 'IND', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 5, 	sal_rank: 7, 	diff: 2, 	fpts: 20.9, 	salary: 6700, 	cpp: 320,	on: true },
{ name: 'Sam Bradford ', 	team: 'MIN', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 18, 	sal_rank: 23, 	diff: 5, 	fpts: 16.2, 	salary: 5200, 	cpp: 321,	on: true },
{ name: 'Andy Dalton ', 	team: 'CIN', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'BAL', 	spread: 'CIN (0)', 	ou: '41.5', 	score: 'CIN 21', 	pts_rank: 19, 	sal_rank: 26, 	diff: 7, 	fpts: 15.9, 	salary: 5100, 	cpp: 321,	on: true },
{ name: 'Matt Ryan ', 	team: 'ATL', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: 'NO', 	spread: 'ATL ()', 	ou: '', 	score: 'ATL 0', 	pts_rank: 2, 	sal_rank: 3, 	diff: 1, 	fpts: 22.7, 	salary: 7400, 	cpp: 325,	on: true },
{ name: 'Jameis Winston', 	team: ' TB', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'CAR', 	spread: 'TB (-4)', 	ou: '46', 	score: 'TB 25', 	pts_rank: 9, 	sal_rank: 12, 	diff: 3, 	fpts: 18.6, 	salary: 6100, 	cpp: 328,	on: true },
{ name: 'Joe Flacco ', 	team: 'BAL', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 15, 	sal_rank: 19, 	diff: 4, 	fpts: 16.7, 	salary: 5500, 	cpp: 329,	on: true },
{ name: 'Carson Wentz ', 	team: 'PHI', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'DAL', 	spread: 'PHI (-4.5)', 	ou: '42.5', 	score: 'PHI 24', 	pts_rank: 20, 	sal_rank: 24, 	diff: 4, 	fpts: 15.7, 	salary: 5200, 	cpp: 331,	on: true },
{ name: 'Tom Brady', 	team: ' NE', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 4, 	sal_rank: 5, 	diff: 1, 	fpts: 21.7, 	salary: 7200, 	cpp: 332,	on: true },
{ name: 'Drew Brees', 	team: ' NO', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 3, 	sal_rank: 2, 	diff: -1, 	fpts: 22.7, 	salary: 7600, 	cpp: 334,	on: true },
{ name: 'Cam Newton ', 	team: 'CAR', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@TB', 	spread: 'CAR (+4)', 	ou: '46', 	score: 'CAR 21', 	pts_rank: 10, 	sal_rank: 10, 	diff: 0, 	fpts: 18.5, 	salary: 6200, 	cpp: 336,	on: true },
{ name: 'Carson Palmer ', 	team: 'ARI', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 13, 	sal_rank: 17, 	diff: 4, 	fpts: 16.9, 	salary: 5700, 	cpp: 338,	on: true },
{ name: 'Kirk Cousins ', 	team: 'WAS', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 7, 	sal_rank: 8, 	diff: 1, 	fpts: 19.2, 	salary: 6500, 	cpp: 339,	on: true },
{ name: 'Russell Wilson ', 	team: 'SEA', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 6, 	sal_rank: 6, 	diff: 0, 	fpts: 19.8, 	salary: 6800, 	cpp: 343,	on: true },
{ name: 'Landry Jones ', 	team: 'PIT', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'CLE', 	spread: 'PIT (-6)', 	ou: '42.5', 	score: 'PIT 24', 	pts_rank: 22, 	sal_rank: 53, 	diff: 31, 	fpts: 14.3, 	salary: 5000, 	cpp: 351,	on: true },
{ name: 'Eli Manning ', 	team: 'NYG', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: '@WAS', 	spread: 'NYG (+7.5)', 	ou: '45', 	score: 'NYG 19', 	pts_rank: 17, 	sal_rank: 14, 	diff: -3, 	fpts: 16.5, 	salary: 5900, 	cpp: 358,	on: true },
{ name: 'Philip Rivers', 	team: ' SD', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 12, 	sal_rank: 9, 	diff: -3, 	fpts: 17.1, 	salary: 6300, 	cpp: 368,	on: true },
{ name: 'Matt Moore ', 	team: 'MIA', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'NE', 	spread: 'MIA (+9.5)', 	ou: '44.5', 	score: 'MIA 18', 	pts_rank: 23, 	sal_rank: 25, 	diff: 2, 	fpts: 13.8, 	salary: 5100, 	cpp: 369,	on: true },
{ name: 'Matt Barkley ', 	team: 'CHI', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 25, 	sal_rank: 28, 	diff: 3, 	fpts: 13.3, 	salary: 5100, 	cpp: 383,	on: true },
{ name: 'E.J. Manuel ', 	team: 'BUF', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@NYJ', 	spread: 'BUF (-3.5)', 	ou: '42.5', 	score: 'BUF 23', 	pts_rank: 26, 	sal_rank: 55, 	diff: 29, 	fpts: 13.1, 	salary: 5000, 	cpp: 383,	on: true },
{ name: 'Robert Griffin ', 	team: 'CLE', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 27, 	sal_rank: 54, 	diff: 27, 	fpts: 13.0, 	salary: 5000, 	cpp: 384,	on: true },
{ name: 'Dak Prescott ', 	team: 'DAL', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@PHI', 	spread: 'DAL (+4.5)', 	ou: '42.5', 	score: 'DAL 19', 	pts_rank: 21, 	sal_rank: 16, 	diff: -5, 	fpts: 14.9, 	salary: 5800, 	cpp: 388,	on: true },
{ name: 'Tom Savage ', 	team: 'HOU', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: '@TEN', 	spread: 'HOU (+3)', 	ou: '40.5', 	score: 'HOU 19', 	pts_rank: 24, 	sal_rank: 20, 	diff: -4, 	fpts: 13.7, 	salary: 5400, 	cpp: 393,	on: true },
{ name: 'Trevor Siemian ', 	team: 'DEN', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 4:25PM', 	opp: 'OAK', 	spread: 'DEN (-1.5)', 	ou: '40.5', 	score: 'DEN 21', 	pts_rank: 28, 	sal_rank: 22, 	diff: -6, 	fpts: 12.8, 	salary: 5300, 	cpp: 415,	on: true },
{ name: 'Matt Cassel ', 	team: 'TEN', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'HOU', 	spread: 'TEN (-3)', 	ou: '40.5', 	score: 'TEN 22', 	pts_rank: 29, 	sal_rank: 29, 	diff: 0, 	fpts: 10.6, 	salary: 5000, 	cpp: 471,	on: true },
{ name: 'Ryan Fitzpatrick ', 	team: 'NYJ', 	pos: ' QB', 	pos2: ' QB', 	time: 'Sun 1:00PM', 	opp: 'BUF', 	spread: 'NYJ (+3.5)', 	ou: '42.5', 	score: 'NYJ 20', 	pts_rank: 30, 	sal_rank: 31, 	diff: 1, 	fpts: 10.4, 	salary: 5000, 	cpp: 479,	on: true },
															
															
															
															
															
{ name: 'Robert Kelley ', 	team: 'WAS', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 8, 	sal_rank: 36, 	diff: 28, 	fpts: 14.5, 	salary: 4400, 	cpp: 302,	on: true },
{ name: 'Shaun Draughn', 	team: ' SF', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: 'SEA', 	spread: 'SF (+9.5)', 	ou: '43', 	score: 'SF 17', 	pts_rank: 29, 	sal_rank: 76, 	diff: 47, 	fpts: 10.6, 	salary: 3200, 	cpp: 302,	on: true },
{ name: 'Rex Burkhead ', 	team: 'CIN', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'BAL', 	spread: 'CIN (0)', 	ou: '41.5', 	score: 'CIN 21', 	pts_rank: 25, 	sal_rank: 66, 	diff: 41, 	fpts: 11.6, 	salary: 3500, 	cpp: 303,	on: true },
{ name: 'Darren Sproles ', 	team: 'PHI', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'DAL', 	spread: 'PHI (-4.5)', 	ou: '42.5', 	score: 'PHI 24', 	pts_rank: 18, 	sal_rank: 46, 	diff: 28, 	fpts: 13.0, 	salary: 4000, 	cpp: 308,	on: true },
{ name: 'Jerick McKinnon ', 	team: 'MIN', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 21, 	sal_rank: 51, 	diff: 30, 	fpts: 12.6, 	salary: 4000, 	cpp: 317,	on: true },
{ name: 'Dion Lewis', 	team: ' NE', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 22, 	sal_rank: 48, 	diff: 26, 	fpts: 12.1, 	salary: 4000, 	cpp: 330,	on: true },
{ name: 'Frank Gore ', 	team: 'IND', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 11, 	sal_rank: 30, 	diff: 19, 	fpts: 13.8, 	salary: 4700, 	cpp: 339,	on: true },
{ name: 'Matt Asiata ', 	team: 'MIN', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 38, 	sal_rank: 78, 	diff: 40, 	fpts: 9.1, 	salary: 3100, 	cpp: 339,	on: true },
{ name: 'Paul Perkins ', 	team: 'NYG', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: '@WAS', 	spread: 'NYG (+7.5)', 	ou: '45', 	score: 'NYG 19', 	pts_rank: 33, 	sal_rank: 72, 	diff: 39, 	fpts: 9.9, 	salary: 3400, 	cpp: 344,	on: true },
{ name: 'Alfred Blue ', 	team: 'HOU', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@TEN', 	spread: 'HOU (+3)', 	ou: '40.5', 	score: 'HOU 19', 	pts_rank: 23, 	sal_rank: 40, 	diff: 17, 	fpts: 11.8, 	salary: 4300, 	cpp: 364,	on: true },
{ name: 'Zach Zenner ', 	team: 'DET', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 40, 	sal_rank: 77, 	diff: 37, 	fpts: 8.8, 	salary: 3200, 	cpp: 365,	on: true },
{ name: 'Tevin Coleman ', 	team: 'ATL', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: 'NO', 	spread: 'ATL ()', 	ou: '', 	score: 'ATL 0', 	pts_rank: 13, 	sal_rank: 23, 	diff: 10, 	fpts: 13.7, 	salary: 5100, 	cpp: 372,	on: true },
{ name: 'Jacquizz Rodgers', 	team: ' TB', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'CAR', 	spread: 'TB (-4)', 	ou: '46', 	score: 'TB 25', 	pts_rank: 17, 	sal_rank: 27, 	diff: 10, 	fpts: 13.1, 	salary: 4900, 	cpp: 374,	on: true },
{ name: 'Isaiah Crowell ', 	team: 'CLE', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 24, 	sal_rank: 37, 	diff: 13, 	fpts: 11.7, 	salary: 4400, 	cpp: 375,	on: true },
{ name: 'Latavius Murray ', 	team: 'OAK', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: '@DEN', 	spread: 'OAK (+1.5)', 	ou: '40.5', 	score: 'OAK 20', 	pts_rank: 12, 	sal_rank: 19, 	diff: 7, 	fpts: 13.8, 	salary: 5200, 	cpp: 376,	on: true },
{ name: 'Spencer Ware', 	team: ' KC', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: '@SD', 	spread: 'KC (-4.5)', 	ou: '44.5', 	score: 'KC 25', 	pts_rank: 9, 	sal_rank: 16, 	diff: 7, 	fpts: 14.4, 	salary: 5500, 	cpp: 381,	on: true },
{ name: 'Mark Ingram', 	team: ' NO', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 6, 	sal_rank: 14, 	diff: 8, 	fpts: 14.7, 	salary: 5600, 	cpp: 382,	on: true },
{ name: 'Kenneth Dixon ', 	team: 'BAL', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 26, 	sal_rank: 43, 	diff: 17, 	fpts: 11.0, 	salary: 4200, 	cpp: 382,	on: true },
{ name: 'Devonta Freeman ', 	team: 'ATL', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: 'NO', 	spread: 'ATL ()', 	ou: '', 	score: 'ATL 0', 	pts_rank: 3, 	sal_rank: 6, 	diff: 3, 	fpts: 18.0, 	salary: 7000, 	cpp: 388,	on: true },
{ name: 'Chris Ivory ', 	team: 'JAC', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@IND', 	spread: 'JAC ()', 	ou: '', 	score: 'JAC 0', 	pts_rank: 30, 	sal_rank: 44, 	diff: 14, 	fpts: 10.5, 	salary: 4100, 	cpp: 389,	on: true },
{ name: 'David Johnson ', 	team: 'ARI', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 1, 	sal_rank: 2, 	diff: 1, 	fpts: 24.7, 	salary: 9800, 	cpp: 397,	on: true },
{ name: 'LeGarrette Blount', 	team: ' NE', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 10, 	sal_rank: 12, 	diff: 2, 	fpts: 14.2, 	salary: 5700, 	cpp: 402,	on: true },
{ name: 'Todd Gurley', 	team: ' LA', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: 'ARI', 	spread: 'LA (+6.5)', 	ou: '40.5', 	score: 'LA 17', 	pts_rank: 16, 	sal_rank: 18, 	diff: 2, 	fpts: 13.2, 	salary: 5300, 	cpp: 402,	on: true },
{ name: 'Ronnie Hillman', 	team: ' SD', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 37, 	sal_rank: 62, 	diff: 25, 	fpts: 9.2, 	salary: 3700, 	cpp: 402,	on: true },
{ name: 'DeMarco Murray ', 	team: 'TEN', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'HOU', 	spread: 'TEN (-3)', 	ou: '40.5', 	score: 'TEN 22', 	pts_rank: 5, 	sal_rank: 9, 	diff: 4, 	fpts: 15.4, 	salary: 6300, 	cpp: 408,	on: true },
{ name: 'Jordan Howard ', 	team: 'CHI', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 4, 	sal_rank: 7, 	diff: 3, 	fpts: 16.4, 	salary: 6800, 	cpp: 415,	on: true },
{ name: 'Duke Johnson ', 	team: 'CLE', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 42, 	sal_rank: 68, 	diff: 26, 	fpts: 8.4, 	salary: 3500, 	cpp: 416,	on: true },
{ name: 'Chris Thompson ', 	team: 'WAS', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 39, 	sal_rank: 61, 	diff: 22, 	fpts: 8.8, 	salary: 3700, 	cpp: 420,	on: true },
{ name: 'Ty Montgomery', 	team: ' GB', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 14, 	sal_rank: 13, 	diff: -1, 	fpts: 13.5, 	salary: 5700, 	cpp: 421,	on: true },
{ name: 'Alex Collins ', 	team: 'SEA', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 28, 	sal_rank: 32, 	diff: 4, 	fpts: 10.6, 	salary: 4600, 	cpp: 433,	on: true },
{ name: 'Darren McFadden ', 	team: 'DAL', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@PHI', 	spread: 'DAL (+4.5)', 	ou: '42.5', 	score: 'DAL 19', 	pts_rank: 32, 	sal_rank: 38, 	diff: 6, 	fpts: 9.9, 	salary: 4300, 	cpp: 434,	on: true },
{ name: 'DeAngelo Williams ', 	team: 'PIT', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'CLE', 	spread: 'PIT (-6)', 	ou: '42.5', 	score: 'PIT 24', 	pts_rank: 20, 	sal_rank: 15, 	diff: -5, 	fpts: 12.6, 	salary: 5500, 	cpp: 436,	on: true },
{ name: 'Jay Ajayi ', 	team: 'MIA', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'NE', 	spread: 'MIA (+9.5)', 	ou: '44.5', 	score: 'MIA 18', 	pts_rank: 15, 	sal_rank: 10, 	diff: -5, 	fpts: 13.5, 	salary: 5900, 	cpp: 437,	on: true },
{ name: 'James White', 	team: ' NE', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 41, 	sal_rank: 58, 	diff: 17, 	fpts: 8.7, 	salary: 3800, 	cpp: 438,	on: true },
{ name: 'Terrance West ', 	team: 'BAL', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 31, 	sal_rank: 35, 	diff: 4, 	fpts: 10.0, 	salary: 4400, 	cpp: 439,	on: true },
{ name: 'Bilal Powell ', 	team: 'NYJ', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: 'BUF', 	spread: 'NYJ (+3.5)', 	ou: '42.5', 	score: 'NYJ 20', 	pts_rank: 7, 	sal_rank: 8, 	diff: 1, 	fpts: 14.6, 	salary: 6500, 	cpp: 444,	on: true },
{ name: 'Devontae Booker ', 	team: 'DEN', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 4:25PM', 	opp: 'OAK', 	spread: 'DEN (-1.5)', 	ou: '40.5', 	score: 'DEN 21', 	pts_rank: 44, 	sal_rank: 69, 	diff: 25, 	fpts: 7.6, 	salary: 3500, 	cpp: 460,	on: true },
{ name: 'LeSean McCoy ', 	team: 'BUF', 	pos: ' RB', 	pos2: ' RB', 	time: 'Sun 1:00PM', 	opp: '@NYJ', 	spread: 'BUF (-3.5)', 	ou: '42.5', 	score: 'BUF 23', 	pts_rank: 2, 	sal_rank: 3, 	diff: 1, 	fpts: 18.9, 	salary: 8900, 	cpp: 471,	on: true },
															
															
															
															
															
															
{ name: 'Rishard Matthews ', 	team: 'TEN', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'HOU', 	spread: 'TEN (-3)', 	ou: '40.5', 	score: 'TEN 22', 	pts_rank: 29, 	sal_rank: 62, 	diff: 33, 	fpts: 12.7, 	salary: 4100, 	cpp: 322,	on: true },
{ name: 'Cameron Meredith ', 	team: 'CHI', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 12, 	sal_rank: 32, 	diff: 20, 	fpts: 15.1, 	salary: 5200, 	cpp: 344,	on: true },
{ name: 'Steve Smith ', 	team: 'BAL', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 20, 	sal_rank: 39, 	diff: 19, 	fpts: 14.0, 	salary: 4900, 	cpp: 350,	on: true },
{ name: 'Eli Rogers ', 	team: 'PIT', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'CLE', 	spread: 'PIT (-6)', 	ou: '42.5', 	score: 'PIT 24', 	pts_rank: 36, 	sal_rank: 64, 	diff: 28, 	fpts: 11.3, 	salary: 4000, 	cpp: 353,	on: true },
{ name: 'Brandon LaFell ', 	team: 'CIN', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'BAL', 	spread: 'CIN (0)', 	ou: '41.5', 	score: 'CIN 21', 	pts_rank: 30, 	sal_rank: 52, 	diff: 22, 	fpts: 12.6, 	salary: 4500, 	cpp: 357,	on: true },
{ name: 'Allen Robinson ', 	team: 'JAC', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@IND', 	spread: 'JAC ()', 	ou: '', 	score: 'JAC 0', 	pts_rank: 11, 	sal_rank: 26, 	diff: 15, 	fpts: 15.2, 	salary: 5500, 	cpp: 362,	on: true },
{ name: 'Davante Adams', 	team: ' GB', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 10, 	sal_rank: 20, 	diff: 10, 	fpts: 15.7, 	salary: 5700, 	cpp: 363,	on: true },
{ name: 'Jarvis Landry ', 	team: 'MIA', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'NE', 	spread: 'MIA (+9.5)', 	ou: '44.5', 	score: 'MIA 18', 	pts_rank: 25, 	sal_rank: 37, 	diff: 12, 	fpts: 13.0, 	salary: 5000, 	cpp: 385,	on: true },
{ name: 'Sammy Watkins ', 	team: 'BUF', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@NYJ', 	spread: 'BUF (-3.5)', 	ou: '42.5', 	score: 'BUF 23', 	pts_rank: 14, 	sal_rank: 19, 	diff: 5, 	fpts: 14.9, 	salary: 5800, 	cpp: 388,	on: true },
{ name: 'Marqise Lee ', 	team: 'JAC', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@IND', 	spread: 'JAC ()', 	ou: '', 	score: 'JAC 0', 	pts_rank: 34, 	sal_rank: 50, 	diff: 16, 	fpts: 11.8, 	salary: 4600, 	cpp: 389,	on: true },
{ name: 'Brandin Cooks', 	team: ' NO', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 5, 	sal_rank: 8, 	diff: 3, 	fpts: 17.5, 	salary: 6900, 	cpp: 393,	on: true },
{ name: 'Michael Thomas', 	team: ' NO', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 7, 	sal_rank: 10, 	diff: 3, 	fpts: 17.1, 	salary: 6700, 	cpp: 393,	on: true },
{ name: 'Tyrell Williams', 	team: ' SD', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 16, 	sal_rank: 21, 	diff: 5, 	fpts: 14.5, 	salary: 5700, 	cpp: 393,	on: true },
{ name: 'DeSean Jackson ', 	team: 'WAS', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 19, 	sal_rank: 22, 	diff: 3, 	fpts: 14.2, 	salary: 5600, 	cpp: 394,	on: true },
{ name: 'Julian Edelman', 	team: ' NE', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 9, 	sal_rank: 13, 	diff: 4, 	fpts: 15.9, 	salary: 6400, 	cpp: 404,	on: true },
{ name: 'Jordy Nelson', 	team: ' GB', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 1, 	sal_rank: 4, 	diff: 3, 	fpts: 20.0, 	salary: 8100, 	cpp: 406,	on: true },
{ name: 'Golden Tate ', 	team: 'DET', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 8, 	sal_rank: 11, 	diff: 3, 	fpts: 16.1, 	salary: 6600, 	cpp: 409,	on: true },
{ name: 'Tyreek Hill', 	team: ' KC', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@SD', 	spread: 'KC (-4.5)', 	ou: '44.5', 	score: 'KC 25', 	pts_rank: 22, 	sal_rank: 25, 	diff: 3, 	fpts: 13.7, 	salary: 5600, 	cpp: 409,	on: true },
{ name: 'Dontrelle Inman', 	team: ' SD', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 27, 	sal_rank: 30, 	diff: 3, 	fpts: 12.9, 	salary: 5300, 	cpp: 411,	on: true },
{ name: 'Breshad Perriman ', 	team: 'BAL', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 71, 	sal_rank: 157, 	diff: 86, 	fpts: 7.3, 	salary: 3000, 	cpp: 411,	on: true },
{ name: 'Doug Baldwin ', 	team: 'SEA', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 6, 	sal_rank: 7, 	diff: 1, 	fpts: 17.5, 	salary: 7200, 	cpp: 412,	on: true },
{ name: 'J.J. Nelson ', 	team: 'ARI', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 38, 	sal_rank: 49, 	diff: 11, 	fpts: 11.2, 	salary: 4600, 	cpp: 412,	on: true },
{ name: 'Terrelle Pryor ', 	team: 'CLE', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 41, 	sal_rank: 58, 	diff: 17, 	fpts: 10.2, 	salary: 4200, 	cpp: 412,	on: true },
{ name: 'Alshon Jeffery ', 	team: 'CHI', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 18, 	sal_rank: 18, 	diff: 0, 	fpts: 14.3, 	salary: 5900, 	cpp: 414,	on: true },
{ name: 'Mike Evans', 	team: ' TB', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'CAR', 	spread: 'TB (-4)', 	ou: '46', 	score: 'TB 25', 	pts_rank: 2, 	sal_rank: 5, 	diff: 3, 	fpts: 19.3, 	salary: 8000, 	cpp: 415,	on: true },
{ name: 'Demaryius Thomas ', 	team: 'DEN', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'OAK', 	spread: 'DEN (-1.5)', 	ou: '40.5', 	score: 'DEN 21', 	pts_rank: 13, 	sal_rank: 14, 	diff: 1, 	fpts: 15.1, 	salary: 6300, 	cpp: 417,	on: true },
{ name: 'Larry Fitzgerald ', 	team: 'ARI', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 17, 	sal_rank: 17, 	diff: 0, 	fpts: 14.3, 	salary: 6000, 	cpp: 419,	on: true },
{ name: 'Jordan Matthews ', 	team: 'PHI', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'DAL', 	spread: 'PHI (-4.5)', 	ou: '42.5', 	score: 'PHI 24', 	pts_rank: 37, 	sal_rank: 44, 	diff: 7, 	fpts: 11.2, 	salary: 4700, 	cpp: 420,	on: true },
{ name: 'Jamison Crowder ', 	team: 'WAS', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 33, 	sal_rank: 38, 	diff: 5, 	fpts: 11.9, 	salary: 5000, 	cpp: 421,	on: true },
{ name: 'Adam Thielen ', 	team: 'MIN', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 24, 	sal_rank: 24, 	diff: 0, 	fpts: 13.3, 	salary: 5600, 	cpp: 422,	on: true },
{ name: 'Marvin Jones ', 	team: 'DET', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 44, 	sal_rank: 59, 	diff: 15, 	fpts: 9.9, 	salary: 4200, 	cpp: 423,	on: true },
{ name: 'T.Y. Hilton ', 	team: 'IND', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 4, 	sal_rank: 6, 	diff: 2, 	fpts: 17.9, 	salary: 7600, 	cpp: 424,	on: true },
{ name: 'Michael Crabtree ', 	team: 'OAK', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@DEN', 	spread: 'OAK (+1.5)', 	ou: '40.5', 	score: 'OAK 20', 	pts_rank: 26, 	sal_rank: 23, 	diff: -3, 	fpts: 12.9, 	salary: 5600, 	cpp: 433,	on: true },
{ name: 'Jeremy Kerley', 	team: ' SF', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'SEA', 	spread: 'SF (+9.5)', 	ou: '43', 	score: 'SF 17', 	pts_rank: 70, 	sal_rank: 89, 	diff: 19, 	fpts: 7.4, 	salary: 3200, 	cpp: 433,	on: true },
{ name: 'Emmanuel Sanders ', 	team: 'DEN', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'OAK', 	spread: 'DEN (-1.5)', 	ou: '40.5', 	score: 'DEN 21', 	pts_rank: 21, 	sal_rank: 16, 	diff: -5, 	fpts: 13.9, 	salary: 6100, 	cpp: 440,	on: true },
{ name: 'Pierre Garcon ', 	team: 'WAS', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 35, 	sal_rank: 36, 	diff: 1, 	fpts: 11.3, 	salary: 5000, 	cpp: 441,	on: true },
{ name: 'Anquan Boldin ', 	team: 'DET', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 52, 	sal_rank: 60, 	diff: 8, 	fpts: 9.2, 	salary: 4100, 	cpp: 446,	on: true },
{ name: 'Paul Richardson ', 	team: 'SEA', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 68, 	sal_rank: 83, 	diff: 15, 	fpts: 7.6, 	salary: 3400, 	cpp: 446,	on: true },
{ name: 'Corey Coleman ', 	team: 'CLE', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 58, 	sal_rank: 73, 	diff: 15, 	fpts: 8.3, 	salary: 3700, 	cpp: 447,	on: true },
{ name: 'Robby Anderson ', 	team: 'NYJ', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'BUF', 	spread: 'NYJ (+3.5)', 	ou: '42.5', 	score: 'NYJ 20', 	pts_rank: 47, 	sal_rank: 55, 	diff: 8, 	fpts: 9.8, 	salary: 4400, 	cpp: 448,	on: true },
{ name: 'Kenny Stills ', 	team: 'MIA', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'NE', 	spread: 'MIA (+9.5)', 	ou: '44.5', 	score: 'MIA 18', 	pts_rank: 53, 	sal_rank: 66, 	diff: 13, 	fpts: 8.7, 	salary: 3900, 	cpp: 448,	on: true },
{ name: 'Amari Cooper ', 	team: 'OAK', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@DEN', 	spread: 'OAK (+1.5)', 	ou: '40.5', 	score: 'OAK 20', 	pts_rank: 31, 	sal_rank: 27, 	diff: -4, 	fpts: 12.2, 	salary: 5500, 	cpp: 451,	on: true },
{ name: 'Malcolm Mitchell N', 	team: 'E W', 	pos: 'R D', 	pos2: 'R D', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 40, 	sal_rank: 45, 	diff: 5, 	fpts: 10.4, 	salary: 4700, 	cpp: 452,	on: true },
{ name: 'Willie Snead', 	team: ' NO', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 32, 	sal_rank: 28, 	diff: -4, 	fpts: 11.9, 	salary: 5400, 	cpp: 453,	on: true },
{ name: 'John Brown ', 	team: 'ARI', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 62, 	sal_rank: 76, 	diff: 14, 	fpts: 7.9, 	salary: 3600, 	cpp: 457,	on: true },
{ name: 'Devante Parker ', 	team: 'MIA', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: 'NE', 	spread: 'MIA (+9.5)', 	ou: '44.5', 	score: 'MIA 18', 	pts_rank: 50, 	sal_rank: 57, 	diff: 7, 	fpts: 9.3, 	salary: 4300, 	cpp: 461,	on: true },
{ name: 'Chris Hogan', 	team: ' NE', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 56, 	sal_rank: 67, 	diff: 11, 	fpts: 8.4, 	salary: 3900, 	cpp: 462,	on: true },
{ name: 'Julio Jones ', 	team: 'ATL', 	pos: ' WR', 	pos2: ' WR', 	time: 'Sun 4:25PM', 	opp: 'NO', 	spread: 'ATL ()', 	ou: '', 	score: 'ATL 0', 	pts_rank: 3, 	sal_rank: 3, 	diff: 0, 	fpts: 18.1, 	salary: 8400, 	cpp: 465,	on: true },
															
															
															
															
															
															
															
															
															
															
															
															
															
															
															
															
															
															
															
{ name: 'Eric Ebron ', 	team: 'DET', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 7, 	sal_rank: 14, 	diff: 7, 	fpts: 12.2, 	salary: 3600, 	cpp: 295,	on: true },
{ name: 'Vernon Davis ', 	team: 'WAS', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 12, 	sal_rank: 17, 	diff: 5, 	fpts: 10.3, 	salary: 3300, 	cpp: 322,	on: true },
{ name: 'Travis Kelce', 	team: ' KC', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: '@SD', 	spread: 'KC (-4.5)', 	ou: '44.5', 	score: 'KC 25', 	pts_rank: 1, 	sal_rank: 3, 	diff: 2, 	fpts: 15.4, 	salary: 5000, 	cpp: 325,	on: true },
{ name: 'Delanie Walker ', 	team: 'TEN', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'HOU', 	spread: 'TEN (-3)', 	ou: '40.5', 	score: 'TEN 22', 	pts_rank: 5, 	sal_rank: 10, 	diff: 5, 	fpts: 12.3, 	salary: 4000, 	cpp: 326,	on: true },
{ name: 'Jimmy Graham ', 	team: 'SEA', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 2, 	sal_rank: 6, 	diff: 4, 	fpts: 13.4, 	salary: 4500, 	cpp: 335,	on: true },
{ name: 'Charles Clay ', 	team: 'BUF', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: '@NYJ', 	spread: 'BUF (-3.5)', 	ou: '42.5', 	score: 'BUF 23', 	pts_rank: 10, 	sal_rank: 15, 	diff: 5, 	fpts: 10.4, 	salary: 3500, 	cpp: 336,	on: true },
{ name: 'Daniel Brown ', 	team: 'CHI', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 19, 	sal_rank: 80, 	diff: 61, 	fpts: 7.4, 	salary: 2500, 	cpp: 336,	on: true },
{ name: 'Antonio Gates', 	team: ' SD', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 8, 	sal_rank: 13, 	diff: 5, 	fpts: 11.2, 	salary: 3800, 	cpp: 339,	on: true },
{ name: 'Jared Cook', 	team: ' GB', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 13, 	sal_rank: 20, 	diff: 7, 	fpts: 9.1, 	salary: 3100, 	cpp: 340,	on: true },
{ name: 'Hunter Henry', 	team: ' SD', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 18, 	sal_rank: 32, 	diff: 14, 	fpts: 7.7, 	salary: 2700, 	cpp: 349,	on: true },
{ name: 'Coby Fleener', 	team: ' NO', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 14, 	sal_rank: 21, 	diff: 7, 	fpts: 8.5, 	salary: 3100, 	cpp: 365,	on: true },
{ name: 'Martellus Bennett', 	team: ' NE', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 9, 	sal_rank: 11, 	diff: 2, 	fpts: 10.6, 	salary: 3900, 	cpp: 367,	on: true },
{ name: 'Zach Ertz ', 	team: 'PHI', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'DAL', 	spread: 'PHI (-4.5)', 	ou: '42.5', 	score: 'PHI 24', 	pts_rank: 4, 	sal_rank: 4, 	diff: 0, 	fpts: 13.0, 	salary: 4800, 	cpp: 369,	on: true },
{ name: 'Jermaine Gresham ', 	team: 'ARI', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 22, 	sal_rank: 33, 	diff: 11, 	fpts: 7.0, 	salary: 2600, 	cpp: 373,	on: true },
{ name: 'Jason Witten ', 	team: 'DAL', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: '@PHI', 	spread: 'DAL (+4.5)', 	ou: '42.5', 	score: 'DAL 19', 	pts_rank: 15, 	sal_rank: 19, 	diff: 4, 	fpts: 8.3, 	salary: 3100, 	cpp: 375,	on: true },
{ name: 'Kyle Rudolph ', 	team: 'MIN', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 6, 	sal_rank: 5, 	diff: -1, 	fpts: 12.2, 	salary: 4600, 	cpp: 376,	on: true },
{ name: 'C.J. Fiedorowicz ', 	team: 'HOU', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: '@TEN', 	spread: 'HOU (+3)', 	ou: '40.5', 	score: 'HOU 19', 	pts_rank: 11, 	sal_rank: 12, 	diff: 1, 	fpts: 10.4, 	salary: 3900, 	cpp: 376,	on: true },
{ name: 'Jack Doyle ', 	team: 'IND', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 17, 	sal_rank: 18, 	diff: 1, 	fpts: 8.0, 	salary: 3200, 	cpp: 401,	on: true },
{ name: 'Gary Barnidge ', 	team: 'CLE', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 21, 	sal_rank: 24, 	diff: 3, 	fpts: 7.2, 	salary: 2900, 	cpp: 402,	on: true },
{ name: 'Dwayne Allen ', 	team: 'IND', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 24, 	sal_rank: 34, 	diff: 10, 	fpts: 6.5, 	salary: 2600, 	cpp: 403,	on: true },
{ name: 'C.J. Uzomah ', 	team: 'CIN', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'BAL', 	spread: 'CIN (0)', 	ou: '41.5', 	score: 'CIN 21', 	pts_rank: 28, 	sal_rank: 83, 	diff: 55, 	fpts: 6.1, 	salary: 2500, 	cpp: 410,	on: true },
{ name: 'Greg Olsen ', 	team: 'CAR', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: '@TB', 	spread: 'CAR (+4)', 	ou: '46', 	score: 'CAR 21', 	pts_rank: 3, 	sal_rank: 1, 	diff: -2, 	fpts: 13.0, 	salary: 5500, 	cpp: 421,	on: true },
{ name: 'Jesse James ', 	team: 'PIT', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'CLE', 	spread: 'PIT (-6)', 	ou: '42.5', 	score: 'PIT 24', 	pts_rank: 23, 	sal_rank: 22, 	diff: -1, 	fpts: 6.9, 	salary: 3000, 	cpp: 434,	on: true },
{ name: 'Erik Swoope ', 	team: 'IND', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 26, 	sal_rank: 31, 	diff: 5, 	fpts: 6.2, 	salary: 2700, 	cpp: 436,	on: true },
{ name: 'Will Tye ', 	team: 'NYG', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: '@WAS', 	spread: 'NYG (+7.5)', 	ou: '45', 	score: 'NYG 19', 	pts_rank: 25, 	sal_rank: 27, 	diff: 2, 	fpts: 6.4, 	salary: 2800, 	cpp: 440,	on: true },
{ name: 'Garrett Celek', 	team: ' SF', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: 'SEA', 	spread: 'SF (+9.5)', 	ou: '43', 	score: 'SF 17', 	pts_rank: 27, 	sal_rank: 30, 	diff: 3, 	fpts: 6.1, 	salary: 2700, 	cpp: 440,	on: true },
{ name: 'Brandon Myers', 	team: ' TB', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: 'CAR', 	spread: 'TB (-4)', 	ou: '46', 	score: 'TB 25', 	pts_rank: 29, 	sal_rank: 28, 	diff: -1, 	fpts: 5.9, 	salary: 2700, 	cpp: 458,	on: true },
{ name: 'Jeff Heuerman ', 	team: 'DEN', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 4:25PM', 	opp: 'OAK', 	spread: 'DEN (-1.5)', 	ou: '40.5', 	score: 'DEN 21', 	pts_rank: 30, 	sal_rank: 85, 	diff: 55, 	fpts: 5.5, 	salary: 2500, 	cpp: 458,	on: true },
{ name: 'Dennis Pitta ', 	team: 'BAL', 	pos: ' TE', 	pos2: ' TE', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 20, 	sal_rank: 16, 	diff: -4, 	fpts: 7.3, 	salary: 3400, 	cpp: 463,	on: true },
															
															
															
															
															
															
															
															
{ name: 'Eric Ebron ', 	team: 'DET', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 7, 	sal_rank: 14, 	diff: 7, 	fpts: 12.2, 	salary: 3600, 	cpp: 295,	on: true },
{ name: 'Robert Kelley ', 	team: 'WAS', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 8, 	sal_rank: 36, 	diff: 28, 	fpts: 14.5, 	salary: 4400, 	cpp: 302,	on: true },
{ name: 'Shaun Draughn', 	team: ' SF', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'SEA', 	spread: 'SF (+9.5)', 	ou: '43', 	score: 'SF 17', 	pts_rank: 29, 	sal_rank: 76, 	diff: 47, 	fpts: 10.6, 	salary: 3200, 	cpp: 302,	on: true },
{ name: 'Rex Burkhead ', 	team: 'CIN', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'BAL', 	spread: 'CIN (0)', 	ou: '41.5', 	score: 'CIN 21', 	pts_rank: 25, 	sal_rank: 66, 	diff: 41, 	fpts: 11.6, 	salary: 3500, 	cpp: 303,	on: true },
{ name: 'Darren Sproles ', 	team: 'PHI', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'DAL', 	spread: 'PHI (-4.5)', 	ou: '42.5', 	score: 'PHI 24', 	pts_rank: 18, 	sal_rank: 46, 	diff: 28, 	fpts: 13.0, 	salary: 4000, 	cpp: 308,	on: true },
{ name: 'Jerick McKinnon ', 	team: 'MIN', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 21, 	sal_rank: 51, 	diff: 30, 	fpts: 12.6, 	salary: 4000, 	cpp: 317,	on: true },
{ name: 'Rishard Matthews ', 	team: 'TEN', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'HOU', 	spread: 'TEN (-3)', 	ou: '40.5', 	score: 'TEN 22', 	pts_rank: 29, 	sal_rank: 62, 	diff: 33, 	fpts: 12.7, 	salary: 4100, 	cpp: 322,	on: true },
{ name: 'Vernon Davis ', 	team: 'WAS', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 12, 	sal_rank: 17, 	diff: 5, 	fpts: 10.3, 	salary: 3300, 	cpp: 322,	on: true },
{ name: 'Travis Kelce', 	team: ' KC', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@SD', 	spread: 'KC (-4.5)', 	ou: '44.5', 	score: 'KC 25', 	pts_rank: 1, 	sal_rank: 3, 	diff: 2, 	fpts: 15.4, 	salary: 5000, 	cpp: 325,	on: true },
{ name: 'Delanie Walker ', 	team: 'TEN', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'HOU', 	spread: 'TEN (-3)', 	ou: '40.5', 	score: 'TEN 22', 	pts_rank: 5, 	sal_rank: 10, 	diff: 5, 	fpts: 12.3, 	salary: 4000, 	cpp: 326,	on: true },
{ name: 'Dion Lewis', 	team: ' NE', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 22, 	sal_rank: 48, 	diff: 26, 	fpts: 12.1, 	salary: 4000, 	cpp: 330,	on: true },
{ name: 'Jimmy Graham ', 	team: 'SEA', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 2, 	sal_rank: 6, 	diff: 4, 	fpts: 13.4, 	salary: 4500, 	cpp: 335,	on: true },
{ name: 'Charles Clay ', 	team: 'BUF', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@NYJ', 	spread: 'BUF (-3.5)', 	ou: '42.5', 	score: 'BUF 23', 	pts_rank: 10, 	sal_rank: 15, 	diff: 5, 	fpts: 10.4, 	salary: 3500, 	cpp: 336,	on: true },
{ name: 'Daniel Brown ', 	team: 'CHI', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 19, 	sal_rank: 80, 	diff: 61, 	fpts: 7.4, 	salary: 2500, 	cpp: 336,	on: true },
{ name: 'Frank Gore ', 	team: 'IND', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 11, 	sal_rank: 30, 	diff: 19, 	fpts: 13.8, 	salary: 4700, 	cpp: 339,	on: true },
{ name: 'Matt Asiata ', 	team: 'MIN', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 38, 	sal_rank: 78, 	diff: 40, 	fpts: 9.1, 	salary: 3100, 	cpp: 339,	on: true },
{ name: 'Antonio Gates', 	team: ' SD', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 8, 	sal_rank: 13, 	diff: 5, 	fpts: 11.2, 	salary: 3800, 	cpp: 339,	on: true },
{ name: 'Jared Cook', 	team: ' GB', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 13, 	sal_rank: 20, 	diff: 7, 	fpts: 9.1, 	salary: 3100, 	cpp: 340,	on: true },
{ name: 'Paul Perkins ', 	team: 'NYG', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@WAS', 	spread: 'NYG (+7.5)', 	ou: '45', 	score: 'NYG 19', 	pts_rank: 33, 	sal_rank: 72, 	diff: 39, 	fpts: 9.9, 	salary: 3400, 	cpp: 344,	on: true },
{ name: 'Cameron Meredith ', 	team: 'CHI', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 12, 	sal_rank: 32, 	diff: 20, 	fpts: 15.1, 	salary: 5200, 	cpp: 344,	on: true },
{ name: 'Hunter Henry', 	team: ' SD', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 18, 	sal_rank: 32, 	diff: 14, 	fpts: 7.7, 	salary: 2700, 	cpp: 349,	on: true },
{ name: 'Steve Smith ', 	team: 'BAL', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 20, 	sal_rank: 39, 	diff: 19, 	fpts: 14.0, 	salary: 4900, 	cpp: 350,	on: true },
{ name: 'Eli Rogers ', 	team: 'PIT', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CLE', 	spread: 'PIT (-6)', 	ou: '42.5', 	score: 'PIT 24', 	pts_rank: 36, 	sal_rank: 64, 	diff: 28, 	fpts: 11.3, 	salary: 4000, 	cpp: 353,	on: true },
{ name: 'Brandon LaFell ', 	team: 'CIN', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'BAL', 	spread: 'CIN (0)', 	ou: '41.5', 	score: 'CIN 21', 	pts_rank: 30, 	sal_rank: 52, 	diff: 22, 	fpts: 12.6, 	salary: 4500, 	cpp: 357,	on: true },
{ name: 'Allen Robinson ', 	team: 'JAC', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@IND', 	spread: 'JAC ()', 	ou: '', 	score: 'JAC 0', 	pts_rank: 11, 	sal_rank: 26, 	diff: 15, 	fpts: 15.2, 	salary: 5500, 	cpp: 362,	on: true },
{ name: 'Davante Adams', 	team: ' GB', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 10, 	sal_rank: 20, 	diff: 10, 	fpts: 15.7, 	salary: 5700, 	cpp: 363,	on: true },
{ name: 'Alfred Blue ', 	team: 'HOU', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@TEN', 	spread: 'HOU (+3)', 	ou: '40.5', 	score: 'HOU 19', 	pts_rank: 23, 	sal_rank: 40, 	diff: 17, 	fpts: 11.8, 	salary: 4300, 	cpp: 364,	on: true },
{ name: 'Zach Zenner ', 	team: 'DET', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 40, 	sal_rank: 77, 	diff: 37, 	fpts: 8.8, 	salary: 3200, 	cpp: 365,	on: true },
{ name: 'Coby Fleener', 	team: ' NO', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 14, 	sal_rank: 21, 	diff: 7, 	fpts: 8.5, 	salary: 3100, 	cpp: 365,	on: true },
{ name: 'Martellus Bennett', 	team: ' NE', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 9, 	sal_rank: 11, 	diff: 2, 	fpts: 10.6, 	salary: 3900, 	cpp: 367,	on: true },
{ name: 'Zach Ertz ', 	team: 'PHI', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'DAL', 	spread: 'PHI (-4.5)', 	ou: '42.5', 	score: 'PHI 24', 	pts_rank: 4, 	sal_rank: 4, 	diff: 0, 	fpts: 13.0, 	salary: 4800, 	cpp: 369,	on: true },
{ name: 'Tevin Coleman ', 	team: 'ATL', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'NO', 	spread: 'ATL ()', 	ou: '', 	score: 'ATL 0', 	pts_rank: 13, 	sal_rank: 23, 	diff: 10, 	fpts: 13.7, 	salary: 5100, 	cpp: 372,	on: true },
{ name: 'Jermaine Gresham ', 	team: 'ARI', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 22, 	sal_rank: 33, 	diff: 11, 	fpts: 7.0, 	salary: 2600, 	cpp: 373,	on: true },
{ name: 'Jacquizz Rodgers', 	team: ' TB', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CAR', 	spread: 'TB (-4)', 	ou: '46', 	score: 'TB 25', 	pts_rank: 17, 	sal_rank: 27, 	diff: 10, 	fpts: 13.1, 	salary: 4900, 	cpp: 374,	on: true },
{ name: 'Isaiah Crowell ', 	team: 'CLE', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 24, 	sal_rank: 37, 	diff: 13, 	fpts: 11.7, 	salary: 4400, 	cpp: 375,	on: true },
{ name: 'Jason Witten ', 	team: 'DAL', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@PHI', 	spread: 'DAL (+4.5)', 	ou: '42.5', 	score: 'DAL 19', 	pts_rank: 15, 	sal_rank: 19, 	diff: 4, 	fpts: 8.3, 	salary: 3100, 	cpp: 375,	on: true },
{ name: 'Latavius Murray ', 	team: 'OAK', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@DEN', 	spread: 'OAK (+1.5)', 	ou: '40.5', 	score: 'OAK 20', 	pts_rank: 12, 	sal_rank: 19, 	diff: 7, 	fpts: 13.8, 	salary: 5200, 	cpp: 376,	on: true },
{ name: 'Kyle Rudolph ', 	team: 'MIN', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 6, 	sal_rank: 5, 	diff: -1, 	fpts: 12.2, 	salary: 4600, 	cpp: 376,	on: true },
{ name: 'C.J. Fiedorowicz ', 	team: 'HOU', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@TEN', 	spread: 'HOU (+3)', 	ou: '40.5', 	score: 'HOU 19', 	pts_rank: 11, 	sal_rank: 12, 	diff: 1, 	fpts: 10.4, 	salary: 3900, 	cpp: 376,	on: true },
{ name: 'Spencer Ware', 	team: ' KC', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@SD', 	spread: 'KC (-4.5)', 	ou: '44.5', 	score: 'KC 25', 	pts_rank: 9, 	sal_rank: 16, 	diff: 7, 	fpts: 14.4, 	salary: 5500, 	cpp: 381,	on: true },
{ name: 'Mark Ingram', 	team: ' NO', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 6, 	sal_rank: 14, 	diff: 8, 	fpts: 14.7, 	salary: 5600, 	cpp: 382,	on: true },
{ name: 'Kenneth Dixon ', 	team: 'BAL', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 26, 	sal_rank: 43, 	diff: 17, 	fpts: 11.0, 	salary: 4200, 	cpp: 382,	on: true },
{ name: 'Jarvis Landry ', 	team: 'MIA', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'NE', 	spread: 'MIA (+9.5)', 	ou: '44.5', 	score: 'MIA 18', 	pts_rank: 25, 	sal_rank: 37, 	diff: 12, 	fpts: 13.0, 	salary: 5000, 	cpp: 385,	on: true },
{ name: 'Devonta Freeman ', 	team: 'ATL', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'NO', 	spread: 'ATL ()', 	ou: '', 	score: 'ATL 0', 	pts_rank: 3, 	sal_rank: 6, 	diff: 3, 	fpts: 18.0, 	salary: 7000, 	cpp: 388,	on: true },
{ name: 'Sammy Watkins ', 	team: 'BUF', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@NYJ', 	spread: 'BUF (-3.5)', 	ou: '42.5', 	score: 'BUF 23', 	pts_rank: 14, 	sal_rank: 19, 	diff: 5, 	fpts: 14.9, 	salary: 5800, 	cpp: 388,	on: true },
{ name: 'Chris Ivory ', 	team: 'JAC', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@IND', 	spread: 'JAC ()', 	ou: '', 	score: 'JAC 0', 	pts_rank: 30, 	sal_rank: 44, 	diff: 14, 	fpts: 10.5, 	salary: 4100, 	cpp: 389,	on: true },
{ name: 'Marqise Lee ', 	team: 'JAC', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@IND', 	spread: 'JAC ()', 	ou: '', 	score: 'JAC 0', 	pts_rank: 34, 	sal_rank: 50, 	diff: 16, 	fpts: 11.8, 	salary: 4600, 	cpp: 389,	on: true },
{ name: 'Brandin Cooks', 	team: ' NO', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 5, 	sal_rank: 8, 	diff: 3, 	fpts: 17.5, 	salary: 6900, 	cpp: 393,	on: true },
{ name: 'Michael Thomas', 	team: ' NO', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 7, 	sal_rank: 10, 	diff: 3, 	fpts: 17.1, 	salary: 6700, 	cpp: 393,	on: true },
{ name: 'Tyrell Williams', 	team: ' SD', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 16, 	sal_rank: 21, 	diff: 5, 	fpts: 14.5, 	salary: 5700, 	cpp: 393,	on: true },
{ name: 'DeSean Jackson ', 	team: 'WAS', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 19, 	sal_rank: 22, 	diff: 3, 	fpts: 14.2, 	salary: 5600, 	cpp: 394,	on: true },
{ name: 'David Johnson ', 	team: 'ARI', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 1, 	sal_rank: 2, 	diff: 1, 	fpts: 24.7, 	salary: 9800, 	cpp: 397,	on: true },
{ name: 'Jack Doyle ', 	team: 'IND', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 17, 	sal_rank: 18, 	diff: 1, 	fpts: 8.0, 	salary: 3200, 	cpp: 401,	on: true },
{ name: 'LeGarrette Blount', 	team: ' NE', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 10, 	sal_rank: 12, 	diff: 2, 	fpts: 14.2, 	salary: 5700, 	cpp: 402,	on: true },
{ name: 'Todd Gurley', 	team: ' LA', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'ARI', 	spread: 'LA (+6.5)', 	ou: '40.5', 	score: 'LA 17', 	pts_rank: 16, 	sal_rank: 18, 	diff: 2, 	fpts: 13.2, 	salary: 5300, 	cpp: 402,	on: true },
{ name: 'Ronnie Hillman', 	team: ' SD', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 37, 	sal_rank: 62, 	diff: 25, 	fpts: 9.2, 	salary: 3700, 	cpp: 402,	on: true },
{ name: 'Gary Barnidge ', 	team: 'CLE', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 21, 	sal_rank: 24, 	diff: 3, 	fpts: 7.2, 	salary: 2900, 	cpp: 402,	on: true },
{ name: 'Dwayne Allen ', 	team: 'IND', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 24, 	sal_rank: 34, 	diff: 10, 	fpts: 6.5, 	salary: 2600, 	cpp: 403,	on: true },
{ name: 'Julian Edelman', 	team: ' NE', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 9, 	sal_rank: 13, 	diff: 4, 	fpts: 15.9, 	salary: 6400, 	cpp: 404,	on: true },
{ name: 'Jordy Nelson', 	team: ' GB', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 1, 	sal_rank: 4, 	diff: 3, 	fpts: 20.0, 	salary: 8100, 	cpp: 406,	on: true },
{ name: 'DeMarco Murray ', 	team: 'TEN', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'HOU', 	spread: 'TEN (-3)', 	ou: '40.5', 	score: 'TEN 22', 	pts_rank: 5, 	sal_rank: 9, 	diff: 4, 	fpts: 15.4, 	salary: 6300, 	cpp: 408,	on: true },
{ name: 'Golden Tate ', 	team: 'DET', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 8, 	sal_rank: 11, 	diff: 3, 	fpts: 16.1, 	salary: 6600, 	cpp: 409,	on: true },
{ name: 'Tyreek Hill', 	team: ' KC', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@SD', 	spread: 'KC (-4.5)', 	ou: '44.5', 	score: 'KC 25', 	pts_rank: 22, 	sal_rank: 25, 	diff: 3, 	fpts: 13.7, 	salary: 5600, 	cpp: 409,	on: true },
{ name: 'C.J. Uzomah ', 	team: 'CIN', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'BAL', 	spread: 'CIN (0)', 	ou: '41.5', 	score: 'CIN 21', 	pts_rank: 28, 	sal_rank: 83, 	diff: 55, 	fpts: 6.1, 	salary: 2500, 	cpp: 410,	on: true },
{ name: 'Dontrelle Inman', 	team: ' SD', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 27, 	sal_rank: 30, 	diff: 3, 	fpts: 12.9, 	salary: 5300, 	cpp: 411,	on: true },
{ name: 'Breshad Perriman ', 	team: 'BAL', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 71, 	sal_rank: 157, 	diff: 86, 	fpts: 7.3, 	salary: 3000, 	cpp: 411,	on: true },
{ name: 'Doug Baldwin ', 	team: 'SEA', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 6, 	sal_rank: 7, 	diff: 1, 	fpts: 17.5, 	salary: 7200, 	cpp: 412,	on: true },
{ name: 'J.J. Nelson ', 	team: 'ARI', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 38, 	sal_rank: 49, 	diff: 11, 	fpts: 11.2, 	salary: 4600, 	cpp: 412,	on: true },
{ name: 'Terrelle Pryor ', 	team: 'CLE', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 41, 	sal_rank: 58, 	diff: 17, 	fpts: 10.2, 	salary: 4200, 	cpp: 412,	on: true },
{ name: 'Alshon Jeffery ', 	team: 'CHI', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 18, 	sal_rank: 18, 	diff: 0, 	fpts: 14.3, 	salary: 5900, 	cpp: 414,	on: true },
{ name: 'Jordan Howard ', 	team: 'CHI', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 4, 	sal_rank: 7, 	diff: 3, 	fpts: 16.4, 	salary: 6800, 	cpp: 415,	on: true },
{ name: 'Mike Evans', 	team: ' TB', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CAR', 	spread: 'TB (-4)', 	ou: '46', 	score: 'TB 25', 	pts_rank: 2, 	sal_rank: 5, 	diff: 3, 	fpts: 19.3, 	salary: 8000, 	cpp: 415,	on: true },
{ name: 'Duke Johnson ', 	team: 'CLE', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 42, 	sal_rank: 68, 	diff: 26, 	fpts: 8.4, 	salary: 3500, 	cpp: 416,	on: true },
{ name: 'Demaryius Thomas ', 	team: 'DEN', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'OAK', 	spread: 'DEN (-1.5)', 	ou: '40.5', 	score: 'DEN 21', 	pts_rank: 13, 	sal_rank: 14, 	diff: 1, 	fpts: 15.1, 	salary: 6300, 	cpp: 417,	on: true },
{ name: 'Larry Fitzgerald ', 	team: 'ARI', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 17, 	sal_rank: 17, 	diff: 0, 	fpts: 14.3, 	salary: 6000, 	cpp: 419,	on: true },
{ name: 'Chris Thompson ', 	team: 'WAS', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 39, 	sal_rank: 61, 	diff: 22, 	fpts: 8.8, 	salary: 3700, 	cpp: 420,	on: true },
{ name: 'Jordan Matthews ', 	team: 'PHI', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'DAL', 	spread: 'PHI (-4.5)', 	ou: '42.5', 	score: 'PHI 24', 	pts_rank: 37, 	sal_rank: 44, 	diff: 7, 	fpts: 11.2, 	salary: 4700, 	cpp: 420,	on: true },
{ name: 'Ty Montgomery', 	team: ' GB', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 14, 	sal_rank: 13, 	diff: -1, 	fpts: 13.5, 	salary: 5700, 	cpp: 421,	on: true },
{ name: 'Jamison Crowder ', 	team: 'WAS', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 33, 	sal_rank: 38, 	diff: 5, 	fpts: 11.9, 	salary: 5000, 	cpp: 421,	on: true },
{ name: 'Greg Olsen ', 	team: 'CAR', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@TB', 	spread: 'CAR (+4)', 	ou: '46', 	score: 'CAR 21', 	pts_rank: 3, 	sal_rank: 1, 	diff: -2, 	fpts: 13.0, 	salary: 5500, 	cpp: 421,	on: true },
{ name: 'Adam Thielen ', 	team: 'MIN', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 24, 	sal_rank: 24, 	diff: 0, 	fpts: 13.3, 	salary: 5600, 	cpp: 422,	on: true },
{ name: 'Marvin Jones ', 	team: 'DET', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 44, 	sal_rank: 59, 	diff: 15, 	fpts: 9.9, 	salary: 4200, 	cpp: 423,	on: true },
{ name: 'T.Y. Hilton ', 	team: 'IND', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 4, 	sal_rank: 6, 	diff: 2, 	fpts: 17.9, 	salary: 7600, 	cpp: 424,	on: true },
{ name: 'Alex Collins ', 	team: 'SEA', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 28, 	sal_rank: 32, 	diff: 4, 	fpts: 10.6, 	salary: 4600, 	cpp: 433,	on: true },
{ name: 'Michael Crabtree ', 	team: 'OAK', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@DEN', 	spread: 'OAK (+1.5)', 	ou: '40.5', 	score: 'OAK 20', 	pts_rank: 26, 	sal_rank: 23, 	diff: -3, 	fpts: 12.9, 	salary: 5600, 	cpp: 433,	on: true },
{ name: 'Jeremy Kerley', 	team: ' SF', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'SEA', 	spread: 'SF (+9.5)', 	ou: '43', 	score: 'SF 17', 	pts_rank: 70, 	sal_rank: 89, 	diff: 19, 	fpts: 7.4, 	salary: 3200, 	cpp: 433,	on: true },
{ name: 'Darren McFadden ', 	team: 'DAL', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@PHI', 	spread: 'DAL (+4.5)', 	ou: '42.5', 	score: 'DAL 19', 	pts_rank: 32, 	sal_rank: 38, 	diff: 6, 	fpts: 9.9, 	salary: 4300, 	cpp: 434,	on: true },
{ name: 'Jesse James ', 	team: 'PIT', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CLE', 	spread: 'PIT (-6)', 	ou: '42.5', 	score: 'PIT 24', 	pts_rank: 23, 	sal_rank: 22, 	diff: -1, 	fpts: 6.9, 	salary: 3000, 	cpp: 434,	on: true },
{ name: 'DeAngelo Williams ', 	team: 'PIT', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'CLE', 	spread: 'PIT (-6)', 	ou: '42.5', 	score: 'PIT 24', 	pts_rank: 20, 	sal_rank: 15, 	diff: -5, 	fpts: 12.6, 	salary: 5500, 	cpp: 436,	on: true },
{ name: 'Erik Swoope ', 	team: 'IND', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 26, 	sal_rank: 31, 	diff: 5, 	fpts: 6.2, 	salary: 2700, 	cpp: 436,	on: true },
{ name: 'Jay Ajayi ', 	team: 'MIA', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'NE', 	spread: 'MIA (+9.5)', 	ou: '44.5', 	score: 'MIA 18', 	pts_rank: 15, 	sal_rank: 10, 	diff: -5, 	fpts: 13.5, 	salary: 5900, 	cpp: 437,	on: true },
{ name: 'James White', 	team: ' NE', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 41, 	sal_rank: 58, 	diff: 17, 	fpts: 8.7, 	salary: 3800, 	cpp: 438,	on: true },
{ name: 'Terrance West ', 	team: 'BAL', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 31, 	sal_rank: 35, 	diff: 4, 	fpts: 10.0, 	salary: 4400, 	cpp: 439,	on: true },
{ name: 'Emmanuel Sanders ', 	team: 'DEN', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'OAK', 	spread: 'DEN (-1.5)', 	ou: '40.5', 	score: 'DEN 21', 	pts_rank: 21, 	sal_rank: 16, 	diff: -5, 	fpts: 13.9, 	salary: 6100, 	cpp: 440,	on: true },
{ name: 'Will Tye ', 	team: 'NYG', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: '@WAS', 	spread: 'NYG (+7.5)', 	ou: '45', 	score: 'NYG 19', 	pts_rank: 25, 	sal_rank: 27, 	diff: 2, 	fpts: 6.4, 	salary: 2800, 	cpp: 440,	on: true },
{ name: 'Garrett Celek', 	team: ' SF', 	pos: ' TE', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'SEA', 	spread: 'SF (+9.5)', 	ou: '43', 	score: 'SF 17', 	pts_rank: 27, 	sal_rank: 30, 	diff: 3, 	fpts: 6.1, 	salary: 2700, 	cpp: 440,	on: true },
{ name: 'Pierre Garcon ', 	team: 'WAS', 	pos: ' WR', 	pos2: 'FLEX', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 35, 	sal_rank: 36, 	diff: 1, 	fpts: 11.3, 	salary: 5000, 	cpp: 441,	on: true },
{ name: 'Bilal Powell ', 	team: 'NYJ', 	pos: ' RB', 	pos2: 'FLEX', 	time: 'Sun 1:00PM', 	opp: 'BUF', 	spread: 'NYJ (+3.5)', 	ou: '42.5', 	score: 'NYJ 20', 	pts_rank: 7, 	sal_rank: 8, 	diff: 1, 	fpts: 14.6, 	salary: 6500, 	cpp: 444,	on: true },
															
															
															
															
															
															
															
															
															
															
															
															
{ name: 'Arizona Cardinals ', 	team: 'ARI', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: '@LA', 	spread: 'ARI (-6.5)', 	ou: '40.5', 	score: 'ARI 24', 	pts_rank: 2, 	sal_rank: 12, 	diff: 10, 	fpts: 9.6, 	salary: 3000, 	cpp: 314,	on: true },
{ name: 'Carolina Panthers ', 	team: 'CAR', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@TB', 	spread: 'CAR (+4)', 	ou: '46', 	score: 'CAR 21', 	pts_rank: 16, 	sal_rank: 24, 	diff: 8, 	fpts: 7.4, 	salary: 2600, 	cpp: 354,	on: true },
{ name: 'Oakland Raiders ', 	team: 'OAK', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: '@DEN', 	spread: 'OAK (+1.5)', 	ou: '40.5', 	score: 'OAK 20', 	pts_rank: 11, 	sal_rank: 19, 	diff: 8, 	fpts: 7.8, 	salary: 2800, 	cpp: 360,	on: true },
{ name: 'Green Bay Packers', 	team: ' GB', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 8:30PM', 	opp: '@DET', 	spread: 'GB (-3)', 	ou: '49.5', 	score: 'GB 26', 	pts_rank: 13, 	sal_rank: 18, 	diff: 5, 	fpts: 7.7, 	salary: 2800, 	cpp: 364,	on: true },
{ name: 'New York Jets ', 	team: 'NYJ', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'BUF', 	spread: 'NYJ (+3.5)', 	ou: '42.5', 	score: 'NYJ 20', 	pts_rank: 25, 	sal_rank: 30, 	diff: 5, 	fpts: 6.3, 	salary: 2300, 	cpp: 367,	on: true },
{ name: 'Seattle Seahawks ', 	team: 'SEA', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: '@SF', 	spread: 'SEA (-9.5)', 	ou: '43', 	score: 'SEA 26', 	pts_rank: 1, 	sal_rank: 3, 	diff: 2, 	fpts: 10.0, 	salary: 3700, 	cpp: 370,	on: true },
{ name: 'Los Angeles Rams', 	team: ' LA', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: 'ARI', 	spread: 'LA (+6.5)', 	ou: '40.5', 	score: 'LA 17', 	pts_rank: 17, 	sal_rank: 22, 	diff: 5, 	fpts: 7.3, 	salary: 2700, 	cpp: 372,	on: true },
{ name: 'Atlanta Falcons ', 	team: 'ATL', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: 'NO', 	spread: 'ATL ()', 	ou: '', 	score: 'ATL 0', 	pts_rank: 24, 	sal_rank: 27, 	diff: 3, 	fpts: 6.5, 	salary: 2400, 	cpp: 372,	on: true },
{ name: 'Tennessee Titans ', 	team: 'TEN', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'HOU', 	spread: 'TEN (-3)', 	ou: '40.5', 	score: 'TEN 22', 	pts_rank: 12, 	sal_rank: 14, 	diff: 2, 	fpts: 7.7, 	salary: 2900, 	cpp: 376,	on: true },
{ name: 'Washington Redskins ', 	team: 'WAS', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: 'NYG', 	spread: 'WAS (-7.5)', 	ou: '45', 	score: 'WAS 26', 	pts_rank: 14, 	sal_rank: 16, 	diff: 2, 	fpts: 7.7, 	salary: 2900, 	cpp: 378,	on: true },
{ name: 'Kansas City Chiefs', 	team: ' KC', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: '@SD', 	spread: 'KC (-4.5)', 	ou: '44.5', 	score: 'KC 25', 	pts_rank: 4, 	sal_rank: 7, 	diff: 3, 	fpts: 8.7, 	salary: 3300, 	cpp: 379,	on: true },
{ name: 'Philadelphia Eagles ', 	team: 'PHI', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'DAL', 	spread: 'PHI (-4.5)', 	ou: '42.5', 	score: 'PHI 24', 	pts_rank: 15, 	sal_rank: 15, 	diff: 0, 	fpts: 7.6, 	salary: 2900, 	cpp: 380,	on: true },
{ name: 'Cincinnati Bengals ', 	team: 'CIN', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'BAL', 	spread: 'CIN (0)', 	ou: '41.5', 	score: 'CIN 21', 	pts_rank: 19, 	sal_rank: 21, 	diff: 2, 	fpts: 7.1, 	salary: 2700, 	cpp: 382,	on: true },
{ name: 'New England Patriots', 	team: ' NE', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@MIA', 	spread: 'NE (-9.5)', 	ou: '44.5', 	score: 'NE 27', 	pts_rank: 6, 	sal_rank: 9, 	diff: 3, 	fpts: 8.3, 	salary: 3200, 	cpp: 384,	on: true },
{ name: 'Baltimore Ravens ', 	team: 'BAL', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@CIN', 	spread: 'BAL (-0)', 	ou: '41.5', 	score: 'BAL 21', 	pts_rank: 10, 	sal_rank: 13, 	diff: 3, 	fpts: 7.8, 	salary: 3000, 	cpp: 385,	on: true },
{ name: 'Cleveland Browns ', 	team: 'CLE', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@PIT', 	spread: 'CLE (+6)', 	ou: '42.5', 	score: 'CLE 18', 	pts_rank: 30, 	sal_rank: 32, 	diff: 2, 	fpts: 5.3, 	salary: 2100, 	cpp: 394,	on: true },
{ name: 'Buffalo Bills ', 	team: 'BUF', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@NYJ', 	spread: 'BUF (-3.5)', 	ou: '42.5', 	score: 'BUF 23', 	pts_rank: 5, 	sal_rank: 6, 	diff: 1, 	fpts: 8.4, 	salary: 3400, 	cpp: 403,	on: true },
{ name: 'San Diego Chargers', 	team: ' SD', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: 'KC', 	spread: 'SD (+4.5)', 	ou: '44.5', 	score: 'SD 20', 	pts_rank: 21, 	sal_rank: 20, 	diff: -1, 	fpts: 7.0, 	salary: 2800, 	cpp: 403,	on: true },
{ name: 'New Orleans Saints', 	team: ' NO', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: '@ATL', 	spread: 'NO ()', 	ou: '', 	score: 'NO 0', 	pts_rank: 31, 	sal_rank: 31, 	diff: 0, 	fpts: 5.3, 	salary: 2200, 	cpp: 415,	on: true },
{ name: 'Denver Broncos ', 	team: 'DEN', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: 'OAK', 	spread: 'DEN (-1.5)', 	ou: '40.5', 	score: 'DEN 21', 	pts_rank: 3, 	sal_rank: 1, 	diff: -2, 	fpts: 9.4, 	salary: 3900, 	cpp: 416,	on: true },
{ name: 'New York Giants ', 	team: 'NYG', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: '@WAS', 	spread: 'NYG (+7.5)', 	ou: '45', 	score: 'NYG 19', 	pts_rank: 18, 	sal_rank: 10, 	diff: -8, 	fpts: 7.2, 	salary: 3100, 	cpp: 432,	on: true },
{ name: 'Dallas Cowboys ', 	team: 'DAL', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@PHI', 	spread: 'DAL (+4.5)', 	ou: '42.5', 	score: 'DAL 19', 	pts_rank: 23, 	sal_rank: 17, 	diff: -6, 	fpts: 6.5, 	salary: 2800, 	cpp: 433,	on: true },
{ name: 'Miami Dolphins ', 	team: 'MIA', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'NE', 	spread: 'MIA (+9.5)', 	ou: '44.5', 	score: 'MIA 18', 	pts_rank: 28, 	sal_rank: 28, 	diff: 0, 	fpts: 5.5, 	salary: 2400, 	cpp: 433,	on: true },
{ name: 'Houston Texans ', 	team: 'HOU', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@TEN', 	spread: 'HOU (+3)', 	ou: '40.5', 	score: 'HOU 19', 	pts_rank: 7, 	sal_rank: 5, 	diff: -2, 	fpts: 8.1, 	salary: 3500, 	cpp: 434,	on: true },
{ name: 'Chicago Bears ', 	team: 'CHI', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@MIN', 	spread: 'CHI (+6)', 	ou: '43', 	score: 'CHI 19', 	pts_rank: 26, 	sal_rank: 25, 	diff: -1, 	fpts: 5.6, 	salary: 2500, 	cpp: 445,	on: true },
{ name: 'Jacksonville Jaguars ', 	team: 'JAC', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: '@IND', 	spread: 'JAC ()', 	ou: '', 	score: 'JAC 0', 	pts_rank: 27, 	sal_rank: 26, 	diff: -1, 	fpts: 5.6, 	salary: 2500, 	cpp: 450,	on: true },
{ name: 'Pittsburgh Steelers ', 	team: 'PIT', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'CLE', 	spread: 'PIT (-6)', 	ou: '42.5', 	score: 'PIT 24', 	pts_rank: 8, 	sal_rank: 4, 	diff: -4, 	fpts: 8.0, 	salary: 3600, 	cpp: 451,	on: true },
{ name: 'Indianapolis Colts ', 	team: 'IND', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'JAC', 	spread: 'IND ()', 	ou: '', 	score: 'IND 0', 	pts_rank: 20, 	sal_rank: 8, 	diff: -12, 	fpts: 7.0, 	salary: 3200, 	cpp: 455,	on: true },
{ name: 'Tampa Bay Buccaneers', 	team: ' TB', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'CAR', 	spread: 'TB (-4)', 	ou: '46', 	score: 'TB 25', 	pts_rank: 22, 	sal_rank: 11, 	diff: -11, 	fpts: 6.5, 	salary: 3100, 	cpp: 475,	on: true },
{ name: 'Minnesota Vikings ', 	team: 'MIN', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 1:00PM', 	opp: 'CHI', 	spread: 'MIN (-6)', 	ou: '43', 	score: 'MIN 25', 	pts_rank: 9, 	sal_rank: 2, 	diff: -7, 	fpts: 7.8, 	salary: 3800, 	cpp: 486,	on: true },
{ name: 'Detroit Lions ', 	team: 'DET', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 8:30PM', 	opp: 'GB', 	spread: 'DET (+3)', 	ou: '49.5', 	score: 'DET 23', 	pts_rank: 29, 	sal_rank: 23, 	diff: -6, 	fpts: 5.3, 	salary: 2600, 	cpp: 487,	on: true },
{ name: 'San Francisco 49ers', 	team: ' SF', 	pos: 'DST', 	pos2: 'DST', 	time: 'Sun 4:25PM', 	opp: 'SEA', 	spread: 'SF (+9.5)', 	ou: '43', 	score: 'SF 17', 	pts_rank: 32, 	sal_rank: 29, 	diff: -3, 	fpts: 4.8, 	salary: 2400, 	cpp: 502,	on: true },

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
 	$scope.qbcount = 0;
 	$scope.rbcount = 0;
 	$scope.wrcount = 0;
 	$scope.tecount = 0;
 	$scope.flexcount = 0;
 	$scope.dcount = 0;
 	$scope.pos_val = 0;
 	$scope.isgood = false;
 	$scope.isbad = false;
 	$scope.isnot = false;
 	$scope.maxPTS = 0;
 	$scope.maxQB = '';
 	$scope.maxRB1 = '';
 	$scope.maxRB2 = '';
 	$scope.maxWR1 = '';
 	$scope.maxWR2 = '';
 	$scope.maxWR3 = '';
 	$scope.maxTE = '';
 	$scope.maxFLEX = '';
 	$scope.maxDST = '';


	$scope.togg = function(r) {
		
			if (r.status < 3)
				r.status++;
			else
				r.status = 0;
	};

	$scope.multifunc = function() {
		$scope.lineupGen();
	};

	$scope.bubbleSort = function(start, end) {
	   //var len = $scope.rowCol.length;
	   for (var i = end-1; i>=start; i--){
	     for(var j = start+1; j<=i; j++){
	       if($scope.rowCol[j-1].cpp > $scope.rowCol[j].cpp){
	           var temp = $scope.rowCol[j-1];
	           $scope.rowCol[j-1] = $scope.rowCol[j];
	           $scope.rowCol[j] = temp;
	        }
	     }
	   }
	   return $scope.rowCol;
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
	};

	$scope.lineupGen = function() {
		var maxqbindex = 0;
		var maxrbindex1 = 0;
		var maxrbindex2 = 0;
		var maxwrindex1 = 0;
		var maxwrindex2 = 0;
		var maxwrindex3 = 0;
		var maxteindex = 0;
		var maxflexindex = 0;
		var maxdstindex = 0;
		var maxPts = 0;
		var totPts = 0;
		var totCost = 0;
		var qbindex = 0;
		var rbindex = 0;
		var wrindex = 0;
		var teindex = 0;
		var flexindex = 0;
		var dindex = 0;
		for (var i = 0; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'RB')
			{
				qbindex = i - 1;
				break;
			}
		}
		for (var i = qbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'WR')
			{
				rbindex = i - 1;
				break;
			}
		}
		for (var i = rbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'TE')
			{
				wrindex = i - 1;
				break;
			}
		}
		for (var i = wrindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'FLEX')
			{
				teindex = i - 1;
				break;
			}
		}
		for (var i = teindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'DST')
			{
				flexindex = i - 1;
				break;
			}
		}

		$scope.bubbleSort(0,qbindex);
		$scope.bubbleSort(qbindex+1,rbindex);
		$scope.bubbleSort(rbindex+1,wrindex);
		$scope.bubbleSort(wrindex+1,teindex);
		$scope.bubbleSort(teindex+1,flexindex);
		$scope.bubbleSort(flexindex+1,$scope.rowCol.length);

		//for (var a = 0; a < $scope.rowCol.length; a++)
		//	console.log($scope.rowCol[a].name + " - " + $scope.rowCol[a].cpp);
		//return;

		for (var i = 0; i < qbindex; i++) {
			console.log(i);
			totPts = 0;
			var pos1 = $scope.rowCol[i].pos;
			var fpts1 = $scope.rowCol[i].fpts;
			var cost1 = $scope.rowCol[i].salary;
			//if ($scope.rowCol[i].cpp < 375) {
				//for (var j = qbindex+1; j < rbindex-1; j++) {
				var j = qbindex+1;
				while (j < rbindex-1 && $scope.rowCol[i].cpp < 350) {
					console.log("  " + j);
					totPts = fpts1;
					totCost = cost1;
					var pos2 = $scope.rowCol[j].pos;
					var fpts2 = $scope.rowCol[j].fpts;
					var cost2 = $scope.rowCol[j].salary;
					var name2 = $scope.rowCol[j].name;
					//if ($scope.rowCol[j].cpp < 410) {
						//for (var k = j+1; k < rbindex; k++) {
						var k = j+1;
						while (k < rbindex && $scope.rowCol[j].cpp < 410) {
							totPts = fpts1 + fpts2;
							totCost = cost1 + cost2;
							var pos3 = $scope.rowCol[k].pos;
							var fpts3 = $scope.rowCol[k].fpts;
							var cost3 = $scope.rowCol[k].salary;
							var name3 = $scope.rowCol[k].name;
							//if (($scope.rowCol[k].cpp < 410) && (name2 != name3)) {
								//for (var l = rbindex+1; l < wrindex-1; l++) {
								var l = rbindex+1;
								while (l < wrindex-2 && $scope.rowCol[k].cpp < 410 && (name2 != name3)) {
									totPts = fpts1 + fpts2 + fpts3;
									totCost = cost1 + cost2 + cost3;
									var pos4 = $scope.rowCol[l].pos;
									var fpts4 = $scope.rowCol[l].fpts;
									var cost4 = $scope.rowCol[l].salary;
									var name4 = $scope.rowCol[l].name;
									//if ($scope.rowCol[l].cpp < 450) {
										//for (var m = l+1; m < wrindex; m++) {
										var m = l+1;
										while (m < wrindex-1 && $scope.rowCol[l].cpp < 450) {	
											totPts = fpts1 + fpts2 + fpts3 + fpts4;
											totCost = cost1 + cost2 + cost3 + cost4;
											var pos5 = $scope.rowCol[m].pos;
											var fpts5 = $scope.rowCol[m].fpts;
											var cost5 = $scope.rowCol[m].salary;
											var name5 = $scope.rowCol[m].name;
											//if ((totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
												//for (var n = wrindex+1; n < teindex; n++) {
												var q = m+1;
												while (q < wrindex && (totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
													totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5;
													totCost = cost1 + cost2 + cost3 + cost4 + cost5;
													var pos6 = $scope.rowCol[q].pos;
													var fpts6 = $scope.rowCol[q].fpts;
													var cost6 = $scope.rowCol[q].salary;
													var name6 = $scope.rowCol[q].name;
													//if ((totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
														//for (var n = wrindex+1; n < teindex; n++) {
														var n = wrindex+1;
														while (n < teindex && (totCost <= 50000) && ($scope.rowCol[q].cpp < 450) && (name4 != name5) && (name4 != name6) && (name5 != name6)) {
															totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6;
															totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
															var pos7 = $scope.rowCol[n].pos;
															var fpts7 = $scope.rowCol[n].fpts;
															var cost7 = $scope.rowCol[n].salary;
															var name7 = $scope.rowCol[n].name;
															//if ((totCost <= 50000) && ($scope.rowCol[n].cpp < 410)) {
																//for (var o = teindex+1; o < flexindex; o++) {
																var o = teindex+1;
																while (o < flexindex && (totCost <= 50000) && ($scope.rowCol[n].cpp < 410)) {
																	totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6 + fpts7;
																	totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7;
																	var pos8 = $scope.rowCol[o].pos;
																	var fpts8 = $scope.rowCol[o].fpts;
																	var cost8 = $scope.rowCol[o].salary;
																	var name8 = $scope.rowCol[o].name;
																	//if ((totCost <= 50000) && ($scope.rowCol[o].cpp < 410) && (name2 != name7) && (name3 != name7) && (name4 != name7) && (name5 != name7) && (name6 != name7)) {
																		//for (var p = flexindex+1; p < $scope.rowCol.length; p++) {
																		var p = flexindex+1;
																		while (p < $scope.rowCol.length && (totCost <= 50000) && ($scope.rowCol[o].cpp < 410) && (name2 != name8) && (name3 != name8) && (name4 != name8) && (name5 != name8) && (name6 != name8) && (name7 != name8)) {
																			//console.log("hi");
																			totPts = fpts1+fpts2+fpts3+fpts4+fpts5+fpts6+fpts7+fpts8;
																			totCost = cost1+cost2+cost3+cost4+cost5+cost6+cost7+cost8;
																			var pos9 = $scope.rowCol[p].pos;
																			var fpts9 = $scope.rowCol[p].fpts;
																			var cost9 = $scope.rowCol[p].salary;
																			if ((totCost + cost9 <= 50000) && ($scope.rowCol[p].cpp < 420)) {
																				totPts += fpts9;
																				totCost += cost9;
																				if (totPts > maxPts)
																				{
																					maxPts = totPts;
																					maxqbindex = i;
																					maxrbindex1 = j;
																					maxrbindex2 = k;
																					maxwrindex1 = l;
																					maxwrindex2 = m;
																					maxwrindex3 = q;
																					maxteindex = n;
																					maxflexindex = o;
																					maxdstindex = p;

																					$scope.maxQB = $scope.rowCol[maxqbindex].name;
																					console.log($scope.maxQB);
																					$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
																					console.log($scope.maxRB1);
																					$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
																					console.log($scope.maxRB2);
																					$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
																					console.log($scope.maxWR1);
																					$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
																					console.log($scope.maxWR2);
																					$scope.maxWR3 = $scope.rowCol[maxwrindex3].name;
																					console.log($scope.maxWR3);
																					$scope.maxTE = $scope.rowCol[maxteindex].name;
																					console.log($scope.maxTE);
																					$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
																					console.log($scope.maxFLEX);
																					$scope.maxDST = $scope.rowCol[maxdstindex].name;
																					console.log($scope.maxDST);
																					$scope.maxPTS = maxPts;
																					console.log("points " + $scope.maxPTS);
																					console.log("cost " + totCost);
																					console.log(" ");
																				}
																			}
																			p++;
																		}
																	//}
																	o++;
																}
															//}
															n++;
														}
													//}
													q++;
												}
											//}
											m++;
										}
									//}
									l++;
								}
							//}
							k++;
						}
					//}
					j++;
				}
			//}
		}
		$scope.maxQB = $scope.rowCol[maxqbindex].name;
		console.log($scope.maxQB);
		$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
		console.log($scope.maxRB1);
		$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
		console.log($scope.maxRB2);
		$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
		console.log($scope.maxWR1);
		$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
		console.log($scope.maxWR2);
		$scope.maxTE = $scope.rowCol[maxteindex].name;
		console.log($scope.maxTE);
		$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
		console.log($scope.maxFLEX);
		$scope.maxDST = $scope.rowCol[maxdstindex].name;
		console.log($scope.maxDST);
		$scope.maxPTS = maxPts;
		console.log($scope.maxPTS);
	};

	$scope.lineupGenSunday = function(t1,t2,t3,t4) {
		var maxqbindex = 0;
		var maxrbindex1 = 0;
		var maxrbindex2 = 0;
		var maxwrindex1 = 0;
		var maxwrindex2 = 0;
		var maxwrindex3 = 0;
		var maxteindex = 0;
		var maxflexindex = 0;
		var maxdstindex = 0;
		var maxPts = 0;
		var totPts = 0;
		var totCost = 0;
		var finalTotCost = 0;
		var qbindex = 0;
		var rbindex = 0;
		var wrindex = 0;
		var teindex = 0;
		var flexindex = 0;
		var dindex = 0;
		for (var i = 0; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'RB')
			{
				qbindex = i - 1;
				break;
			}
		}
		for (var i = qbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'WR')
			{
				rbindex = i - 1;
				break;
			}
		}
		for (var i = rbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'TE')
			{
				wrindex = i - 1;
				break;
			}
		}
		for (var i = wrindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'FLEX')
			{
				teindex = i - 1;
				break;
			}
		}
		for (var i = teindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'DST')
			{
				flexindex = i - 1;
				break;
			}
		}

		$scope.bubbleSort(0,qbindex);
		$scope.bubbleSort(qbindex+1,rbindex);
		$scope.bubbleSort(rbindex+1,wrindex);
		$scope.bubbleSort(wrindex+1,teindex);
		$scope.bubbleSort(teindex+1,flexindex);
		$scope.bubbleSort(flexindex+1,$scope.rowCol.length);

		for (var a = 0; a < $scope.rowCol.length; a++) {
			var tm = $scope.rowCol[a].team.trim();
			if (tm == t1 || tm == t2 || tm == t3 || tm == t4)
				$scope.rowCol[a].on = false;
		}

		for (var i = 0; i < qbindex; i++) {
			console.log(i);
			totPts = 0;
			var pos1 = $scope.rowCol[i].pos;
			var fpts1 = $scope.rowCol[i].fpts;
			var cost1 = $scope.rowCol[i].salary;
				var j = qbindex+1;
				while (j < rbindex-1 && $scope.rowCol[i].on == true && $scope.rowCol[i].cpp < 350) {
					console.log("  " + j);
					totPts = fpts1;
					totCost = cost1;
					var pos2 = $scope.rowCol[j].pos;
					var fpts2 = $scope.rowCol[j].fpts;
					var cost2 = $scope.rowCol[j].salary;
					var name2 = $scope.rowCol[j].name;
						var k = j+1;
						while (k < rbindex && $scope.rowCol[j].on == true && $scope.rowCol[j].cpp < 410) {
							totPts = fpts1 + fpts2;
							totCost = cost1 + cost2;
							var pos3 = $scope.rowCol[k].pos;
							var fpts3 = $scope.rowCol[k].fpts;
							var cost3 = $scope.rowCol[k].salary;
							var name3 = $scope.rowCol[k].name;
								var l = rbindex+1;
								while (l < wrindex-2 && (name2 != name3) && $scope.rowCol[k].on == true && $scope.rowCol[k].cpp < 410) {
									totPts = fpts1 + fpts2 + fpts3;
									totCost = cost1 + cost2 + cost3;
									var pos4 = $scope.rowCol[l].pos;
									var fpts4 = $scope.rowCol[l].fpts;
									var cost4 = $scope.rowCol[l].salary;
									var name4 = $scope.rowCol[l].name;
										var m = l+1;
										while (m < wrindex-1 && $scope.rowCol[l].on == true && $scope.rowCol[l].cpp < 450) {	
											totPts = fpts1 + fpts2 + fpts3 + fpts4;
											totCost = cost1 + cost2 + cost3 + cost4;
											var pos5 = $scope.rowCol[m].pos;
											var fpts5 = $scope.rowCol[m].fpts;
											var cost5 = $scope.rowCol[m].salary;
											var name5 = $scope.rowCol[m].name;
												var q = m+1;
												while (q < wrindex && (totCost <= 50000) && (name4 != name5) && $scope.rowCol[m].on == true && $scope.rowCol[m].cpp < 450) {
													totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5;
													totCost = cost1 + cost2 + cost3 + cost4 + cost5;
													var pos6 = $scope.rowCol[q].pos;
													var fpts6 = $scope.rowCol[q].fpts;
													var cost6 = $scope.rowCol[q].salary;
													var name6 = $scope.rowCol[q].name;
														var n = wrindex+1;
														while (n < teindex && (totCost <= 50000) && (name4 != name5) && (name4 != name6) && (name5 != name6) && $scope.rowCol[q].on == true && $scope.rowCol[q].cpp < 450) {
															totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6;
															totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
															var pos7 = $scope.rowCol[n].pos;
															var fpts7 = $scope.rowCol[n].fpts;
															var cost7 = $scope.rowCol[n].salary;
															var name7 = $scope.rowCol[n].name;
																var o = teindex+1;
																while (o < flexindex && (totCost <= 50000) && $scope.rowCol[n].on == true && $scope.rowCol[n].cpp < 450) {
																	totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6 + fpts7;
																	totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7;
																	var pos8 = $scope.rowCol[o].pos;
																	var fpts8 = $scope.rowCol[o].fpts;
																	var cost8 = $scope.rowCol[o].salary;
																	var name8 = $scope.rowCol[o].name;
																		var p = flexindex+1;
																		while (p < $scope.rowCol.length && (totCost <= 50000) && (name2 != name8) && (name3 != name8) && (name4 != name8) && (name5 != name8) && (name6 != name8) && (name7 != name8) && $scope.rowCol[o].on == true && $scope.rowCol[o].cpp < 400) {
																			//console.log("hi");
																			totPts = fpts1+fpts2+fpts3+fpts4+fpts5+fpts6+fpts7+fpts8;
																			totCost = cost1+cost2+cost3+cost4+cost5+cost6+cost7+cost8;
																			var pos9 = $scope.rowCol[p].pos;
																			var fpts9 = $scope.rowCol[p].fpts;
																			var cost9 = $scope.rowCol[p].salary;
																			if ((totCost + cost9 <= 50000) && $scope.rowCol[p].on == true && $scope.rowCol[p].cpp < 450) {
																				totPts += fpts9;
																				totCost += cost9;
																				if (totPts > maxPts)
																				{
																					maxPts = totPts;
																					maxqbindex = i;
																					maxrbindex1 = j;
																					maxrbindex2 = k;
																					maxwrindex1 = l;
																					maxwrindex2 = m;
																					maxwrindex3 = q;
																					maxteindex = n;
																					maxflexindex = o;
																					maxdstindex = p;

																					$scope.maxQB = $scope.rowCol[maxqbindex].name;
																					console.log($scope.maxQB);
																					$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
																					console.log($scope.maxRB1);
																					$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
																					console.log($scope.maxRB2);
																					$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
																					console.log($scope.maxWR1);
																					$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
																					console.log($scope.maxWR2);
																					$scope.maxWR3 = $scope.rowCol[maxwrindex3].name;
																					console.log($scope.maxWR3);
																					$scope.maxTE = $scope.rowCol[maxteindex].name;
																					console.log($scope.maxTE);
																					$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
																					console.log($scope.maxFLEX);
																					$scope.maxDST = $scope.rowCol[maxdstindex].name;
																					console.log($scope.maxDST);
																					$scope.maxPTS = maxPts;
																					console.log("points " + $scope.maxPTS);
																					console.log("cost " + totCost);
																					console.log(" ");
																					finalTotCost = totCost;
																				}
																			}
																			p++;
																		}
																	//}
																	o++;
																}
															//}
															n++;
														}
													//}
													q++;
												}
											//}
											m++;
										}
									//}
									l++;
								}
							//}
							k++;
						}
					//}
					j++;
				}
			//}
		}
		$scope.maxQB = $scope.rowCol[maxqbindex].name;
		console.log("QB - " + $scope.maxQB);
		$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
		console.log("RB - " + $scope.maxRB1);
		$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
		console.log("RB - " + $scope.maxRB2);
		$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
		console.log("WR - " + $scope.maxWR1);
		$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
		console.log("WR - " + $scope.maxWR2);
		$scope.maxTE = $scope.rowCol[maxteindex].name;
		console.log("WR - " + $scope.maxTE);
		$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
		console.log("FLEX - " + $scope.maxFLEX);
		$scope.maxDST = $scope.rowCol[maxdstindex].name;
		console.log("D/ST - " + $scope.maxDST);
		$scope.maxPTS = maxPts;
		console.log("PTS " + $scope.maxPTS);
		console.log("COST " + finalTotCost);
	};

	$scope.lineupGenPrime = function(t1,t2,t3,t4) {
		var maxqbindex = 0;
		var maxrbindex1 = 0;
		var maxrbindex2 = 0;
		var maxwrindex1 = 0;
		var maxwrindex2 = 0;
		var maxwrindex3 = 0;
		var maxteindex = 0;
		var maxflexindex = 0;
		var maxdstindex = 0;
		var maxPts = 0;
		var totPts = 0;
		var totCost = 0;
		var finalTotCost = 0;
		var qbindex = 0;
		var rbindex = 0;
		var wrindex = 0;
		var teindex = 0;
		var flexindex = 0;
		var dindex = 0;
		for (var i = 0; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'RB')
			{
				qbindex = i - 1;
				break;
			}
		}
		for (var i = qbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'WR')
			{
				rbindex = i - 1;
				break;
			}
		}
		for (var i = rbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'TE')
			{
				wrindex = i - 1;
				break;
			}
		}
		for (var i = wrindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'FLEX')
			{
				teindex = i - 1;
				break;
			}
		}
		for (var i = teindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'DST')
			{
				flexindex = i - 1;
				break;
			}
		}

		$scope.bubbleSort(0,qbindex);
		$scope.bubbleSort(qbindex+1,rbindex);
		$scope.bubbleSort(rbindex+1,wrindex);
		$scope.bubbleSort(wrindex+1,teindex);
		$scope.bubbleSort(teindex+1,flexindex);
		$scope.bubbleSort(flexindex+1,$scope.rowCol.length);

		for (var a = 0; a < $scope.rowCol.length; a++) {
			var tm = $scope.rowCol[a].team.trim();
			if (tm != t1 && tm != t2 && tm != t3 && tm != t4)
				$scope.rowCol[a].on = false;
		}

		for (var i = 0; i < qbindex; i++) {
			console.log(i);
			totPts = 0;
			var pos1 = $scope.rowCol[i].pos;
			var fpts1 = $scope.rowCol[i].fpts;
			var cost1 = $scope.rowCol[i].salary;
				var j = qbindex+1;
				while (j < rbindex-1 && $scope.rowCol[i].on == true) {
					console.log("  " + j);
					totPts = fpts1;
					totCost = cost1;
					var pos2 = $scope.rowCol[j].pos;
					var fpts2 = $scope.rowCol[j].fpts;
					var cost2 = $scope.rowCol[j].salary;
					var name2 = $scope.rowCol[j].name;
						var k = j+1;
						while (k < rbindex && $scope.rowCol[j].on == true) {
							totPts = fpts1 + fpts2;
							totCost = cost1 + cost2;
							var pos3 = $scope.rowCol[k].pos;
							var fpts3 = $scope.rowCol[k].fpts;
							var cost3 = $scope.rowCol[k].salary;
							var name3 = $scope.rowCol[k].name;
								var l = rbindex+1;
								while (l < wrindex-2 && (name2 != name3) && $scope.rowCol[k].on == true) {
									totPts = fpts1 + fpts2 + fpts3;
									totCost = cost1 + cost2 + cost3;
									var pos4 = $scope.rowCol[l].pos;
									var fpts4 = $scope.rowCol[l].fpts;
									var cost4 = $scope.rowCol[l].salary;
									var name4 = $scope.rowCol[l].name;
										var m = l+1;
										while (m < wrindex-1 && $scope.rowCol[l].on == true) {	
											totPts = fpts1 + fpts2 + fpts3 + fpts4;
											totCost = cost1 + cost2 + cost3 + cost4;
											var pos5 = $scope.rowCol[m].pos;
											var fpts5 = $scope.rowCol[m].fpts;
											var cost5 = $scope.rowCol[m].salary;
											var name5 = $scope.rowCol[m].name;
												var q = m+1;
												while (q < wrindex && (totCost <= 50000) && (name4 != name5) && $scope.rowCol[m].on == true) {
													totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5;
													totCost = cost1 + cost2 + cost3 + cost4 + cost5;
													var pos6 = $scope.rowCol[q].pos;
													var fpts6 = $scope.rowCol[q].fpts;
													var cost6 = $scope.rowCol[q].salary;
													var name6 = $scope.rowCol[q].name;
														var n = wrindex+1;
														while (n < teindex && (totCost <= 50000) && (name4 != name5) && (name4 != name6) && (name5 != name6) && $scope.rowCol[q].on == true) {
															totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6;
															totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
															var pos7 = $scope.rowCol[n].pos;
															var fpts7 = $scope.rowCol[n].fpts;
															var cost7 = $scope.rowCol[n].salary;
															var name7 = $scope.rowCol[n].name;
																var o = teindex+1;
																while (o < flexindex && (totCost <= 50000) && $scope.rowCol[n].on == true) {
																	totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6 + fpts7;
																	totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7;
																	var pos8 = $scope.rowCol[o].pos;
																	var fpts8 = $scope.rowCol[o].fpts;
																	var cost8 = $scope.rowCol[o].salary;
																	var name8 = $scope.rowCol[o].name;
																		var p = flexindex+1;
																		while (p < $scope.rowCol.length && (totCost <= 50000) && (name2 != name8) && (name3 != name8) && (name4 != name8) && (name5 != name8) && (name6 != name8) && (name7 != name8) && $scope.rowCol[o].on == true) {
																			//console.log("hi");
																			totPts = fpts1+fpts2+fpts3+fpts4+fpts5+fpts6+fpts7+fpts8;
																			totCost = cost1+cost2+cost3+cost4+cost5+cost6+cost7+cost8;
																			var pos9 = $scope.rowCol[p].pos;
																			var fpts9 = $scope.rowCol[p].fpts;
																			var cost9 = $scope.rowCol[p].salary;
																			if ((totCost + cost9 <= 50000) && $scope.rowCol[p].on == true) {
																				totPts += fpts9;
																				totCost += cost9;
																				if (totPts > maxPts)
																				{
																					maxPts = totPts;
																					maxqbindex = i;
																					maxrbindex1 = j;
																					maxrbindex2 = k;
																					maxwrindex1 = l;
																					maxwrindex2 = m;
																					maxwrindex3 = q;
																					maxteindex = n;
																					maxflexindex = o;
																					maxdstindex = p;

																					$scope.maxQB = $scope.rowCol[maxqbindex].name;
																					console.log($scope.maxQB);
																					$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
																					console.log($scope.maxRB1);
																					$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
																					console.log($scope.maxRB2);
																					$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
																					console.log($scope.maxWR1);
																					$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
																					console.log($scope.maxWR2);
																					$scope.maxWR3 = $scope.rowCol[maxwrindex3].name;
																					console.log($scope.maxWR3);
																					$scope.maxTE = $scope.rowCol[maxteindex].name;
																					console.log($scope.maxTE);
																					$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
																					console.log($scope.maxFLEX);
																					$scope.maxDST = $scope.rowCol[maxdstindex].name;
																					console.log($scope.maxDST);
																					$scope.maxPTS = maxPts;
																					console.log("points " + $scope.maxPTS);
																					console.log("cost " + totCost);
																					console.log(" ");
																					finalTotCost = totCost;
																				}
																			}
																			p++;
																		}
																	//}
																	o++;
																}
															//}
															n++;
														}
													//}
													q++;
												}
											//}
											m++;
										}
									//}
									l++;
								}
							//}
							k++;
						}
					//}
					j++;
				}
			//}
		}
		$scope.maxQB = $scope.rowCol[maxqbindex].name;
		console.log("QB - " + $scope.maxQB);
		$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
		console.log("RB - " + $scope.maxRB1);
		$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
		console.log("RB - " + $scope.maxRB2);
		$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
		console.log("WR - " + $scope.maxWR1);
		$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
		console.log("WR - " + $scope.maxWR2);
		$scope.maxWR2 = $scope.rowCol[maxwrindex3].name;
		console.log("WR - " + $scope.maxWR3);
		$scope.maxTE = $scope.rowCol[maxteindex].name;
		console.log("TE - " + $scope.maxTE);
		$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
		console.log("FLEX - " + $scope.maxFLEX);
		$scope.maxDST = $scope.rowCol[maxdstindex].name;
		console.log("D/ST - " + $scope.maxDST);
		$scope.maxPTS = maxPts;
		console.log("PTS " + $scope.maxPTS);
		console.log("COST " + finalTotCost);
	};

	$scope.lineupGenQB = function(qb_name,t1,t2,t3,t4) {
		var maxqbindex = 0;
		var maxrbindex1 = 0;
		var maxrbindex2 = 0;
		var maxwrindex1 = 0;
		var maxwrindex2 = 0;
		var maxwrindex3 = 0;
		var maxteindex = 0;
		var maxflexindex = 0;
		var maxdstindex = 0;
		var maxPts = 0;
		var totPts = 0;
		var totCost = 0;
		var qbindex = 0;
		var rbindex = 0;
		var wrindex = 0;
		var teindex = 0;
		var flexindex = 0;
		var dindex = 0;
		for (var i = 0; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'RB')
			{
				qbindex = i - 1;
				break;
			}
		}
		for (var i = qbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'WR')
			{
				rbindex = i - 1;
				break;
			}
		}
		for (var i = rbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'TE')
			{
				wrindex = i - 1;
				break;
			}
		}
		for (var i = wrindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'FLEX')
			{
				teindex = i - 1;
				break;
			}
		}
		for (var i = teindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'DST')
			{
				flexindex = i - 1;
				break;
			}
		}

		for (var a = 0; a < $scope.rowCol.length; a++) {
			var tm = $scope.rowCol[a].team.trim();
			if (tm == t1 || tm == t2 || tm == t3 || tm == t4)
				$scope.rowCol[a].on = false;
		}

		$scope.bubbleSort(0,qbindex);
		$scope.bubbleSort(qbindex+1,rbindex);
		$scope.bubbleSort(rbindex+1,wrindex);
		$scope.bubbleSort(wrindex+1,teindex);
		$scope.bubbleSort(teindex+1,flexindex);
		$scope.bubbleSort(flexindex+1,$scope.rowCol.length);

		//for (var a = 0; a < $scope.rowCol.length; a++)
		//	console.log($scope.rowCol[a].name + " - " + $scope.rowCol[a].cpp);
		//return;

		for (var i = 0; i < qbindex; i++) {
			console.log(i);
			if ($scope.rowCol[i].name.trim() == qb_name)
				break;
		}
			var pos1 = $scope.rowCol[i].pos;
			var fpts1 = $scope.rowCol[i].fpts;
			var cost1 = $scope.rowCol[i].salary;
			var name1 = $scope.rowCol[i].name;
			console.log(name1);
			//if ($scope.rowCol[i].cpp < 375) {
				//for (var j = qbindex+1; j < rbindex-1; j++) {
				var j = qbindex+1;
				while (j < rbindex-1) {
					console.log("  " + j);
					totPts = fpts1;
					totCost = cost1;
					var pos2 = $scope.rowCol[j].pos;
					var fpts2 = $scope.rowCol[j].fpts;
					var cost2 = $scope.rowCol[j].salary;
					var name2 = $scope.rowCol[j].name;
					//if ($scope.rowCol[j].cpp < 410) {
						//for (var k = j+1; k < rbindex; k++) {
						var k = j+1;
						while (k < rbindex && $scope.rowCol[j].cpp < 410 && $scope.rowCol[j].on == true) {
							totPts = fpts1 + fpts2;
							totCost = cost1 + cost2;
							var pos3 = $scope.rowCol[k].pos;
							var fpts3 = $scope.rowCol[k].fpts;
							var cost3 = $scope.rowCol[k].salary;
							var name3 = $scope.rowCol[k].name;
							//if (($scope.rowCol[k].cpp < 410) && (name2 != name3)) {
								//for (var l = rbindex+1; l < wrindex-1; l++) {
								var l = rbindex+1;
								while (l < wrindex-2 && $scope.rowCol[k].cpp < 410 && (name2 != name3) && $scope.rowCol[k].on == true) {
									totPts = fpts1 + fpts2 + fpts3;
									totCost = cost1 + cost2 + cost3;
									var pos4 = $scope.rowCol[l].pos;
									var fpts4 = $scope.rowCol[l].fpts;
									var cost4 = $scope.rowCol[l].salary;
									var name4 = $scope.rowCol[l].name;
									//if ($scope.rowCol[l].cpp < 450) {
										//for (var m = l+1; m < wrindex; m++) {
										var m = l+1;
										while (m < wrindex-1 && $scope.rowCol[l].cpp < 450 && $scope.rowCol[l].on == true) {	
											totPts = fpts1 + fpts2 + fpts3 + fpts4;
											totCost = cost1 + cost2 + cost3 + cost4;
											var pos5 = $scope.rowCol[m].pos;
											var fpts5 = $scope.rowCol[m].fpts;
											var cost5 = $scope.rowCol[m].salary;
											var name5 = $scope.rowCol[m].name;
											//if ((totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
												//for (var n = wrindex+1; n < teindex; n++) {
												var q = m+1;
												while (q < wrindex && (totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5) && $scope.rowCol[m].on == true) {
													totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5;
													totCost = cost1 + cost2 + cost3 + cost4 + cost5;
													var pos6 = $scope.rowCol[q].pos;
													var fpts6 = $scope.rowCol[q].fpts;
													var cost6 = $scope.rowCol[q].salary;
													var name6 = $scope.rowCol[q].name;
													//if ((totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
														//for (var n = wrindex+1; n < teindex; n++) {
														var n = wrindex+1;
														while (n < teindex && (totCost <= 50000) && ($scope.rowCol[q].cpp < 450) && (name4 != name5) && (name4 != name6) && (name5 != name6) && $scope.rowCol[q].on == true) {
															totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6;
															totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
															var pos7 = $scope.rowCol[n].pos;
															var fpts7 = $scope.rowCol[n].fpts;
															var cost7 = $scope.rowCol[n].salary;
															var name7 = $scope.rowCol[n].name;
															//if ((totCost <= 50000) && ($scope.rowCol[n].cpp < 410)) {
																//for (var o = teindex+1; o < flexindex; o++) {
																var o = teindex+1;
																while (o < flexindex && (totCost <= 50000) && ($scope.rowCol[n].cpp < 410) && $scope.rowCol[n].on == true) {
																	totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6 + fpts7;
																	totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7;
																	var pos8 = $scope.rowCol[o].pos;
																	var fpts8 = $scope.rowCol[o].fpts;
																	var cost8 = $scope.rowCol[o].salary;
																	var name8 = $scope.rowCol[o].name;
																	//if ((totCost <= 50000) && ($scope.rowCol[o].cpp < 410) && (name2 != name7) && (name3 != name7) && (name4 != name7) && (name5 != name7) && (name6 != name7)) {
																		//for (var p = flexindex+1; p < $scope.rowCol.length; p++) {
																		var p = flexindex+1;
																		while (p < $scope.rowCol.length && (totCost <= 50000) && ($scope.rowCol[o].cpp < 410) && (name2 != name8) && (name3 != name8) && (name4 != name8) && (name5 != name8) && (name6 != name8) && (name7 != name8) && $scope.rowCol[o].on == true) {
																			//console.log("hi");
																			totPts = fpts1+fpts2+fpts3+fpts4+fpts5+fpts6+fpts7+fpts8;
																			totCost = cost1+cost2+cost3+cost4+cost5+cost6+cost7+cost8;
																			var pos9 = $scope.rowCol[p].pos;
																			var fpts9 = $scope.rowCol[p].fpts;
																			var cost9 = $scope.rowCol[p].salary;
																			if ((totCost + cost9 <= 50000) && ($scope.rowCol[p].cpp < 420) && $scope.rowCol[p].on == true) {
																				totPts += fpts9;
																				totCost += cost9;
																				if (totPts > maxPts)
																				{
																					maxPts = totPts;
																					maxqbindex = i;
																					maxrbindex1 = j;
																					maxrbindex2 = k;
																					maxwrindex1 = l;
																					maxwrindex2 = m;
																					maxwrindex3 = q;
																					maxteindex = n;
																					maxflexindex = o;
																					maxdstindex = p;

																					$scope.maxQB = $scope.rowCol[maxqbindex].name;
																					console.log($scope.maxQB);
																					$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
																					console.log($scope.maxRB1);
																					$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
																					console.log($scope.maxRB2);
																					$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
																					console.log($scope.maxWR1);
																					$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
																					console.log($scope.maxWR2);
																					$scope.maxWR3 = $scope.rowCol[maxwrindex3].name;
																					console.log($scope.maxWR3);
																					$scope.maxTE = $scope.rowCol[maxteindex].name;
																					console.log($scope.maxTE);
																					$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
																					console.log($scope.maxFLEX);
																					$scope.maxDST = $scope.rowCol[maxdstindex].name;
																					console.log($scope.maxDST);
																					$scope.maxPTS = maxPts;
																					console.log("points " + $scope.maxPTS);
																					console.log("cost " + totCost);
																					console.log(" ");
																				}
																			}
																			p++;
																		}
																	//}
																	o++;
																}
															//}
															n++;
														}
													//}
													q++;
												}
											//}
											m++;
										}
									//}
									l++;
								}
							//}
							k++;
						}
					//}
					j++;
				}
			//}
		//}
		$scope.maxQB = $scope.rowCol[maxqbindex].name;
		console.log($scope.maxQB);
		$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
		console.log($scope.maxRB1);
		$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
		console.log($scope.maxRB2);
		$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
		console.log($scope.maxWR1);
		$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
		console.log($scope.maxWR2);
		$scope.maxWR3 = $scope.rowCol[maxwrindex3].name;
		console.log($scope.maxWR3);
		$scope.maxTE = $scope.rowCol[maxteindex].name;
		console.log($scope.maxTE);
		$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
		console.log($scope.maxFLEX);
		$scope.maxDST = $scope.rowCol[maxdstindex].name;
		console.log($scope.maxDST);
		$scope.maxPTS = maxPts;
		console.log($scope.maxPTS);
	};

	$scope.lineupGenRB = function(rb_name) {
		var maxqbindex = 0;
		var maxrbindex1 = 0;
		var maxrbindex2 = 0;
		var maxwrindex1 = 0;
		var maxwrindex2 = 0;
		var maxwrindex3 = 0;
		var maxteindex = 0;
		var maxflexindex = 0;
		var maxdstindex = 0;
		var maxPts = 0;
		var totPts = 0;
		var totCost = 0;
		var qbindex = 0;
		var rbindex = 0;
		var wrindex = 0;
		var teindex = 0;
		var flexindex = 0;
		var dindex = 0;
		for (var i = 0; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'RB')
			{
				qbindex = i - 1;
				break;
			}
		}
		for (var i = qbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'WR')
			{
				rbindex = i - 1;
				break;
			}
		}
		for (var i = rbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'TE')
			{
				wrindex = i - 1;
				break;
			}
		}
		for (var i = wrindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'FLEX')
			{
				teindex = i - 1;
				break;
			}
		}
		for (var i = teindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'DST')
			{
				flexindex = i - 1;
				break;
			}
		}

		$scope.bubbleSort(0,qbindex);
		$scope.bubbleSort(qbindex+1,rbindex);
		$scope.bubbleSort(rbindex+1,wrindex);
		$scope.bubbleSort(wrindex+1,teindex);
		$scope.bubbleSort(teindex+1,flexindex);
		$scope.bubbleSort(flexindex+1,$scope.rowCol.length);

		for (var j = qbindex+1; j < rbindex; j++)
		{
			//console.log(i);
			if ($scope.rowCol[j].name.trim() == rb_name)
				break;
		}

		for (var i = 0; i < qbindex; i++) {
			console.log(i);
			totPts = 0;
			var pos1 = $scope.rowCol[i].pos;
			var fpts1 = $scope.rowCol[i].fpts;
			var cost1 = $scope.rowCol[i].salary;
			//if ($scope.rowCol[i].cpp < 375) {
				//for (var j = qbindex+1; j < rbindex-1; j++) {
				if ($scope.rowCol[i].cpp < 350) {
					totPts = fpts1;
					totCost = cost1;
					var pos2 = $scope.rowCol[j].pos;
					var fpts2 = $scope.rowCol[j].fpts;
					var cost2 = $scope.rowCol[j].salary;
					var name2 = $scope.rowCol[j].name;
					//if ($scope.rowCol[j].cpp < 410) {
						//for (var k = j+1; k < rbindex; k++) {
						var k = j+1;
						while (k < rbindex) {
							totPts = fpts1 + fpts2;
							totCost = cost1 + cost2;
							var pos3 = $scope.rowCol[k].pos;
							var fpts3 = $scope.rowCol[k].fpts;
							var cost3 = $scope.rowCol[k].salary;
							var name3 = $scope.rowCol[k].name;
							//if (($scope.rowCol[k].cpp < 410) && (name2 != name3)) {
								//for (var l = rbindex+1; l < wrindex-1; l++) {
								var l = rbindex+1;
								while (l < wrindex-2 && $scope.rowCol[k].cpp < 410 && (name2 != name3)) {
									totPts = fpts1 + fpts2 + fpts3;
									totCost = cost1 + cost2 + cost3;
									var pos4 = $scope.rowCol[l].pos;
									var fpts4 = $scope.rowCol[l].fpts;
									var cost4 = $scope.rowCol[l].salary;
									var name4 = $scope.rowCol[l].name;
									//if ($scope.rowCol[l].cpp < 450) {
										//for (var m = l+1; m < wrindex; m++) {
										var m = l+1;
										while (m < wrindex-1 && $scope.rowCol[l].cpp < 450) {	
											totPts = fpts1 + fpts2 + fpts3 + fpts4;
											totCost = cost1 + cost2 + cost3 + cost4;
											var pos5 = $scope.rowCol[m].pos;
											var fpts5 = $scope.rowCol[m].fpts;
											var cost5 = $scope.rowCol[m].salary;
											var name5 = $scope.rowCol[m].name;
											//if ((totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
												//for (var n = wrindex+1; n < teindex; n++) {
												var q = m+1;
												while (q < wrindex && (totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
													totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5;
													totCost = cost1 + cost2 + cost3 + cost4 + cost5;
													var pos6 = $scope.rowCol[q].pos;
													var fpts6 = $scope.rowCol[q].fpts;
													var cost6 = $scope.rowCol[q].salary;
													var name6 = $scope.rowCol[q].name;
													//if ((totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
														//for (var n = wrindex+1; n < teindex; n++) {
														var n = wrindex+1;
														while (n < teindex && (totCost <= 50000) && ($scope.rowCol[q].cpp < 450) && (name4 != name5) && (name4 != name6) && (name5 != name6)) {
															totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6;
															totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
															var pos7 = $scope.rowCol[n].pos;
															var fpts7 = $scope.rowCol[n].fpts;
															var cost7 = $scope.rowCol[n].salary;
															var name7 = $scope.rowCol[n].name;
															//if ((totCost <= 50000) && ($scope.rowCol[n].cpp < 410)) {
																//for (var o = teindex+1; o < flexindex; o++) {
																var o = teindex+1;
																while (o < flexindex && (totCost <= 50000) && ($scope.rowCol[n].cpp < 410)) {
																	totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6 + fpts7;
																	totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7;
																	var pos8 = $scope.rowCol[o].pos;
																	var fpts8 = $scope.rowCol[o].fpts;
																	var cost8 = $scope.rowCol[o].salary;
																	var name8 = $scope.rowCol[o].name;
																	//if ((totCost <= 50000) && ($scope.rowCol[o].cpp < 410) && (name2 != name7) && (name3 != name7) && (name4 != name7) && (name5 != name7) && (name6 != name7)) {
																		//for (var p = flexindex+1; p < $scope.rowCol.length; p++) {
																		var p = flexindex+1;
																		while (p < $scope.rowCol.length && (totCost <= 50000) && ($scope.rowCol[o].cpp < 410) && (name2 != name8) && (name3 != name8) && (name4 != name8) && (name5 != name8) && (name6 != name8) && (name7 != name8)) {
																			//console.log("hi");
																			totPts = fpts1+fpts2+fpts3+fpts4+fpts5+fpts6+fpts7+fpts8;
																			totCost = cost1+cost2+cost3+cost4+cost5+cost6+cost7+cost8;
																			var pos9 = $scope.rowCol[p].pos;
																			var fpts9 = $scope.rowCol[p].fpts;
																			var cost9 = $scope.rowCol[p].salary;
																			if ((totCost + cost9 <= 50000) && ($scope.rowCol[p].cpp < 420)) {
																				totPts += fpts9;
																				totCost += cost9;
																				if (totPts > maxPts)
																				{
																					maxPts = totPts;
																					maxqbindex = i;
																					maxrbindex1 = j;
																					maxrbindex2 = k;
																					maxwrindex1 = l;
																					maxwrindex2 = m;
																					maxwrindex3 = q;
																					maxteindex = n;
																					maxflexindex = o;
																					maxdstindex = p;

																					$scope.maxQB = $scope.rowCol[maxqbindex].name;
																					console.log($scope.maxQB);
																					$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
																					console.log($scope.maxRB1);
																					$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
																					console.log($scope.maxRB2);
																					$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
																					console.log($scope.maxWR1);
																					$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
																					console.log($scope.maxWR2);
																					$scope.maxWR3 = $scope.rowCol[maxwrindex3].name;
																					console.log($scope.maxWR3);
																					$scope.maxTE = $scope.rowCol[maxteindex].name;
																					console.log($scope.maxTE);
																					$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
																					console.log($scope.maxFLEX);
																					$scope.maxDST = $scope.rowCol[maxdstindex].name;
																					console.log($scope.maxDST);
																					$scope.maxPTS = maxPts;
																					console.log("points " + $scope.maxPTS);
																					console.log("cost " + totCost);
																					console.log(" ");
																				}
																			}
																			p++;
																		}
																	//}
																	o++;
																}
															//}
															n++;
														}
													//}
													q++;
												}
											//}
											m++;
										}
									//}
									l++;
								}
							//}
							k++;
						}
					//}

				}
			//}
		}
		$scope.maxQB = $scope.rowCol[maxqbindex].name;
		console.log($scope.maxQB);
		$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
		console.log($scope.maxRB1);
		$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
		console.log($scope.maxRB2);
		$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
		console.log($scope.maxWR1);
		$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
		console.log($scope.maxWR2);
		$scope.maxTE = $scope.rowCol[maxteindex].name;
		console.log($scope.maxTE);
		$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
		console.log($scope.maxFLEX);
		$scope.maxDST = $scope.rowCol[maxdstindex].name;
		console.log($scope.maxDST);
		$scope.maxPTS = maxPts;
		console.log($scope.maxPTS);
	};

	$scope.lineupGenQBRB = function(qb_name, rb_name) {
		var maxqbindex = 0;
		var maxrbindex1 = 0;
		var maxrbindex2 = 0;
		var maxwrindex1 = 0;
		var maxwrindex2 = 0;
		var maxwrindex3 = 0;
		var maxteindex = 0;
		var maxflexindex = 0;
		var maxdstindex = 0;
		var maxPts = 0;
		var totPts = 0;
		var totCost = 0;
		var qbindex = 0;
		var rbindex = 0;
		var wrindex = 0;
		var teindex = 0;
		var flexindex = 0;
		var dindex = 0;
		for (var i = 0; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'RB')
			{
				qbindex = i - 1;
				break;
			}
		}
		for (var i = qbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'WR')
			{
				rbindex = i - 1;
				break;
			}
		}
		for (var i = rbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'TE')
			{
				wrindex = i - 1;
				break;
			}
		}
		for (var i = wrindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'FLEX')
			{
				teindex = i - 1;
				break;
			}
		}
		for (var i = teindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos2.trim() == 'DST')
			{
				flexindex = i - 1;
				break;
			}
		}

		$scope.bubbleSort(0,qbindex);
		$scope.bubbleSort(qbindex+1,rbindex);
		$scope.bubbleSort(rbindex+1,wrindex);
		$scope.bubbleSort(wrindex+1,teindex);
		$scope.bubbleSort(teindex+1,flexindex);
		$scope.bubbleSort(flexindex+1,$scope.rowCol.length);

		for (var i = 0; i < qbindex; i++) {
			if ($scope.rowCol[i].name.trim() == qb_name)
				break;
		}

		for (var j = qbindex+1; j < rbindex; j++) {
			if ($scope.rowCol[j].name.trim() == rb_name)
				break;
		}

		//for (var i = 0; i < qbindex; i++) {
			console.log(i);
			totPts = 0;
			var pos1 = $scope.rowCol[i].pos;
			var fpts1 = $scope.rowCol[i].fpts;
			var cost1 = $scope.rowCol[i].salary;
			//if ($scope.rowCol[i].cpp < 375) {
				//for (var j = qbindex+1; j < rbindex-1; j++) {
				//if ($scope.rowCol[i].cpp < 350) {
					totPts = fpts1;
					totCost = cost1;
					var pos2 = $scope.rowCol[j].pos;
					var fpts2 = $scope.rowCol[j].fpts;
					var cost2 = $scope.rowCol[j].salary;
					var name2 = $scope.rowCol[j].name;
					//if ($scope.rowCol[j].cpp < 410) {
						//for (var k = j+1; k < rbindex; k++) {
						var k = j+1;
						while (k < rbindex) {
							totPts = fpts1 + fpts2;
							totCost = cost1 + cost2;
							var pos3 = $scope.rowCol[k].pos;
							var fpts3 = $scope.rowCol[k].fpts;
							var cost3 = $scope.rowCol[k].salary;
							var name3 = $scope.rowCol[k].name;
							//if (($scope.rowCol[k].cpp < 410) && (name2 != name3)) {
								//for (var l = rbindex+1; l < wrindex-1; l++) {
								var l = rbindex+1;
								while (l < wrindex-2 && $scope.rowCol[k].cpp < 410 && (name2 != name3)) {
									totPts = fpts1 + fpts2 + fpts3;
									totCost = cost1 + cost2 + cost3;
									var pos4 = $scope.rowCol[l].pos;
									var fpts4 = $scope.rowCol[l].fpts;
									var cost4 = $scope.rowCol[l].salary;
									var name4 = $scope.rowCol[l].name;
									//if ($scope.rowCol[l].cpp < 450) {
										//for (var m = l+1; m < wrindex; m++) {
										var m = l+1;
										while (m < wrindex-1 && $scope.rowCol[l].cpp < 450) {	
											totPts = fpts1 + fpts2 + fpts3 + fpts4;
											totCost = cost1 + cost2 + cost3 + cost4;
											var pos5 = $scope.rowCol[m].pos;
											var fpts5 = $scope.rowCol[m].fpts;
											var cost5 = $scope.rowCol[m].salary;
											var name5 = $scope.rowCol[m].name;
											//if ((totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
												//for (var n = wrindex+1; n < teindex; n++) {
												var q = m+1;
												while (q < wrindex && (totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
													totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5;
													totCost = cost1 + cost2 + cost3 + cost4 + cost5;
													var pos6 = $scope.rowCol[q].pos;
													var fpts6 = $scope.rowCol[q].fpts;
													var cost6 = $scope.rowCol[q].salary;
													var name6 = $scope.rowCol[q].name;
													//if ((totCost <= 50000) && ($scope.rowCol[m].cpp < 450) && (name4 != name5)) {
														//for (var n = wrindex+1; n < teindex; n++) {
														var n = wrindex+1;
														while (n < teindex && (totCost <= 50000) && ($scope.rowCol[q].cpp < 450) && (name4 != name5) && (name4 != name6) && (name5 != name6)) {
															totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6;
															totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
															var pos7 = $scope.rowCol[n].pos;
															var fpts7 = $scope.rowCol[n].fpts;
															var cost7 = $scope.rowCol[n].salary;
															var name7 = $scope.rowCol[n].name;
															//if ((totCost <= 50000) && ($scope.rowCol[n].cpp < 410)) {
																//for (var o = teindex+1; o < flexindex; o++) {
																var o = teindex+1;
																while (o < flexindex && (totCost <= 50000) && ($scope.rowCol[n].cpp < 410)) {
																	totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6 + fpts7;
																	totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7;
																	var pos8 = $scope.rowCol[o].pos;
																	var fpts8 = $scope.rowCol[o].fpts;
																	var cost8 = $scope.rowCol[o].salary;
																	var name8 = $scope.rowCol[o].name;
																	//if ((totCost <= 50000) && ($scope.rowCol[o].cpp < 410) && (name2 != name7) && (name3 != name7) && (name4 != name7) && (name5 != name7) && (name6 != name7)) {
																		//for (var p = flexindex+1; p < $scope.rowCol.length; p++) {
																		var p = flexindex+1;
																		while (p < $scope.rowCol.length && (totCost <= 50000) && ($scope.rowCol[o].cpp < 410) && (name2 != name8) && (name3 != name8) && (name4 != name8) && (name5 != name8) && (name6 != name8) && (name7 != name8)) {
																			//console.log("hi");
																			totPts = fpts1+fpts2+fpts3+fpts4+fpts5+fpts6+fpts7+fpts8;
																			totCost = cost1+cost2+cost3+cost4+cost5+cost6+cost7+cost8;
																			var pos9 = $scope.rowCol[p].pos;
																			var fpts9 = $scope.rowCol[p].fpts;
																			var cost9 = $scope.rowCol[p].salary;
																			if ((totCost + cost9 <= 50000) && ($scope.rowCol[p].cpp < 420)) {
																				totPts += fpts9;
																				totCost += cost9;
																				if (totPts > maxPts)
																				{
																					maxPts = totPts;
																					maxqbindex = i;
																					maxrbindex1 = j;
																					maxrbindex2 = k;
																					maxwrindex1 = l;
																					maxwrindex2 = m;
																					maxwrindex3 = q;
																					maxteindex = n;
																					maxflexindex = o;
																					maxdstindex = p;

																					$scope.maxQB = $scope.rowCol[maxqbindex].name;
																					console.log($scope.maxQB);
																					$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
																					console.log($scope.maxRB1);
																					$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
																					console.log($scope.maxRB2);
																					$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
																					console.log($scope.maxWR1);
																					$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
																					console.log($scope.maxWR2);
																					$scope.maxWR3 = $scope.rowCol[maxwrindex3].name;
																					console.log($scope.maxWR3);
																					$scope.maxTE = $scope.rowCol[maxteindex].name;
																					console.log($scope.maxTE);
																					$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
																					console.log($scope.maxFLEX);
																					$scope.maxDST = $scope.rowCol[maxdstindex].name;
																					console.log($scope.maxDST);
																					$scope.maxPTS = maxPts;
																					console.log("points " + $scope.maxPTS);
																					console.log("cost " + totCost);
																					console.log(" ");
																				}
																			}
																			p++;
																		}
																	//}
																	o++;
																}
															//}
															n++;
														}
													//}
													q++;
												}
											//}
											m++;
										}
									//}
									l++;
								}
							//}
							k++;
						}
					//}
					j++;
				//}
			//}
		//}
		$scope.maxQB = $scope.rowCol[maxqbindex].name;
		console.log($scope.maxQB);
		$scope.maxRB1 = $scope.rowCol[maxrbindex1].name;
		console.log($scope.maxRB1);
		$scope.maxRB2 = $scope.rowCol[maxrbindex2].name;
		console.log($scope.maxRB2);
		$scope.maxWR1 = $scope.rowCol[maxwrindex1].name;
		console.log($scope.maxWR1);
		$scope.maxWR2 = $scope.rowCol[maxwrindex2].name;
		console.log($scope.maxWR2);
		$scope.maxTE = $scope.rowCol[maxteindex].name;
		console.log($scope.maxTE);
		$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
		console.log($scope.maxFLEX);
		$scope.maxDST = $scope.rowCol[maxdstindex].name;
		console.log($scope.maxDST);
		$scope.maxPTS = maxPts;
		console.log($scope.maxPTS);
	};

	$scope.posCheck = function(p) {
		if ($scope.qbcount < 1) {
			if ($scope.rbcount < 2) {
				if ($scope.wrcount < 2) {
					if ($scope.tecount < 1) {
						if ($scope.flexcount < 1) {
							if ($scope.dcount < 1) {
								$scope.posAdd(p)
								return true;
							}
						}
					}
				}
			}
		}
		return false;
	};

	$scope.posAdd = function(p) {
		var pos = p.trim();
		if (pos == 'QB') {
			$scope.qbcount++;
		}
		else if (pos == 'RB') {
			$scope.rbcount++;
		}
		else if (pos == 'WR') {
			$scope.wrcount++;
		}
		else if (pos == 'TE') {
			$scope.tecount++;
		}
		else if (pos == 'RB' || pos == 'WR' || pos == 'TE') {
			$scope.flexcount++;
		}
		else if (pos == 'D/ST') {
			$scope.dcount++;
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
app.directive("dailyfantasyfootball2", [function (){
    return {
        restrict: 'E',
        templateUrl: 'http://localhost:3000/views/dailyfantasyfootball2.html',
        controller: ["httpLoader", '$http', function (httpLoader, $http) {
            var controller = this;

            
            /*ctlr.runQuery = function(){
                var category = $('#categorySelect').val();
                ctlr.getData(category);
            }*/


        }],
        controllerAs: "controller"
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






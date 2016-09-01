var app = angular.module('dailyfantasyfootball', []);

app.controller('controller', function($scope) {
	$scope.rowCol = [
{ name: 'Aaron Rodgers', 	pos: ' QB', 	team: ' GB', 	opp_team: 'JAC', 	opp_rank: '29', 	ovr_rank: '1', 	pos_rank: '1', 	cmp: 24.65, 	att: 41.32, 	pyd: 283.84, 	ptd: 2.59, 	pint: 0.36, 	rush: 4.47, 	ruyd: 20.27, 	rutd: 0.22, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 15.04, 	ceiling: 32.48, 	fpts: 24.21, 	cost: 9000, 	value: 2.69 }, 
{ name: 'Drew Brees', 	pos: ' QB', 	team: ' NO', 	opp_team: 'OAK', 	opp_rank: '17', 	ovr_rank: '2', 	pos_rank: '2', 	cmp: 26.86, 	att: 40.45, 	pyd: 328.06, 	ptd: 2.48, 	pint: 0.72, 	rush: 2.13, 	ruyd: 5.31, 	rutd: 0.04, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 14.53, 	ceiling: 29.85, 	fpts: 22.89, 	cost: 8700, 	value: 2.63 }, 
{ name: 'Andrew Luck ', 	pos: 'QB ', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '26', 	ovr_rank: '3', 	pos_rank: '3', 	cmp: 23.12, 	att: 38.73, 	pyd: 247.42, 	ptd: 2.69, 	pint: 0.86, 	rush: 4.04, 	ruyd: 15.85, 	rutd: 0.24, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 9.43, 	ceiling: 34.05, 	fpts: 22.78, 	cost: 8700, 	value: 2.62 }, 
{ name: 'Ben Roethlisberger ', 	pos: 'QB ', 	team: 'PIT', 	opp_team: 'WSH', 	opp_rank: '15', 	ovr_rank: '4', 	pos_rank: '4', 	cmp: 24.52, 	att: 37.44, 	pyd: 305.24, 	ptd: 2.15, 	pint: 0.74, 	rush: 2.43, 	ruyd: 9.23, 	rutd: 0.1, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 13.17, 	ceiling: 28.37, 	fpts: 21.5, 	cost: 8500, 	value: 2.53 }, 
{ name: 'Russell Wilson ', 	pos: 'QB ', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '21', 	ovr_rank: '5', 	pos_rank: '5', 	cmp: 17.13, 	att: 26.81, 	pyd: 214.68, 	ptd: 1.89, 	pint: 0.58, 	rush: 6.9, 	ruyd: 37.69, 	rutd: 0.35, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 11.79, 	ceiling: 29.15, 	fpts: 21.12, 	cost: 8500, 	value: 2.48 }, 
{ name: 'Matt Ryan ', 	pos: 'QB ', 	team: 'ATL', 	opp_team: 'TB', 	opp_rank: '22', 	ovr_rank: '6', 	pos_rank: '6', 	cmp: 26.90, 	att: 41.33, 	pyd: 310.55, 	ptd: 2.27, 	pint: 0.82, 	rush: 2.42, 	ruyd: 4.01, 	rutd: 0.04, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 13.58, 	ceiling: 26.9, 	fpts: 21.08, 	cost: 7600, 	value: 2.77 }, 
{ name: 'Derek Carr ', 	pos: 'QB ', 	team: 'OAK', 	opp_team: 'NO', 	opp_rank: '32', 	ovr_rank: '7', 	pos_rank: '7', 	cmp: 22.83, 	att: 37.44, 	pyd: 258.18, 	ptd: 2.29, 	pint: 0.68, 	rush: 1.88, 	ruyd: 4.37, 	rutd: 0.06, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 10.98, 	ceiling: 25.9, 	fpts: 19.32, 	cost: 7700, 	value: 2.51 }, 
{ name: 'Tony Romo ', 	pos: 'QB ', 	team: 'DAL', 	opp_team: 'NYG', 	opp_rank: '30', 	ovr_rank: '8', 	pos_rank: '8', 	cmp: 21.12, 	att: 33.62, 	pyd: 233.89, 	ptd: 2.05, 	pint: 0.67, 	rush: 2.74, 	ruyd: 9.3, 	rutd: 0.2, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 9.34, 	ceiling: 26.3, 	fpts: 18.65, 	cost: 7600, 	value: 2.45 }, 
{ name: 'Andy Dalton ', 	pos: 'QB ', 	team: 'CIN', 	opp_team: 'NYJ', 	opp_rank: '5', 	ovr_rank: '9', 	pos_rank: '9', 	cmp: 20.77, 	att: 33.44, 	pyd: 259.34, 	ptd: 1.75, 	pint: 0.79, 	rush: 3.87, 	ruyd: 14.34, 	rutd: 0.06, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 8.97, 	ceiling: 25.33, 	fpts: 17.94, 	cost: 7700, 	value: 2.33 }, 
{ name: 'Cam Newton ', 	pos: 'QB ', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '1', 	ovr_rank: '10', 	pos_rank: '10', 	cmp: 18.95, 	att: 32.65, 	pyd: 226.64, 	ptd: 1.21, 	pint: 0.95, 	rush: 6.44, 	ruyd: 36.52, 	rutd: 0.28, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 9.14, 	ceiling: 25.12, 	fpts: 18.1, 	cost: 5000, 	value: 3.62 }, 
{ name: 'Carson Palmer ', 	pos: 'QB ', 	team: 'ARI', 	opp_team: 'NE', 	opp_rank: '12', 	ovr_rank: '11', 	pos_rank: '11', 	cmp: 23.44, 	att: 36.86, 	pyd: 276.17, 	ptd: 1.72, 	pint: 0.74, 	rush: 2.18, 	ruyd: 6.76, 	rutd: 0.04, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 10.39, 	ceiling: 23.79, 	fpts: 17.82, 	cost: 7900, 	value: 2.26 }, 
{ name: 'Jameis Winston', 	pos: ' QB', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '19', 	ovr_rank: '14', 	pos_rank: '12', 	cmp: 21.83, 	att: 33.93, 	pyd: 254.32, 	ptd: 1.32, 	pint: 0.86, 	rush: 3.43, 	ruyd: 13.66, 	rutd: 0.36, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 9.36, 	ceiling: 24.1, 	fpts: 17.72, 	cost: 7500, 	value: 2.36 }, 
{ name: 'Tyrod Taylor ', 	pos: 'QB ', 	team: 'BUF', 	opp_team: 'BAL', 	opp_rank: '10', 	ovr_rank: '15', 	pos_rank: '13', 	cmp: 20.35, 	att: 34.23, 	pyd: 244.31, 	ptd: 1.33, 	pint: 0.62, 	rush: 5.28, 	ruyd: 20.44, 	rutd: 0.18, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 8.55, 	ceiling: 24.87, 	fpts: 17.32, 	cost: 7200, 	value: 2.41 }, 
{ name: 'Matthew Stafford ', 	pos: 'QB ', 	team: 'DET', 	opp_team: 'IND', 	opp_rank: '20', 	ovr_rank: '16', 	pos_rank: '14', 	cmp: 23.59, 	att: 36.89, 	pyd: 268.93, 	ptd: 1.62, 	pint: 0.8, 	rush: 2.14, 	ruyd: 9.99, 	rutd: 0.07, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 10.71, 	ceiling: 22.69, 	fpts: 17.52, 	cost: 7400, 	value: 2.37 }, 
{ name: 'Alex Smith', 	pos: ' QB', 	team: ' KC', 	opp_team: 'SD', 	opp_rank: '28', 	ovr_rank: '17', 	pos_rank: '15', 	cmp: 18.19, 	att: 29.78, 	pyd: 213.36, 	ptd: 1.33, 	pint: 0.68, 	rush: 4.99, 	ruyd: 28.47, 	rutd: 0.29, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 10.19, 	ceiling: 23.13, 	fpts: 17.5, 	cost: 7000, 	value: 2.5 }, 
{ name: 'Teddy Bridgewater ', 	pos: 'QB ', 	team: 'MIN', 	opp_team: 'TEN', 	opp_rank: '24', 	ovr_rank: '18', 	pos_rank: '16', 	cmp: 18.42, 	att: 31.00, 	pyd: 207.18, 	ptd: 1.26, 	pint: 0.62, 	rush: 4.86, 	ruyd: 27.86, 	rutd: 0.3, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 8.56, 	ceiling: 24.5, 	fpts: 17.14, 	cost: 6800, 	value: 2.52 }, 
{ name: 'Eli Manning ', 	pos: 'QB ', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '23', 	ovr_rank: '19', 	pos_rank: '17', 	cmp: 23.90, 	att: 38.99, 	pyd: 269.92, 	ptd: 1.56, 	pint: 0.88, 	rush: 2.22, 	ruyd: 8.69, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 9.82, 	ceiling: 22.76, 	fpts: 17.19, 	cost: 7200, 	value: 2.39 }, 
{ name: 'Jared Goff', 	pos: ' QB', 	team: ' LA', 	opp_team: 'SF', 	opp_rank: '27', 	ovr_rank: '20', 	pos_rank: '18', 	cmp: 21.01, 	att: 32.98, 	pyd: 241.78, 	ptd: 1.42, 	pint: 0.79, 	rush: 3.36, 	ruyd: 15.78, 	rutd: 0.12, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 8.95, 	ceiling: 22.85, 	fpts: 16.7, 	cost: 6800, 	value: 2.46 }, 
{ name: 'Blake Bortles ', 	pos: 'QB ', 	team: 'JAC', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '21', 	pos_rank: '19', 	cmp: 21.62, 	att: 36.68, 	pyd: 244.79, 	ptd: 1.82, 	pint: 1.42, 	rush: 3.07, 	ruyd: 16.29, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 9.25, 	ceiling: 22.17, 	fpts: 17.35, 	cost: 8400, 	value: 2.07 }, 
{ name: 'Marcus Mariota ', 	pos: 'QB ', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '11', 	ovr_rank: '23', 	pos_rank: '20', 	cmp: 20.94, 	att: 35.85, 	pyd: 232.29, 	ptd: 1.24, 	pint: 1.2, 	rush: 4.18, 	ruyd: 28.29, 	rutd: 0.19, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 6.67, 	ceiling: 24.05, 	fpts: 16.81, 	cost: 7500, 	value: 2.24 }, 
{ name: 'Ryan Fitzpatrick ', 	pos: 'QB ', 	team: 'NYJ', 	opp_team: 'CIN', 	opp_rank: '13', 	ovr_rank: '24', 	pos_rank: '21', 	cmp: 20.42, 	att: 35.93, 	pyd: 231.38, 	ptd: 1.22, 	pint: 0.95, 	rush: 4.08, 	ruyd: 21.36, 	rutd: 0.15, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 8.31, 	ceiling: 22.03, 	fpts: 16.12, 	cost: 7300, 	value: 2.21 }, 
{ name: 'Kirk Cousins ', 	pos: 'QB ', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '25', 	pos_rank: '22', 	cmp: 20.28, 	att: 32.93, 	pyd: 240.72, 	ptd: 1.46, 	pint: 0.7, 	rush: 2.31, 	ruyd: 7.66, 	rutd: 0.1, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.84, 	ceiling: 22.22, 	fpts: 15.79, 	cost: 7800, 	value: 2.02 }, 
{ name: 'Robert Griffin III ', 	pos: 'QB ', 	team: 'CLE', 	opp_team: 'PHI', 	opp_rank: '16', 	ovr_rank: '26', 	pos_rank: '23', 	cmp: 20.58, 	att: 34.01, 	pyd: 232.22, 	ptd: 1.4, 	pint: 0.92, 	rush: 3.28, 	ruyd: 12.92, 	rutd: 0.12, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.72, 	ceiling: 22.06, 	fpts: 15.82, 	cost: 6900, 	value: 2.29 }, 
{ name: 'Brock Osweiler ', 	pos: 'QB ', 	team: 'HOU', 	opp_team: 'CHI', 	opp_rank: '31', 	ovr_rank: '28', 	pos_rank: '24', 	cmp: 19.60, 	att: 31.67, 	pyd: 230.78, 	ptd: 1.5, 	pint: 0.8, 	rush: 2.45, 	ruyd: 7.39, 	rutd: 0.12, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.48, 	ceiling: 22, 	fpts: 15.57, 	cost: 7100, 	value: 2.19 }, 
{ name: 'Joe Flacco ', 	pos: 'QB ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '34', 	pos_rank: '25', 	cmp: 21.82, 	att: 37.49, 	pyd: 250.72, 	ptd: 1.44, 	pint: 1.13, 	rush: 2.28, 	ruyd: 8.01, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.46, 	ceiling: 20.8, 	fpts: 15.34, 	cost: 7000, 	value: 2.19 }, 
{ name: 'Ryan Tannehill ', 	pos: 'QB ', 	team: 'MIA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '37', 	pos_rank: '26', 	cmp: 21.98, 	att: 38.68, 	pyd: 242.69, 	ptd: 1.38, 	pint: 1.2, 	rush: 2.23, 	ruyd: 9.3, 	rutd: 0.02, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 6.66, 	ceiling: 20.58, 	fpts: 14.8, 	cost: 6400, 	value: 2.31 }, 
{ name: 'Philip Rivers', 	pos: ' QB', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '2', 	ovr_rank: '38', 	pos_rank: '27', 	cmp: 22.91, 	att: 38.57, 	pyd: 258.92, 	ptd: 1.38, 	pint: 1.26, 	rush: 1.32, 	ruyd: 3.73, 	rutd: 0.04, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 6.23, 	ceiling: 20.45, 	fpts: 14.59, 	cost: 7300, 	value: 2 }, 
{ name: 'Jay Cutler ', 	pos: 'QB ', 	team: 'CHI', 	opp_team: 'HOU', 	opp_rank: '3', 	ovr_rank: '39', 	pos_rank: '28', 	cmp: 21.65, 	att: 35.26, 	pyd: 235.08, 	ptd: 1.16, 	pint: 1.18, 	rush: 3.03, 	ruyd: 13.55, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.44, 	ceiling: 18.78, 	fpts: 14.3, 	cost: 6700, 	value: 2.13 }, 
{ name: 'Colin Kaepernick', 	pos: ' QB', 	team: ' SF', 	opp_team: 'LA', 	opp_rank: '8', 	ovr_rank: '50', 	pos_rank: '29', 	cmp: 16.48, 	att: 30.55, 	pyd: 178.9, 	ptd: 0.86, 	pint: 0.92, 	rush: 4.89, 	ruyd: 18.58, 	rutd: 0.16, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.08, 	ceiling: 17.5, 	fpts: 11.8, 	cost: 6500, 	value: 1.82 }, 
{ name: 'Mark Sanchez ', 	pos: 'QB ', 	team: 'DEN', 	opp_team: 'CAR', 	opp_rank: '7', 	ovr_rank: '58', 	pos_rank: '30', 	cmp: 20.48, 	att: 35.93, 	pyd: 220.33, 	ptd: 0.84, 	pint: 1.32, 	rush: 2.61, 	ruyd: 9.38, 	rutd: 0.06, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.4, 	ceiling: 16.72, 	fpts: 11.39, 	cost: 5000, 	value: 2.28 }, 
{ name: 'Sam Bradford ', 	pos: 'QB ', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '25', 	ovr_rank: '65', 	pos_rank: '31', 	cmp: 16.35, 	att: 26.57, 	pyd: 175.14, 	ptd: 0.88, 	pint: 0.67, 	rush: 1.41, 	ruyd: 1.93, 	rutd: 0.06, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.47, 	ceiling: 14.29, 	fpts: 10.11, 	cost: 6900, 	value: 1.47 }, 
{ name: 'Jimmy Garoppolo', 	pos: ' QB', 	team: ' NE', 	opp_team: 'ARI', 	opp_rank: '6', 	ovr_rank: '90', 	pos_rank: '32', 	cmp: 16.68, 	att: 32.03, 	pyd: 175.25, 	ptd: 0.78, 	pint: 1.09, 	rush: 1.54, 	ruyd: 4.84, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.66, 	ceiling: 14.26, 	fpts: 9.04, 	cost: 6900, 	value: 1.31 }, 
																						
																						
																						
{ name: 'Jamaal Charles', 	pos: ' RB', 	team: ' KC', 	opp_team: 'SD', 	opp_rank: '28', 	ovr_rank: '22', 	pos_rank: '1', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 17.14, 	ruyd: 82.86, 	rutd: 0.77, 	rec: 2.74, 	reyd: 22.52, 	retd: 0.09, 	floor: 6.15, 	ceiling: 24.91, 	fpts: 16.99, 	cost: 8000, 	value: 2.12 }, 
{ name: 'David Johnson ', 	pos: 'RB ', 	team: 'ARI', 	opp_team: 'NE', 	opp_rank: '12', 	ovr_rank: '27', 	pos_rank: '2', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 14.4, 	ruyd: 64.75, 	rutd: 0.59, 	rec: 3.45, 	reyd: 35.02, 	retd: 0.23, 	floor: 5.32, 	ceiling: 24.36, 	fpts: 16.54, 	cost: 8800, 	value: 1.88 }, 
{ name: 'Lamar Miller ', 	pos: 'RB ', 	team: 'HOU', 	opp_team: 'CHI', 	opp_rank: '31', 	ovr_rank: '29', 	pos_rank: '3', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 16.17, 	ruyd: 78.52, 	rutd: 0.54, 	rec: 3.38, 	reyd: 27.51, 	retd: 0.17, 	floor: 4.93, 	ceiling: 24.27, 	fpts: 16.31, 	cost: 7600, 	value: 2.15 }, 
{ name: 'DeAngelo Williams ', 	pos: 'RB ', 	team: 'PIT', 	opp_team: 'WSH', 	opp_rank: '15', 	ovr_rank: '30', 	pos_rank: '4', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.23, 	ruyd: 72.18, 	rutd: 0.6, 	rec: 3.62, 	reyd: 28.7, 	retd: 0.16, 	floor: 2.59, 	ceiling: 26.55, 	fpts: 16.4, 	cost: 7100, 	value: 2.31 }, 
{ name: 'Adrian Peterson ', 	pos: 'RB ', 	team: 'MIN', 	opp_team: 'TEN', 	opp_rank: '24', 	ovr_rank: '32', 	pos_rank: '5', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 21.04, 	ruyd: 90.84, 	rutd: 0.66, 	rec: 2.21, 	reyd: 14.16, 	retd: 0.06, 	floor: 6.7, 	ceiling: 22.1, 	fpts: 15.49, 	cost: 8200, 	value: 1.89 }, 
{ name: 'Todd Gurley', 	pos: ' RB', 	team: ' LA', 	opp_team: 'SF', 	opp_rank: '27', 	ovr_rank: '33', 	pos_rank: '6', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 17.28, 	ruyd: 82.47, 	rutd: 0.6, 	rec: 3, 	reyd: 25.51, 	retd: 0.02, 	floor: 6.21, 	ceiling: 22.35, 	fpts: 15.78, 	cost: 8900, 	value: 1.77 }, 
{ name: 'Doug Martin', 	pos: ' RB', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '19', 	ovr_rank: '35', 	pos_rank: '7', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 18.15, 	ruyd: 81.51, 	rutd: 0.66, 	rec: 2.66, 	reyd: 16.67, 	retd: 0.05, 	floor: 7.59, 	ceiling: 19.95, 	fpts: 15.13, 	cost: 7200, 	value: 2.1 }, 
{ name: 'Mark Ingram', 	pos: ' RB', 	team: ' NO', 	opp_team: 'OAK', 	opp_rank: '17', 	ovr_rank: '40', 	pos_rank: '8', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 16.78, 	ruyd: 75.06, 	rutd: 0.5, 	rec: 3.55, 	reyd: 24.32, 	retd: 0, 	floor: 6.1, 	ceiling: 19.12, 	fpts: 14.39, 	cost: 7300, 	value: 1.97 }, 
{ name: 'Devonta Freeman ', 	pos: 'RB ', 	team: 'ATL', 	opp_team: 'TB', 	opp_rank: '22', 	ovr_rank: '41', 	pos_rank: '9', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 14.19, 	ruyd: 54.94, 	rutd: 0.45, 	rec: 4.41, 	reyd: 35.76, 	retd: 0.13, 	floor: 5.07, 	ceiling: 19.71, 	fpts: 14.6, 	cost: 8100, 	value: 1.8 }, 
{ name: 'Ezekiel Elliott ', 	pos: 'RB ', 	team: 'DAL', 	opp_team: 'NYG', 	opp_rank: '30', 	ovr_rank: '42', 	pos_rank: '10', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.63, 	ruyd: 69.64, 	rutd: 0.48, 	rec: 2.92, 	reyd: 21.89, 	retd: 0.1, 	floor: 5.06, 	ceiling: 19.68, 	fpts: 13.91, 	cost: 7900, 	value: 1.76 }, 
{ name: 'Eddie Lacy', 	pos: ' RB', 	team: ' GB', 	opp_team: 'JAC', 	opp_rank: '29', 	ovr_rank: '43', 	pos_rank: '11', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 12.67, 	ruyd: 53.93, 	rutd: 0.42, 	rec: 3.35, 	reyd: 31.39, 	retd: 0.26, 	floor: 2.82, 	ceiling: 21.84, 	fpts: 14.01, 	cost: 7100, 	value: 1.97 }, 
{ name: 'Latavius Murray ', 	pos: 'RB ', 	team: 'OAK', 	opp_team: 'NO', 	opp_rank: '32', 	ovr_rank: '47', 	pos_rank: '12', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 17.19, 	ruyd: 67, 	rutd: 0.46, 	rec: 2.5, 	reyd: 18.04, 	retd: 0.06, 	floor: 4.13, 	ceiling: 18.65, 	fpts: 12.65, 	cost: 6600, 	value: 1.92 }, 
{ name: 'Lesean McCoy ', 	pos: 'RB ', 	team: 'BUF', 	opp_team: 'BAL', 	opp_rank: '10', 	ovr_rank: '56', 	pos_rank: '13', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.87, 	ruyd: 64.8, 	rutd: 0.34, 	rec: 2.56, 	reyd: 18.62, 	retd: 0.08, 	floor: 2.55, 	ceiling: 18.15, 	fpts: 11.62, 	cost: 6900, 	value: 1.68 }, 
{ name: 'Ryan Mathews ', 	pos: 'RB ', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '25', 	ovr_rank: '63', 	pos_rank: '14', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 12.44, 	ruyd: 55.51, 	rutd: 0.35, 	rec: 2.74, 	reyd: 19.05, 	retd: 0, 	floor: 4.05, 	ceiling: 14.99, 	fpts: 10.89, 	cost: 6100, 	value: 1.79 }, 
{ name: 'DeMarco Murray ', 	pos: 'RB ', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '11', 	ovr_rank: '67', 	pos_rank: '15', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 11.98, 	ruyd: 53.99, 	rutd: 0.25, 	rec: 2.61, 	reyd: 19.5, 	retd: 0.1, 	floor: 4.04, 	ceiling: 14.58, 	fpts: 10.61, 	cost: 6500, 	value: 1.63 }, 
{ name: 'Matt Forte ', 	pos: 'RB ', 	team: 'NYJ', 	opp_team: 'CIN', 	opp_rank: '13', 	ovr_rank: '68', 	pos_rank: '16', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 13.67, 	ruyd: 57.5, 	rutd: 0.26, 	rec: 2.64, 	reyd: 17.71, 	retd: 0.05, 	floor: 2.33, 	ceiling: 16.19, 	fpts: 10.6, 	cost: 6500, 	value: 1.63 }, 
{ name: 'Jonathan Stewart ', 	pos: 'RB ', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '1', 	ovr_rank: '70', 	pos_rank: '17', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 14.46, 	ruyd: 57.75, 	rutd: 0.31, 	rec: 2.22, 	reyd: 16.89, 	retd: 0.04, 	floor: 4.85, 	ceiling: 13.61, 	fpts: 10.43, 	cost: 5000, 	value: 2.09 }, 
{ name: 'Jeremy Langford ', 	pos: 'RB ', 	team: 'CHI', 	opp_team: 'HOU', 	opp_rank: '3', 	ovr_rank: '74', 	pos_rank: '18', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.85, 	ruyd: 43.98, 	rutd: 0.26, 	rec: 2.57, 	reyd: 23.37, 	retd: 0.1, 	floor: 3.03, 	ceiling: 14.51, 	fpts: 10.04, 	cost: 6200, 	value: 1.62 }, 
{ name: 'Frank Gore ', 	pos: 'RB ', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '26', 	ovr_rank: '76', 	pos_rank: '19', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 12.92, 	ruyd: 49.43, 	rutd: 0.34, 	rec: 2.4, 	reyd: 19.41, 	retd: 0, 	floor: 3.55, 	ceiling: 13.85, 	fpts: 9.88, 	cost: 6200, 	value: 1.59 }, 
{ name: 'Carlos Hyde', 	pos: ' RB', 	team: ' SF', 	opp_team: 'LA', 	opp_rank: '8', 	ovr_rank: '85', 	pos_rank: '20', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.17, 	ruyd: 57.28, 	rutd: 0.24, 	rec: 2.52, 	reyd: 11.99, 	retd: 0, 	floor: 2.45, 	ceiling: 13.83, 	fpts: 9.39, 	cost: 6200, 	value: 1.51 }, 
{ name: 'T.J. Yeldon ', 	pos: 'RB ', 	team: 'JAC', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '86', 	pos_rank: '21', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.14, 	ruyd: 43, 	rutd: 0.28, 	rec: 2.53, 	reyd: 18.92, 	retd: 0.05, 	floor: 2.73, 	ceiling: 13.51, 	fpts: 9.36, 	cost: 6100, 	value: 1.53 }, 
{ name: 'Matt Jones ', 	pos: 'RB ', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '87', 	pos_rank: '22', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 11.46, 	ruyd: 38.68, 	rutd: 0.22, 	rec: 2.5, 	reyd: 23.69, 	retd: 0.17, 	floor: 0.41, 	ceiling: 15.67, 	fpts: 9.27, 	cost: 6000, 	value: 1.55 }, 
{ name: 'Duke Johnson ', 	pos: 'RB ', 	team: 'CLE', 	opp_team: 'PHI', 	opp_rank: '16', 	ovr_rank: '88', 	pos_rank: '23', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.44, 	ruyd: 33.8, 	rutd: 0.12, 	rec: 3.77, 	reyd: 31.04, 	retd: 0.14, 	floor: 1.63, 	ceiling: 14.41, 	fpts: 9.91, 	cost: 5600, 	value: 1.77 }, 
{ name: 'C.J. Anderson ', 	pos: 'RB ', 	team: 'DEN', 	opp_team: 'CAR', 	opp_rank: '7', 	ovr_rank: '90', 	pos_rank: '24', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.6, 	ruyd: 43.81, 	rutd: 0.25, 	rec: 2.79, 	reyd: 19, 	retd: 0.07, 	floor: 0.99, 	ceiling: 14.83, 	fpts: 9.32, 	cost: 5000, 	value: 1.86 }, 
{ name: 'Ameer Abdullah ', 	pos: 'RB ', 	team: 'DET', 	opp_team: 'IND', 	opp_rank: '20', 	ovr_rank: '92', 	pos_rank: '25', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 11.76, 	ruyd: 50.55, 	rutd: 0.26, 	rec: 2.06, 	reyd: 13.05, 	retd: 0, 	floor: 1.6, 	ceiling: 13.76, 	fpts: 8.73, 	cost: 6300, 	value: 1.39 }, 
{ name: 'Charles Sims', 	pos: ' RB', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '19', 	ovr_rank: '96', 	pos_rank: '26', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 7.75, 	ruyd: 34.67, 	rutd: 0.18, 	rec: 2.84, 	reyd: 26.04, 	retd: 0.08, 	floor: 1.43, 	ceiling: 13.71, 	fpts: 9.01, 	cost: 4700, 	value: 1.92 }, 
{ name: 'James Starks', 	pos: ' RB', 	team: ' GB', 	opp_team: 'JAC', 	opp_rank: '29', 	ovr_rank: '96', 	pos_rank: '26', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 9.31, 	ruyd: 39.54, 	rutd: 0.25, 	rec: 2.33, 	reyd: 18.12, 	retd: 0.06, 	floor: 2.15, 	ceiling: 12.99, 	fpts: 8.69, 	cost: 5600, 	value: 1.55 }, 
{ name: 'Giovani Bernard ', 	pos: 'RB ', 	team: 'CIN', 	opp_team: 'NYJ', 	opp_rank: '5', 	ovr_rank: '97', 	pos_rank: '27', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.58, 	ruyd: 34.47, 	rutd: 0.16, 	rec: 2.88, 	reyd: 28.46, 	retd: 0.05, 	floor: 3.92, 	ceiling: 11.08, 	fpts: 8.95, 	cost: 5600, 	value: 1.6 }, 
{ name: 'Melvin Gordon', 	pos: ' RB', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '2', 	ovr_rank: '98', 	pos_rank: '28', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.73, 	ruyd: 54.52, 	rutd: 0.18, 	rec: 2.29, 	reyd: 14.07, 	retd: 0, 	floor: 2.17, 	ceiling: 12.77, 	fpts: 8.64, 	cost: 5700, 	value: 1.52 }, 
{ name: 'Danny Woodhead', 	pos: ' RB', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '2', 	ovr_rank: '100', 	pos_rank: '29', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 5.13, 	ruyd: 21.67, 	rutd: 0.1, 	rec: 5.08, 	reyd: 41.24, 	retd: 0.11, 	floor: 1.55, 	ceiling: 13.37, 	fpts: 10.01, 	cost: 5800, 	value: 1.73 }, 
{ name: 'Justin Forsett ', 	pos: 'RB ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '102', 	pos_rank: '30', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.62, 	ruyd: 48.4, 	rutd: 0.28, 	rec: 1.68, 	reyd: 9.9, 	retd: 0.02, 	floor: 1.85, 	ceiling: 12.95, 	fpts: 8.25, 	cost: 6900, 	value: 1.2 }, 
{ name: 'Isaiah Crowell ', 	pos: 'RB ', 	team: 'CLE', 	opp_team: 'PHI', 	opp_rank: '16', 	ovr_rank: '103', 	pos_rank: '31', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.82, 	ruyd: 34.16, 	rutd: 0.19, 	rec: 2.52, 	reyd: 24.89, 	retd: 0.08, 	floor: 2.19, 	ceiling: 12.57, 	fpts: 8.61, 	cost: 5700, 	value: 1.51 }, 
{ name: 'Jeremy Hill ', 	pos: 'RB ', 	team: 'CIN', 	opp_team: 'NYJ', 	opp_rank: '5', 	ovr_rank: '104', 	pos_rank: '32', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.85, 	ruyd: 38.76, 	rutd: 0.39, 	rec: 1.7, 	reyd: 11.49, 	retd: 0.04, 	floor: 1.77, 	ceiling: 12.89, 	fpts: 8.26, 	cost: 6500, 	value: 1.27 }, 
{ name: 'Rashad Jennings ', 	pos: 'RB ', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '23', 	ovr_rank: '108', 	pos_rank: '33', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 9.19, 	ruyd: 41.5, 	rutd: 0.28, 	rec: 1.6, 	reyd: 12.11, 	retd: 0.04, 	floor: 2.65, 	ceiling: 11.57, 	fpts: 7.94, 	cost: 6000, 	value: 1.32 }, 
{ name: 'Chris Ivory ', 	pos: 'RB ', 	team: 'JAC', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '110', 	pos_rank: '34', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.13, 	ruyd: 39.74, 	rutd: 0.26, 	rec: 1.75, 	reyd: 13.09, 	retd: 0.05, 	floor: 2.84, 	ceiling: 11.22, 	fpts: 7.92, 	cost: 6100, 	value: 1.3 }, 
{ name: 'Darren Sproles ', 	pos: 'RB ', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '25', 	ovr_rank: '112', 	pos_rank: '35', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 3.71, 	ruyd: 18.28, 	rutd: 0.17, 	rec: 4, 	reyd: 33.4, 	retd: 0.14, 	floor: 1.88, 	ceiling: 12.02, 	fpts: 8.97, 	cost: 5600, 	value: 1.6 }, 
{ name: 'Arian Foster ', 	pos: 'RB ', 	team: 'MIA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '116', 	pos_rank: '36', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 13.16, 	ruyd: 42.07, 	rutd: 0.2, 	rec: 2.21, 	reyd: 14.24, 	retd: 0.04, 	floor: 1.84, 	ceiling: 11.78, 	fpts: 7.94, 	cost: 6500, 	value: 1.22 }, 
{ name: 'Thomas Rawls ', 	pos: 'RB ', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '21', 	ovr_rank: '120', 	pos_rank: '37', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.01, 	ruyd: 39.81, 	rutd: 0.37, 	rec: 0.8, 	reyd: 6.5, 	retd: 0.02, 	floor: 1.52, 	ceiling: 11.86, 	fpts: 7.19, 	cost: 7400, 	value: 0.97 }, 
{ name: 'LeGarrette Blount', 	pos: ' RB', 	team: ' NE', 	opp_team: 'ARI', 	opp_rank: '6', 	ovr_rank: '121', 	pos_rank: '38', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 11.84, 	ruyd: 42.32, 	rutd: 0.21, 	rec: 0.97, 	reyd: 8.04, 	retd: 0.04, 	floor: 1.59, 	ceiling: 11.57, 	fpts: 7.04, 	cost: 6000, 	value: 1.17 }, 
{ name: 'Bilal Powell ', 	pos: 'RB ', 	team: 'NYJ', 	opp_team: 'CIN', 	opp_rank: '13', 	ovr_rank: '126', 	pos_rank: '39', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.57, 	ruyd: 35.55, 	rutd: 0.22, 	rec: 2.24, 	reyd: 17.37, 	retd: 0.01, 	floor: 0, 	ceiling: 13.37, 	fpts: 7.57, 	cost: 5500, 	value: 1.38 }, 
{ name: 'Shane Vereen ', 	pos: 'RB ', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '23', 	ovr_rank: '130', 	pos_rank: '40', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.33, 	ruyd: 21.85, 	rutd: 0.14, 	rec: 3.05, 	reyd: 26.58, 	retd: 0.11, 	floor: 1.88, 	ceiling: 10.84, 	fpts: 7.87, 	cost: 5300, 	value: 1.48 }, 
{ name: 'Javorius Allen ', 	pos: 'RB ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '132', 	pos_rank: '41', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 7.28, 	ruyd: 29.85, 	rutd: 0.13, 	rec: 2.5, 	reyd: 20.17, 	retd: 0.07, 	floor: 1.87, 	ceiling: 10.35, 	fpts: 7.35, 	cost: 5400, 	value: 1.36 }, 
{ name: 'DeAndre Washington ', 	pos: 'RB ', 	team: 'OAK', 	opp_team: 'NO', 	opp_rank: '32', 	ovr_rank: '134', 	pos_rank: '42', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.5, 	ruyd: 27.79, 	rutd: 0.24, 	rec: 2.45, 	reyd: 18.65, 	retd: 0.01, 	floor: 0, 	ceiling: 12.16, 	fpts: 7.29, 	cost: 4700, 	value: 1.55 }, 
{ name: 'Jerick McKinnon ', 	pos: 'RB ', 	team: 'MIN', 	opp_team: 'TEN', 	opp_rank: '24', 	ovr_rank: '135', 	pos_rank: '43', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.73, 	ruyd: 32.56, 	rutd: 0.14, 	rec: 1.55, 	reyd: 11.21, 	retd: 0.12, 	floor: 0, 	ceiling: 14.33, 	fpts: 6.59, 	cost: 5200, 	value: 1.27 }, 
{ name: 'Theo Riddick ', 	pos: 'RB ', 	team: 'DET', 	opp_team: 'IND', 	opp_rank: '20', 	ovr_rank: '142', 	pos_rank: '44', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 2.77, 	ruyd: 8.39, 	rutd: 0, 	rec: 3.89, 	reyd: 36.15, 	retd: 0.18, 	floor: 2.22, 	ceiling: 8.74, 	fpts: 7.47, 	cost: 5100, 	value: 1.46 }, 
{ name: 'Alfred Blue ', 	pos: 'RB ', 	team: 'HOU', 	opp_team: 'CHI', 	opp_rank: '31', 	ovr_rank: '143', 	pos_rank: '45', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 7.74, 	ruyd: 31.35, 	rutd: 0.16, 	rec: 1.25, 	reyd: 11.71, 	retd: 0.05, 	floor: 0.64, 	ceiling: 10.28, 	fpts: 6.11, 	cost: 5300, 	value: 1.15 }, 
{ name: 'Jay Ajayi ', 	pos: 'RB ', 	team: 'MIA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '146', 	pos_rank: '46', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.51, 	ruyd: 36.73, 	rutd: 0.08, 	rec: 1.54, 	reyd: 10.2, 	retd: 0.02, 	floor: 1.46, 	ceiling: 9.26, 	fpts: 6.1, 	cost: 6100, 	value: 1 }, 
{ name: 'C.J. Prosise ', 	pos: 'RB ', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '21', 	ovr_rank: '151', 	pos_rank: '47', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.28, 	ruyd: 14.47, 	rutd: 0.19, 	rec: 2.84, 	reyd: 20.37, 	retd: 0.07, 	floor: 0.31, 	ceiling: 9.83, 	fpts: 6.53, 	cost: 4900, 	value: 1.33 }, 
{ name: 'Darren McFadden ', 	pos: 'RB ', 	team: 'DAL', 	opp_team: 'NYG', 	opp_rank: '30', 	ovr_rank: '152', 	pos_rank: '48', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.72, 	ruyd: 30.16, 	rutd: 0.1, 	rec: 1.89, 	reyd: 13.75, 	retd: 0.02, 	floor: 0.96, 	ceiling: 9.04, 	fpts: 5.96, 	cost: 6400, 	value: 0.93 }, 
{ name: 'Tevin Coleman ', 	pos: 'RB ', 	team: 'ATL', 	opp_team: 'TB', 	opp_rank: '22', 	ovr_rank: '154', 	pos_rank: '49', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 7.98, 	ruyd: 25.87, 	rutd: 0.15, 	rec: 1.86, 	reyd: 12.83, 	retd: 0.02, 	floor: 0.33, 	ceiling: 9.35, 	fpts: 5.74, 	cost: 5200, 	value: 1.1 }, 
{ name: 'Derrick Henry ', 	pos: 'RB ', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '11', 	ovr_rank: '156', 	pos_rank: '50', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.2, 	ruyd: 24.17, 	rutd: 0.12, 	rec: 1.21, 	reyd: 14.46, 	retd: 0.06, 	floor: 0, 	ceiling: 9.64, 	fpts: 5.33, 	cost: 5400, 	value: 0.99 }, 
{ name: 'James White', 	pos: ' RB', 	team: ' NE', 	opp_team: 'ARI', 	opp_rank: '6', 	ovr_rank: '158', 	pos_rank: '51', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 2.34, 	ruyd: 7.56, 	rutd: 0.03, 	rec: 3, 	reyd: 26.04, 	retd: 0.2, 	floor: 0, 	ceiling: 9.47, 	fpts: 6.18, 	cost: 4900, 	value: 1.26 }, 
{ name: 'Jordan Howard ', 	pos: 'RB ', 	team: 'CHI', 	opp_team: 'HOU', 	opp_rank: '3', 	ovr_rank: '159', 	pos_rank: '52', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 5.43, 	ruyd: 17.95, 	rutd: 0.15, 	rec: 2.15, 	reyd: 16.52, 	retd: 0.08, 	floor: 0.35, 	ceiling: 8.97, 	fpts: 5.72, 	cost: 4900, 	value: 1.17 }, 
{ name: 'Ronnie Hillman ', 	pos: 'RB ', 	team: 'DEN', 	opp_team: 'CAR', 	opp_rank: '7', 	ovr_rank: '160', 	pos_rank: '53', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 7.92, 	ruyd: 29.78, 	rutd: 0.15, 	rec: 1.24, 	reyd: 7.83, 	retd: 0, 	floor: 0.98, 	ceiling: 8.26, 	fpts: 5.22, 	cost: 5000, 	value: 1.04 }, 
{ name: 'Chris Johnson ', 	pos: 'RB ', 	team: 'ARI', 	opp_team: 'NE', 	opp_rank: '12', 	ovr_rank: '169', 	pos_rank: '54', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.99, 	ruyd: 28.75, 	rutd: 0.15, 	rec: 0.77, 	reyd: 4.99, 	retd: 0.02, 	floor: 0.64, 	ceiling: 7.96, 	fpts: 4.7, 	cost: 6000, 	value: 0.78 }, 
{ name: 'Josh Ferguson ', 	pos: 'RB ', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '26', 	ovr_rank: '171', 	pos_rank: '55', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.69, 	ruyd: 21.23, 	rutd: 0.18, 	rec: 1.1, 	reyd: 9.43, 	retd: 0.02, 	floor: 0, 	ceiling: 9.05, 	fpts: 4.82, 	cost: 5000, 	value: 0.96 }, 
{ name: 'Charcandrick West', 	pos: ' RB', 	team: ' KC', 	opp_team: 'SD', 	opp_rank: '28', 	ovr_rank: '183', 	pos_rank: '56', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.44, 	ruyd: 19.46, 	rutd: 0.12, 	rec: 1.26, 	reyd: 8.98, 	retd: 0.05, 	floor: 0.42, 	ceiling: 7.18, 	fpts: 4.54, 	cost: 5100, 	value: 0.89 }, 
{ name: 'Devontae Booker ', 	pos: 'RB ', 	team: 'DEN', 	opp_team: 'CAR', 	opp_rank: '7', 	ovr_rank: '185', 	pos_rank: '57', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.42, 	ruyd: 18.13, 	rutd: 0.07, 	rec: 1.38, 	reyd: 11.64, 	retd: 0.06, 	floor: 0, 	ceiling: 8.2, 	fpts: 4.39, 	cost: 5000, 	value: 0.88 }, 
{ name: 'Alfred Morris ', 	pos: 'RB ', 	team: 'DAL', 	opp_team: 'NYG', 	opp_rank: '30', 	ovr_rank: '189', 	pos_rank: '58', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 5.68, 	ruyd: 23.94, 	rutd: 0.09, 	rec: 1.18, 	reyd: 6.46, 	retd: 0, 	floor: 0.73, 	ceiling: 6.39, 	fpts: 4.14, 	cost: 5400, 	value: 0.77 }, 
{ name: 'Cameron Artis-Payne ', 	pos: 'RB ', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '1', 	ovr_rank: '190', 	pos_rank: '59', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 5.83, 	ruyd: 17.03, 	rutd: 0.04, 	rec: 1.36, 	reyd: 13.84, 	retd: 0.02, 	floor: 0, 	ceiling: 6.97, 	fpts: 4.11, 	cost: 5000, 	value: 0.82 }, 
{ name: 'Denard Robinson ', 	pos: 'RB ', 	team: 'JAC', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '197', 	pos_rank: '60', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 5, 	ruyd: 17.63, 	rutd: 0.05, 	rec: 1.58, 	reyd: 10.77, 	retd: 0.03, 	floor: 0.27, 	ceiling: 6.17, 	fpts: 4.01, 	cost: 5200, 	value: 0.77 }, 
{ name: 'Dexter McCluster ', 	pos: 'RB ', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '11', 	ovr_rank: '199', 	pos_rank: '61', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 3.48, 	ruyd: 12.06, 	rutd: 0.06, 	rec: 1.86, 	reyd: 13.98, 	retd: 0.06, 	floor: 0.32, 	ceiling: 6.08, 	fpts: 4.13, 	cost: 4500, 	value: 0.92 }, 
{ name: 'Andre Ellington ', 	pos: 'RB ', 	team: 'ARI', 	opp_team: 'NE', 	opp_rank: '12', 	ovr_rank: '202', 	pos_rank: '62', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 3.71, 	ruyd: 16.35, 	rutd: 0.03, 	rec: 1.06, 	reyd: 9.76, 	retd: 0.06, 	floor: 0.84, 	ceiling: 5.36, 	fpts: 3.64, 	cost: 4800, 	value: 0.76 }, 
{ name: 'Robert Turbin ', 	pos: 'RB ', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '26', 	ovr_rank: '205', 	pos_rank: '63', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 3.93, 	ruyd: 15.16, 	rutd: 0.12, 	rec: 1.41, 	reyd: 9.82, 	retd: 0, 	floor: 0, 	ceiling: 6.37, 	fpts: 3.74, 	cost: 4900, 	value: 0.76 }, 
{ name: 'Kenneth Dixon ', 	pos: 'RB ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '206', 	pos_rank: '64', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 3.15, 	ruyd: 13.38, 	rutd: 0.06, 	rec: 1.29, 	reyd: 11.66, 	retd: 0.03, 	floor: 0, 	ceiling: 6.08, 	fpts: 3.69, 	cost: 4500, 	value: 0.82 }, 
{ name: 'Mike Gillislee ', 	pos: 'RB ', 	team: 'BUF', 	opp_team: 'BAL', 	opp_rank: '10', 	ovr_rank: '211', 	pos_rank: '65', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 3.35, 	ruyd: 17.08, 	rutd: 0.11, 	rec: 0.75, 	reyd: 3.2, 	retd: 0.02, 	floor: 0, 	ceiling: 7.31, 	fpts: 3.3, 	cost: 4900, 	value: 0.67 }, 
{ name: 'Chris Thompson ', 	pos: 'RB ', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '212', 	pos_rank: '66', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 2.64, 	ruyd: 11.05, 	rutd: 0.1, 	rec: 1.32, 	reyd: 9.31, 	retd: 0.05, 	floor: 0, 	ceiling: 6.29, 	fpts: 3.52, 	cost: 4900, 	value: 0.72 }, 
{ name: 'Benny Cunningham', 	pos: ' RB', 	team: ' LA', 	opp_team: 'SF', 	opp_rank: '27', 	ovr_rank: '221', 	pos_rank: '67', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 2.58, 	ruyd: 10.62, 	rutd: 0.04, 	rec: 1.42, 	reyd: 11.38, 	retd: 0.03, 	floor: 0, 	ceiling: 5.46, 	fpts: 3.27, 	cost: 4900, 	value: 0.67 }, 
{ name: 'C.J. Spiller', 	pos: ' RB', 	team: ' NO', 	opp_team: 'OAK', 	opp_rank: '17', 	ovr_rank: '222', 	pos_rank: '68', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 2.28, 	ruyd: 8.39, 	rutd: 0.03, 	rec: 1.6, 	reyd: 10.55, 	retd: 0.08, 	floor: 0, 	ceiling: 5.41, 	fpts: 3.35, 	cost: 4900, 	value: 0.68 }, 
																						
																						
																						
{ name: 'Julio Jones ', 	pos: 'WR ', 	team: 'ATL', 	opp_team: 'TB', 	opp_rank: '22', 	ovr_rank: '12', 	pos_rank: '1', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 8.58, 	reyd: 120.32, 	retd: 0.86, 	floor: 9.74, 	ceiling: 24.28, 	fpts: 21.44, 	cost: 9000, 	value: 2.38 }, 
{ name: 'Antonio Brown ', 	pos: 'WR ', 	team: 'PIT', 	opp_team: 'WSH', 	opp_rank: '15', 	ovr_rank: '13', 	pos_rank: '2', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.14, 	ruyd: 0.95, 	rutd: 0, 	rec: 8.86, 	reyd: 123.75, 	retd: 0.74, 	floor: 8.83, 	ceiling: 24.77, 	fpts: 21.22, 	cost: 9300, 	value: 2.28 }, 
{ name: 'DeAndre Hopkins ', 	pos: 'WR ', 	team: 'HOU', 	opp_team: 'CHI', 	opp_rank: '31', 	ovr_rank: '31', 	pos_rank: '3', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 6.64, 	reyd: 100.38, 	retd: 0.74, 	floor: 7.09, 	ceiling: 21.91, 	fpts: 17.8, 	cost: 8400, 	value: 2.12 }, 
{ name: 'Odell Beckham ', 	pos: 'WR ', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '23', 	ovr_rank: '36', 	pos_rank: '4', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.16, 	ruyd: 0.7, 	rutd: 0, 	rec: 5.48, 	reyd: 90.14, 	retd: 0.77, 	floor: 5.03, 	ceiling: 22.41, 	fpts: 16.44, 	cost: 9100, 	value: 1.81 }, 
{ name: 'Dez Bryant ', 	pos: 'WR ', 	team: 'DAL', 	opp_team: 'NYG', 	opp_rank: '30', 	ovr_rank: '44', 	pos_rank: '5', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.9, 	reyd: 82.49, 	retd: 0.63, 	floor: 2, 	ceiling: 22.02, 	fpts: 14.98, 	cost: 8000, 	value: 1.87 }, 
{ name: 'Jordy Nelson', 	pos: ' WR', 	team: ' GB', 	opp_team: 'JAC', 	opp_rank: '29', 	ovr_rank: '44', 	pos_rank: '5', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 6.34, 	reyd: 92.83, 	retd: 0.46, 	floor: 3.07, 	ceiling: 20.95, 	fpts: 15.21, 	cost: 8400, 	value: 1.81 }, 
{ name: 'Amari Cooper ', 	pos: 'WR ', 	team: 'OAK', 	opp_team: 'NO', 	opp_rank: '32', 	ovr_rank: '45', 	pos_rank: '6', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.13, 	ruyd: 0.15, 	rutd: 0, 	rec: 5.45, 	reyd: 76.88, 	retd: 0.64, 	floor: 5.81, 	ceiling: 17.09, 	fpts: 14.23, 	cost: 7100, 	value: 2 }, 
{ name: 'T.Y. Hilton ', 	pos: 'WR ', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '26', 	ovr_rank: '46', 	pos_rank: '7', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.05, 	reyd: 77.35, 	retd: 0.61, 	floor: 3.62, 	ceiling: 19.2, 	fpts: 13.96, 	cost: 6800, 	value: 2.05 }, 
{ name: 'Randall Cobb', 	pos: ' WR', 	team: ' GB', 	opp_team: 'JAC', 	opp_rank: '29', 	ovr_rank: '48', 	pos_rank: '8', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.21, 	ruyd: 1.37, 	rutd: 0, 	rec: 6.36, 	reyd: 82.23, 	retd: 0.49, 	floor: 4.44, 	ceiling: 17.86, 	fpts: 14.34, 	cost: 7200, 	value: 1.99 }, 
{ name: 'Sammy Watkins ', 	pos: 'WR ', 	team: 'BUF', 	opp_team: 'BAL', 	opp_rank: '10', 	ovr_rank: '49', 	pos_rank: '9', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.11, 	rutd: 0.02, 	rec: 4.46, 	reyd: 71, 	retd: 0.61, 	floor: 3.97, 	ceiling: 17.73, 	fpts: 13.08, 	cost: 7300, 	value: 1.79 }, 
{ name: 'Mike Evans', 	pos: ' WR', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '19', 	ovr_rank: '51', 	pos_rank: '10', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.85, 	reyd: 76.34, 	retd: 0.51, 	floor: 4.18, 	ceiling: 17.16, 	fpts: 13.12, 	cost: 7900, 	value: 1.66 }, 
{ name: 'A.J. Green ', 	pos: 'WR ', 	team: 'CIN', 	opp_team: 'NYJ', 	opp_rank: '5', 	ovr_rank: '52', 	pos_rank: '11', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.39, 	reyd: 74.69, 	retd: 0.52, 	floor: 3.58, 	ceiling: 17.56, 	fpts: 13.28, 	cost: 8200, 	value: 1.62 }, 
{ name: 'Jeremy Maclin', 	pos: ' WR', 	team: ' KC', 	opp_team: 'SD', 	opp_rank: '28', 	ovr_rank: '54', 	pos_rank: '12', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.1, 	ruyd: 0.51, 	rutd: 0, 	rec: 5.73, 	reyd: 71.19, 	retd: 0.56, 	floor: 4.14, 	ceiling: 16.86, 	fpts: 13.4, 	cost: 6800, 	value: 1.97 }, 
{ name: 'Brandin Cooks', 	pos: ' WR', 	team: ' NO', 	opp_team: 'OAK', 	opp_rank: '17', 	ovr_rank: '55', 	pos_rank: '13', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.28, 	ruyd: 1.39, 	rutd: 0, 	rec: 5.58, 	reyd: 66.15, 	retd: 0.63, 	floor: 3.78, 	ceiling: 17.1, 	fpts: 13.24, 	cost: 7600, 	value: 1.74 }, 
{ name: 'DeSean Jackson ', 	pos: 'WR ', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '57', 	pos_rank: '14', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: -0.02, 	rutd: 0, 	rec: 4.99, 	reyd: 72.07, 	retd: 0.49, 	floor: 3.15, 	ceiling: 17.03, 	fpts: 12.6, 	cost: 6600, 	value: 1.91 }, 
{ name: 'Brandon Marshall ', 	pos: 'WR ', 	team: 'NYJ', 	opp_team: 'CIN', 	opp_rank: '13', 	ovr_rank: '59', 	pos_rank: '15', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.11, 	reyd: 68.88, 	retd: 0.54, 	floor: 4.48, 	ceiling: 15.52, 	fpts: 12.56, 	cost: 7700, 	value: 1.63 }, 
{ name: 'Eric Decker ', 	pos: 'WR ', 	team: 'NYJ', 	opp_team: 'CIN', 	opp_rank: '13', 	ovr_rank: '60', 	pos_rank: '16', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.69, 	reyd: 68.32, 	retd: 0.52, 	floor: 3.63, 	ceiling: 16.15, 	fpts: 12.22, 	cost: 6900, 	value: 1.77 }, 
{ name: 'Jordan Matthews ', 	pos: 'WR ', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '25', 	ovr_rank: '61', 	pos_rank: '17', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.82, 	reyd: 71.09, 	retd: 0.44, 	floor: 3.49, 	ceiling: 15.89, 	fpts: 12.62, 	cost: 6600, 	value: 1.91 }, 
{ name: 'Doug Baldwin ', 	pos: 'WR ', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '21', 	ovr_rank: '62', 	pos_rank: '18', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.04, 	ruyd: -0.06, 	rutd: 0, 	rec: 4.53, 	reyd: 60.61, 	retd: 0.59, 	floor: 2.72, 	ceiling: 16.52, 	fpts: 11.86, 	cost: 6700, 	value: 1.77 }, 
{ name: 'Allen Robinson ', 	pos: 'WR ', 	team: 'JAC', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '64', 	pos_rank: '19', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.73, 	reyd: 74.89, 	retd: 0.33, 	floor: 2.88, 	ceiling: 16.04, 	fpts: 11.82, 	cost: 8500, 	value: 1.39 }, 
{ name: 'Michael Floyd ', 	pos: 'WR ', 	team: 'ARI', 	opp_team: 'NE', 	opp_rank: '12', 	ovr_rank: '66', 	pos_rank: '20', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.18, 	reyd: 66.6, 	retd: 0.45, 	floor: 2.37, 	ceiling: 16.31, 	fpts: 11.41, 	cost: 6900, 	value: 1.65 }, 
{ name: 'Jarvis Landry ', 	pos: 'WR ', 	team: 'MIA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '69', 	pos_rank: '21', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.45, 	ruyd: 2.07, 	rutd: 0, 	rec: 6.15, 	reyd: 67.54, 	retd: 0.41, 	floor: 2.82, 	ceiling: 15.68, 	fpts: 12.3, 	cost: 6600, 	value: 1.86 }, 
{ name: 'Demaryius Thomas ', 	pos: 'WR ', 	team: 'DEN', 	opp_team: 'CAR', 	opp_rank: '7', 	ovr_rank: '71', 	pos_rank: '22', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.23, 	reyd: 61.32, 	retd: 0.49, 	floor: 3.73, 	ceiling: 14.31, 	fpts: 11.73, 	cost: 5000, 	value: 2.35 }, 
{ name: 'Julian Edelman', 	pos: ' WR', 	team: ' NE', 	opp_team: 'ARI', 	opp_rank: '6', 	ovr_rank: '73', 	pos_rank: '23', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.11, 	ruyd: 0.95, 	rutd: 0, 	rec: 5.87, 	reyd: 63.59, 	retd: 0.41, 	floor: 2.47, 	ceiling: 15.21, 	fpts: 11.8, 	cost: 7300, 	value: 1.62 }, 
{ name: 'Keenan Allen', 	pos: ' WR', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '2', 	ovr_rank: '75', 	pos_rank: '24', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 6.36, 	reyd: 68.06, 	retd: 0.33, 	floor: 1.93, 	ceiling: 15.55, 	fpts: 11.93, 	cost: 7400, 	value: 1.61 }, 
{ name: 'Donte Moncrief ', 	pos: 'WR ', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '26', 	ovr_rank: '77', 	pos_rank: '25', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.4, 	rutd: 0, 	rec: 4.19, 	reyd: 64.94, 	retd: 0.36, 	floor: 2.74, 	ceiling: 14.56, 	fpts: 10.73, 	cost: 6200, 	value: 1.73 }, 
{ name: 'Larry Fitzgerald ', 	pos: 'WR ', 	team: 'ARI', 	opp_team: 'NE', 	opp_rank: '12', 	ovr_rank: '78', 	pos_rank: '26', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.43, 	reyd: 66.52, 	retd: 0.34, 	floor: 3.02, 	ceiling: 14.22, 	fpts: 11.37, 	cost: 7200, 	value: 1.58 }, 
{ name: 'Kelvin Benjamin ', 	pos: 'WR ', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '1', 	ovr_rank: '79', 	pos_rank: '27', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.93, 	reyd: 66.82, 	retd: 0.33, 	floor: 2.05, 	ceiling: 15.15, 	fpts: 11.05, 	cost: 5000, 	value: 2.21 }, 
{ name: 'Michael Crabtree ', 	pos: 'WR ', 	team: 'OAK', 	opp_team: 'NO', 	opp_rank: '32', 	ovr_rank: '81', 	pos_rank: '28', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.89, 	reyd: 59.58, 	retd: 0.44, 	floor: 3.86, 	ceiling: 13.3, 	fpts: 11.04, 	cost: 6100, 	value: 1.81 }, 
{ name: 'Emmanuel Sanders ', 	pos: 'WR ', 	team: 'DEN', 	opp_team: 'CAR', 	opp_rank: '7', 	ovr_rank: '83', 	pos_rank: '29', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.07, 	ruyd: 0.26, 	rutd: 0, 	rec: 4.52, 	reyd: 64.55, 	retd: 0.35, 	floor: 2.81, 	ceiling: 14.15, 	fpts: 10.74, 	cost: 5000, 	value: 2.15 }, 
{ name: 'Golden Tate ', 	pos: 'WR ', 	team: 'DET', 	opp_team: 'IND', 	opp_rank: '20', 	ovr_rank: '84', 	pos_rank: '30', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.39, 	ruyd: 2.88, 	rutd: 0, 	rec: 6.4, 	reyd: 68.09, 	retd: 0.23, 	floor: 3.37, 	ceiling: 13.31, 	fpts: 11.52, 	cost: 6900, 	value: 1.67 }, 
{ name: 'Willie Snead', 	pos: ' WR', 	team: ' NO', 	opp_team: 'OAK', 	opp_rank: '17', 	ovr_rank: '85', 	pos_rank: '31', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.5, 	reyd: 57.24, 	retd: 0.44, 	floor: 1.77, 	ceiling: 14.83, 	fpts: 10.55, 	cost: 6400, 	value: 1.65 }, 
{ name: 'Allen Hurns ', 	pos: 'WR ', 	team: 'JAC', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '92', 	pos_rank: '32', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.77, 	reyd: 58.84, 	retd: 0.34, 	floor: 2.76, 	ceiling: 12.92, 	fpts: 9.75, 	cost: 7000, 	value: 1.39 }, 
{ name: 'Stefon Diggs ', 	pos: 'WR ', 	team: 'MIN', 	opp_team: 'TEN', 	opp_rank: '24', 	ovr_rank: '94', 	pos_rank: '33', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.12, 	ruyd: 0.47, 	rutd: 0, 	rec: 4.5, 	reyd: 54.25, 	retd: 0.37, 	floor: 1.09, 	ceiling: 14.19, 	fpts: 9.9, 	cost: 6300, 	value: 1.57 }, 
{ name: 'Alshon Jeffery ', 	pos: 'WR ', 	team: 'CHI', 	opp_team: 'HOU', 	opp_rank: '3', 	ovr_rank: '95', 	pos_rank: '34', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.09, 	rutd: 0, 	rec: 4.15, 	reyd: 59.33, 	retd: 0.28, 	floor: 1.95, 	ceiling: 13.23, 	fpts: 9.7, 	cost: 7500, 	value: 1.29 }, 
{ name: 'DeVante Parker ', 	pos: 'WR ', 	team: 'MIA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '96', 	pos_rank: '35', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.18, 	reyd: 54.89, 	retd: 0.36, 	floor: 0.91, 	ceiling: 14.23, 	fpts: 9.22, 	cost: 6000, 	value: 1.54 }, 
{ name: 'Laquon Treadwell ', 	pos: 'WR ', 	team: 'MIN', 	opp_team: 'TEN', 	opp_rank: '24', 	ovr_rank: '100', 	pos_rank: '36', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.96, 	reyd: 55.2, 	retd: 0.32, 	floor: 0.78, 	ceiling: 14.04, 	fpts: 9.42, 	cost: 5900, 	value: 1.6 }, 
{ name: 'Marvin Jones ', 	pos: 'WR ', 	team: 'DET', 	opp_team: 'IND', 	opp_rank: '20', 	ovr_rank: '104', 	pos_rank: '37', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.12, 	ruyd: 1.16, 	rutd: 0.02, 	rec: 4.45, 	reyd: 59.07, 	retd: 0.2, 	floor: 1.5, 	ceiling: 13.14, 	fpts: 9.55, 	cost: 5500, 	value: 1.74 }, 
{ name: 'John Brown ', 	pos: 'WR ', 	team: 'ARI', 	opp_team: 'NE', 	opp_rank: '12', 	ovr_rank: '106', 	pos_rank: '38', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.05, 	ruyd: 0.08, 	rutd: 0, 	rec: 4.01, 	reyd: 53.19, 	retd: 0.33, 	floor: 2.33, 	ceiling: 12.15, 	fpts: 9.25, 	cost: 6500, 	value: 1.42 }, 
{ name: 'Markus Wheaton ', 	pos: 'WR ', 	team: 'PIT', 	opp_team: 'WSH', 	opp_rank: '15', 	ovr_rank: '108', 	pos_rank: '39', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.36, 	reyd: 48.11, 	retd: 0.38, 	floor: 2.05, 	ceiling: 12.11, 	fpts: 8.73, 	cost: 6100, 	value: 1.43 }, 
{ name: 'Vincent Jackson', 	pos: ' WR', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '19', 	ovr_rank: '112', 	pos_rank: '40', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.92, 	reyd: 51.94, 	retd: 0.29, 	floor: 0.47, 	ceiling: 13.35, 	fpts: 8.45, 	cost: 5900, 	value: 1.43 }, 
{ name: 'Corey Coleman ', 	pos: 'WR ', 	team: 'CLE', 	opp_team: 'PHI', 	opp_rank: '16', 	ovr_rank: '114', 	pos_rank: '41', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4, 	reyd: 56.11, 	retd: 0.21, 	floor: 1.61, 	ceiling: 12.05, 	fpts: 8.83, 	cost: 6500, 	value: 1.36 }, 
{ name: 'Torrey Smith', 	pos: ' WR', 	team: ' SF', 	opp_team: 'LA', 	opp_rank: '8', 	ovr_rank: '117', 	pos_rank: '42', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.06, 	reyd: 47.4, 	retd: 0.34, 	floor: 1.24, 	ceiling: 12.34, 	fpts: 8.35, 	cost: 5600, 	value: 1.49 }, 
{ name: 'Terrance Williams ', 	pos: 'WR ', 	team: 'DAL', 	opp_team: 'NYG', 	opp_rank: '30', 	ovr_rank: '118', 	pos_rank: '43', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.73, 	reyd: 45.93, 	retd: 0.34, 	floor: 0.43, 	ceiling: 12.99, 	fpts: 8.06, 	cost: 5300, 	value: 1.52 }, 
{ name: 'Sterling Shepard ', 	pos: 'WR ', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '23', 	ovr_rank: '121', 	pos_rank: '44', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.59, 	reyd: 48.48, 	retd: 0.27, 	floor: 0.73, 	ceiling: 12.35, 	fpts: 8.34, 	cost: 5600, 	value: 1.49 }, 
{ name: 'Kamar Aiken ', 	pos: 'WR ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '124', 	pos_rank: '45', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.71, 	reyd: 49.4, 	retd: 0.26, 	floor: 2.55, 	ceiling: 10.39, 	fpts: 8.32, 	cost: 6300, 	value: 1.32 }, 
{ name: 'Tavon Austin', 	pos: ' WR', 	team: ' LA', 	opp_team: 'SF', 	opp_rank: '27', 	ovr_rank: '126', 	pos_rank: '46', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 1.3, 	ruyd: 9.58, 	rutd: 0.1, 	rec: 3.7, 	reyd: 41.98, 	retd: 0.12, 	floor: 0.63, 	ceiling: 12.19, 	fpts: 8.27, 	cost: 6400, 	value: 1.29 }, 
{ name: 'Steve Smith ', 	pos: 'WR ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '127', 	pos_rank: '47', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.33, 	reyd: 47.43, 	retd: 0.27, 	floor: 1.9, 	ceiling: 10.86, 	fpts: 8.03, 	cost: 6700, 	value: 1.2 }, 
{ name: 'Tyler Lockett ', 	pos: 'WR ', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '21', 	ovr_rank: '128', 	pos_rank: '48', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.11, 	ruyd: 1.04, 	rutd: 0, 	rec: 3.32, 	reyd: 49.35, 	retd: 0.23, 	floor: 2.04, 	ceiling: 10.68, 	fpts: 8.08, 	cost: 6200, 	value: 1.3 }, 
{ name: 'Rishard Matthews ', 	pos: 'WR ', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '11', 	ovr_rank: '129', 	pos_rank: '49', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.06, 	rutd: 0, 	rec: 3.4, 	reyd: 45.13, 	retd: 0.3, 	floor: 2.24, 	ceiling: 10.36, 	fpts: 8.02, 	cost: 5200, 	value: 1.54 }, 
{ name: 'Phillip Dorsett ', 	pos: 'WR ', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '26', 	ovr_rank: '134', 	pos_rank: '50', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.24, 	ruyd: -0.06, 	rutd: 0, 	rec: 3.7, 	reyd: 41.06, 	retd: 0.26, 	floor: 0, 	ceiling: 12.1, 	fpts: 7.51, 	cost: 5400, 	value: 1.39 }, 
{ name: 'Will Fuller ', 	pos: 'WR ', 	team: 'HOU', 	opp_team: 'CHI', 	opp_rank: '31', 	ovr_rank: '135', 	pos_rank: '51', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.1, 	reyd: 43.79, 	retd: 0.21, 	floor: 1.11, 	ceiling: 10.19, 	fpts: 7.19, 	cost: 5000, 	value: 1.44 }, 
{ name: 'Jermaine Kearse ', 	pos: 'WR ', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '21', 	ovr_rank: '136', 	pos_rank: '52', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.14, 	rutd: 0, 	rec: 3.45, 	reyd: 44.4, 	retd: 0.21, 	floor: 1.82, 	ceiling: 9.46, 	fpts: 7.38, 	cost: 5400, 	value: 1.37 }, 
{ name: 'Devin Funchess ', 	pos: 'WR ', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '1', 	ovr_rank: '137', 	pos_rank: '53', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.97, 	reyd: 41.25, 	retd: 0.24, 	floor: 0.45, 	ceiling: 10.79, 	fpts: 7.09, 	cost: 5000, 	value: 1.42 }, 
{ name: 'Travis Benjamin', 	pos: ' WR', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '2', 	ovr_rank: '138', 	pos_rank: '54', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.06, 	ruyd: 0.12, 	rutd: 0, 	rec: 3.63, 	reyd: 43.8, 	retd: 0.22, 	floor: 0.87, 	ceiling: 10.31, 	fpts: 7.41, 	cost: 5600, 	value: 1.32 }, 
{ name: 'Mohamed Sanu ', 	pos: 'WR ', 	team: 'ATL', 	opp_team: 'TB', 	opp_rank: '22', 	ovr_rank: '139', 	pos_rank: '55', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.03, 	ruyd: 0.23, 	rutd: 0, 	rec: 3.36, 	reyd: 35.81, 	retd: 0.32, 	floor: 1.28, 	ceiling: 9.76, 	fpts: 7.2, 	cost: 5800, 	value: 1.24 }, 
{ name: 'Michael Thomas', 	pos: ' WR', 	team: ' NO', 	opp_team: 'OAK', 	opp_rank: '17', 	ovr_rank: '142', 	pos_rank: '56', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.6, 	reyd: 36.08, 	retd: 0.3, 	floor: 0, 	ceiling: 11.57, 	fpts: 6.75, 	cost: 4900, 	value: 1.38 }, 
{ name: 'Pierre Garcon ', 	pos: 'WR ', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '143', 	pos_rank: '57', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.88, 	reyd: 44.05, 	retd: 0.17, 	floor: 1.49, 	ceiling: 9.39, 	fpts: 7.41, 	cost: 6300, 	value: 1.18 }, 
{ name: 'Brandon LaFell ', 	pos: 'WR ', 	team: 'CIN', 	opp_team: 'NYJ', 	opp_rank: '5', 	ovr_rank: '145', 	pos_rank: '58', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.1, 	ruyd: -0.03, 	rutd: 0, 	rec: 3.58, 	reyd: 41.55, 	retd: 0.21, 	floor: 0.43, 	ceiling: 10.29, 	fpts: 7.16, 	cost: 6000, 	value: 1.19 }, 
{ name: 'Mike Wallace ', 	pos: 'WR ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '146', 	pos_rank: '59', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.07, 	ruyd: 0.33, 	rutd: 0, 	rec: 3.08, 	reyd: 37.95, 	retd: 0.23, 	floor: 0.77, 	ceiling: 9.73, 	fpts: 6.79, 	cost: 5400, 	value: 1.26 }, 
{ name: 'Kenny Britt', 	pos: ' WR', 	team: ' LA', 	opp_team: 'SF', 	opp_rank: '27', 	ovr_rank: '148', 	pos_rank: '60', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.24, 	reyd: 39.92, 	retd: 0.21, 	floor: 0.39, 	ceiling: 10.09, 	fpts: 6.37, 	cost: 5300, 	value: 1.2 }, 
{ name: 'Danny Amendola', 	pos: ' WR', 	team: ' NE', 	opp_team: 'ARI', 	opp_rank: '6', 	ovr_rank: '155', 	pos_rank: '61', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.03, 	ruyd: 0.17, 	rutd: 0, 	rec: 3.58, 	reyd: 36.45, 	retd: 0.18, 	floor: 1.17, 	ceiling: 8.33, 	fpts: 6.54, 	cost: 6000, 	value: 1.09 }, 
{ name: 'Sammie Coates ', 	pos: 'WR ', 	team: 'PIT', 	opp_team: 'WSH', 	opp_rank: '15', 	ovr_rank: '157', 	pos_rank: '62', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.05, 	ruyd: 0.49, 	rutd: 0, 	rec: 3.08, 	reyd: 37.87, 	retd: 0.16, 	floor: 0, 	ceiling: 11.53, 	fpts: 6.24, 	cost: 5200, 	value: 1.2 }, 
{ name: 'Nelson Agholor ', 	pos: 'WR ', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '25', 	ovr_rank: '161', 	pos_rank: '63', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.28, 	reyd: 39.48, 	retd: 0.12, 	floor: 0.52, 	ceiling: 8.7, 	fpts: 6.27, 	cost: 5400, 	value: 1.16 }, 
{ name: 'Cecil Shorts ', 	pos: 'WR ', 	team: 'HOU', 	opp_team: 'CHI', 	opp_rank: '31', 	ovr_rank: '163', 	pos_rank: '64', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.15, 	ruyd: 1.01, 	rutd: 0, 	rec: 3.6, 	reyd: 38.32, 	retd: 0.14, 	floor: 0, 	ceiling: 9.44, 	fpts: 6.39, 	cost: 5200, 	value: 1.23 }, 
{ name: 'Breshad Perriman ', 	pos: 'WR ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '165', 	pos_rank: '65', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.08, 	reyd: 37.47, 	retd: 0.13, 	floor: 0.93, 	ceiling: 8.09, 	fpts: 6.05, 	cost: 4800, 	value: 1.26 }, 
{ name: 'Victor Cruz ', 	pos: 'WR ', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '23', 	ovr_rank: '166', 	pos_rank: '66', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.64, 	reyd: 34.77, 	retd: 0.17, 	floor: 0, 	ceiling: 9.7, 	fpts: 5.82, 	cost: 5300, 	value: 1.1 }, 
{ name: 'Chris Conley', 	pos: ' WR', 	team: ' KC', 	opp_team: 'SD', 	opp_rank: '28', 	ovr_rank: '167', 	pos_rank: '67', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.03, 	ruyd: 0.15, 	rutd: 0, 	rec: 2.64, 	reyd: 36.21, 	retd: 0.14, 	floor: 0, 	ceiling: 9.63, 	fpts: 5.8, 	cost: 4600, 	value: 1.26 }, 
{ name: 'Jamison Crowder ', 	pos: 'WR ', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '170', 	pos_rank: '68', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.14, 	rutd: 0, 	rec: 3.06, 	reyd: 31.81, 	retd: 0.19, 	floor: 0, 	ceiling: 8.57, 	fpts: 5.83, 	cost: 5100, 	value: 1.14 }, 
{ name: 'Robert Woods ', 	pos: 'WR ', 	team: 'BUF', 	opp_team: 'BAL', 	opp_rank: '10', 	ovr_rank: '173', 	pos_rank: '69', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.11, 	reyd: 33.58, 	retd: 0.15, 	floor: 0.67, 	ceiling: 7.67, 	fpts: 5.71, 	cost: 5500, 	value: 1.04 }, 
{ name: 'Rueben Randle ', 	pos: 'WR ', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '25', 	ovr_rank: '174', 	pos_rank: '70', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.26, 	reyd: 32.75, 	retd: 0.15, 	floor: 0.96, 	ceiling: 7.36, 	fpts: 5.27, 	cost: 5300, 	value: 0.99 }, 
{ name: 'Kevin White ', 	pos: 'WR ', 	team: 'CHI', 	opp_team: 'HOU', 	opp_rank: '3', 	ovr_rank: '178', 	pos_rank: '71', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.88, 	reyd: 31.69, 	retd: 0.15, 	floor: 0, 	ceiling: 8.45, 	fpts: 5.51, 	cost: 6000, 	value: 0.92 }, 
{ name: 'Tyler Boyd ', 	pos: 'WR ', 	team: 'CIN', 	opp_team: 'NYJ', 	opp_rank: '5', 	ovr_rank: '180', 	pos_rank: '72', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.52, 	reyd: 30.76, 	retd: 0.13, 	floor: 0, 	ceiling: 7.91, 	fpts: 5.16, 	cost: 5600, 	value: 0.92 }, 
{ name: 'Dorial Green-Beckham ', 	pos: 'WR ', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '25', 	ovr_rank: '181', 	pos_rank: '73', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 1.63, 	reyd: 27.5, 	retd: 0.17, 	floor: 0, 	ceiling: 7.93, 	fpts: 4.65, 	cost: 4900, 	value: 0.95 }, 
{ name: 'Kendall Wright ', 	pos: 'WR ', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '11', 	ovr_rank: '182', 	pos_rank: '74', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.07, 	ruyd: 0.32, 	rutd: 0, 	rec: 2.77, 	reyd: 30.38, 	retd: 0.12, 	floor: 0.61, 	ceiling: 7.03, 	fpts: 5.22, 	cost: 5400, 	value: 0.97 }, 
{ name: 'Josh Doctson ', 	pos: 'WR ', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '184', 	pos_rank: '75', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.61, 	reyd: 30.59, 	retd: 0.13, 	floor: 0, 	ceiling: 7.71, 	fpts: 5.08, 	cost: 4800, 	value: 1.06 }, 
{ name: 'Louis Murphy', 	pos: ' WR', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '19', 	ovr_rank: '186', 	pos_rank: '76', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 1.33, 	reyd: 23.01, 	retd: 0.22, 	floor: 0, 	ceiling: 7.88, 	fpts: 4.29, 	cost: 4900, 	value: 0.88 }, 
{ name: 'Ted Ginn Jr. ', 	pos: 'WR ', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '1', 	ovr_rank: '187', 	pos_rank: '77', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.06, 	ruyd: 0.77, 	rutd: 0, 	rec: 1.97, 	reyd: 27.6, 	retd: 0.14, 	floor: 0.34, 	ceiling: 6.94, 	fpts: 4.62, 	cost: 5000, 	value: 0.92 }, 
{ name: 'James Jones', 	pos: ' WR', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '2', 	ovr_rank: '188', 	pos_rank: '78', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 1.58, 	reyd: 24.66, 	retd: 0.18, 	floor: 0.51, 	ceiling: 6.75, 	fpts: 4.42, 	cost: 5000, 	value: 0.88 }, 
{ name: 'Dontrelle Inman', 	pos: ' WR', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '2', 	ovr_rank: '191', 	pos_rank: '79', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 1.8, 	reyd: 25.99, 	retd: 0.14, 	floor: 0, 	ceiling: 7.59, 	fpts: 4.34, 	cost: 5100, 	value: 0.85 }, 
{ name: 'Paul Richardson ', 	pos: 'WR ', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '21', 	ovr_rank: '193', 	pos_rank: '80', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 1.77, 	reyd: 23.54, 	retd: 0.17, 	floor: 0.32, 	ceiling: 6.44, 	fpts: 4.26, 	cost: 4800, 	value: 0.89 }, 
{ name: 'Kenny Bell', 	pos: ' WR', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '19', 	ovr_rank: '194', 	pos_rank: '81', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 1.56, 	reyd: 22.48, 	retd: 0.17, 	floor: 0, 	ceiling: 6.77, 	fpts: 4.11, 	cost: 4700, 	value: 0.87 }, 
{ name: 'Pharoh Cooper', 	pos: ' WR', 	team: ' LA', 	opp_team: 'SF', 	opp_rank: '27', 	ovr_rank: '195', 	pos_rank: '82', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 1.82, 	reyd: 24.35, 	retd: 0.14, 	floor: 0.12, 	ceiling: 6.48, 	fpts: 4.19, 	cost: 4700, 	value: 0.89 }, 
{ name: 'Kenny Stills ', 	pos: 'WR ', 	team: 'MIA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '196', 	pos_rank: '83', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.09, 	reyd: 26.08, 	retd: 0.11, 	floor: 0.8, 	ceiling: 5.68, 	fpts: 4.25, 	cost: 4900, 	value: 0.87 }, 
{ name: 'Philly Brown ', 	pos: 'WR ', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '1', 	ovr_rank: '198', 	pos_rank: '84', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.03, 	ruyd: 0.13, 	rutd: 0, 	rec: 1.92, 	reyd: 28.12, 	retd: 0.07, 	floor: 0.01, 	ceiling: 6.45, 	fpts: 4.19, 	cost: 5000, 	value: 0.84 }, 
{ name: 'Tajae Sharpe ', 	pos: 'WR ', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '11', 	ovr_rank: '201', 	pos_rank: '85', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.44, 	reyd: 29.86, 	retd: 0.04, 	floor: 0, 	ceiling: 6.49, 	fpts: 4.37, 	cost: 5000, 	value: 0.87 }, 
{ name: 'Bruce Ellington', 	pos: ' WR', 	team: ' SF', 	opp_team: 'LA', 	opp_rank: '8', 	ovr_rank: '202', 	pos_rank: '86', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.04, 	ruyd: 0.37, 	rutd: 0, 	rec: 2.88, 	reyd: 28.04, 	retd: 0.07, 	floor: 0.06, 	ceiling: 6.16, 	fpts: 4.54, 	cost: 4700, 	value: 0.97 }, 
{ name: 'Dwayne Harris ', 	pos: 'WR ', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '23', 	ovr_rank: '204', 	pos_rank: '87', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.09, 	ruyd: 0.37, 	rutd: 0, 	rec: 2.01, 	reyd: 24.84, 	retd: 0.1, 	floor: 0.74, 	ceiling: 5.42, 	fpts: 4.11, 	cost: 4800, 	value: 0.86 }, 
{ name: 'Jarius Wright ', 	pos: 'WR ', 	team: 'MIN', 	opp_team: 'TEN', 	opp_rank: '24', 	ovr_rank: '205', 	pos_rank: '88', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.05, 	ruyd: 0.9, 	rutd: 0, 	rec: 1.78, 	reyd: 22.53, 	retd: 0.11, 	floor: 0, 	ceiling: 6.12, 	fpts: 4.01, 	cost: 4900, 	value: 0.82 }, 
{ name: 'Eddie Royal ', 	pos: 'WR ', 	team: 'CHI', 	opp_team: 'HOU', 	opp_rank: '3', 	ovr_rank: '205', 	pos_rank: '88', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.06, 	ruyd: 0.69, 	rutd: 0, 	rec: 3.05, 	reyd: 26.6, 	retd: 0.08, 	floor: 0.19, 	ceiling: 5.93, 	fpts: 4.61, 	cost: 5100, 	value: 0.9 }, 
																						
																						
																						
{ name: 'Rob Gronkowski', 	pos: ' TE', 	team: ' NE', 	opp_team: 'ARI', 	opp_rank: '6', 	ovr_rank: '53', 	pos_rank: '1', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.18, 	reyd: 63.64, 	retd: 0.7, 	floor: 3.77, 	ceiling: 17.33, 	fpts: 13.11, 	cost: 8700, 	value: 1.51 }, 
{ name: 'Travis Kelce', 	pos: ' TE', 	team: ' KC', 	opp_team: 'SD', 	opp_rank: '28', 	ovr_rank: '72', 	pos_rank: '2', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.72, 	reyd: 57.7, 	retd: 0.53, 	floor: 3.52, 	ceiling: 14.42, 	fpts: 11.31, 	cost: 6400, 	value: 1.77 }, 
{ name: 'Greg Olsen ', 	pos: 'TE ', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '1', 	ovr_rank: '80', 	pos_rank: '3', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.17, 	reyd: 59.16, 	retd: 0.45, 	floor: 3.08, 	ceiling: 14.08, 	fpts: 11.16, 	cost: 5000, 	value: 2.23 }, 
{ name: 'Tyler Eifert ', 	pos: 'TE ', 	team: 'CIN', 	opp_team: 'NYJ', 	opp_rank: '5', 	ovr_rank: '81', 	pos_rank: '4', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.34, 	reyd: 54.91, 	retd: 0.53, 	floor: 1.21, 	ceiling: 15.93, 	fpts: 10.74, 	cost: 6300, 	value: 1.7 }, 
{ name: 'Coby Fleener', 	pos: ' TE', 	team: ' NO', 	opp_team: 'OAK', 	opp_rank: '17', 	ovr_rank: '98', 	pos_rank: '5', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.88, 	reyd: 46.45, 	retd: 0.47, 	floor: 2.14, 	ceiling: 12.78, 	fpts: 9.96, 	cost: 5400, 	value: 1.84 }, 
{ name: 'Delanie Walker ', 	pos: 'TE ', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '11', 	ovr_rank: '103', 	pos_rank: '6', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.6, 	rutd: 0, 	rec: 4.6, 	reyd: 53.86, 	retd: 0.31, 	floor: 2.68, 	ceiling: 11.98, 	fpts: 9.61, 	cost: 6500, 	value: 1.48 }, 
{ name: 'Antonio Gates', 	pos: ' TE', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '2', 	ovr_rank: '105', 	pos_rank: '7', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.26, 	reyd: 49.27, 	retd: 0.41, 	floor: 1.68, 	ceiling: 12.88, 	fpts: 9.44, 	cost: 6200, 	value: 1.52 }, 
{ name: 'Ladarius Green ', 	pos: 'TE ', 	team: 'PIT', 	opp_team: 'WSH', 	opp_rank: '15', 	ovr_rank: '110', 	pos_rank: '8', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.76, 	reyd: 41.12, 	retd: 0.47, 	floor: 0.27, 	ceiling: 13.63, 	fpts: 8.81, 	cost: 5100, 	value: 1.73 }, 
{ name: 'Zach Ertz ', 	pos: 'TE ', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '25', 	ovr_rank: '111', 	pos_rank: '9', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.52, 	reyd: 50.68, 	retd: 0.31, 	floor: 3.04, 	ceiling: 10.78, 	fpts: 9.15, 	cost: 5700, 	value: 1.61 }, 
{ name: 'Gary Barnidge ', 	pos: 'TE ', 	team: 'CLE', 	opp_team: 'PHI', 	opp_rank: '16', 	ovr_rank: '112', 	pos_rank: '10', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.44, 	reyd: 42.76, 	retd: 0.44, 	floor: 0.71, 	ceiling: 13.07, 	fpts: 8.64, 	cost: 6300, 	value: 1.37 }, 
{ name: 'Jimmy Graham ', 	pos: 'TE ', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '21', 	ovr_rank: '115', 	pos_rank: '11', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.53, 	reyd: 52.12, 	retd: 0.27, 	floor: 1.38, 	ceiling: 12.22, 	fpts: 9.06, 	cost: 6100, 	value: 1.49 }, 
{ name: 'Jordan Reed ', 	pos: 'TE ', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '121', 	pos_rank: '12', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.82, 	reyd: 49.32, 	retd: 0.29, 	floor: 1.82, 	ceiling: 11.18, 	fpts: 8.92, 	cost: 7400, 	value: 1.21 }, 
{ name: 'Jason Witten ', 	pos: 'TE ', 	team: 'DAL', 	opp_team: 'NYG', 	opp_rank: '30', 	ovr_rank: '122', 	pos_rank: '13', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.54, 	reyd: 47.6, 	retd: 0.3, 	floor: 1.24, 	ceiling: 11.72, 	fpts: 8.77, 	cost: 5500, 	value: 1.59 }, 
{ name: 'Dwayne Allen ', 	pos: 'TE ', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '26', 	ovr_rank: '130', 	pos_rank: '14', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.7, 	reyd: 41.05, 	retd: 0.33, 	floor: 0, 	ceiling: 12.89, 	fpts: 7.94, 	cost: 5500, 	value: 1.44 }, 
{ name: 'Austin Seferian-Jenkins', 	pos: ' TE', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '19', 	ovr_rank: '145', 	pos_rank: '15', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.27, 	reyd: 30.61, 	retd: 0.36, 	floor: 0, 	ceiling: 11.18, 	fpts: 6.36, 	cost: 5400, 	value: 1.18 }, 
{ name: 'Eric Ebron ', 	pos: 'TE ', 	team: 'DET', 	opp_team: 'IND', 	opp_rank: '20', 	ovr_rank: '146', 	pos_rank: '16', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.06, 	reyd: 33.98, 	retd: 0.3, 	floor: 1.22, 	ceiling: 9.22, 	fpts: 6.73, 	cost: 5100, 	value: 1.32 }, 
{ name: 'Julius Thomas ', 	pos: 'TE ', 	team: 'JAC', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '147', 	pos_rank: '17', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.23, 	reyd: 37.26, 	retd: 0.25, 	floor: 1.09, 	ceiling: 9.33, 	fpts: 6.84, 	cost: 5800, 	value: 1.18 }, 
{ name: 'Charles Clay ', 	pos: 'TE ', 	team: 'BUF', 	opp_team: 'BAL', 	opp_rank: '10', 	ovr_rank: '150', 	pos_rank: '18', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.91, 	reyd: 36.33, 	retd: 0.21, 	floor: 1.08, 	ceiling: 8.62, 	fpts: 6.81, 	cost: 5000, 	value: 1.36 }, 
{ name: 'Ryan Griffin ', 	pos: 'TE ', 	team: 'HOU', 	opp_team: 'CHI', 	opp_rank: '31', 	ovr_rank: '155', 	pos_rank: '19', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.04, 	reyd: 25.26, 	retd: 0.36, 	floor: 0, 	ceiling: 9.56, 	fpts: 5.71, 	cost: 4700, 	value: 1.21 }, 
{ name: 'Zach Miller ', 	pos: 'TE ', 	team: 'CHI', 	opp_team: 'HOU', 	opp_rank: '3', 	ovr_rank: '160', 	pos_rank: '20', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.12, 	reyd: 37.84, 	retd: 0.13, 	floor: 1.41, 	ceiling: 7.75, 	fpts: 6.12, 	cost: 5300, 	value: 1.15 }, 
{ name: 'Martellus Bennett', 	pos: ' TE', 	team: ' NE', 	opp_team: 'ARI', 	opp_rank: '6', 	ovr_rank: '162', 	pos_rank: '21', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.81, 	reyd: 35.21, 	retd: 0.22, 	floor: 0, 	ceiling: 9.24, 	fpts: 6.47, 	cost: 5100, 	value: 1.27 }, 
{ name: 'Jacob Tamme ', 	pos: 'TE ', 	team: 'ATL', 	opp_team: 'TB', 	opp_rank: '22', 	ovr_rank: '166', 	pos_rank: '22', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.57, 	reyd: 27.38, 	retd: 0.28, 	floor: 1.07, 	ceiling: 7.75, 	fpts: 5.7, 	cost: 5000, 	value: 1.14 }, 
{ name: 'Jared Cook', 	pos: ' TE', 	team: ' GB', 	opp_team: 'JAC', 	opp_rank: '29', 	ovr_rank: '170', 	pos_rank: '23', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.54, 	reyd: 27.94, 	retd: 0.24, 	floor: 0.55, 	ceiling: 7.89, 	fpts: 5.46, 	cost: 5300, 	value: 1.03 }, 
{ name: 'Jordan Cameron ', 	pos: 'TE ', 	team: 'MIA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '171', 	pos_rank: '24', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.19, 	reyd: 33.74, 	retd: 0.15, 	floor: 0.48, 	ceiling: 7.94, 	fpts: 5.79, 	cost: 5000, 	value: 1.16 }, 
{ name: 'Clive Walford ', 	pos: 'TE ', 	team: 'OAK', 	opp_team: 'NO', 	opp_rank: '32', 	ovr_rank: '174', 	pos_rank: '25', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.35, 	reyd: 25.34, 	retd: 0.27, 	floor: 0.69, 	ceiling: 7.61, 	fpts: 5.33, 	cost: 4700, 	value: 1.13 }, 
{ name: 'Will Tye ', 	pos: 'TE ', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '23', 	ovr_rank: '175', 	pos_rank: '26', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.89, 	reyd: 31.57, 	retd: 0.19, 	floor: 0.66, 	ceiling: 7.58, 	fpts: 5.58, 	cost: 5200, 	value: 1.07 }, 
{ name: 'Kyle Rudolph ', 	pos: 'TE ', 	team: 'MIN', 	opp_team: 'TEN', 	opp_rank: '24', 	ovr_rank: '176', 	pos_rank: '27', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.92, 	reyd: 29.4, 	retd: 0.19, 	floor: 0.63, 	ceiling: 7.57, 	fpts: 5.54, 	cost: 5300, 	value: 1.05 }, 
{ name: 'Benjamin Watson ', 	pos: 'TE ', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '18', 	ovr_rank: '178', 	pos_rank: '28', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.51, 	reyd: 30.33, 	retd: 0.18, 	floor: 1.19, 	ceiling: 6.93, 	fpts: 5.31, 	cost: 5300, 	value: 1 }, 
																						
																						
																						
{ name: 'Seattle D/ST', 	pos: 'D/ST', 	team: 'SEA', 	opp_team: 'MIA', 	opp_rank: '22', 	ovr_rank: '1', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.38, 	ceiling: 22.6, 	fpts: 10.6, 	cost: 5000, 	value: 2.12 }, 
{ name: 'Kansas City D/S', 	pos: 'D/ST', 	team: ' KC', 	opp_team: 'SD', 	opp_rank: '15', 	ovr_rank: '2', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.54, 	ceiling: 21.42, 	fpts: 10.54, 	cost: 5100, 	value: 2.07 }, 
{ name: 'Los Angeles D/S', 	pos: 'D/ST', 	team: ' LA', 	opp_team: 'SF', 	opp_rank: '26', 	ovr_rank: '3', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.35, 	ceiling: 20.13, 	fpts: 10.44, 	cost: 5000, 	value: 2.09 }, 
{ name: 'Houston D/ST', 	pos: 'D/ST', 	team: 'HOU', 	opp_team: 'CHI', 	opp_rank: '19', 	ovr_rank: '4', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.83, 	ceiling: 20.47, 	fpts: 9.62, 	cost: 4900, 	value: 1.96 }, 
{ name: 'Green Bay D/S', 	pos: 'D/ST', 	team: ' GB', 	opp_team: 'JAC', 	opp_rank: '31', 	ovr_rank: '5', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 5.08, 	ceiling: 18.06, 	fpts: 9.76, 	cost: 4300, 	value: 2.27 }, 
{ name: 'Cincinnati D/ST', 	pos: 'D/ST', 	team: 'CIN', 	opp_team: 'NYJ', 	opp_rank: '24', 	ovr_rank: '6', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.47, 	ceiling: 18.93, 	fpts: 9.4, 	cost: 4600, 	value: 2.04 }, 
{ name: 'Carolina D/ST', 	pos: 'D/ST', 	team: 'CAR', 	opp_team: 'DEN', 	opp_rank: '30', 	ovr_rank: '7', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.7, 	ceiling: 18.8, 	fpts: 9.44, 	cost: 5000, 	value: 1.89 }, 
{ name: 'Buffalo D/ST', 	pos: 'D/ST', 	team: 'BUF', 	opp_team: 'BAL', 	opp_rank: '29', 	ovr_rank: '8', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.48, 	ceiling: 18.98, 	fpts: 9.16, 	cost: 4500, 	value: 2.04 }, 
{ name: 'San Francisco D/S', 	pos: 'D/ST', 	team: ' SF', 	opp_team: 'LA', 	opp_rank: '28', 	ovr_rank: '9', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.56, 	ceiling: 17.16, 	fpts: 9.04, 	cost: 4400, 	value: 2.05 }, 
{ name: 'Minnesota D/ST', 	pos: 'D/ST', 	team: 'MIN', 	opp_team: 'TEN', 	opp_rank: '32', 	ovr_rank: '10', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.04, 	ceiling: 16.02, 	fpts: 8.84, 	cost: 4600, 	value: 1.92 }, 
{ name: 'Atlanta D/ST', 	pos: 'D/ST', 	team: 'ATL', 	opp_team: 'TB', 	opp_rank: '12', 	ovr_rank: '11', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.01, 	ceiling: 17.97, 	fpts: 8.46, 	cost: 4200, 	value: 2.01 }, 
{ name: 'Philadelphia D/ST', 	pos: 'D/ST', 	team: 'PHI', 	opp_team: 'CLE', 	opp_rank: '23', 	ovr_rank: '12', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.05, 	ceiling: 15.85, 	fpts: 8.14, 	cost: 4800, 	value: 1.7 }, 
{ name: 'Detroit D/ST', 	pos: 'D/ST', 	team: 'DET', 	opp_team: 'IND', 	opp_rank: '10', 	ovr_rank: '13', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.95, 	ceiling: 15.59, 	fpts: 8.38, 	cost: 4300, 	value: 1.95 }, 
{ name: 'Indianapolis D/ST', 	pos: 'D/ST', 	team: 'IND', 	opp_team: 'DET', 	opp_rank: '18', 	ovr_rank: '14', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.97, 	ceiling: 16.37, 	fpts: 8.48, 	cost: 4400, 	value: 1.93 }, 
{ name: 'Denver D/ST', 	pos: 'D/ST', 	team: 'DEN', 	opp_team: 'CAR', 	opp_rank: '7', 	ovr_rank: '15', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.56, 	ceiling: 14.76, 	fpts: 7.94, 	cost: 5000, 	value: 1.59 }, 
{ name: 'Pittsburgh D/ST', 	pos: 'D/ST', 	team: 'PIT', 	opp_team: 'WSH', 	opp_rank: '11', 	ovr_rank: '16', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.75, 	ceiling: 16.01, 	fpts: 7.23, 	cost: 4600, 	value: 1.57 }, 
{ name: 'Cleveland D/ST', 	pos: 'D/ST', 	team: 'CLE', 	opp_team: 'PHI', 	opp_rank: '25', 	ovr_rank: '17', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.6, 	ceiling: 13.84, 	fpts: 7.13, 	cost: 4000, 	value: 1.78 }, 
{ name: 'Tennessee D/ST', 	pos: 'D/ST', 	team: 'TEN', 	opp_team: 'MIN', 	opp_rank: '16', 	ovr_rank: '18', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.02, 	ceiling: 13.58, 	fpts: 6.94, 	cost: 4100, 	value: 1.69 }, 
{ name: 'Dallas D/ST', 	pos: 'D/ST', 	team: 'DAL', 	opp_team: 'NYG', 	opp_rank: '14', 	ovr_rank: '19', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.72, 	ceiling: 13.84, 	fpts: 6.95, 	cost: 4400, 	value: 1.58 }, 
{ name: 'Chicago D/ST', 	pos: 'D/ST', 	team: 'CHI', 	opp_team: 'HOU', 	opp_rank: '27', 	ovr_rank: '19', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.8, 	ceiling: 12.76, 	fpts: 7.18, 	cost: 4300, 	value: 1.67 }, 
{ name: 'Arizona D/ST', 	pos: 'D/ST', 	team: 'ARI', 	opp_team: 'NE', 	opp_rank: '1', 	ovr_rank: '20', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.59, 	ceiling: 12.79, 	fpts: 7.1, 	cost: 5000, 	value: 1.42 }, 
{ name: 'New England D/S', 	pos: 'D/ST', 	team: ' NE', 	opp_team: 'ARI', 	opp_rank: '6', 	ovr_rank: '21', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.02, 	ceiling: 12.86, 	fpts: 7, 	cost: 4400, 	value: 1.59 }, 
{ name: 'New York Jets D/ST', 	pos: 'D/ST', 	team: 'NYJ', 	opp_team: 'CIN', 	opp_rank: '4', 	ovr_rank: '22', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.65, 	ceiling: 13.21, 	fpts: 6.72, 	cost: 4500, 	value: 1.49 }, 
{ name: 'Jacksonville D/ST', 	pos: 'D/ST', 	team: 'JAC', 	opp_team: 'GB', 	opp_rank: '9', 	ovr_rank: '23', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.33, 	ceiling: 13.51, 	fpts: 7.1, 	cost: 4100, 	value: 1.73 }, 
{ name: 'Tampa Bay D/S', 	pos: 'D/ST', 	team: ' TB', 	opp_team: 'ATL', 	opp_rank: '17', 	ovr_rank: '24', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.38, 	ceiling: 12.18, 	fpts: 6.92, 	cost: 4200, 	value: 1.65 }, 
{ name: 'Baltimore D/ST', 	pos: 'D/ST', 	team: 'BAL', 	opp_team: 'BUF', 	opp_rank: '8', 	ovr_rank: '25', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.35, 	ceiling: 11.59, 	fpts: 6.14, 	cost: 4300, 	value: 1.43 }, 
{ name: 'New York Giants D/ST', 	pos: 'D/ST', 	team: 'NYG', 	opp_team: 'DAL', 	opp_rank: '20', 	ovr_rank: '26', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.93, 	ceiling: 11.95, 	fpts: 6.03, 	cost: 4400, 	value: 1.37 }, 
{ name: 'Oakland D/ST', 	pos: 'D/ST', 	team: 'OAK', 	opp_team: 'NO', 	opp_rank: '2', 	ovr_rank: '27', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0, 	ceiling: 14.03, 	fpts: 4.76, 	cost: 4300, 	value: 1.11 }, 
{ name: 'New Orleans D/S', 	pos: 'D/ST', 	team: ' NO', 	opp_team: 'OAK', 	opp_rank: '21', 	ovr_rank: '28', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.07, 	ceiling: 11.71, 	fpts: 6.3, 	cost: 4000, 	value: 1.58 }, 
{ name: 'Washington D/ST', 	pos: 'D/ST', 	team: 'WSH', 	opp_team: 'PIT', 	opp_rank: '5', 	ovr_rank: '29', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.26, 	ceiling: 10.08, 	fpts: 6.08, 	cost: 4200, 	value: 1.45 }, 
{ name: 'San Diego D/S', 	pos: 'D/ST', 	team: ' SD', 	opp_team: 'KC', 	opp_rank: '13', 	ovr_rank: '30', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0, 	ceiling: 9.03, 	fpts: 3.83, 	cost: 4100, 	value: 0.93 }, 
{ name: 'Miami D/ST', 	pos: 'D/ST', 	team: 'MIA', 	opp_team: 'SEA', 	opp_rank: '3', 	ovr_rank: '31', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0, 	ceiling: 8.94, 	fpts: 3.42, 	cost: 4200, 	value: 0.81 }

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
 	$scope.cell_val = '';
 	$scope.selectedTabs = [];


	$scope.togg = function(r) {
		
			if (r.status < 3)
				r.status++;
			else
				r.status = 0;
	};

	$scope.multifunc = function() {
		$scope.bubbleSort();
	};

	$scope.bubbleSort = function() {
	   var len = $scope.rowCol.length;
	   for (var i = len-1; i>=0; i--){
	     for(var j = 1; j<=i; j++){
	       if($scope.rowCol[j-1].fpts<=$scope.rowCol[j].fpts){
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
		var totPts = 0;
		var totCost = 0;
		var qbindex = 0;
		var rbindex = 0;
		var wrindex = 0;
		var teindex = 0;
		var dindex = 0;
		for (var i = 0; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos.trim() == 'RB')
			{
				qbindex = i - 1;
				console.log("qb" + qbindex);
				break;
			}
		}
		for (var i = qbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos.trim() == 'WR')
			{
				rbindex = i - 1;
				console.log("rb" + rbindex);
				break;
			}
		}
		for (var i = rbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos.trim() == 'TE')
			{
				wrindex = i - 1;
				console.log("wr" + wrindex);
				break;
			}
		}
		for (var i = wrindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos.trim() == 'D/ST')
			{
				teindex = i - 1;
				console.log("te" + teindex);
				break;
			}
		}

		for (var i = 0; i < qbindex; i++) {
			var pos1 = scope.rowCol[i].pos;
			var fpts1 = scope.rowCol[i].fpts;
			var cost1 = scope.rowCol[i].cost;
			totPts += fpts1;
			totCost += cost1;
			for (var j = qbindex+1; j < rbindex-1; j++) {
				var pos2 = scope.rowCol[j].pos;
				var fpts2 = scope.rowCol[j].fpts;
				var cost2 = scope.rowCol[j].cost;
				totPts += fpts2;
				totCost += cost2;
				for (var k = j+1; k < rbindex; k++) {
					var pos3 = scope.rowCol[k].pos;
					var fpts3 = scope.rowCol[k].fpts;
					var cost3 = scope.rowCol[k].cost;
					totPts += fpts3;
					totCost += cost3;
					for (var l = rbindex+1; l < wrindex-1; l++) {
						var pos4 = scope.rowCol[l].pos;
						var fpts4 = scope.rowCol[l].fpts;
						var cost4 = scope.rowCol[l].cost;
						totPts += fpts4;
						totCost += cost4;
						for (var m = l+1; m < wrindex; m++) {
							var pos5 = scope.rowCol[m].pos;
							var fpts5 = scope.rowCol[m].fpts;
							var cost5 = scope.rowCol[m].cost;
							totPts += fpts5;
							totCost += cost5;
							if ()
							for (var n = wrindex+1; n < teindex; n++) {
								var pos6 = scope.rowCol[n].pos;
								var fpts6 = scope.rowCol[n].fpts;
								var cost6 = scope.rowCol[n].cost;
								totPts += fpts6;
								totCost += cost6;
								for (var o = teindex+1; o < $scope.rowCol.length; o++) {
									var pos7 = scope.rowCol[o].pos;
									var fpts7 = scope.rowCol[o].fpts;
									var cost7 = scope.rowCol[o].cost;
									totPts += fpts7;
									totCost += cost7;
								}
							}
						}
					}
				}
			}
		}
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
app.directive("dailyfantasyfootball", [function (){
    return {
        restrict: 'E',
        templateUrl: 'http://localhost:3000/views/dailyfantasyfootball.html',
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






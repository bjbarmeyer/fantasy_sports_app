var app = angular.module('dailyfantasyfootball', []);

app.controller('controller', function($scope) {
	$scope.rowCol = [
{ name: 'Drew Brees', 	pos: ' QB', 	team: ' NO', 	opp_team: 'NYG', 	opp_rank: '11', 	ovr_rank: '1', 	pos_rank: '1', 	cmp: 27.12, 	att: 40.23, 	pyd: 334.61, 	ptd: 2.51, 	pint: 0.6, 	rush: 2.34, 	ruyd: 6.89, 	rutd: 0.1, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 16.06, 	ceiling: 30.86, 	fpts: 27.13, 	cost: 8200, 	value: 3.31 }, 
{ name: 'Cam Newton ', 	pos: 'QB ', 	team: 'CAR', 	opp_team: 'SF', 	opp_rank: '1', 	ovr_rank: '2', 	pos_rank: '2', 	cmp: 19.19, 	att: 31.99, 	pyd: 245.76, 	ptd: 1.81, 	pint: 0.52, 	rush: 7.99, 	ruyd: 42.78, 	rutd: 0.56, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 14.04, 	ceiling: 32.52, 	fpts: 24.01, 	cost: 7900, 	value: 3.04 }, 
{ name: 'Carson Palmer ', 	pos: 'QB ', 	team: 'ARI', 	opp_team: 'TB', 	opp_rank: '13', 	ovr_rank: '3', 	pos_rank: '3', 	cmp: 23.82, 	att: 36.18, 	pyd: 288.63, 	ptd: 2.26, 	pint: 0.58, 	rush: 2.62, 	ruyd: 9.83, 	rutd: 0.18, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 13.42, 	ceiling: 29.3, 	fpts: 22.05, 	cost: 6900, 	value: 3.2 }, 
{ name: 'Eli Manning ', 	pos: 'QB ', 	team: 'NYG', 	opp_team: 'NO', 	opp_rank: '28', 	ovr_rank: '4', 	pos_rank: '4', 	cmp: 24.39, 	att: 36.11, 	pyd: 286.86, 	ptd: 2.05, 	pint: 0.62, 	rush: 2.92, 	ruyd: 8.99, 	rutd: 0.16, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 11.55, 	ceiling: 28.35, 	fpts: 20.77, 	cost: 7600, 	value: 2.73 }, 
{ name: 'Blake Bortles ', 	pos: 'QB ', 	team: 'JAC', 	opp_team: 'SD', 	opp_rank: '23', 	ovr_rank: '6', 	pos_rank: '6', 	cmp: 22.27, 	att: 37.00, 	pyd: 247.68, 	ptd: 2.19, 	pint: 0.91, 	rush: 3.19, 	ruyd: 13.88, 	rutd: 0.14, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 10.45, 	ceiling: 26.99, 	fpts: 19.86, 	cost: 6700, 	value: 2.96 }, 
{ name: 'Andrew Luck ', 	pos: 'QB ', 	team: 'IND', 	opp_team: 'DEN', 	opp_rank: '18', 	ovr_rank: '7', 	pos_rank: '7', 	cmp: 23.05, 	att: 40.66, 	pyd: 257.96, 	ptd: 2.19, 	pint: 1.19, 	rush: 4.58, 	ruyd: 20.81, 	rutd: 0.03, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 9.56, 	ceiling: 26.76, 	fpts: 19.77, 	cost: 7700, 	value: 2.57 }, 
{ name: 'Aaron Rodgers', 	pos: ' QB', 	team: ' GB', 	opp_team: 'MIN', 	opp_rank: '2', 	ovr_rank: '5', 	pos_rank: '5', 	cmp: 22.96, 	att: 39.50, 	pyd: 247.74, 	ptd: 1.96, 	pint: 0.42, 	rush: 3.72, 	ruyd: 16.75, 	rutd: 0.13, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 11.34, 	ceiling: 26.54, 	fpts: 19.73, 	cost: 7800, 	value: 2.53 }, 
{ name: 'Ben Roethlisberger ', 	pos: 'QB ', 	team: 'PIT', 	opp_team: 'CIN', 	opp_rank: '15', 	ovr_rank: '8', 	pos_rank: '8', 	cmp: 25.15, 	att: 38.56, 	pyd: 296.51, 	ptd: 1.75, 	pint: 0.96, 	rush: 2.29, 	ruyd: 7.65, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 11.22, 	ceiling: 24.72, 	fpts: 19.07, 	cost: 7500, 	value: 2.54 }, 
{ name: 'Matt Ryan ', 	pos: 'QB ', 	team: 'ATL', 	opp_team: 'OAK', 	opp_rank: '31', 	ovr_rank: '9', 	pos_rank: '9', 	cmp: 25.58, 	att: 39.97, 	pyd: 295.33, 	ptd: 1.97, 	pint: 0.96, 	rush: 2.26, 	ruyd: 2.95, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 11.08, 	ceiling: 24.5, 	fpts: 18.93, 	cost: 6800, 	value: 2.78 }, 
{ name: 'Derek Carr ', 	pos: 'QB ', 	team: 'OAK', 	opp_team: 'ATL', 	opp_rank: '27', 	ovr_rank: '13', 	pos_rank: '13', 	cmp: 23.33, 	att: 39.01, 	pyd: 263.21, 	ptd: 2.08, 	pint: 1.24, 	rush: 2.42, 	ruyd: 8.18, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 8.73, 	ceiling: 25.91, 	fpts: 18.76, 	cost: 7200, 	value: 2.61 }, 
{ name: 'Marcus Mariota ', 	pos: 'QB ', 	team: 'TEN', 	opp_team: 'DET', 	opp_rank: '29', 	ovr_rank: '15', 	pos_rank: '15', 	cmp: 20.30, 	att: 33.76, 	pyd: 236.55, 	ptd: 1.49, 	pint: 0.98, 	rush: 4.13, 	ruyd: 27.05, 	rutd: 0.28, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 6.95, 	ceiling: 27.23, 	fpts: 18.73, 	cost: 6000, 	value: 3.12 }, 
{ name: 'Russell Wilson ', 	pos: 'QB ', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '19', 	ovr_rank: '10', 	pos_rank: '10', 	cmp: 17.31, 	att: 28.88, 	pyd: 212.34, 	ptd: 1.56, 	pint: 0.68, 	rush: 6.93, 	ruyd: 34.29, 	rutd: 0.22, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 10.61, 	ceiling: 24.83, 	fpts: 18.6, 	cost: 7400, 	value: 2.51 }, 
{ name: 'Philip Rivers', 	pos: ' QB', 	team: ' SD', 	opp_team: 'JAC', 	opp_rank: '26', 	ovr_rank: '11', 	pos_rank: '11', 	cmp: 25.08, 	att: 41.31, 	pyd: 265.67, 	ptd: 2.07, 	pint: 0.74, 	rush: 1.96, 	ruyd: 3.68, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 11.35, 	ceiling: 23.95, 	fpts: 18.52, 	cost: 6400, 	value: 2.89 }, 
{ name: 'Matthew Stafford ', 	pos: 'QB ', 	team: 'DET', 	opp_team: 'TEN', 	opp_rank: '8', 	ovr_rank: '12', 	pos_rank: '12', 	cmp: 22.92, 	att: 35.25, 	pyd: 264.36, 	ptd: 1.8, 	pint: 0.7, 	rush: 2.36, 	ruyd: 11.14, 	rutd: 0.06, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 11, 	ceiling: 24.1, 	fpts: 18.4, 	cost: 7300, 	value: 2.52 }, 
{ name: 'Kirk Cousins ', 	pos: 'QB ', 	team: 'WSH', 	opp_team: 'DAL', 	opp_rank: '21', 	ovr_rank: '14', 	pos_rank: '14', 	cmp: 23.13, 	att: 36.02, 	pyd: 260.97, 	ptd: 1.67, 	pint: 0.79, 	rush: 2.35, 	ruyd: 11.17, 	rutd: 0.13, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 10.73, 	ceiling: 23.69, 	fpts: 18.17, 	cost: 7000, 	value: 2.6 }, 
{ name: 'Ryan Fitzpatrick ', 	pos: 'QB ', 	team: 'NYJ', 	opp_team: 'BUF', 	opp_rank: '12', 	ovr_rank: '16', 	pos_rank: '16', 	cmp: 20.23, 	att: 34.74, 	pyd: 232.69, 	ptd: 1.5, 	pint: 0.86, 	rush: 3.56, 	ruyd: 19.16, 	rutd: 0.25, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 11.16, 	ceiling: 22.34, 	fpts: 17.78, 	cost: 6100, 	value: 2.91 }, 
{ name: 'Ryan Tannehill ', 	pos: 'QB ', 	team: 'MIA', 	opp_team: 'NE', 	opp_rank: '25', 	ovr_rank: '18', 	pos_rank: '18', 	cmp: 23.86, 	att: 39.25, 	pyd: 264.4, 	ptd: 1.68, 	pint: 1.26, 	rush: 2.14, 	ruyd: 9.97, 	rutd: 0.02, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 8.52, 	ceiling: 22.72, 	fpts: 17.09, 	cost: 5600, 	value: 3.05 }, 
{ name: 'Andy Dalton ', 	pos: 'QB ', 	team: 'CIN', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '17', 	pos_rank: '17', 	cmp: 19.67, 	att: 31.93, 	pyd: 246.86, 	ptd: 1.5, 	pint: 0.73, 	rush: 3.99, 	ruyd: 14.32, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.72, 	ceiling: 24.26, 	fpts: 16.88, 	cost: 6400, 	value: 2.64 }, 
{ name: 'Jay Cutler ', 	pos: 'QB ', 	team: 'CHI', 	opp_team: 'PHI', 	opp_rank: '3', 	ovr_rank: '20', 	pos_rank: '20', 	cmp: 22.42, 	att: 36.78, 	pyd: 250.26, 	ptd: 1.49, 	pint: 1, 	rush: 2.82, 	ruyd: 10.53, 	rutd: 0.1, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 9.08, 	ceiling: 21.26, 	fpts: 16.42, 	cost: 5700, 	value: 2.88 }, 
{ name: 'Tyrod Taylor ', 	pos: 'QB ', 	team: 'BUF', 	opp_team: 'NYJ', 	opp_rank: '22', 	ovr_rank: '19', 	pos_rank: '19', 	cmp: 21.53, 	att: 36.52, 	pyd: 248.04, 	ptd: 1.1, 	pint: 0.78, 	rush: 5.24, 	ruyd: 21.92, 	rutd: 0.14, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 8.74, 	ceiling: 22.1, 	fpts: 16.41, 	cost: 6300, 	value: 2.6 }, 
{ name: 'Joe Flacco ', 	pos: 'QB ', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '20', 	ovr_rank: '21', 	pos_rank: '21', 	cmp: 20.38, 	att: 33.11, 	pyd: 228.96, 	ptd: 1.67, 	pint: 0.92, 	rush: 2.08, 	ruyd: 5.14, 	rutd: 0.14, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.65, 	ceiling: 22.11, 	fpts: 16.08, 	cost: 6500, 	value: 2.47 }, 
{ name: 'Carson Wentz ', 	pos: 'QB ', 	team: 'PHI', 	opp_team: 'CHI', 	opp_rank: '10', 	ovr_rank: '22', 	pos_rank: '22', 	cmp: 21.28, 	att: 33.76, 	pyd: 246.55, 	ptd: 1.52, 	pint: 0.87, 	rush: 1.24, 	ruyd: 5.84, 	rutd: 0.06, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.2, 	ceiling: 22.42, 	fpts: 15.93, 	cost: 5500, 	value: 2.9 }, 
{ name: 'Jameis Winston', 	pos: ' QB', 	team: ' TB', 	opp_team: 'ARI', 	opp_rank: '16', 	ovr_rank: '25', 	pos_rank: '23', 	cmp: 21.31, 	att: 35.54, 	pyd: 243.73, 	ptd: 1.19, 	pint: 1.12, 	rush: 2.75, 	ruyd: 10.97, 	rutd: 0.24, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.41, 	ceiling: 21.17, 	fpts: 15.75, 	cost: 6200, 	value: 2.54 }, 
{ name: 'Dak Prescott ', 	pos: 'QB ', 	team: 'DAL', 	opp_team: 'WSH', 	opp_rank: '30', 	ovr_rank: '31', 	pos_rank: '24', 	cmp: 20.55, 	att: 32.61, 	pyd: 221.97, 	ptd: 1.07, 	pint: 0.88, 	rush: 3.33, 	ruyd: 14.58, 	rutd: 0.12, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.21, 	ceiling: 19.37, 	fpts: 14.37, 	cost: 5800, 	value: 2.48 }, 
{ name: 'Josh McCown ', 	pos: 'QB ', 	team: 'CLE', 	opp_team: 'BAL', 	opp_rank: '7', 	ovr_rank: '32', 	pos_rank: '25', 	cmp: 19.53, 	att: 34.48, 	pyd: 204.04, 	ptd: 1.24, 	pint: 0.74, 	rush: 2.5, 	ruyd: 13.42, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 7.56, 	ceiling: 18.64, 	fpts: 14.02, 	cost: 5000, 	value: 2.8 }, 
{ name: 'Trevor Siemian ', 	pos: 'QB ', 	team: 'DEN', 	opp_team: 'IND', 	opp_rank: '32', 	ovr_rank: '34', 	pos_rank: '26', 	cmp: 20.89, 	att: 33.12, 	pyd: 223.41, 	ptd: 1.03, 	pint: 0.86, 	rush: 2.85, 	ruyd: 11.95, 	rutd: 0.04, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 6.72, 	ceiling: 18.06, 	fpts: 13.48, 	cost: 5200, 	value: 2.59 }, 
{ name: 'Sam Bradford ', 	pos: 'QB ', 	team: 'MIN', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '39', 	pos_rank: '27', 	cmp: 22.11, 	att: 37.31, 	pyd: 232.09, 	ptd: 1.15, 	pint: 1.09, 	rush: 2.04, 	ruyd: 3.05, 	rutd: 0.02, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 5.49, 	ceiling: 18.33, 	fpts: 13.16, 	cost: 5600, 	value: 2.35 }, 
{ name: 'Alex Smith', 	pos: ' QB', 	team: ' KC', 	opp_team: 'HOU', 	opp_rank: '6', 	ovr_rank: '41', 	pos_rank: '28', 	cmp: 18.41, 	att: 32.50, 	pyd: 203.15, 	ptd: 0.85, 	pint: 1.12, 	rush: 3.89, 	ruyd: 18.29, 	rutd: 0.13, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 5.29, 	ceiling: 17.55, 	fpts: 12.99, 	cost: 6300, 	value: 2.06 }, 
{ name: 'Jimmy Garoppolo', 	pos: ' QB', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '5', 	ovr_rank: '45', 	pos_rank: '29', 	cmp: 18.91, 	att: 34.38, 	pyd: 206.54, 	ptd: 1.14, 	pint: 0.82, 	rush: 1.84, 	ruyd: 4.51, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 5.86, 	ceiling: 16.64, 	fpts: 12.33, 	cost: 5900, 	value: 2.09 }, 
{ name: 'Brock Osweiler ', 	pos: 'QB ', 	team: 'HOU', 	opp_team: 'KC', 	opp_rank: '24', 	ovr_rank: '59', 	pos_rank: '30', 	cmp: 21.55, 	att: 36.44, 	pyd: 217.61, 	ptd: 0.88, 	pint: 1.28, 	rush: 2.56, 	ruyd: 9.06, 	rutd: 0.02, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.29, 	ceiling: 15.99, 	fpts: 11.69, 	cost: 6100, 	value: 1.92 }, 
{ name: 'Case Keenum', 	pos: ' QB', 	team: ' LA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '68', 	pos_rank: '32', 	cmp: 18.04, 	att: 32.19, 	pyd: 209.06, 	ptd: 1.13, 	pint: 1.36, 	rush: 1.54, 	ruyd: 3.18, 	rutd: 0.02, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.11, 	ceiling: 15.55, 	fpts: 11.6, 	cost: 5100, 	value: 2.27 }, 
{ name: 'Blaine Gabbert', 	pos: ' QB', 	team: ' SF', 	opp_team: 'CAR', 	opp_rank: '17', 	ovr_rank: '61', 	pos_rank: '31', 	cmp: 18.18, 	att: 33.64, 	pyd: 188.71, 	ptd: 0.77, 	pint: 1.16, 	rush: 3.47, 	ruyd: 15.87, 	rutd: 0.08, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.02, 	ceiling: 16.22, 	fpts: 11.47, 	cost: 5000, 	value: 2.29 }, 
																						
																						
																						
{ name: 'DeAngelo Williams ', 	pos: 'RB ', 	team: 'PIT', 	opp_team: 'CIN', 	opp_rank: '15', 	ovr_rank: '26', 	pos_rank: '1', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.23, 	ruyd: 70.67, 	rutd: 0.46, 	rec: 4.17, 	reyd: 36.08, 	retd: 0.16, 	floor: 3.55, 	ceiling: 24.91, 	fpts: 18.47, 	cost: 7100, 	value: 2.6 }, 
{ name: 'David Johnson ', 	pos: 'RB ', 	team: 'ARI', 	opp_team: 'TB', 	opp_rank: '13', 	ovr_rank: '28', 	pos_rank: '2', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 13.26, 	ruyd: 62.91, 	rutd: 0.63, 	rec: 3.23, 	reyd: 30.89, 	retd: 0.11, 	floor: 5.22, 	ceiling: 22.3, 	fpts: 17.03, 	cost: 7600, 	value: 2.24 }, 
{ name: 'Mark Ingram', 	pos: ' RB', 	team: ' NO', 	opp_team: 'NYG', 	opp_rank: '11', 	ovr_rank: '30', 	pos_rank: '4', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.91, 	ruyd: 74.79, 	rutd: 0.68, 	rec: 3.12, 	reyd: 20.8, 	retd: 0.02, 	floor: 6.44, 	ceiling: 20.68, 	fpts: 16.8, 	cost: 6200, 	value: 2.71 }, 
{ name: 'Adrian Peterson ', 	pos: 'RB ', 	team: 'MIN', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '29', 	pos_rank: '3', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 16.88, 	ruyd: 75.05, 	rutd: 0.56, 	rec: 3.01, 	reyd: 23.01, 	retd: 0.11, 	floor: 4.63, 	ceiling: 22.67, 	fpts: 16.75, 	cost: 7000, 	value: 2.39 }, 
{ name: 'Lamar Miller ', 	pos: 'RB ', 	team: 'HOU', 	opp_team: 'KC', 	opp_rank: '24', 	ovr_rank: '33', 	pos_rank: '5', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 17.49, 	ruyd: 67.23, 	rutd: 0.41, 	rec: 3.94, 	reyd: 28.31, 	retd: 0.1, 	floor: 4.97, 	ceiling: 19.91, 	fpts: 16.47, 	cost: 7200, 	value: 2.29 }, 
{ name: 'C.J. Anderson ', 	pos: 'RB ', 	team: 'DEN', 	opp_team: 'IND', 	opp_rank: '32', 	ovr_rank: '38', 	pos_rank: '6', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 14.1, 	ruyd: 63.5, 	rutd: 0.43, 	rec: 3.47, 	reyd: 26.97, 	retd: 0.13, 	floor: 3.56, 	ceiling: 20.5, 	fpts: 15.7, 	cost: 6800, 	value: 2.31 }, 
{ name: 'Danny Woodhead', 	pos: ' RB', 	team: ' SD', 	opp_team: 'JAC', 	opp_rank: '26', 	ovr_rank: '71', 	pos_rank: '21', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.94, 	ruyd: 18.05, 	rutd: 0.09, 	rec: 6.09, 	reyd: 57.23, 	retd: 0.24, 	floor: 3.01, 	ceiling: 16.01, 	fpts: 15.6, 	cost: 5200, 	value: 3 }, 
{ name: 'Devonta Freeman ', 	pos: 'RB ', 	team: 'ATL', 	opp_team: 'OAK', 	opp_rank: '31', 	ovr_rank: '43', 	pos_rank: '9', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 13.64, 	ruyd: 56.26, 	rutd: 0.4, 	rec: 3.75, 	reyd: 30.48, 	retd: 0.07, 	floor: 4.64, 	ceiling: 17.9, 	fpts: 15.15, 	cost: 6100, 	value: 2.48 }, 
{ name: 'Eddie Lacy', 	pos: ' RB', 	team: ' GB', 	opp_team: 'MIN', 	opp_rank: '2', 	ovr_rank: '49', 	pos_rank: '12', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 14.58, 	ruyd: 58.24, 	rutd: 0.34, 	rec: 3.49, 	reyd: 30.7, 	retd: 0.05, 	floor: 4.36, 	ceiling: 17.66, 	fpts: 14.66, 	cost: 6000, 	value: 2.44 }, 
{ name: 'Latavius Murray ', 	pos: 'RB ', 	team: 'OAK', 	opp_team: 'ATL', 	opp_rank: '27', 	ovr_rank: '42', 	pos_rank: '8', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 17.42, 	ruyd: 69.86, 	rutd: 0.46, 	rec: 2.87, 	reyd: 17.48, 	retd: 0, 	floor: 5.46, 	ceiling: 17.2, 	fpts: 14.27, 	cost: 5700, 	value: 2.5 }, 
{ name: 'Ezekiel Elliott ', 	pos: 'RB ', 	team: 'DAL', 	opp_team: 'WSH', 	opp_rank: '30', 	ovr_rank: '46', 	pos_rank: '10', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15, 	ruyd: 59.63, 	rutd: 0.4, 	rec: 2.86, 	reyd: 20.7, 	retd: 0.14, 	floor: 3.55, 	ceiling: 18.63, 	fpts: 14.04, 	cost: 7300, 	value: 1.92 }, 
{ name: 'Matt Forte ', 	pos: 'RB ', 	team: 'NYJ', 	opp_team: 'BUF', 	opp_rank: '12', 	ovr_rank: '47', 	pos_rank: '11', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 14.33, 	ruyd: 62.28, 	rutd: 0.37, 	rec: 2.79, 	reyd: 20.41, 	retd: 0.11, 	floor: 4.08, 	ceiling: 18.06, 	fpts: 13.9, 	cost: 6600, 	value: 2.11 }, 
{ name: 'Todd Gurley', 	pos: ' RB', 	team: ' LA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '40', 	pos_rank: '7', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 16.15, 	ruyd: 67.75, 	rutd: 0.38, 	rec: 2.3, 	reyd: 21.33, 	retd: 0.07, 	floor: 4, 	ceiling: 18.9, 	fpts: 13.83, 	cost: 7500, 	value: 1.84 }, 
{ name: 'Ryan Mathews ', 	pos: 'RB ', 	team: 'PHI', 	opp_team: 'CHI', 	opp_rank: '10', 	ovr_rank: '52', 	pos_rank: '14', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 12.98, 	ruyd: 60.85, 	rutd: 0.43, 	rec: 2.49, 	reyd: 17.46, 	retd: 0.05, 	floor: 2.88, 	ceiling: 18.54, 	fpts: 13.18, 	cost: 5800, 	value: 2.27 }, 
{ name: 'Rashad Jennings ', 	pos: 'RB ', 	team: 'NYG', 	opp_team: 'NO', 	opp_rank: '28', 	ovr_rank: '50', 	pos_rank: '13', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 12.32, 	ruyd: 62.4, 	rutd: 0.47, 	rec: 1.92, 	reyd: 16.42, 	retd: 0.08, 	floor: 4.25, 	ceiling: 17.73, 	fpts: 13.02, 	cost: 5600, 	value: 2.33 }, 
{ name: 'Arian Foster ', 	pos: 'RB ', 	team: 'MIA', 	opp_team: 'NE', 	opp_rank: '25', 	ovr_rank: '71', 	pos_rank: '21', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.52, 	ruyd: 48.72, 	rutd: 0.28, 	rec: 3.22, 	reyd: 26.42, 	retd: 0.11, 	floor: 4.03, 	ceiling: 14.99, 	fpts: 12.9, 	cost: 6000, 	value: 2.15 }, 
{ name: 'Jeremy Langford ', 	pos: 'RB ', 	team: 'CHI', 	opp_team: 'PHI', 	opp_rank: '3', 	ovr_rank: '63', 	pos_rank: '17', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 13.2, 	ruyd: 52.55, 	rutd: 0.3, 	rec: 2.76, 	reyd: 24.44, 	retd: 0.12, 	floor: 2.63, 	ceiling: 17.39, 	fpts: 12.88, 	cost: 4600, 	value: 2.8 }, 
{ name: 'Doug Martin', 	pos: ' RB', 	team: ' TB', 	opp_team: 'ARI', 	opp_rank: '16', 	ovr_rank: '55', 	pos_rank: '15', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 17.16, 	ruyd: 70.21, 	rutd: 0.28, 	rec: 2.08, 	reyd: 15.74, 	retd: 0.07, 	floor: 4.68, 	ceiling: 16.3, 	fpts: 12.7, 	cost: 5900, 	value: 2.15 }, 
{ name: 'DeMarco Murray ', 	pos: 'RB ', 	team: 'TEN', 	opp_team: 'DET', 	opp_rank: '29', 	ovr_rank: '70', 	pos_rank: '20', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 13.38, 	ruyd: 56.33, 	rutd: 0.23, 	rec: 2.94, 	reyd: 21.62, 	retd: 0.1, 	floor: 4.94, 	ceiling: 14.1, 	fpts: 12.61, 	cost: 5700, 	value: 2.21 }, 
{ name: 'Carlos Hyde', 	pos: ' RB', 	team: ' SF', 	opp_team: 'CAR', 	opp_rank: '17', 	ovr_rank: '63', 	pos_rank: '17', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 16.81, 	ruyd: 67.99, 	rutd: 0.35, 	rec: 2.43, 	reyd: 11.88, 	retd: 0, 	floor: 2.11, 	ceiling: 17.91, 	fpts: 12.48, 	cost: 5100, 	value: 2.45 }, 
{ name: 'Lesean McCoy ', 	pos: 'RB ', 	team: 'BUF', 	opp_team: 'NYJ', 	opp_rank: '22', 	ovr_rank: '68', 	pos_rank: '19', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 15.49, 	ruyd: 61.81, 	rutd: 0.22, 	rec: 2.57, 	reyd: 19.87, 	retd: 0.11, 	floor: 3.41, 	ceiling: 15.95, 	fpts: 12.48, 	cost: 6500, 	value: 1.92 }, 
{ name: 'Jonathan Stewart ', 	pos: 'RB ', 	team: 'CAR', 	opp_team: 'SF', 	opp_rank: '1', 	ovr_rank: '58', 	pos_rank: '16', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 14.63, 	ruyd: 66.69, 	rutd: 0.31, 	rec: 1.86, 	reyd: 13.64, 	retd: 0.08, 	floor: 6.01, 	ceiling: 14.35, 	fpts: 12.18, 	cost: 5400, 	value: 2.26 }, 
{ name: 'T.J. Yeldon ', 	pos: 'RB ', 	team: 'JAC', 	opp_team: 'SD', 	opp_rank: '23', 	ovr_rank: '75', 	pos_rank: '22', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.9, 	ruyd: 47.18, 	rutd: 0.28, 	rec: 2.74, 	reyd: 22.81, 	retd: 0.04, 	floor: 3.78, 	ceiling: 13.92, 	fpts: 11.67, 	cost: 4700, 	value: 2.48 }, 
{ name: 'Duke Johnson ', 	pos: 'RB ', 	team: 'CLE', 	opp_team: 'BAL', 	opp_rank: '7', 	ovr_rank: '100', 	pos_rank: '29', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 9.15, 	ruyd: 34.21, 	rutd: 0.19, 	rec: 4.02, 	reyd: 29, 	retd: 0.02, 	floor: 1.79, 	ceiling: 13.05, 	fpts: 11.52, 	cost: 4500, 	value: 2.56 }, 
{ name: 'Theo Riddick ', 	pos: 'RB ', 	team: 'DET', 	opp_team: 'TEN', 	opp_rank: '8', 	ovr_rank: '101', 	pos_rank: '30', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.75, 	ruyd: 18.58, 	rutd: 0.07, 	rec: 4.08, 	reyd: 39, 	retd: 0.2, 	floor: 2.49, 	ceiling: 12.33, 	fpts: 11.49, 	cost: 4300, 	value: 2.67 }, 
{ name: 'Matt Jones ', 	pos: 'RB ', 	team: 'WSH', 	opp_team: 'DAL', 	opp_rank: '21', 	ovr_rank: '78', 	pos_rank: '24', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 11.88, 	ruyd: 45.86, 	rutd: 0.22, 	rec: 2.59, 	reyd: 24.45, 	retd: 0.12, 	floor: 2.26, 	ceiling: 15, 	fpts: 11.46, 	cost: 4500, 	value: 2.55 }, 
{ name: 'Ameer Abdullah ', 	pos: 'RB ', 	team: 'DET', 	opp_team: 'TEN', 	opp_rank: '8', 	ovr_rank: '76', 	pos_rank: '23', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 12.44, 	ruyd: 54.51, 	rutd: 0.31, 	rec: 2.44, 	reyd: 15.71, 	retd: 0.02, 	floor: 1.88, 	ceiling: 15.64, 	fpts: 11.32, 	cost: 4900, 	value: 2.31 }, 
{ name: 'Charles Sims', 	pos: ' RB', 	team: ' TB', 	opp_team: 'ARI', 	opp_rank: '16', 	ovr_rank: '106', 	pos_rank: '33', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.5, 	ruyd: 22.73, 	rutd: 0.14, 	rec: 3.74, 	reyd: 32.33, 	retd: 0.13, 	floor: 1.82, 	ceiling: 12.34, 	fpts: 10.83, 	cost: 4400, 	value: 2.46 }, 
{ name: 'Melvin Gordon', 	pos: ' RB', 	team: ' SD', 	opp_team: 'JAC', 	opp_rank: '26', 	ovr_rank: '81', 	pos_rank: '25', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 14.25, 	ruyd: 53.26, 	rutd: 0.34, 	rec: 2.07, 	reyd: 13.03, 	retd: 0.02, 	floor: 3.63, 	ceiling: 13.51, 	fpts: 10.77, 	cost: 4800, 	value: 2.24 }, 
{ name: 'LeGarrette Blount', 	pos: ' RB', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '5', 	ovr_rank: '66', 	pos_rank: '18', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 12.29, 	ruyd: 53.37, 	rutd: 0.57, 	rec: 0.85, 	reyd: 7.07, 	retd: 0.07, 	floor: 2.18, 	ceiling: 17.5, 	fpts: 10.71, 	cost: 4000, 	value: 2.68 }, 
{ name: 'Jamaal Charles', 	pos: ' RB', 	team: ' KC', 	opp_team: 'HOU', 	opp_rank: '6', 	ovr_rank: '88', 	pos_rank: '27', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.23, 	ruyd: 42.83, 	rutd: 0.28, 	rec: 2.25, 	reyd: 18.89, 	retd: 0.06, 	floor: 2.18, 	ceiling: 14.08, 	fpts: 10.48, 	cost: 6300, 	value: 1.66 }, 
{ name: 'Giovani Bernard ', 	pos: 'RB ', 	team: 'CIN', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '104', 	pos_rank: '32', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.57, 	ruyd: 34.26, 	rutd: 0.13, 	rec: 2.88, 	reyd: 28.31, 	retd: 0.05, 	floor: 3.73, 	ceiling: 10.77, 	fpts: 10.2, 	cost: 4200, 	value: 2.43 }, 
{ name: 'Thomas Rawls ', 	pos: 'RB ', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '19', 	ovr_rank: '83', 	pos_rank: '26', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 11.53, 	ruyd: 51.27, 	rutd: 0.37, 	rec: 1.58, 	reyd: 11.48, 	retd: 0.03, 	floor: 1.28, 	ceiling: 15.68, 	fpts: 10.17, 	cost: 5500, 	value: 1.85 }, 
{ name: 'Darren Sproles ', 	pos: 'RB ', 	team: 'PHI', 	opp_team: 'CHI', 	opp_rank: '10', 	ovr_rank: '112', 	pos_rank: '36', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.16, 	ruyd: 22.11, 	rutd: 0.21, 	rec: 3.34, 	reyd: 24.94, 	retd: 0.09, 	floor: 1.98, 	ceiling: 11.16, 	fpts: 9.97, 	cost: 3800, 	value: 2.62 }, 
{ name: 'Christine Michael ', 	pos: 'RB ', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '19', 	ovr_rank: '109', 	pos_rank: '34', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 5.18, 	ruyd: 22.54, 	rutd: 0.23, 	rec: 2.93, 	reyd: 21.25, 	retd: 0.17, 	floor: 0, 	ceiling: 14.11, 	fpts: 9.71, 	cost: 4600, 	value: 2.11 }, 
{ name: 'Jeremy Hill ', 	pos: 'RB ', 	team: 'CIN', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '95', 	pos_rank: '28', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.9, 	ruyd: 42.08, 	rutd: 0.39, 	rec: 1.71, 	reyd: 11.1, 	retd: 0.04, 	floor: 1.89, 	ceiling: 13.31, 	fpts: 9.52, 	cost: 4300, 	value: 2.21 }, 
{ name: 'Isaiah Crowell ', 	pos: 'RB ', 	team: 'CLE', 	opp_team: 'BAL', 	opp_rank: '7', 	ovr_rank: '103', 	pos_rank: '31', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.42, 	ruyd: 33.27, 	rutd: 0.16, 	rec: 2.03, 	reyd: 21.26, 	retd: 0.15, 	floor: 1.5, 	ceiling: 13.08, 	fpts: 9.31, 	cost: 4400, 	value: 2.12 }, 
{ name: 'Shane Vereen ', 	pos: 'RB ', 	team: 'NYG', 	opp_team: 'NO', 	opp_rank: '28', 	ovr_rank: '118', 	pos_rank: '38', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.69, 	ruyd: 20.44, 	rutd: 0.11, 	rec: 2.93, 	reyd: 26.4, 	retd: 0.14, 	floor: 1.91, 	ceiling: 10.39, 	fpts: 9.1, 	cost: 3800, 	value: 2.39 }, 
{ name: 'Frank Gore ', 	pos: 'RB ', 	team: 'IND', 	opp_team: 'DEN', 	opp_rank: '18', 	ovr_rank: '111', 	pos_rank: '35', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 12.86, 	ruyd: 44.88, 	rutd: 0.18, 	rec: 1.91, 	reyd: 11.9, 	retd: 0.05, 	floor: 2.53, 	ceiling: 10.73, 	fpts: 8.77, 	cost: 5000, 	value: 1.75 }, 
{ name: 'Spencer Ware', 	pos: ' RB', 	team: ' KC', 	opp_team: 'HOU', 	opp_rank: '6', 	ovr_rank: '116', 	pos_rank: '37', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.27, 	ruyd: 31.98, 	rutd: 0.29, 	rec: 2.33, 	reyd: 16.02, 	retd: 0, 	floor: 0, 	ceiling: 13.32, 	fpts: 8.77, 	cost: 6100, 	value: 1.44 }, 
{ name: 'DeAndre Washington ', 	pos: 'RB ', 	team: 'OAK', 	opp_team: 'ATL', 	opp_rank: '27', 	ovr_rank: '119', 	pos_rank: '39', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.96, 	ruyd: 25.91, 	rutd: 0.2, 	rec: 2.53, 	reyd: 23.01, 	retd: 0.02, 	floor: 0, 	ceiling: 12.44, 	fpts: 8.74, 	cost: 3400, 	value: 2.57 }, 
{ name: 'Chris Thompson ', 	pos: 'RB ', 	team: 'WSH', 	opp_team: 'DAL', 	opp_rank: '21', 	ovr_rank: '144', 	pos_rank: '45', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 2.56, 	ruyd: 11.76, 	rutd: 0.1, 	rec: 3.54, 	reyd: 27.2, 	retd: 0.08, 	floor: 1.94, 	ceiling: 7.9, 	fpts: 8.5, 	cost: 3700, 	value: 2.3 }, 
{ name: 'Tevin Coleman ', 	pos: 'RB ', 	team: 'ATL', 	opp_team: 'OAK', 	opp_rank: '31', 	ovr_rank: '126', 	pos_rank: '43', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.84, 	ruyd: 33.41, 	rutd: 0.11, 	rec: 2.59, 	reyd: 17.34, 	retd: 0.02, 	floor: 0.45, 	ceiling: 11.25, 	fpts: 8.44, 	cost: 4500, 	value: 1.88 }, 
{ name: 'Bilal Powell ', 	pos: 'RB ', 	team: 'NYJ', 	opp_team: 'BUF', 	opp_rank: '12', 	ovr_rank: '122', 	pos_rank: '40', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 7.79, 	ruyd: 36.18, 	rutd: 0.13, 	rec: 2.13, 	reyd: 17.13, 	retd: 0.01, 	floor: 0, 	ceiling: 12.22, 	fpts: 8.24, 	cost: 4000, 	value: 2.06 }, 
{ name: 'James Starks', 	pos: ' RB', 	team: ' GB', 	opp_team: 'MIN', 	opp_rank: '2', 	ovr_rank: '123', 	pos_rank: '41', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.01, 	ruyd: 31.41, 	rutd: 0.17, 	rec: 1.78, 	reyd: 15.02, 	retd: 0.06, 	floor: 1.33, 	ceiling: 10.45, 	fpts: 7.74, 	cost: 4000, 	value: 1.94 }, 
{ name: 'Terrance West ', 	pos: 'RB ', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '20', 	ovr_rank: '124', 	pos_rank: '42', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 10.63, 	ruyd: 38.26, 	rutd: 0.19, 	rec: 1.66, 	reyd: 9.86, 	retd: 0.02, 	floor: 1.26, 	ceiling: 10.48, 	fpts: 7.67, 	cost: 3300, 	value: 2.32 }, 
{ name: 'Jerick McKinnon ', 	pos: 'RB ', 	team: 'MIN', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '124', 	pos_rank: '42', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 4.6, 	ruyd: 26.74, 	rutd: 0.19, 	rec: 1.81, 	reyd: 13.74, 	retd: 0.11, 	floor: 0, 	ceiling: 12.99, 	fpts: 7.66, 	cost: 3700, 	value: 2.07 }, 
{ name: 'James White', 	pos: ' RB', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '5', 	ovr_rank: '155', 	pos_rank: '47', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 2.71, 	ruyd: 9.77, 	rutd: 0.03, 	rec: 2.71, 	reyd: 25.15, 	retd: 0.13, 	floor: 0, 	ceiling: 9.13, 	fpts: 7.16, 	cost: 4000, 	value: 1.79 }, 
{ name: 'Justin Forsett ', 	pos: 'RB ', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '20', 	ovr_rank: '130', 	pos_rank: '44', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 8.73, 	ruyd: 33.43, 	rutd: 0.22, 	rec: 1.51, 	reyd: 8.91, 	retd: 0, 	floor: 0.73, 	ceiling: 10.35, 	fpts: 7.04, 	cost: 4400, 	value: 1.6 }, 
{ name: 'Shaun Draughn', 	pos: ' RB', 	team: ' SF', 	opp_team: 'CAR', 	opp_rank: '17', 	ovr_rank: '161', 	pos_rank: '49', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 7.18, 	ruyd: 26.02, 	rutd: 0.08, 	rec: 2.04, 	reyd: 11.04, 	retd: 0.04, 	floor: 0, 	ceiling: 9.73, 	fpts: 6.39, 	cost: 3700, 	value: 1.73 }, 
{ name: 'Damien Williams ', 	pos: 'RB ', 	team: 'MIA', 	opp_team: 'NE', 	opp_rank: '25', 	ovr_rank: '182', 	pos_rank: '58', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 1.18, 	ruyd: 3.28, 	rutd: 0, 	rec: 2.82, 	reyd: 21.8, 	retd: 0.16, 	floor: 0, 	ceiling: 7.57, 	fpts: 6.29, 	cost: 3000, 	value: 2.1 }, 
{ name: 'Derrick Henry ', 	pos: 'RB ', 	team: 'TEN', 	opp_team: 'DET', 	opp_rank: '29', 	ovr_rank: '145', 	pos_rank: '46', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 6.89, 	ruyd: 25.73, 	rutd: 0.14, 	rec: 1.15, 	reyd: 13.83, 	retd: 0.06, 	floor: 0, 	ceiling: 10.8, 	fpts: 6.18, 	cost: 3800, 	value: 1.63 }, 
{ name: 'C.J. Prosise ', 	pos: 'RB ', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '19', 	ovr_rank: '187', 	pos_rank: '60', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 3.33, 	ruyd: 11.57, 	rutd: 0.08, 	rec: 2.35, 	reyd: 17.73, 	retd: 0, 	floor: 0.05, 	ceiling: 6.67, 	fpts: 5.73, 	cost: 3700, 	value: 1.55 }, 
{ name: 'Devontae Booker ', 	pos: 'RB ', 	team: 'DEN', 	opp_team: 'IND', 	opp_rank: '32', 	ovr_rank: '176', 	pos_rank: '54', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 3.86, 	ruyd: 15.59, 	rutd: 0.08, 	rec: 1.88, 	reyd: 13.9, 	retd: 0.05, 	floor: 0.3, 	ceiling: 6.94, 	fpts: 5.61, 	cost: 3000, 	value: 1.87 }, 
{ name: 'Chris Ivory ', 	pos: 'RB ', 	team: 'JAC', 	opp_team: 'SD', 	opp_rank: '23', 	ovr_rank: '156', 	pos_rank: '48', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 5.57, 	ruyd: 23.91, 	rutd: 0.18, 	rec: 1.15, 	reyd: 7.85, 	retd: 0.03, 	floor: 1.51, 	ceiling: 7.27, 	fpts: 5.57, 	cost: 4100, 	value: 1.36 }, 
																						
																						
																						
{ name: 'Julio Jones ', 	pos: 'WR ', 	team: 'ATL', 	opp_team: 'OAK', 	opp_rank: '31', 	ovr_rank: '23', 	pos_rank: '1', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.14, 	rutd: 0, 	rec: 7.92, 	reyd: 106.46, 	retd: 0.68, 	floor: 7.69, 	ceiling: 21.49, 	fpts: 25.58, 	cost: 9200, 	value: 2.78 }, 
{ name: 'Antonio Brown ', 	pos: 'WR ', 	team: 'PIT', 	opp_team: 'CIN', 	opp_rank: '15', 	ovr_rank: '27', 	pos_rank: '3', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.16, 	ruyd: 0.54, 	rutd: 0, 	rec: 8.11, 	reyd: 97.69, 	retd: 0.71, 	floor: 6.71, 	ceiling: 21.47, 	fpts: 22.23, 	cost: 9900, 	value: 2.25 }, 
{ name: 'Odell Beckham ', 	pos: 'WR ', 	team: 'NYG', 	opp_team: 'NO', 	opp_rank: '28', 	ovr_rank: '24', 	pos_rank: '2', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.06, 	rutd: 0, 	rec: 6.46, 	reyd: 96.91, 	retd: 0.77, 	floor: 5.8, 	ceiling: 22.82, 	fpts: 20.8, 	cost: 9500, 	value: 2.19 }, 
{ name: 'A.J. Green ', 	pos: 'WR ', 	team: 'CIN', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '37', 	pos_rank: '5', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 6.14, 	reyd: 85.89, 	retd: 0.6, 	floor: 4.21, 	ceiling: 20.07, 	fpts: 18.31, 	cost: 8900, 	value: 2.06 }, 
{ name: 'DeAndre Hopkins ', 	pos: 'WR ', 	team: 'HOU', 	opp_team: 'KC', 	opp_rank: '24', 	ovr_rank: '36', 	pos_rank: '4', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.66, 	reyd: 86.58, 	retd: 0.63, 	floor: 6.28, 	ceiling: 18.44, 	fpts: 18.08, 	cost: 8700, 	value: 2.08 }, 
{ name: 'Larry Fitzgerald ', 	pos: 'WR ', 	team: 'ARI', 	opp_team: 'TB', 	opp_rank: '13', 	ovr_rank: '51', 	pos_rank: '8', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 6.14, 	reyd: 80.81, 	retd: 0.5, 	floor: 5.12, 	ceiling: 16.86, 	fpts: 17.16, 	cost: 6400, 	value: 2.68 }, 
{ name: 'Brandin Cooks', 	pos: ' WR', 	team: ' NO', 	opp_team: 'NYG', 	opp_rank: '11', 	ovr_rank: '52', 	pos_rank: '9', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.23, 	ruyd: 0.78, 	rutd: 0, 	rec: 5.77, 	reyd: 70.95, 	retd: 0.67, 	floor: 4.59, 	ceiling: 17.35, 	fpts: 16.86, 	cost: 8000, 	value: 2.11 }, 
{ name: 'Julian Edelman', 	pos: ' WR', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '5', 	ovr_rank: '57', 	pos_rank: '12', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.2, 	ruyd: 0.93, 	rutd: 0, 	rec: 6.27, 	reyd: 72.98, 	retd: 0.53, 	floor: 3.62, 	ceiling: 17.1, 	fpts: 16.73, 	cost: 6200, 	value: 2.7 }, 
{ name: 'Jordan Matthews ', 	pos: 'WR ', 	team: 'PHI', 	opp_team: 'CHI', 	opp_rank: '10', 	ovr_rank: '61', 	pos_rank: '14', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 6.37, 	reyd: 73.49, 	retd: 0.46, 	floor: 2.35, 	ceiling: 17.89, 	fpts: 16.52, 	cost: 6900, 	value: 2.39 }, 
{ name: 'Jarvis Landry ', 	pos: 'WR ', 	team: 'MIA', 	opp_team: 'NE', 	opp_rank: '25', 	ovr_rank: '70', 	pos_rank: '19', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.51, 	ruyd: 2.06, 	rutd: 0.02, 	rec: 6.73, 	reyd: 70.31, 	retd: 0.41, 	floor: 4.22, 	ceiling: 15.12, 	fpts: 16.51, 	cost: 6400, 	value: 2.58 }, 
{ name: 'Mike Evans', 	pos: ' WR', 	team: ' TB', 	opp_team: 'ARI', 	opp_rank: '16', 	ovr_rank: '44', 	pos_rank: '6', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.03, 	reyd: 79.29, 	retd: 0.56, 	floor: 4.43, 	ceiling: 18.09, 	fpts: 16.32, 	cost: 7200, 	value: 2.27 }, 
{ name: 'Jordy Nelson', 	pos: ' WR', 	team: ' GB', 	opp_team: 'MIN', 	opp_rank: '2', 	ovr_rank: '58', 	pos_rank: '13', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.79, 	reyd: 78.91, 	retd: 0.43, 	floor: 2.67, 	ceiling: 17.73, 	fpts: 16.12, 	cost: 7500, 	value: 2.15 }, 
{ name: 'Demaryius Thomas ', 	pos: 'WR ', 	team: 'DEN', 	opp_team: 'IND', 	opp_rank: '32', 	ovr_rank: '62', 	pos_rank: '15', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.8, 	reyd: 70.81, 	retd: 0.52, 	floor: 4.46, 	ceiling: 15.72, 	fpts: 16, 	cost: 6400, 	value: 2.5 }, 
{ name: 'Kelvin Benjamin ', 	pos: 'WR ', 	team: 'CAR', 	opp_team: 'SF', 	opp_rank: '1', 	ovr_rank: '63', 	pos_rank: '16', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.87, 	reyd: 77, 	retd: 0.41, 	floor: 3.08, 	ceiling: 17.02, 	fpts: 15.98, 	cost: 6500, 	value: 2.46 }, 
{ name: 'Allen Robinson ', 	pos: 'WR ', 	team: 'JAC', 	opp_team: 'SD', 	opp_rank: '23', 	ovr_rank: '48', 	pos_rank: '7', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.89, 	reyd: 80.77, 	retd: 0.49, 	floor: 4.06, 	ceiling: 18, 	fpts: 15.93, 	cost: 7800, 	value: 2.04 }, 
{ name: 'Amari Cooper ', 	pos: 'WR ', 	team: 'OAK', 	opp_team: 'ATL', 	opp_rank: '27', 	ovr_rank: '54', 	pos_rank: '10', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.06, 	ruyd: 0.11, 	rutd: 0, 	rec: 5.07, 	reyd: 72.37, 	retd: 0.61, 	floor: 4.32, 	ceiling: 16.92, 	fpts: 15.85, 	cost: 7600, 	value: 2.09 }, 
{ name: 'Doug Baldwin ', 	pos: 'WR ', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '19', 	ovr_rank: '55', 	pos_rank: '11', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.14, 	rutd: 0, 	rec: 5.05, 	reyd: 65.86, 	retd: 0.66, 	floor: 3.25, 	ceiling: 17.83, 	fpts: 15.59, 	cost: 6600, 	value: 2.36 }, 
{ name: 'Dez Bryant ', 	pos: 'WR ', 	team: 'DAL', 	opp_team: 'WSH', 	opp_rank: '30', 	ovr_rank: '66', 	pos_rank: '18', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.69, 	reyd: 64.35, 	retd: 0.57, 	floor: 2.26, 	ceiling: 17.46, 	fpts: 14.55, 	cost: 8400, 	value: 1.73 }, 
{ name: 'Randall Cobb', 	pos: ' WR', 	team: ' GB', 	opp_team: 'MIN', 	opp_rank: '2', 	ovr_rank: '73', 	pos_rank: '20', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.1, 	ruyd: 0.34, 	rutd: 0, 	rec: 5.04, 	reyd: 66.47, 	retd: 0.46, 	floor: 3.18, 	ceiling: 15.5, 	fpts: 14.44, 	cost: 7400, 	value: 1.95 }, 
{ name: 'Alshon Jeffery ', 	pos: 'WR ', 	team: 'CHI', 	opp_team: 'PHI', 	opp_rank: '3', 	ovr_rank: '65', 	pos_rank: '17', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.04, 	ruyd: 0.65, 	rutd: 0, 	rec: 4.44, 	reyd: 66.3, 	retd: 0.55, 	floor: 4.19, 	ceiling: 15.63, 	fpts: 14.4, 	cost: 7700, 	value: 1.87 }, 
{ name: 'Golden Tate ', 	pos: 'WR ', 	team: 'DET', 	opp_team: 'TEN', 	opp_rank: '8', 	ovr_rank: '86', 	pos_rank: '26', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.41, 	ruyd: 1.57, 	rutd: 0, 	rec: 5.94, 	reyd: 62.53, 	retd: 0.33, 	floor: 2.86, 	ceiling: 13.84, 	fpts: 14.31, 	cost: 6800, 	value: 2.1 }, 
{ name: 'Jeremy Maclin', 	pos: ' WR', 	team: ' KC', 	opp_team: 'HOU', 	opp_rank: '6', 	ovr_rank: '83', 	pos_rank: '25', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.22, 	ruyd: 0.79, 	rutd: 0, 	rec: 5.32, 	reyd: 68.96, 	retd: 0.28, 	floor: 3.06, 	ceiling: 14.06, 	fpts: 13.92, 	cost: 6300, 	value: 2.21 }, 
{ name: 'Brandon Marshall ', 	pos: 'WR ', 	team: 'NYJ', 	opp_team: 'BUF', 	opp_rank: '12', 	ovr_rank: '75', 	pos_rank: '22', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.04, 	rutd: 0, 	rec: 4.65, 	reyd: 64.72, 	retd: 0.43, 	floor: 4.28, 	ceiling: 13.64, 	fpts: 13.65, 	cost: 7500, 	value: 1.82 }, 
{ name: 'Willie Snead', 	pos: ' WR', 	team: ' NO', 	opp_team: 'NYG', 	opp_rank: '11', 	ovr_rank: '80', 	pos_rank: '23', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.82, 	reyd: 60.46, 	retd: 0.44, 	floor: 1.6, 	ceiling: 15.6, 	fpts: 13.47, 	cost: 5800, 	value: 2.32 }, 
{ name: 'DeSean Jackson ', 	pos: 'WR ', 	team: 'WSH', 	opp_team: 'DAL', 	opp_rank: '21', 	ovr_rank: '74', 	pos_rank: '21', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.04, 	ruyd: 0.46, 	rutd: 0, 	rec: 4.25, 	reyd: 61.12, 	retd: 0.49, 	floor: 3.55, 	ceiling: 14.55, 	fpts: 13.31, 	cost: 6300, 	value: 2.11 }, 
{ name: 'Stefon Diggs ', 	pos: 'WR ', 	team: 'MIN', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '87', 	pos_rank: '27', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.07, 	ruyd: -0.28, 	rutd: 0, 	rec: 4.96, 	reyd: 60.23, 	retd: 0.39, 	floor: 1.6, 	ceiling: 15.04, 	fpts: 13.3, 	cost: 5100, 	value: 2.61 }, 
{ name: 'Travis Benjamin', 	pos: ' WR', 	team: ' SD', 	opp_team: 'JAC', 	opp_rank: '26', 	ovr_rank: '88', 	pos_rank: '28', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.06, 	ruyd: 0.29, 	rutd: 0, 	rec: 4.82, 	reyd: 61.59, 	retd: 0.37, 	floor: 0.62, 	ceiling: 15.94, 	fpts: 13.15, 	cost: 4400, 	value: 2.99 }, 
{ name: 'Marvin Jones ', 	pos: 'WR ', 	team: 'DET', 	opp_team: 'TEN', 	opp_rank: '8', 	ovr_rank: '92', 	pos_rank: '29', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.11, 	ruyd: 0.3, 	rutd: 0, 	rec: 5.05, 	reyd: 63.16, 	retd: 0.28, 	floor: 2.82, 	ceiling: 13.06, 	fpts: 13.05, 	cost: 5500, 	value: 2.37 }, 
{ name: 'Eric Decker ', 	pos: 'WR ', 	team: 'NYJ', 	opp_team: 'BUF', 	opp_rank: '12', 	ovr_rank: '81', 	pos_rank: '24', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.35, 	reyd: 61.73, 	retd: 0.41, 	floor: 3.4, 	ceiling: 13.78, 	fpts: 12.94, 	cost: 6500, 	value: 1.99 }, 
{ name: 'T.Y. Hilton ', 	pos: 'WR ', 	team: 'IND', 	opp_team: 'DEN', 	opp_rank: '18', 	ovr_rank: '86', 	pos_rank: '26', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.04, 	ruyd: 0.02, 	rutd: 0, 	rec: 4.44, 	reyd: 66.1, 	retd: 0.28, 	floor: 2.86, 	ceiling: 13.84, 	fpts: 12.77, 	cost: 7000, 	value: 1.82 }, 
{ name: 'Emmanuel Sanders ', 	pos: 'WR ', 	team: 'DEN', 	opp_team: 'IND', 	opp_rank: '32', 	ovr_rank: '94', 	pos_rank: '31', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: -0.05, 	rutd: 0, 	rec: 4.72, 	reyd: 63.02, 	retd: 0.29, 	floor: 2.9, 	ceiling: 12.94, 	fpts: 12.75, 	cost: 6000, 	value: 2.13 }, 
{ name: 'Michael Crabtree ', 	pos: 'WR ', 	team: 'OAK', 	opp_team: 'ATL', 	opp_rank: '27', 	ovr_rank: '97', 	pos_rank: '33', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.61, 	reyd: 53.98, 	retd: 0.37, 	floor: 2.63, 	ceiling: 12.45, 	fpts: 12.2, 	cost: 6100, 	value: 2 }, 
{ name: 'Pierre Garcon ', 	pos: 'WR ', 	team: 'WSH', 	opp_team: 'DAL', 	opp_rank: '21', 	ovr_rank: '98', 	pos_rank: '34', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.25, 	reyd: 55.1, 	retd: 0.33, 	floor: 2.36, 	ceiling: 12.7, 	fpts: 11.78, 	cost: 4200, 	value: 2.8 }, 
{ name: 'Tajae Sharpe ', 	pos: 'WR ', 	team: 'TEN', 	opp_team: 'DET', 	opp_rank: '29', 	ovr_rank: '99', 	pos_rank: '35', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.25, 	reyd: 54.25, 	retd: 0.32, 	floor: 0, 	ceiling: 16.42, 	fpts: 11.78, 	cost: 4100, 	value: 2.87 }, 
{ name: 'Sterling Shepard ', 	pos: 'WR ', 	team: 'NYG', 	opp_team: 'NO', 	opp_rank: '28', 	ovr_rank: '99', 	pos_rank: '35', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.22, 	reyd: 60.57, 	retd: 0.24, 	floor: 1.47, 	ceiling: 13.57, 	fpts: 11.76, 	cost: 5200, 	value: 2.26 }, 
{ name: 'Allen Hurns ', 	pos: 'WR ', 	team: 'JAC', 	opp_team: 'SD', 	opp_rank: '23', 	ovr_rank: '93', 	pos_rank: '30', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.7, 	reyd: 60.21, 	retd: 0.32, 	floor: 1.94, 	ceiling: 13.92, 	fpts: 11.62, 	cost: 5400, 	value: 2.15 }, 
{ name: 'Michael Floyd ', 	pos: 'WR ', 	team: 'ARI', 	opp_team: 'TB', 	opp_rank: '13', 	ovr_rank: '95', 	pos_rank: '32', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.13, 	rutd: 0, 	rec: 3.65, 	reyd: 55.76, 	retd: 0.36, 	floor: 1.46, 	ceiling: 14.08, 	fpts: 11.4, 	cost: 5900, 	value: 1.93 }, 
{ name: 'Markus Wheaton ', 	pos: 'WR ', 	team: 'PIT', 	opp_team: 'CIN', 	opp_rank: '15', 	ovr_rank: '100', 	pos_rank: '36', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.72, 	reyd: 50.95, 	retd: 0.4, 	floor: 1.5, 	ceiling: 13.5, 	fpts: 11.22, 	cost: 5000, 	value: 2.24 }, 
{ name: 'Steve Smith ', 	pos: 'WR ', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '20', 	ovr_rank: '106', 	pos_rank: '38', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.94, 	reyd: 54.44, 	retd: 0.28, 	floor: 2, 	ceiling: 12.2, 	fpts: 11.06, 	cost: 4300, 	value: 2.57 }, 
{ name: 'Vincent Jackson', 	pos: ' WR', 	team: ' TB', 	opp_team: 'ARI', 	opp_rank: '16', 	ovr_rank: '103', 	pos_rank: '37', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.36, 	reyd: 54.67, 	retd: 0.32, 	floor: 1.19, 	ceiling: 13.57, 	fpts: 10.91, 	cost: 4000, 	value: 2.73 }, 
{ name: 'Corey Coleman ', 	pos: 'WR ', 	team: 'CLE', 	opp_team: 'BAL', 	opp_rank: '7', 	ovr_rank: '116', 	pos_rank: '43', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.29, 	reyd: 53.67, 	retd: 0.17, 	floor: 1.37, 	ceiling: 11.31, 	fpts: 10.66, 	cost: 4700, 	value: 2.27 }, 
{ name: 'Donte Moncrief ', 	pos: 'WR ', 	team: 'IND', 	opp_team: 'DEN', 	opp_rank: '18', 	ovr_rank: '116', 	pos_rank: '43', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.03, 	ruyd: 0.03, 	rutd: 0, 	rec: 3.95, 	reyd: 53.5, 	retd: 0.18, 	floor: 1.53, 	ceiling: 11.15, 	fpts: 10.35, 	cost: 6400, 	value: 1.62 }, 
{ name: 'Terrelle Pryor ', 	pos: 'WR ', 	team: 'CLE', 	opp_team: 'BAL', 	opp_rank: '7', 	ovr_rank: '109', 	pos_rank: '40', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.05, 	ruyd: 0.78, 	rutd: 0, 	rec: 3.45, 	reyd: 48.9, 	retd: 0.3, 	floor: 0, 	ceiling: 14.37, 	fpts: 10.22, 	cost: 3500, 	value: 2.92 }, 
{ name: 'Will Fuller ', 	pos: 'WR ', 	team: 'HOU', 	opp_team: 'KC', 	opp_rank: '24', 	ovr_rank: '122', 	pos_rank: '46', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.06, 	reyd: 44.55, 	retd: 0.28, 	floor: 0.4, 	ceiling: 11.76, 	fpts: 10.17, 	cost: 4200, 	value: 2.42 }, 
{ name: 'Tyler Lockett ', 	pos: 'WR ', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '19', 	ovr_rank: '118', 	pos_rank: '44', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.03, 	ruyd: -0.11, 	rutd: 0, 	rec: 3.59, 	reyd: 49.07, 	retd: 0.24, 	floor: 1.42, 	ceiling: 11.14, 	fpts: 9.9, 	cost: 4600, 	value: 2.15 }, 
{ name: 'Sammy Watkins ', 	pos: 'WR ', 	team: 'BUF', 	opp_team: 'NYJ', 	opp_rank: '22', 	ovr_rank: '111', 	pos_rank: '41', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0, 	rutd: 0, 	rec: 3.07, 	reyd: 45.78, 	retd: 0.35, 	floor: 2.58, 	ceiling: 10.78, 	fpts: 9.75, 	cost: 7300, 	value: 1.34 }, 
{ name: 'Terrance Williams ', 	pos: 'WR ', 	team: 'DAL', 	opp_team: 'WSH', 	opp_rank: '30', 	ovr_rank: '108', 	pos_rank: '39', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.77, 	reyd: 48.53, 	retd: 0.34, 	floor: 0.84, 	ceiling: 13.02, 	fpts: 9.7, 	cost: 3300, 	value: 2.94 }, 
{ name: 'Mohamed Sanu ', 	pos: 'WR ', 	team: 'ATL', 	opp_team: 'OAK', 	opp_rank: '31', 	ovr_rank: '128', 	pos_rank: '47', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.12, 	ruyd: 1, 	rutd: 0, 	rec: 3.47, 	reyd: 43.84, 	retd: 0.22, 	floor: 0.55, 	ceiling: 11.05, 	fpts: 9.31, 	cost: 5500, 	value: 1.69 }, 
{ name: 'Torrey Smith', 	pos: ' WR', 	team: ' SF', 	opp_team: 'CAR', 	opp_rank: '17', 	ovr_rank: '115', 	pos_rank: '42', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.8, 	reyd: 48.04, 	retd: 0.28, 	floor: 1.12, 	ceiling: 11.76, 	fpts: 9.3, 	cost: 4700, 	value: 1.98 }, 
{ name: 'Rishard Matthews ', 	pos: 'WR ', 	team: 'TEN', 	opp_team: 'DET', 	opp_rank: '29', 	ovr_rank: '122', 	pos_rank: '46', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.05, 	rutd: 0, 	rec: 3.13, 	reyd: 43.57, 	retd: 0.28, 	floor: 2.25, 	ceiling: 9.91, 	fpts: 9.19, 	cost: 3300, 	value: 2.78 }, 
{ name: 'Victor Cruz ', 	pos: 'WR ', 	team: 'NYG', 	opp_team: 'NO', 	opp_rank: '28', 	ovr_rank: '137', 	pos_rank: '52', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.63, 	reyd: 51.51, 	retd: 0.02, 	floor: 0.7, 	ceiling: 9.96, 	fpts: 8.94, 	cost: 4300, 	value: 2.08 }, 
{ name: 'Brandon LaFell ', 	pos: 'WR ', 	team: 'CIN', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '136', 	pos_rank: '51', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.1, 	ruyd: 0.1, 	rutd: 0, 	rec: 3.51, 	reyd: 40.12, 	retd: 0.23, 	floor: 0.19, 	ceiling: 10.49, 	fpts: 8.88, 	cost: 4000, 	value: 2.22 }, 
{ name: 'Jermaine Kearse ', 	pos: 'WR ', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '19', 	ovr_rank: '128', 	pos_rank: '47', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.03, 	ruyd: 0.05, 	rutd: 0, 	rec: 3.03, 	reyd: 43.94, 	retd: 0.23, 	floor: 2.14, 	ceiling: 9.46, 	fpts: 8.83, 	cost: 3500, 	value: 2.52 }, 
{ name: 'John Brown ', 	pos: 'WR ', 	team: 'ARI', 	opp_team: 'TB', 	opp_rank: '13', 	ovr_rank: '121', 	pos_rank: '45', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.09, 	ruyd: 0.45, 	rutd: 0, 	rec: 2.58, 	reyd: 36.96, 	retd: 0.4, 	floor: 1.23, 	ceiling: 10.99, 	fpts: 8.71, 	cost: 5300, 	value: 1.64 }, 
{ name: 'Mike Wallace ', 	pos: 'WR ', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '20', 	ovr_rank: '138', 	pos_rank: '53', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.06, 	ruyd: 0.79, 	rutd: 0, 	rec: 3.33, 	reyd: 40.26, 	retd: 0.21, 	floor: 0.66, 	ceiling: 9.96, 	fpts: 8.68, 	cost: 4700, 	value: 1.85 }, 
{ name: 'Phillip Dorsett ', 	pos: 'WR ', 	team: 'IND', 	opp_team: 'DEN', 	opp_rank: '18', 	ovr_rank: '132', 	pos_rank: '49', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.3, 	ruyd: 2.18, 	rutd: 0, 	rec: 3.3, 	reyd: 39.44, 	retd: 0.18, 	floor: 0, 	ceiling: 11.44, 	fpts: 8.64, 	cost: 4400, 	value: 1.96 }, 
{ name: 'Kevin White ', 	pos: 'WR ', 	team: 'CHI', 	opp_team: 'PHI', 	opp_rank: '3', 	ovr_rank: '135', 	pos_rank: '50', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.21, 	reyd: 38.06, 	retd: 0.26, 	floor: 0.72, 	ceiling: 9.98, 	fpts: 8.56, 	cost: 4300, 	value: 1.99 }, 
{ name: 'Michael Thomas', 	pos: ' WR', 	team: ' NO', 	opp_team: 'NYG', 	opp_rank: '11', 	ovr_rank: '137', 	pos_rank: '52', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.17, 	reyd: 37.49, 	retd: 0.24, 	floor: 0, 	ceiling: 10.7, 	fpts: 8.5, 	cost: 4000, 	value: 2.13 }, 
{ name: 'Jamison Crowder ', 	pos: 'WR ', 	team: 'WSH', 	opp_team: 'DAL', 	opp_rank: '21', 	ovr_rank: '144', 	pos_rank: '55', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.09, 	ruyd: 0.62, 	rutd: 0, 	rec: 3.51, 	reyd: 39, 	retd: 0.17, 	floor: 0.71, 	ceiling: 9.19, 	fpts: 8.49, 	cost: 3600, 	value: 2.36 }, 
{ name: 'Danny Amendola', 	pos: ' WR', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '5', 	ovr_rank: '149', 	pos_rank: '57', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.05, 	ruyd: 0.28, 	rutd: 0, 	rec: 3.62, 	reyd: 38.33, 	retd: 0.16, 	floor: 1.26, 	ceiling: 8.4, 	fpts: 8.44, 	cost: 3800, 	value: 2.22 }, 
{ name: 'Kendall Wright ', 	pos: 'WR ', 	team: 'TEN', 	opp_team: 'DET', 	opp_rank: '29', 	ovr_rank: '148', 	pos_rank: '56', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.04, 	ruyd: 0.06, 	rutd: 0, 	rec: 3.32, 	reyd: 34.6, 	retd: 0.23, 	floor: 1.19, 	ceiling: 8.53, 	fpts: 8.21, 	cost: 3000, 	value: 2.74 }, 
{ name: 'Nelson Agholor ', 	pos: 'WR ', 	team: 'PHI', 	opp_team: 'CHI', 	opp_rank: '10', 	ovr_rank: '149', 	pos_rank: '57', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.3, 	reyd: 41.84, 	retd: 0.12, 	floor: 0.62, 	ceiling: 9.04, 	fpts: 8.17, 	cost: 3500, 	value: 2.33 }, 
{ name: 'DeVante Parker ', 	pos: 'WR ', 	team: 'MIA', 	opp_team: 'NE', 	opp_rank: '25', 	ovr_rank: '129', 	pos_rank: '48', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.34, 	reyd: 38.68, 	retd: 0.32, 	floor: 0.68, 	ceiling: 10.84, 	fpts: 8.13, 	cost: 4800, 	value: 1.69 }, 
{ name: 'Anquan Boldin ', 	pos: 'WR ', 	team: 'DET', 	opp_team: 'TEN', 	opp_rank: '8', 	ovr_rank: '156', 	pos_rank: '62', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.13, 	reyd: 33.7, 	retd: 0.19, 	floor: 0.61, 	ceiling: 8.43, 	fpts: 7.64, 	cost: 4500, 	value: 1.7 }, 
{ name: 'Tavon Austin', 	pos: ' WR', 	team: ' LA', 	opp_team: 'SEA', 	opp_rank: '4', 	ovr_rank: '150', 	pos_rank: '58', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 1.07, 	ruyd: 7.85, 	rutd: 0.02, 	rec: 2.87, 	reyd: 32.13, 	retd: 0.11, 	floor: 0, 	ceiling: 9.66, 	fpts: 7.63, 	cost: 4900, 	value: 1.56 }, 
{ name: 'Kamar Aiken ', 	pos: 'WR ', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '20', 	ovr_rank: '154', 	pos_rank: '61', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.03, 	reyd: 33.01, 	retd: 0.22, 	floor: 1.75, 	ceiling: 7.41, 	fpts: 7.63, 	cost: 3900, 	value: 1.96 }, 
{ name: 'Chris Conley', 	pos: ' WR', 	team: ' KC', 	opp_team: 'HOU', 	opp_rank: '6', 	ovr_rank: '152', 	pos_rank: '60', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.91, 	reyd: 36.23, 	retd: 0.17, 	floor: 0.47, 	ceiling: 8.75, 	fpts: 7.55, 	cost: 3500, 	value: 2.16 }, 
{ name: 'Robert Woods ', 	pos: 'WR ', 	team: 'BUF', 	opp_team: 'NYJ', 	opp_rank: '22', 	ovr_rank: '169', 	pos_rank: '68', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.21, 	reyd: 34.63, 	retd: 0.11, 	floor: 1.36, 	ceiling: 6.84, 	fpts: 7.34, 	cost: 4000, 	value: 1.84 }, 
{ name: 'Dontrelle Inman', 	pos: ' WR', 	team: ' SD', 	opp_team: 'JAC', 	opp_rank: '26', 	ovr_rank: '143', 	pos_rank: '54', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.21, 	reyd: 32.86, 	retd: 0.3, 	floor: 0, 	ceiling: 10.39, 	fpts: 7.29, 	cost: 3600, 	value: 2.03 }, 
{ name: 'Chris Hogan', 	pos: ' WR', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '5', 	ovr_rank: '154', 	pos_rank: '61', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.05, 	ruyd: 0.29, 	rutd: 0, 	rec: 2.41, 	reyd: 29.73, 	retd: 0.27, 	floor: 1.18, 	ceiling: 7.98, 	fpts: 7.01, 	cost: 3500, 	value: 2 }, 
{ name: 'Tyrell Williams', 	pos: ' WR', 	team: ' SD', 	opp_team: 'JAC', 	opp_rank: '26', 	ovr_rank: '151', 	pos_rank: '59', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.08, 	reyd: 32.8, 	retd: 0.24, 	floor: 0, 	ceiling: 9.68, 	fpts: 6.8, 	cost: 3700, 	value: 1.84 }, 
{ name: 'Breshad Perriman ', 	pos: 'WR ', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '20', 	ovr_rank: '164', 	pos_rank: '64', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.52, 	reyd: 33, 	retd: 0.15, 	floor: 0.85, 	ceiling: 7.63, 	fpts: 6.76, 	cost: 3200, 	value: 2.11 }, 
																						
																						
																						
{ name: 'Rob Gronkowski', 	pos: ' TE', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '5', 	ovr_rank: '35', 	pos_rank: '1', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.29, 	reyd: 70.88, 	retd: 0.88, 	floor: 5.48, 	ceiling: 19.26, 	fpts: 17.7, 	cost: 6900, 	value: 2.57 }, 
{ name: 'Delanie Walker ', 	pos: 'TE ', 	team: 'TEN', 	opp_team: 'DET', 	opp_rank: '29', 	ovr_rank: '84', 	pos_rank: '3', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.02, 	ruyd: 0.64, 	rutd: 0, 	rec: 5.27, 	reyd: 59.77, 	retd: 0.4, 	floor: 3.45, 	ceiling: 13.45, 	fpts: 13.79, 	cost: 4500, 	value: 3.06 }, 
{ name: 'Greg Olsen ', 	pos: 'TE ', 	team: 'CAR', 	opp_team: 'SF', 	opp_rank: '1', 	ovr_rank: '77', 	pos_rank: '2', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.01, 	reyd: 63.38, 	retd: 0.41, 	floor: 1.74, 	ceiling: 15.68, 	fpts: 13.77, 	cost: 5600, 	value: 2.46 }, 
{ name: 'Jordan Reed ', 	pos: 'TE ', 	team: 'WSH', 	opp_team: 'DAL', 	opp_rank: '21', 	ovr_rank: '89', 	pos_rank: '4', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.64, 	reyd: 53.97, 	retd: 0.43, 	floor: 2.44, 	ceiling: 13.54, 	fpts: 12.62, 	cost: 6800, 	value: 1.86 }, 
{ name: 'Antonio Gates', 	pos: ' TE', 	team: ' SD', 	opp_team: 'JAC', 	opp_rank: '26', 	ovr_rank: '90', 	pos_rank: '5', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.61, 	reyd: 52.93, 	retd: 0.46, 	floor: 1.85, 	ceiling: 14.11, 	fpts: 12.62, 	cost: 4500, 	value: 2.8 }, 
{ name: 'Jason Witten ', 	pos: 'TE ', 	team: 'DAL', 	opp_team: 'WSH', 	opp_rank: '30', 	ovr_rank: '107', 	pos_rank: '6', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.8, 	reyd: 47.43, 	retd: 0.4, 	floor: 1.71, 	ceiling: 12.45, 	fpts: 11.94, 	cost: 4300, 	value: 2.78 }, 
{ name: 'Travis Kelce', 	pos: ' TE', 	team: ' KC', 	opp_team: 'HOU', 	opp_rank: '6', 	ovr_rank: '114', 	pos_rank: '7', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 5.27, 	reyd: 54.08, 	retd: 0.21, 	floor: 2.49, 	ceiling: 10.43, 	fpts: 11.84, 	cost: 5000, 	value: 2.37 }, 
{ name: 'Dwayne Allen ', 	pos: 'TE ', 	team: 'IND', 	opp_team: 'DEN', 	opp_rank: '18', 	ovr_rank: '140', 	pos_rank: '13', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0.15, 	ruyd: -0.34, 	rutd: 0, 	rec: 4.81, 	reyd: 51.25, 	retd: 0.04, 	floor: 0.29, 	ceiling: 10.21, 	fpts: 10.1, 	cost: 3600, 	value: 2.81 }, 
{ name: 'Julius Thomas ', 	pos: 'TE ', 	team: 'JAC', 	opp_team: 'SD', 	opp_rank: '23', 	ovr_rank: '130', 	pos_rank: '9', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.88, 	reyd: 37.52, 	retd: 0.3, 	floor: 0.09, 	ceiling: 11.05, 	fpts: 9.43, 	cost: 4400, 	value: 2.14 }, 
{ name: 'Coby Fleener', 	pos: ' TE', 	team: ' NO', 	opp_team: 'NYG', 	opp_rank: '11', 	ovr_rank: '134', 	pos_rank: '11', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.79, 	reyd: 38.04, 	retd: 0.28, 	floor: 1.5, 	ceiling: 9.4, 	fpts: 9.25, 	cost: 3900, 	value: 2.37 }, 
{ name: 'Charles Clay ', 	pos: 'TE ', 	team: 'BUF', 	opp_team: 'NYJ', 	opp_rank: '22', 	ovr_rank: '141', 	pos_rank: '14', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 4.11, 	reyd: 38.87, 	retd: 0.21, 	floor: 1.25, 	ceiling: 8.97, 	fpts: 9.24, 	cost: 3300, 	value: 2.8 }, 
{ name: 'Gary Barnidge ', 	pos: 'TE ', 	team: 'CLE', 	opp_team: 'BAL', 	opp_rank: '7', 	ovr_rank: '126', 	pos_rank: '8', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.12, 	reyd: 38.99, 	retd: 0.33, 	floor: 1.34, 	ceiling: 10.38, 	fpts: 8.98, 	cost: 4000, 	value: 2.25 }, 
{ name: 'Eric Ebron ', 	pos: 'TE ', 	team: 'DET', 	opp_team: 'TEN', 	opp_rank: '8', 	ovr_rank: '133', 	pos_rank: '10', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.41, 	reyd: 37.27, 	retd: 0.3, 	floor: 0.83, 	ceiling: 10.21, 	fpts: 8.94, 	cost: 3500, 	value: 2.55 }, 
{ name: 'Kyle Rudolph ', 	pos: 'TE ', 	team: 'MIN', 	opp_team: 'GB', 	opp_rank: '14', 	ovr_rank: '135', 	pos_rank: '12', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.53, 	reyd: 36.82, 	retd: 0.29, 	floor: 1.16, 	ceiling: 9.66, 	fpts: 8.93, 	cost: 3100, 	value: 2.88 }, 
{ name: 'Martellus Bennett', 	pos: ' TE', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '5', 	ovr_rank: '146', 	pos_rank: '17', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.38, 	reyd: 33.18, 	retd: 0.26, 	floor: 0.37, 	ceiling: 9.53, 	fpts: 8.3, 	cost: 4400, 	value: 1.89 }, 
{ name: 'Jacob Tamme ', 	pos: 'TE ', 	team: 'ATL', 	opp_team: 'OAK', 	opp_rank: '31', 	ovr_rank: '143', 	pos_rank: '16', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.19, 	reyd: 35.77, 	retd: 0.25, 	floor: 1.22, 	ceiling: 8.96, 	fpts: 8.27, 	cost: 2900, 	value: 2.85 }, 
{ name: 'Zach Miller ', 	pos: 'TE ', 	team: 'CHI', 	opp_team: 'PHI', 	opp_rank: '3', 	ovr_rank: '142', 	pos_rank: '15', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.09, 	reyd: 34.5, 	retd: 0.28, 	floor: 1.77, 	ceiling: 8.43, 	fpts: 8.22, 	cost: 3000, 	value: 2.74 }, 
{ name: 'Jesse James ', 	pos: 'TE ', 	team: 'PIT', 	opp_team: 'CIN', 	opp_rank: '15', 	ovr_rank: '155', 	pos_rank: '19', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.55, 	reyd: 26.59, 	retd: 0.29, 	floor: 0.32, 	ceiling: 8.84, 	fpts: 8.18, 	cost: 3400, 	value: 2.41 }, 
{ name: 'Brent Celek ', 	pos: 'TE ', 	team: 'PHI', 	opp_team: 'CHI', 	opp_rank: '10', 	ovr_rank: '149', 	pos_rank: '18', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.16, 	reyd: 34.32, 	retd: 0.24, 	floor: 0.85, 	ceiling: 8.89, 	fpts: 8.03, 	cost: 2600, 	value: 3.09 }, 
{ name: 'Will Tye ', 	pos: 'TE ', 	team: 'NYG', 	opp_team: 'NO', 	opp_rank: '28', 	ovr_rank: '162', 	pos_rank: '22', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.22, 	reyd: 33.22, 	retd: 0.18, 	floor: 1.04, 	ceiling: 7.58, 	fpts: 7.58, 	cost: 2900, 	value: 2.61 }, 
{ name: 'Jordan Cameron ', 	pos: 'TE ', 	team: 'MIA', 	opp_team: 'NE', 	opp_rank: '25', 	ovr_rank: '160', 	pos_rank: '21', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.89, 	reyd: 31.14, 	retd: 0.21, 	floor: 0.78, 	ceiling: 7.96, 	fpts: 7.3, 	cost: 2800, 	value: 2.61 }, 
{ name: 'Virgil Green ', 	pos: 'TE ', 	team: 'DEN', 	opp_team: 'IND', 	opp_rank: '32', 	ovr_rank: '156', 	pos_rank: '20', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.57, 	reyd: 28.64, 	retd: 0.28, 	floor: 0, 	ceiling: 9.45, 	fpts: 7.11, 	cost: 2800, 	value: 2.54 }, 
{ name: 'Vance McDonald', 	pos: ' TE', 	team: ' SF', 	opp_team: 'CAR', 	opp_rank: '17', 	ovr_rank: '175', 	pos_rank: '27', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 3.15, 	reyd: 31.82, 	retd: 0.14, 	floor: 0, 	ceiling: 8.07, 	fpts: 7.09, 	cost: 3000, 	value: 2.36 }, 
{ name: 'Jared Cook', 	pos: ' TE', 	team: ' GB', 	opp_team: 'MIN', 	opp_rank: '2', 	ovr_rank: '168', 	pos_rank: '24', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.75, 	reyd: 30.48, 	retd: 0.2, 	floor: 0.51, 	ceiling: 7.85, 	fpts: 6.95, 	cost: 3000, 	value: 2.32 }, 
{ name: 'Jimmy Graham ', 	pos: 'TE ', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '19', 	ovr_rank: '163', 	pos_rank: '23', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.43, 	reyd: 27.71, 	retd: 0.25, 	floor: 0.97, 	ceiling: 7.59, 	fpts: 6.7, 	cost: 3200, 	value: 2.09 }, 
{ name: 'Dennis Pitta ', 	pos: 'TE ', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '20', 	ovr_rank: '173', 	pos_rank: '26', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.48, 	reyd: 29.34, 	retd: 0.18, 	floor: 0.16, 	ceiling: 7.82, 	fpts: 6.49, 	cost: 2800, 	value: 2.32 }, 
{ name: 'Jack Doyle ', 	pos: 'TE ', 	team: 'IND', 	opp_team: 'DEN', 	opp_rank: '18', 	ovr_rank: '190', 	pos_rank: '30', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2.77, 	reyd: 19.18, 	retd: 0.25, 	floor: 0.01, 	ceiling: 6.85, 	fpts: 6.19, 	cost: 2500, 	value: 2.48 }, 
{ name: 'C.J. Uzomah ', 	pos: 'TE ', 	team: 'CIN', 	opp_team: 'PIT', 	opp_rank: '9', 	ovr_rank: '172', 	pos_rank: '25', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 2, 	reyd: 22.18, 	retd: 0.3, 	floor: 0, 	ceiling: 9.83, 	fpts: 6.1, 	cost: 2600, 	value: 2.35 }, 
																						
																						
																						
{ name: 'Seattle D/ST', 	pos: 'D/ST', 	team: 'SEA', 	opp_team: 'LA', 	opp_rank: '32', 	ovr_rank: '1', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.99, 	ceiling: 17.25, 	fpts: 13.44, 	cost: 3800, 	value: 3.54 }, 
{ name: 'Carolina D/ST', 	pos: 'D/ST', 	team: 'CAR', 	opp_team: 'SF', 	opp_rank: '14', 	ovr_rank: '2', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 5.29, 	ceiling: 16.55, 	fpts: 10.48, 	cost: 3900, 	value: 2.69 }, 
{ name: 'Kansas City D/S', 	pos: 'D/ST', 	team: ' KC', 	opp_team: 'HOU', 	opp_rank: '23', 	ovr_rank: '3', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.11, 	ceiling: 16.93, 	fpts: 10, 	cost: 3200, 	value: 3.13 }, 
{ name: 'Denver D/ST', 	pos: 'D/ST', 	team: 'DEN', 	opp_team: 'IND', 	opp_rank: '4', 	ovr_rank: '4', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.08, 	ceiling: 16.84, 	fpts: 9.94, 	cost: 3600, 	value: 2.76 }, 
{ name: 'Minnesota D/ST', 	pos: 'D/ST', 	team: 'MIN', 	opp_team: 'GB', 	opp_rank: '7', 	ovr_rank: '5', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.69, 	ceiling: 15.79, 	fpts: 9.48, 	cost: 3400, 	value: 2.79 }, 
{ name: 'Indianapolis D/ST', 	pos: 'D/ST', 	team: 'IND', 	opp_team: 'DEN', 	opp_rank: '16', 	ovr_rank: '7', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.18, 	ceiling: 14.5, 	fpts: 9.08, 	cost: 2700, 	value: 3.36 }, 
{ name: 'New England D/S', 	pos: 'D/ST', 	team: ' NE', 	opp_team: 'MIA', 	opp_rank: '29', 	ovr_rank: '12', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.08, 	ceiling: 14.34, 	fpts: 8.92, 	cost: 3000, 	value: 2.97 }, 
{ name: 'Cleveland D/ST', 	pos: 'D/ST', 	team: 'CLE', 	opp_team: 'BAL', 	opp_rank: '21', 	ovr_rank: '8', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.41, 	ceiling: 14.95, 	fpts: 8.74, 	cost: 2500, 	value: 3.5 }, 
{ name: 'Detroit D/ST', 	pos: 'D/ST', 	team: 'DET', 	opp_team: 'TEN', 	opp_rank: '31', 	ovr_rank: '10', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.82, 	ceiling: 14.8, 	fpts: 8.62, 	cost: 2800, 	value: 3.08 }, 
{ name: 'Washington D/ST', 	pos: 'D/ST', 	team: 'WSH', 	opp_team: 'DAL', 	opp_rank: '22', 	ovr_rank: '11', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.73, 	ceiling: 14.81, 	fpts: 8.62, 	cost: 2800, 	value: 3.08 }, 
{ name: 'Oakland D/ST', 	pos: 'D/ST', 	team: 'OAK', 	opp_team: 'ATL', 	opp_rank: '20', 	ovr_rank: '6', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 4.35, 	ceiling: 15.51, 	fpts: 8.58, 	cost: 2700, 	value: 3.18 }, 
{ name: 'Philadelphia D/ST', 	pos: 'D/ST', 	team: 'PHI', 	opp_team: 'CHI', 	opp_rank: '27', 	ovr_rank: '15', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.25, 	ceiling: 13.45, 	fpts: 8.16, 	cost: 3300, 	value: 2.47 }, 
{ name: 'Houston D/ST', 	pos: 'D/ST', 	team: 'HOU', 	opp_team: 'KC', 	opp_rank: '10', 	ovr_rank: '16', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.06, 	ceiling: 13.28, 	fpts: 7.94, 	cost: 3400, 	value: 2.34 }, 
{ name: 'San Diego D/S', 	pos: 'D/ST', 	team: ' SD', 	opp_team: 'JAC', 	opp_rank: '19', 	ovr_rank: '9', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.84, 	ceiling: 14.34, 	fpts: 7.74, 	cost: 2500, 	value: 3.1 }, 
{ name: 'Atlanta D/ST', 	pos: 'D/ST', 	team: 'ATL', 	opp_team: 'OAK', 	opp_rank: '5', 	ovr_rank: '12', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.1, 	ceiling: 14.32, 	fpts: 7.7, 	cost: 2300, 	value: 3.35 }, 
{ name: 'Baltimore D/ST', 	pos: 'D/ST', 	team: 'BAL', 	opp_team: 'CLE', 	opp_rank: '30', 	ovr_rank: '17', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.97, 	ceiling: 13.13, 	fpts: 7.6, 	cost: 3000, 	value: 2.53 }, 
{ name: 'New York Jets D/ST', 	pos: 'D/ST', 	team: 'NYJ', 	opp_team: 'BUF', 	opp_rank: '26', 	ovr_rank: '13', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.99, 	ceiling: 15.35, 	fpts: 7.37, 	cost: 3300, 	value: 2.23 }, 
{ name: 'Tennessee D/ST', 	pos: 'D/ST', 	team: 'TEN', 	opp_team: 'DET', 	opp_rank: '1', 	ovr_rank: '14', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 3.25, 	ceiling: 12.79, 	fpts: 7.02, 	cost: 2200, 	value: 3.19 }, 
{ name: 'Arizona D/ST', 	pos: 'D/ST', 	team: 'ARI', 	opp_team: 'TB', 	opp_rank: '6', 	ovr_rank: '18', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.39, 	ceiling: 13.51, 	fpts: 6.76, 	cost: 3500, 	value: 1.93 }, 
{ name: 'Dallas D/ST', 	pos: 'D/ST', 	team: 'DAL', 	opp_team: 'WSH', 	opp_rank: '24', 	ovr_rank: '19', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.78, 	ceiling: 12.8, 	fpts: 6.62, 	cost: 2400, 	value: 2.76 }, 
{ name: 'Cincinnati D/ST', 	pos: 'D/ST', 	team: 'CIN', 	opp_team: 'PIT', 	opp_rank: '3', 	ovr_rank: '21', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.96, 	ceiling: 12.26, 	fpts: 6.58, 	cost: 2800, 	value: 2.35 }, 
{ name: 'Buffalo D/ST', 	pos: 'D/ST', 	team: 'BUF', 	opp_team: 'NYJ', 	opp_rank: '18', 	ovr_rank: '23', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 2.72, 	ceiling: 11.32, 	fpts: 6.56, 	cost: 3100, 	value: 2.12 }, 
{ name: 'Pittsburgh D/ST', 	pos: 'D/ST', 	team: 'PIT', 	opp_team: 'CIN', 	opp_rank: '11', 	ovr_rank: '22', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.92, 	ceiling: 13.14, 	fpts: 6.3, 	cost: 2900, 	value: 2.17 }, 
{ name: 'Jacksonville D/ST', 	pos: 'D/ST', 	team: 'JAC', 	opp_team: 'SD', 	opp_rank: '9', 	ovr_rank: '20', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.96, 	ceiling: 12.38, 	fpts: 6.26, 	cost: 2300, 	value: 2.72 }, 
{ name: 'Los Angeles D/S', 	pos: 'D/ST', 	team: ' LA', 	opp_team: 'SEA', 	opp_rank: '28', 	ovr_rank: '26', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.31, 	ceiling: 11.91, 	fpts: 6.08, 	cost: 3300, 	value: 1.84 }, 
{ name: 'Chicago D/ST', 	pos: 'D/ST', 	team: 'CHI', 	opp_team: 'PHI', 	opp_rank: '13', 	ovr_rank: '24', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.67, 	ceiling: 11.75, 	fpts: 5.86, 	cost: 2900, 	value: 2.02 }, 
{ name: 'Green Bay D/S', 	pos: 'D/ST', 	team: ' GB', 	opp_team: 'MIN', 	opp_rank: '25', 	ovr_rank: '30', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.06, 	ceiling: 11.26, 	fpts: 5.3, 	cost: 3200, 	value: 1.66 }, 
{ name: 'New York Giants D/ST', 	pos: 'D/ST', 	team: 'NYG', 	opp_team: 'NO', 	opp_rank: '2', 	ovr_rank: '25', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.74, 	ceiling: 11.64, 	fpts: 5.22, 	cost: 2600, 	value: 2.01 }, 
{ name: 'San Francisco D/S', 	pos: 'D/ST', 	team: ' SF', 	opp_team: 'CAR', 	opp_rank: '15', 	ovr_rank: '28', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.13, 	ceiling: 11.53, 	fpts: 4.76, 	cost: 2400, 	value: 1.98 }, 
{ name: 'New Orleans D/S', 	pos: 'D/ST', 	team: ' NO', 	opp_team: 'NYG', 	opp_rank: '12', 	ovr_rank: '29', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.82, 	ceiling: 11.22, 	fpts: 4.48, 	cost: 2300, 	value: 1.95 }, 
{ name: 'Miami D/ST', 	pos: 'D/ST', 	team: 'MIA', 	opp_team: 'NE', 	opp_rank: '17', 	ovr_rank: '27', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 1.38, 	ceiling: 11.78, 	fpts: 4.47, 	cost: 2500, 	value: 1.79 }, 
{ name: 'Tampa Bay D/S', 	pos: 'D/ST', 	team: ' TB', 	opp_team: 'ARI', 	opp_rank: '8', 	ovr_rank: '31', 	pos_rank: '0', 	cmp: 0, 	att: 0, 	pyd: 0, 	ptd: 0, 	pint: 0, 	rush: 0, 	ruyd: 0, 	rutd: 0, 	rec: 0, 	reyd: 0, 	retd: 0, 	floor: 0.15, 	ceiling: 9.55, 	fpts: 3.56, 	cost: 2200, 	value: 1.62 }

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
	       if($scope.rowCol[j-1].value<=$scope.rowCol[j].value){
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
		var dindex = 0;
		for (var i = 0; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos.trim() == 'RB')
			{
				qbindex = i - 1;
				break;
			}
		}
		for (var i = qbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos.trim() == 'WR')
			{
				rbindex = i - 1;
				break;
			}
		}
		for (var i = rbindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos.trim() == 'TE')
			{
				wrindex = i - 1;
				break;
			}
		}
		for (var i = wrindex; i < $scope.rowCol.length; i++) {
			if ($scope.rowCol[i].pos.trim() == 'D/ST')
			{
				teindex = i - 1;
				break;
			}
		}

		$scope.bubbleSort(0,qbindex);
		$scope.bubbleSort(qbindex+1,rbindex);
		$scope.bubbleSort(rbindex+1,wrindex);
		$scope.bubbleSort(wrindex+1,teindex);
		$scope.bubbleSort(teindex+1,$scope.rowCol.length);

		//for (var a = 0; a < $scope.rowCol.length; a++)
			//console.log($scope.rowCol[a].name + " - " + $scope.rowCol[a].value);
		//return;

		for (var i = 0; i < qbindex; i++) {
			console.log(i);
			totPts = 0;
			var pos1 = $scope.rowCol[i].pos;
			var fpts1 = $scope.rowCol[i].fpts;
			var cost1 = $scope.rowCol[i].cost;
			if ($scope.rowCol[i].value > 2.5) {
				for (var j = qbindex+1; j < rbindex-1; j++) {
					console.log("  " + j);
					totPts = fpts1;
					totCost = cost1;
					var pos2 = $scope.rowCol[j].pos;
					var fpts2 = $scope.rowCol[j].fpts;
					var cost2 = $scope.rowCol[j].cost;
					var name2 = $scope.rowCol[j].name;
					if ($scope.rowCol[j].value > 2) {
						for (var k = j+1; k < rbindex; k++) {
							//console.log("  " + k);
							totPts = fpts1 + fpts2;
							totCost = cost1 + cost2;
							var pos3 = $scope.rowCol[k].pos;
							var fpts3 = $scope.rowCol[k].fpts;
							var cost3 = $scope.rowCol[k].cost;
							var name3 = $scope.rowCol[k].name;
							if (($scope.rowCol[k].value > 2) && (name2 != name3)) {
								for (var l = rbindex+1; l < wrindex-1; l++) {
									totPts = fpts1 + fpts2 + fpts3;
									totCost = cost1 + cost2 + cost3;
									var pos4 = $scope.rowCol[l].pos;
									var fpts4 = $scope.rowCol[l].fpts;
									var cost4 = $scope.rowCol[l].cost;
									var name4 = $scope.rowCol[l].name;
									if ($scope.rowCol[l].value > 2) {
										for (var m = l+1; m < wrindex; m++) {
											totPts = fpts1 + fpts2 + fpts3 + fpts4;
											totCost = cost1 + cost2 + cost3 + cost4;
											var pos5 = $scope.rowCol[m].pos;
											var fpts5 = $scope.rowCol[m].fpts;
											var cost5 = $scope.rowCol[m].cost;
											var name5 = $scope.rowCol[m].name;
											if ((totCost <= 50000) && ($scope.rowCol[m].value > 2) && (name4 != name5)) {
												for (var n = wrindex+1; n < teindex; n++) {
													totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5;
													totCost = cost1 + cost2 + cost3 + cost4 + cost5;
													var pos6 = $scope.rowCol[n].pos;
													var fpts6 = $scope.rowCol[n].fpts;
													var cost6 = $scope.rowCol[n].cost;
													var name6 = $scope.rowCol[n].name;
													if ((totCost <= 50000) && ($scope.rowCol[n].value > 2.25)) {
														for (var o = teindex+1; o < $scope.rowCol.length; o++) {
															totPts = fpts1 + fpts2 + fpts3 + fpts4 + fpts5 + fpts6;
															totCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
															var pos7 = $scope.rowCol[o].pos;
															var fpts7 = $scope.rowCol[o].fpts;
															var cost7 = $scope.rowCol[o].cost;
															if ((totCost <= 50000) && ($scope.rowCol[o].value > 2.5)) {
																for (var p = qbindex+1; p < teindex; p++) {
																	totPts = fpts1+fpts2+fpts3+fpts4+fpts5+fpts6+fpts7;
																	totCost = cost1+cost2+cost3+cost4+cost5+cost6+cost7;
																	var pos8 = $scope.rowCol[p].pos;
																	var fpts8 = $scope.rowCol[p].fpts;
																	var cost8 = $scope.rowCol[p].cost;
																	var name8 = $scope.rowCol[p].name;
																	if ((name2 != name8) && (name3 != name8) && (name4 != name8) && (name5 != name8) && (name6 != name8) && (totCost + cost8 <= 50000) && ($scope.rowCol[p].value > 2)) {
																		totPts += fpts8;
																		totCost += cost8;
																		if (totPts > maxPts)
																		{
																			maxPts = totPts;
																			maxqbindex = i;
																			maxrbindex1 = j;
																			maxrbindex2 = k;
																			maxwrindex1 = l;
																			maxwrindex2 = m;
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
																			$scope.maxTE = $scope.rowCol[maxteindex].name;
																			console.log($scope.maxTE);
																			$scope.maxFLEX = $scope.rowCol[maxflexindex].name;
																			console.log($scope.maxFLEX);
																			$scope.maxDST = $scope.rowCol[maxdstindex].name;
																			console.log($scope.maxDST);
																			$scope.maxPTS = maxPts;
																			console.log("points " + $scope.maxPTS);
																			console.log("cost " + totCost);
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
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






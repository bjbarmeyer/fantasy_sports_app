var app = angular.module('Football', []);

app.controller('ctlr', function($scope) {
	$scope.rowCollection = [
{ name: 'Cam Newton', pos: 'QB', team: 'CAR', att: 498.6, comp: 298, p_yds: 3697.5, p_td: 27.1, int: 12, rush: 121.6, ru_yds: 630.7, ru_td: 7, fl: 3.5, rec: 0, re_yds: 0, re_td: 0, fpts: 330.3 }, 
{ name: 'Aaron Rodgers', pos: 'QB', team: 'GB', att: 565.4, comp: 357.6, p_yds: 4217.1, p_td: 35, int: 7.6, rush: 56.4, ru_yds: 275.7, ru_td: 2, fl: 3.2, rec: 0, re_yds: 0, re_td: 0, fpts: 326.6 }, 
{ name: 'Russell Wilson', pos: 'QB', team: 'SEA', att: 476.6, comp: 306, p_yds: 3746.5, p_td: 28.9, int: 11, rush: 105.2, ru_yds: 581.9, ru_td: 3.4, fl: 3, rec: 0, re_yds: 0, re_td: 0, fpts: 315.8 }, 
{ name: 'Andrew Luck', pos: 'QB', team: 'IND', att: 620.9, comp: 365.1, p_yds: 4239.4, p_td: 32.9, int: 17.4, rush: 63.2, ru_yds: 284.8, ru_td: 2.2, fl: 3.7, rec: 0, re_yds: 0, re_td: 0, fpts: 300.8 }, 
{ name: 'Drew Brees', pos: 'QB', team: 'NO', att: 641.6, comp: 432.3, p_yds: 4808.9, p_td: 31.5, int: 14.7, rush: 23.8, ru_yds: 42.7, ru_td: 1, fl: 3.1, rec: 0, re_yds: 0, re_td: 0, fpts: 293.1 }, 
{ name: 'Ben Roethlisberger', pos: 'QB', team: 'PIT', att: 585.4, comp: 383.7, p_yds: 4636.2, p_td: 29.7, int: 14.4, rush: 25.5, ru_yds: 61.9, ru_td: 0.8, fl: 2.4, rec: 0, re_yds: 0, re_td: 0, fpts: 281.8 }, 
{ name: 'Carson Palmer', pos: 'QB', team: 'ARI', att: 569.5, comp: 358.2, p_yds: 4430.5, p_td: 30.4, int: 13.9, rush: 23.1, ru_yds: 58.8, ru_td: 0.9, fl: 3.3, rec: 0, re_yds: 0, re_td: 0, fpts: 275.5 }, 
{ name: 'Blake Bortles', pos: 'QB', team: 'JAX', att: 564.6, comp: 330.5, p_yds: 3923.1, p_td: 28.4, int: 17.7, rush: 55.5, ru_yds: 310.7, ru_td: 2, fl: 4.3, rec: 0, re_yds: 0, re_td: 0, fpts: 269.8 }, 
{ name: 'Tyrod Taylor', pos: 'QB', team: 'BUF', att: 465.1, comp: 286.4, p_yds: 3409.9, p_td: 21, int: 11.2, rush: 106.4, ru_yds: 541.2, ru_td: 3.5, fl: 2.6, rec: 0, re_yds: 0, re_td: 0, fpts: 268.2 }, 
{ name: 'Philip Rivers', pos: 'QB', team: 'SD', att: 623.8, comp: 406.4, p_yds: 4526.6, p_td: 28.7, int: 16, rush: 24.5, ru_yds: 50.7, ru_td: 0.2, fl: 3.2, rec: 0, re_yds: 0, re_td: 0, fpts: 264 }, 
{ name: 'Eli Manning', pos: 'QB', team: 'NYG', att: 598.6, comp: 373.8, p_yds: 4314.8, p_td: 29.5, int: 14.8, rush: 21.4, ru_yds: 65.6, ru_td: 0.6, fl: 3.5, rec: 0, re_yds: 0, re_td: 0, fpts: 264 }, 
{ name: 'Andy Dalton', pos: 'QB', team: 'CIN', att: 512.9, comp: 325.9, p_yds: 3865.8, p_td: 25.6, int: 12.5, rush: 61.7, ru_yds: 192, ru_td: 2.7, fl: 3.5, rec: 0, re_yds: 0, re_td: 0, fpts: 260.5 }, 
{ name: 'Matthew Stafford', pos: 'QB', team: 'DET', att: 581.7, comp: 372.1, p_yds: 4186.5, p_td: 25.9, int: 14.3, rush: 37.1, ru_yds: 126.7, ru_td: 1.5, fl: 3.3, rec: 0, re_yds: 0, re_td: 0, fpts: 257.4 }, 
{ name: 'Kirk Cousins', pos: 'QB', team: 'WSH', att: 552.9, comp: 359.4, p_yds: 4177.3, p_td: 26.1, int: 15, rush: 28.6, ru_yds: 75.4, ru_td: 2.5, fl: 3.7, rec: 0, re_yds: 0, re_td: 0, fpts: 256.5 }, 
{ name: 'Jameis Winston', pos: 'QB', team: 'TB', att: 536, comp: 320.6, p_yds: 3925.6, p_td: 23.4, int: 15.5, rush: 52.3, ru_yds: 210.4, ru_td: 3.8, fl: 3.6, rec: 0, re_yds: 0, re_td: 0, fpts: 256.4 }, 
{ name: 'Tony Romo', pos: 'QB', team: 'DAL', att: 521, comp: 344, p_yds: 3916, p_td: 29.3, int: 12.9, rush: 25.9, ru_yds: 71.6, ru_td: 0.7, fl: 3.5, rec: 0, re_yds: 0, re_td: 0, fpts: 252.7 }, 
{ name: 'Derek Carr', pos: 'QB', team: 'OAK', att: 591.9, comp: 357.6, p_yds: 3923.5, p_td: 28.4, int: 14.1, rush: 31.1, ru_yds: 116.1, ru_td: 0.7, fl: 3.7, rec: 0, re_yds: 0, re_td: 0, fpts: 250.8 }, 
{ name: 'Matt Ryan', pos: 'QB', team: 'ATL', att: 610.5, comp: 403.1, p_yds: 4485.7, p_td: 25, int: 15.9, rush: 31.9, ru_yds: 74.5, ru_td: 0.3, fl: 3.7, rec: 0, re_yds: 0, re_td: 0, fpts: 249.7 }, 
{ name: 'Ryan Tannehill', pos: 'QB', team: 'MIA', att: 583.8, comp: 363.2, p_yds: 4085.9, p_td: 24, int: 14, rush: 38.6, ru_yds: 172.1, ru_td: 1, fl: 3.2, rec: 0, re_yds: 0, re_td: 0, fpts: 248.1 }, 
{ name: 'Alex Smith', pos: 'QB', team: 'KC', att: 478.9, comp: 305.1, p_yds: 3391, p_td: 21.3, int: 9.7, rush: 73.5, ru_yds: 397.1, ru_td: 2, fl: 2.8, rec: 0, re_yds: 0, re_td: 0, fpts: 247.5 }, 
{ name: 'Ryan Fitzpatrick', pos: 'QB', team: 'NYJ', att: 541.7, comp: 320, p_yds: 3653.4, p_td: 23.8, int: 15.4, rush: 60.1, ru_yds: 268.1, ru_td: 2.2, fl: 2.4, rec: 0, re_yds: 0, re_td: 0, fpts: 245.6 }, 
{ name: 'Marcus Mariota', pos: 'QB', team: 'TEN', att: 496.2, comp: 306.4, p_yds: 3550.3, p_td: 20.6, int: 14.8, rush: 60.4, ru_yds: 393.2, ru_td: 3, fl: 4.6, rec: 0, re_yds: 0, re_td: 0, fpts: 242.5 }, 
{ name: 'Tom Brady', pos: 'QB', team: 'NE', att: 473.8, comp: 302.2, p_yds: 3459.4, p_td: 25.8, int: 7, rush: 27.5, ru_yds: 50.4, ru_td: 1.5, fl: 2, rec: 0, re_yds: 0, re_td: 0, fpts: 237.5 }, 
{ name: 'Joe Flacco', pos: 'QB', team: 'BAL', att: 589.7, comp: 359.9, p_yds: 4020.8, p_td: 24.2, int: 15.2, rush: 29.2, ru_yds: 60.7, ru_td: 1.7, fl: 3.7, rec: 0, re_yds: 0, re_td: 0, fpts: 235.9 }, 
{ name: 'Jay Cutler', pos: 'QB', team: 'CHI', att: 526.3, comp: 333.9, p_yds: 3804.2, p_td: 23.4, int: 15.8, rush: 40.3, ru_yds: 178.5, ru_td: 1.3, fl: 3.6, rec: 0, re_yds: 0, re_td: 0, fpts: 232.4 }, 
{ name: 'Brock Osweiler', pos: 'QB', team: 'HOU', att: 540.9, comp: 328.1, p_yds: 3816.7, p_td: 23.5, int: 14.3, rush: 47.1, ru_yds: 128.4, ru_td: 1.3, fl: 3.8, rec: 0, re_yds: 0, re_td: 0, fpts: 231.2 }, 
{ name: 'Teddy Bridgewater', pos: 'QB', team: 'MIN', att: 470.3, comp: 296.5, p_yds: 3322.5, p_td: 19, int: 12.1, rush: 52.7, ru_yds: 262.6, ru_td: 2.5, fl: 3, rec: 0, re_yds: 0, re_td: 0, fpts: 220 }, 
{ name: 'Robert Griffin', pos: 'QB', team: 'CLE', att: 451.1, comp: 278.4, p_yds: 3242.1, p_td: 16, int: 13.9, rush: 56.5, ru_yds: 263.7, ru_td: 1.5, fl: 3.8, rec: 0, re_yds: 0, re_td: 0, fpts: 194.2 }, 
{ name: 'Jared Goff', pos: 'QB', team: 'LA', att: 484.9, comp: 293.3, p_yds: 3330.8, p_td: 17.8, int: 15.2, rush: 41.4, ru_yds: 145.6, ru_td: 1.2, fl: 3.3, rec: 0, re_yds: 0, re_td: 0, fpts: 189.3 }, 
{ name: 'Sam Bradford', pos: 'QB', team: 'PHI', att: 455.4, comp: 282.1, p_yds: 3097.6, p_td: 17.6, int: 11.8, rush: 21.4, ru_yds: 52.6, ru_td: 0.5, fl: 3.2, rec: 0, re_yds: 0, re_td: 0, fpts: 172.6 }, 
{ name: 'Mark Sanchez', pos: 'QB', team: 'DEN', att: 385.9, comp: 232.8, p_yds: 2632.8, p_td: 15.6, int: 13.3, rush: 30.6, ru_yds: 89.5, ru_td: 0.7, fl: 3.2, rec: 0, re_yds: 0, re_td: 0, fpts: 147.7 }, 
{ name: 'Blaine Gabbert', pos: 'QB', team: 'SF', att: 349.8, comp: 209.3, p_yds: 2353.9, p_td: 11.5, int: 9.9, rush: 42.1, ru_yds: 206.9, ru_td: 1.4, fl: 2, rec: 0, re_yds: 0, re_td: 0, fpts: 145.5 }, 
{ name: 'Colin Kaepernick', pos: 'QB', team: 'SF', att: 180.7, comp: 102.4, p_yds: 1145.6, p_td: 5.7, int: 5.2, rush: 31.7, ru_yds: 159, ru_td: 0.8, fl: 2, rec: 0, re_yds: 0, re_td: 0, fpts: 75 }, 
{ name: 'Paxton Lynch', pos: 'QB', team: 'DEN', att: 143.2, comp: 83.6, p_yds: 967.1, p_td: 5.6, int: 4.3, rush: 15.2, ru_yds: 55.4, ru_td: 0.4, fl: 0.5, rec: 0, re_yds: 0, re_td: 0, fpts: 59.2 }, 
{ name: 'Jimmy Garoppolo', pos: 'QB', team: 'NE', att: 151.4, comp: 89.6, p_yds: 989.5, p_td: 6.2, int: 3.7, rush: 6.6, ru_yds: 16.5, ru_td: 0.2, fl: 0.7, rec: 0, re_yds: 0, re_td: 0, fpts: 58.3 }, 
{ name: 'Josh McCown', pos: 'QB', team: 'CLE', att: 109.5, comp: 65.1, p_yds: 737.9, p_td: 4.3, int: 3.2, rush: 8.5, ru_yds: 36.6, ru_td: 0.2, fl: 0.6, rec: 0, re_yds: 0, re_td: 0, fpts: 43.8 }, 
{ name: 'Carson Wentz PHI', pos: 'QB', team: '', att: 97.9, comp: 60.1, p_yds: 668.4, p_td: 3.5, int: 3.2, rush: 9.4, ru_yds: 38.2, ru_td: 0.3, fl: 0.7, rec: 0, re_yds: 0, re_td: 0, fpts: 38.8 }
];

	$scope.st_marys = function (ptd, rutd, retd) {
		var sm = (ptd * 3) + (rutd + retd) * 6;
		return Math.round(sm * 10)/10
	}

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

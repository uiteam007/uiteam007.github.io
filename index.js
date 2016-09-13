var myapp = angular.module("angjspapp", []);
myapp.controller("angjspctrl", function ($scope, $http) {

  $scope.PressForMovie = function () {
    var URL = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=bzm7bkpkkm4wghg22xdbx4vy&q=" + $scope.input + "&callback=JSON_CALLBACK";

    $scope.mymovies = [];
    $http.jsonp(URL).success(function (resp) {
      $scope.mymovies = resp.movies;
      console.log($scope.mymovies);
    });
  };
});
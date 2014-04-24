var ngCoderwallApp = angular.module('ngCoderwallApp', []);

ngCoderwallApp.controller("CoderwallAppListController", ['$scope', 'CoderwallAppFactory', '$timeout', function ($scope, CoderwallAppFactory, $timeout) {

    $scope.badges=[];
    $scope.getBadges= function(username){

        CoderwallAppFactory.fetch(username).then(function (response) {        

$scope.badges=response.data.data.badges;
console.log(response.data.data.badges);
       //     $timeout(function(){
        //        $scope.answers=answers;
       //     });                

        });

    }    

}]);
ngCoderwallApp.factory('CoderwallAppFactory', ['$http', '$timeout', function ($http, $timeout) {
    var factory = {
        fetch : function (username) {
            return $http.jsonp('https://coderwall.com/'+username+'.json?callback=JSON_CALLBACK').success(function (data) {
                return data;
            }).error(function (e) {
                return e;
            });
        }
    };
    return factory;   

}]);
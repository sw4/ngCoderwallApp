var ngCoderwall = angular.module('ngCoderwall', []);

ngCoderwall.controller("CoderwallListController", ['$scope', 'CoderwallFactory', '$timeout', function ($scope, CoderwallFactory, $timeout) {

    $scope.badges=[];
    $scope.getBadges= function(username){

        CoderwallFactory.fetch(username).then(function (response) {        

$scope.badges=response.data.data.badges;
console.log(response.data.data.badges);
       //     $timeout(function(){
        //        $scope.answers=answers;
       //     });                

        });

    }    

}]);
ngCoderwall.factory('CoderwallFactory', ['$http', '$timeout', function ($http, $timeout) {
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
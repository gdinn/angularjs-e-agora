var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', function($scope) {
    $scope.mudar1 = function() {
        $scope.resultado = "Padrão ES5 Fn. Expression";
    }

    function mudar2() {
        $scope.resultado = "Padrão ES5 Fn. Declaration";
    }

    $scope.mudar3 = () => {
        $scope.resultado = "Padrão ES6 Fn. Expression";
    } 
}]);





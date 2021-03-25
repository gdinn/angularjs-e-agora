var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$timeout', function($scope) {
    $scope.resultado = "Deu certo?"

    $scope.testePromise = function() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                console.log("O tempo passou.")
                resolve("Promise resolveu");
            }, 2000);
        });
    }

    $scope.testePromise().then(function(res) {
        $scope.$apply(function() {
            $scope.resultado = res
            $scope.$apply(function(){
                console.log("alo")
            })
        })
    })
}]);





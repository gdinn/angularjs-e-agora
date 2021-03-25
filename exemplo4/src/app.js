import { produtosCategoriaComponent } from "./components/produtos-categoria/produtos-categoria.component";

var myApp = angular.module('myApp', []);


myApp.component('produtosCategoria', produtosCategoriaComponent())
myApp.controller('mainController', ['$scope', '$timeout', function($scope) {
  $scope.categoriaBuscar = ""
  $scope.resultadosEncontrados = 0

  $scope.resultadoRetornou = function(res) { // o nome do argumento, aqui, indifere
    $scope.resultadosEncontrados = res
  }

}]);

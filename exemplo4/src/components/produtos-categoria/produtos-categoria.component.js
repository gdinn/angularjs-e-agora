import template from './produtos-categoria.component.html'

export function produtosCategoriaComponent() {
  var component = {};

  component.bindings = {
    categoria: '=',
    resultado: '&'
  }

  component.template = template;

  component.controller = ['$scope', function($scope) {
    let ctrl = this;
    ctrl.massa = {
      "legumes": [
        "Alface",
        "Beterraba",
        "Cenoura"
      ],
      "padaria": [
        "Pão de queijo",
        "Pastel",
        "Pizza",
      ]
    }

    $scope.$watch('$ctrl.categoria', function(newValue) {
      if(ctrl.massa[ctrl.categoria]){
        var len = ctrl.massa[ctrl.categoria].length
        ctrl.resultado({res: len})
      } else {
        ctrl.resultado(0) // Note que aqui o resultado não foi empacotado em um objeto
      }
    })

  }]  

  return component
}
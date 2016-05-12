'use strict';

angular.module('organigramaApp')
.controller('SubsCtrl', function ($scope, $http, $modal,filterFilter, $routeParams) {

  var myOtherModal = $modal({scope: $scope, templateUrl: 'views/modal.temp.html',show: false});
  $scope.primerOrganigrama = function(rut)
  {
    $scope.organigrama =[];
    $http.get('estructura.json')
    .then(function(res){
      var ivea = filterFilter(res.data.subdirecciones,{'id':$routeParams.sub}, true);
      if(ivea.length>0)
        $scope.subdireccion=ivea[0];
        console.log($routeParams.sub);
        console.log($scope.subdireccion);
    });
  }
  $scope.select=function (obj, nivel, area) {
    $scope.mostrar=obj;
    if(area){
      $scope.mostrar={};
      $scope.mostrar.titular=obj;
      $scope.mostrar.area=area;
    }
    console.log(obj);
    $scope.mostrar.nivel=nivel;
    myOtherModal.$promise.then(myOtherModal.show);
  }
  var x = new $scope.primerOrganigrama()
});

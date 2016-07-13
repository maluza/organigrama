'use strict';

angular.module('organigramaApp')
.controller('tablaCtrl', function ($scope, $http, $modal,filterFilter, $routeParams) {

  var myOtherModal = $modal({scope: $scope, templateUrl: 'views/modal.temp.html',show: false});
  $scope.primerOrganigrama = function(rut)
  {
    $scope.organigrama =[];
    $http.get('estructura.json')
    .then(function(res){
      $scope.ivea = res.data;
    });
  }
  $scope.select=function (obj, nivel, id) {
    $scope.mostrar=angular.copy(obj);
    $scope.mostrar.nivel=nivel;
    if(id){
      $scope.mostrar.id=id;
    }
    console.log(obj);
    myOtherModal.$promise.then(myOtherModal.show);
  }
  var x = new $scope.primerOrganigrama()});

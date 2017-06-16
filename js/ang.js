angular.module('harmonogram', ['ngRoute'])
.controller('harmonogramCtrl', function($scope){
  $scope.y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  $scope.x = [0, 1, 2, 3, 4, 5, 6, 7];
  $scope.instytuty = [
    {index:0,title:' '},
    {index:1,title:'Instytut Gospodarki i Polityki Społecznej'},
    {index:2,title:'Instytut Humanistyczny'},
    {index:3,title:'Instytut Kultury Fizycznej'},
    {index:4,title:'Instytut Politechniczny'}
  ];
  $scope.zaklady = [
    {z:0,i:0,title:' '},
    {z:1,i:1,title:'Zakład Pielęgniarstwa'},
    {z:2,i:1,title:'Zakład Rolnictwa i Rozwoju Obszarów Wiejskich'},
    {z:3,i:1,title:'Zakład Towaroznawstwa'},
    {z:4,i:2,title:'Zakład Filologii Angielskiej'},
    {z:5,i:2,title:'Zakład Filologii Germańskiej'},
    {z:6,i:2,title:'Zakład Filologii Rosyjskiej'},
    {z:7,i:2,title:'Zakład Pedagogiki'},
    {z:8,i:2,title:'Zakład Polonistyki'},
    {z:9,i:3,title:'Zakład Turystyki i Rekreacji'},
    {z:10,i:3,title:'Zakład Wychowania Fizycznego'},
    {z:11,i:4,title:'Zakład Budownictwa'},
    {z:12,i:4,title:'Zakład Energetyki'},
    {z:13,i:4,title:'Zakład Informatyki'},
    {z:14,i:4,title:'Zakład Inżynierii Środowiska'},
    {z:15,i:4,title:'Zakład Mechaniki i Budowy Maszyn'},
    {z:16,i:4,title:'Zakład Zarządzania'},
  ];
})
.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    controller: 'harmonogramCtrl',
    templateUrl: 'tabela.html'
  }).
  when('/plan/:z', {
    controller: 'harmonogramCtrl',
    templateUrl: 'plany.html'
  }).
  otherwise({
    redirectTo: '/'
  })
})

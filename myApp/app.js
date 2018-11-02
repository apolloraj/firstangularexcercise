var app = angular.module("myApp", ["ngRoute"]);

// angular.module("myApp", ["ngRoute"]);

// angular.module("myApp").config(['$routeProvider',function($routeProvider){
//     $routeProvider
//     .when('/about',{
//         // templateUrl :'about.html',
//         // controller:'AboutController'
//         // template : "<h1>About</h1><p>Nothing has been selected</p>"
//     })
//    .when('/welcome',{
//         templateUrl :'pages/welcome.html',
//         controller:'WelcomeController'
//     })
//     .otherwise({
//         template : "<h1>None</h1><p>Nothing has been selected</p>"
//     });
// }]);

// app.config(function($routeProvider) {
//     // app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
//     // $locationProvider.hashPrefix('');
//     $routeProvider
//     .when("/welcome", {
//         templateUrl:"pages/welcome.html",
//         controller:"WelcomeController",
//         controllerAs: "vm"
//         // template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
//     })
//     .when("/about", {
//         templateUrl:"pages/about.html"
//     })
//     .otherwise({
//         template : "<h1>None</h1><p>Nothing has been selected</p>"
//     });
//  });

//  app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
//     $locationProvider.hashPrefix('');
//     $routeProvider
//     .when("/welcome", {
//         templateUrl:"about.html"
//         // template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
//     })
//     .when("/about", {
//         template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
//     })
//     .otherwise({
//         templateUrl : "about.html",
//     });
//     }]);

// app.controller('AboutController',[function(){
//     this.details = 'Hello, from AboutController.';
// }]);

// app.controller('WelcomeController',[function(){
//     this.details = 'Hello, from WelcomeController.';
// }]);
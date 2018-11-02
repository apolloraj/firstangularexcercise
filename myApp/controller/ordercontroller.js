// app.config(['$routeProvider',function($routeProvider){
//     $routeProvider    
//     .when('/weekendmenu',{
//         templateUrl :'#weekendmenu'
//     })
//     .when('/wedmenu',{
//         templateUrl :'#wedmenu'
//     })
//     .when('/orderonline',{
//         templateUrl :'pages/orderonline.html'
//     })
//     .when('/home',{
//         templateUrl :'pages/home.html'       
//     })
//     .when('/menu',{
//         templateUrl :'pages/menu.html'       
//     })
//     .otherwise({
//         template : "<h1>Order none</h1><p>Nothing has been selected</p>"
//     });
// }]);

// app.controller('orderListMenu', function($scope,$http) {
//     $http.get('../data/ordermenulist.json').then(function(response){
//         $scope.ordermainmenu = response
//     });
// });

// app.controller('menulistphotos', function($scope,$http) {
//     // $scope.menulistphotoname=[
//     //     {menuname:'soups',imgpath:'images/soups.jpg'},
//     //     {menuname:'Masala Vadai',imgpath:'images/MasalaVadai.jpg'},
//     //     {menuname:'Veg Starters',imgpath:'images/vegstarter.jpg'},
//     //     {menuname:'Chicken Starters',imgpath:'images/chickenstarter.jpg'},
//     //     {menuname:'Meedu Vada',imgpath:'images/meduvada.jpg'},
//     //     {menuname:'Idly',imgpath:'images/idlymenu.jpg'},
//     //     {menuname:'Dosas',imgpath:'images/dosas.jpg'},
//     //     {menuname:'Non-Veg Briyani',imgpath:'images/briyani_nonveg.jpg'}]
//         $http.get('../data/menulistphotoname.json').then(function(response){
//             $scope.menulistphotoname = response
//         });
//         console.log(angular.toJson($scope.menulistphotoname));
// });

// app.controller('footercontent', function($scope) {
//     this.details = "hello from WelcomeController" 
//     $scope.footernames=[
//         {footername:'ABOUT US'},
//         {footername:'AUTHOR'},
//         {footername:'PRIVACY POLICY'},
//         {footername:'TERMS AND CONDITIONS'}]
// });
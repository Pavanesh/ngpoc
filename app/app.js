//setter
//var app = angular.module("app", []);
//getter
//angular.module("app");

var app = angular.module("app", []).config(function($routeProvider){

$routeProvider.when('/home', {templateUrl:'home.html',
controller:'HomeController'				
});

$routeProvider.when('/login', {templateUrl:'login.html',
controller:'LoginController'				
});

$routeProvider.when('/products', {templateUrl:'products.html',
controller:'ProductsController'				
});

$routeProvider.otherwise({redirectTo : '/home'});
});
 
app.controller('HomeController', function($scope){
//window.scope = $scope;
$scope.title = "Angular JS Demo";
$scope.message = "Mouseover image to see a directive at work!";
});

	app.controller('LoginController', function($scope, $location){
	//window.scope = $scope;
	$scope.credentials = { username: "", password: "" };
			$scope.login = function(){
				if($scope.credentials.username === "pavanesh"){
					$location.path('/products');
				} else {
					alert("username must be pavanesh");
					}
			};			
	});

	app.controller('ProductsController', function($scope){
		$scope.logout = function(){
				$location.path('/login');
			};
	});


	app.directive('showsMessageWhenHovered', function(){
		return {
			restrict: "A", // A = Attribute, C = Class Name, E = Element, M = HTML Comment
			link: function(scope, element, attributes){
					var originalMessage  = scope.message;
								element.bind("mouseover", function(){
								scope.message = attributes.message;
								scope.$apply();
								});
								element.bind("mouseout", function(){
								scope.message = originalMessage;
								scope.$apply();
								});
				}
		};
});

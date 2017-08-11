var app = angular.module("listaTelefonica", ["ui", "ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
	
	 $locationProvider.html5Mode(true);
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html"
	});
});
angular.module("listaTelefonica").factory("operadoraFactory", function ($http) {

	var _getOperadoras = function () {
		return $http.get("http://localhost:8080/contato/operadora");
	};

	return {
		getOperadoras: _getOperadoras
	};
});
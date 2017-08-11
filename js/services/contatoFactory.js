angular.module("listaTelefonica").factory("contatoFactory", function ($http) {

	var _getContatos = function () {
		return $http.get("http://localhost:8080/contato/contato");
	};

	var _postContato = function (contato) {
		return $http.post("http://localhost:8080/contato/contato", contato);
	};

	return {
		getContatos: _getContatos,
		postContato: _postContato 

	};
});
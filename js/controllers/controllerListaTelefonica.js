angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http, contatoFactory, operadoraFactory) {

	$scope.app = "Lista Telefônica";
	$scope.contatos = [];
	/*$scope.contatos = [
		{nome: "Ana Maria", dtCadastro: new Date(), fone: "(91) 9900-9900", cor: "red"},
		{nome: "Zeca Renato", dtCadastro: new Date(), fone: "(91) 9900-9900", cor: "blue"},
		{nome: "Carlos Jose", dtCadastro: new Date(), fone: "(91) 9900-9900", cor: "green"}
	];*/
	$scope.adicionarContato = function (contato) {
		
		contato.dtCadastro = new Date().toISOString().slice(0, 10);
		contatoFactory.postContato(contato).then(function successCallback(response, status) {
			$scope.contatos = response.data;
		}, function errorCallback(response) {
			console.log(response);
		});
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};
	var carregarContatos = function() {
		contatoFactory.getContatos().then(function successCallback(response, status) {
			
			$scope.contatos = response.data;
		}, function errorCallback(response) {
			$scope.error = "Erro ao carregar dados!";
		});
	};
	carregarContatos();
	$scope.operadoras = [];
	$scope.classe = "selecionado";
	var carregarOperadoras = function () {
		operadoraFactory.getOperadoras().then(function success(response) {
			$scope.operadoras = response.data;
		}, function error(response) {
			console.log("erro na consulta das operadoras " + response.data);
		});
	};
	carregarOperadoras();
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) {
				return contato;
			}
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.order = campo;
		$scope.direcao = !$scope.direcao;
	};
});
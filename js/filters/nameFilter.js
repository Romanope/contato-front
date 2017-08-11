angular.module("listaTelefonica").filter("name", function () {
	return function (input) {

		var nomes = input.split(" ");
		nomes = nomes.map(function (nome) {
			if (nome.length <= 3) return nome;
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase(); 
		});

		return nomes.join(" ");
	};
});
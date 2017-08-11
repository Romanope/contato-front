angular.module("listaTelefonica").directive("uiAlert", function () {
	return {
		templateUrl: "view/templates/alert.html",
		restrict: "AE",
		scope: {
			topic: "@title",
			message: "="
		}
	};
});
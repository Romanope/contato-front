angular.module("listaTelefonica").directive("uiAccordions", function () {
	return {
		controller: function ($scope, $element, $attrs) {
			var accordions = [];
			this.regiterAccordion = function (accordion) {
				accordions.push(accordion);
			};
			this.closeAll = function () {
				accordions.forEach(function (accordion) {
					accordion.isOpened = false;
				});
			};
		}
	};
});

angular.module("listaTelefonica").directive("uiAccordion", function () {
	return {
		templateUrl: "view/uiAccordion.html",
		transclude: true,
		scope: {
			title: "@titulo"
		},
		require: "^uiAccordions",
		link: function (scope, element, attrs, ctrl) {
			ctrl.regiterAccordion(scope);
			scope.open = function () {
				console.log("cliquei no accordion");
				ctrl.closeAll();
				scope.isOpened = !scope.isOpened;
			};
		}
	};
});
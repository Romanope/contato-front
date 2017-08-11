angular.module("ui", []).run(function ($templateCache) {
	$templateCache.put("view/uiAccordion.html", '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>')
});
angular.module("ui").directive("uiAccordions", function () {
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

angular.module("ui").directive("uiAccordion", function () {
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
				ctrl.closeAll();
				scope.isOpened = !scope.isOpened;
			};
		}
	};
});
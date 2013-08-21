'use strict';

angular.module('imageCarousel').directive('imageCarousel', ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		controller: 'imageCarouselController',
		require: 'ngModel',
		scope: {
			images : '=ngModel',
			width : '=carouselWidth',
			height : '=carouselHeight',
			showPrevious : '=carouselShowPrevious',
			showNumbers : '=carouselShowNumbers',
			showNext : '=carouselShowNext'
		}
	};
}]);
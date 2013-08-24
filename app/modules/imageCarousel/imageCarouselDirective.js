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
			autoplay : '=carouselAutoplay',
			showPrevious : '=carouselShowPrevious',
			showNumbers : '=carouselShowNumbers',
			showNext : '=carouselShowNext',
			interval : '=carouselInterval'
		}
	};
}]);
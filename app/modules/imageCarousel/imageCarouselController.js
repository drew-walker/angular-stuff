'use strict';

angular.module('imageCarousel').controller('imageCarouselController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.slideNumber = 1;
	$scope.showNavigation = true;
	$scope.showPrevious = true;
	$scope.showNumbers = true;
	$scope.showNext = true;
	$scope.autoplay = true;
	$scope.interval = 2000;
	
	$scope.nextSlide = function () {
		$scope.slideNumber = $scope.slideNumber == $scope.images.length ? 1 : $scope.slideNumber + 1;
	};
	
	$scope.previousSlide = function () {
		$scope.slideNumber = $scope.slideNumber == 1 ? $scope.images.length : $scope.slideNumber - 1;
	};
	
	$scope.goToSlide = function (slideNumber) {
		$scope.slideNumber = slideNumber;
	};
	
	$scope.intervalFunction = function() {
		if ($scope.autoplay) {
			$timeout(function() {
				$scope.nextSlide();
				$scope.intervalFunction();
			}, $scope.interval);
		}
	};
	
	$scope.$watch('autoplay', function(newVal, oldVal) {
		if (newVal) $scope.intervalFunction();
	});

}]);
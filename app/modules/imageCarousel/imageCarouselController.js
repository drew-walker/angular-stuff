'use strict';

angular.module('imageCarousel').controller('imageCarouselController', ['$scope', function($scope) {
	$scope.slideNumber = 1;
	$scope.showNavigation = true;
	$scope.showPrevious = true;
	$scope.showNumbers = true;
	$scope.showNext = true;
	
	$scope.nextSlide = function () {
		$scope.slideNumber = $scope.slideNumber == $scope.images.length ? 1 : $scope.slideNumber + 1;
	}
	
	$scope.previousSlide = function () {
		$scope.slideNumber = $scope.slideNumber == 1 ? $scope.images.length : $scope.slideNumber - 1;
	}
	
	$scope.goToSlide = function (slideNumber) {
		$scope.slideNumber = slideNumber;
	}
}]);
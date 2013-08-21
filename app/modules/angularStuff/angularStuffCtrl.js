'use strict';

angular.module('angularStuff').controller('angularStuffCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.carouselImages = [
		'http://shareyourwallpapers.com/upload/wallpaper/nature/mountains/mountains_ad3ca3d2.jpg',
		'http://cdn.obsidianportal.com/assets/9389/magnificent-castle-in-the-mountain_size_800x600.jpg',
		'http://www.wallpaperpimper.com/wallpaper/Landscape/Sunset/Mountain-Sunset-1-800x600.jpg'
	];
	$scope.carouselWidth = 400;
	$scope.carouselHeight = 300;
}]);
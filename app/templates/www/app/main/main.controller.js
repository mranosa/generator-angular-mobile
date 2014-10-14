'use strict';

angular.module('<%= scriptAppName %>')
	.controller('MainCtrl', function($scope) {
		$scope.awesomeThings = [{
			name: 'Chocolate muffin',
			info: '...'
		}, {
			name: 'Donut bear claw',
			info: '...'
		}, {
			name: 'Liquorice gummies',
			info: '...'
		}, {
			name: 'Apple pie oat cake',
			info: '...'
		}, {
			name: 'Caramels jujubes',
			info: '...'
		}];
	});
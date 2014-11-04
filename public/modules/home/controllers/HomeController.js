(function() {
	'use strict';

	function HomeController() {
		var vm = this;

		vm.title = 'HomeController';
	}

	angular
		.module('home')
		.controller('HomeController', HomeController);	
})();

(function() {
	'use strict';

	angular
		.module('home', [ 'ngRoute' ])
		.config( function( $routeProvider ) {
			$routeProvider
				.when('/home', {
					templateUrl: 'modules/home/views/home.tpl.html'
				})
				.otherwise({
					redirectTo: '/home'
				});
		} );
})();

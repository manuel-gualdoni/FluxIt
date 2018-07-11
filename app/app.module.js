angular.module('spotifyApp', ['ngRoute', 'artistListModule', 'artistDetailModule', 'ngResource', 'artistTrackModule', 'artistSearchModule', 'artistGenresModule', 'artistModalModule', 'serviceModule']);

angular.module('spotifyApp')
		.controller('LinkCtrl', ['$location', function LinkController ($location) {
			 var $ctrl = this;
			 $ctrl.isActive = function(viewLocation){
			 	var active = (viewLocation == $location.path());
			 	return active;
			 }
		}
]);

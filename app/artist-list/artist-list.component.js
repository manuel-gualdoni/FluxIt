angular.
	module('artistListModule').
	component('artistListComponent', {
		templateUrl:'artist-list/artist-list.template.html',
		controller: ['$scope', 'artistFactory',
	      function ArtistListController($scope, artistFactory) {
	      	artistFactory.query({ids: '0oSGxfWSnnOXhD2fKuz2Gy,22bE4uQ6baNwSHPVcDxLCe,3WrFJ7ztbogyGnTHbHJFl2,1dfeR4HaWDbWqFHLkxsg1d'}, 
	      		function(rta){
	      			$scope.artists = rta.artists;
	      		});
	      }
	    ]
	});
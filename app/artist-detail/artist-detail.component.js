angular.
	module('artistDetailModule').
	component('artistDetailComponent', {
		templateUrl:'artist-detail/artist-detail.template.html',
		controller: ['$scope', '$routeParams', 'artistFactory','albumFactory',
		function ArtistDetailController($scope, $routeParams, artistFactory, albumFactory){
			artistFactory.get({id: $routeParams.id}, 
	      		function(artist){
	      			$scope.artist = artist;
	      			console.log(artist);
	      		});

			albumFactory.query({id: $routeParams.id}, 
	      		function(albums){
	      			$scope.albums = albums.items;
	      			console.log(albums.items);
	      		});
			
		}
		]
	});
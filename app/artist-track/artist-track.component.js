angular.
	module('artistTrackModule').
	component('artistTrackComponent', {
		templateUrl:'artist-track/artist-track.template.html',
		controller:['$scope', '$routeParams','trackFactory', 'trackAlbumFactory',
			function ArtistTrackController($scope, $routeParams, trackFactory, trackAlbumFactory){
				trackFactory.query({id: $routeParams.id}, 
		      		function(track){
		      			$scope.tracks = track.items;
		      			console.log(track);
		      			console.log($scope.tracks);
		      		});
				trackAlbumFactory.query({id: $routeParams.id}, 
		      		function(album){
		      			$scope.albums = album;
		      			console.log($scope.albums);
		      		});
			}
		]
	});
angular.
	module('artistSearchModule').
	component('artistSearchComponent', {
		templateUrl:'artist-search/artist-search.template.html',
		controller: ['$scope', '$routeParams', 'searchFactory',
		function ArtistDetailController($scope, $routeParams, searchFactory){
			$scope.buscar = function (q, type){
				console.log(q);
				console.log(type);
				searchFactory.get({q: q, type: type}, 
	      		function(search){
	      			$scope.search = search;
	      			console.log(search);
	      		});
			};

		}
		]
	});
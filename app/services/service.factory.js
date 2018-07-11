var serviceModule = angular.module('serviceModule', ['ngResource']);
var token = 'BQCwN_66itrjFKVlSnuVtFMivjlw5Bo0LIy_ddtTJn-AqwI58PmTNZGHvvEi83iPRvWrmAk-G5H-E9Y-AoCUX8K3VcsEslWftd_93QgwHSBgfLYe27PVjlOJwDT9LWItiC1KjzNh01kVf8c0oL0s4fjOxBAm4fjmpDxNmwcV4YunJ1sUyOXz4Y3z7i09KqMez4j3QYl7C2fzJSKFJ5bkNtvtyI84VdeogC1_erFV3X4zBk7jC09HcwVbvMlOSrO-oqUi';

serviceModule.factory('artistFactory', ['$resource', 
	function ($resource) {
	  

	  return $resource('https://api.spotify.com/v1/artists/:id',
	  	{ id: '@id' },
	  	{
	  		'get': { 
	  			method:'GET' ,
	  			params: { id: '@id' },
	  			isArray: false,
	  			headers: {'Authorization': 'Bearer ' + token}
	  		},
	  		'query': {
	  			method:'GET',
	  			isArray: false,
	  			headers: {'Authorization': 'Bearer ' + token}
	  		}
	  	});
	}
]);

serviceModule.factory('albumFactory', ['$resource', 
	function ($resource) {
	 

	  return $resource('https://api.spotify.com/v1/artists/:id/albums',
	  	{ id: '@id' },
	  	{
	  		'get': { 
	  			method:'GET' ,
	  			params: { id: '@id' },
	  			isArray: false,
	  			headers: {'Authorization': 'Bearer ' + token}
	  		},
	  		'query': {
	  			method:'GET',
	  			isArray: false,
	  			headers: {'Authorization': 'Bearer ' + token}
	  		}
	  	});
	}
]);

serviceModule.factory('trackFactory', ['$resource', 
	function ($resource) {
	 

	  return $resource('https://api.spotify.com/v1/albums/:id/tracks',
	  	{ id: '@id' },
	  	{
	  		'query': {
	  			method:'GET',
	  			params: { id: '@id' },
	  			isArray: false,
	  			headers: {'Authorization': 'Bearer ' + token}
	  		}
	  	});
	}
]);

serviceModule.factory('trackAlbumFactory', ['$resource', 
	function ($resource) {
	 

	  return $resource('https://api.spotify.com/v1/albums/:id',
	  	{ id: '@id' },
	  	{
	  		'query': {
	  			method:'GET',
	  			params: { id: '@id' },
	  			isArray: false,
	  			headers: {'Authorization': 'Bearer ' + token}
	  		}
	  	});
	}
]);

serviceModule.factory('searchFactory', ['$resource', 
	function ($resource) {
	  

	  return $resource('https://api.spotify.com/v1/search',
	  	{ id: '@id' },
	  	{
	  		'get': { 
	  			method:'GET' ,
	  			isArray: false,
	  			headers: {'Authorization': 'Bearer ' + token}
	  		}
	  	});
	}
]);
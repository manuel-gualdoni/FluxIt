var serviceModule = angular.module('serviceModule', ['ngResource']);
var token = 'BQA_p76MU2AyKuXwRXkIgC0eg_9nQo677U6btSps4Tix0mqmWzN7wsu_ejSxarm1y4J_GEPezBkK7tgNuEsi9osIrJ3Q0xUHWKIppvRIcNjzzAOBATMGtCnmMWRndcnU3MXj9vV7jK-eTjN2pTtIElPgPdlNRsKD6Epr8LjOcLDbZgrY2HiRQjiP7LWWu6UZRD-QFlCwtIiMmikoByGmhwznhzU1FRS_DEUU330WOvrRsIaUlJgaJNL4N57AjwDTA4RD';

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
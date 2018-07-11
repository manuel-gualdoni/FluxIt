var serviceModule = angular.module('serviceModule', ['ngResource']);
var token = 'BQB6YzUWRJ_E1uHSPWTHOrWpM0MJ94Q32--FWmqFG3m1VhrMzYqDAjKxFQXxov-C4xA4Ux-CtEk9vR58ZQD7QLKhu3ISNrbRiOkBXyESpiMu6DKCeKLH_JVEcH_Y3MCFxFALwyfXmKaHEMynVNKjBFdk2_XW7fM4hQu11scjoQVOT9f6_L-O5XEDGF7Qchi12qyx9xz49yQRNRnmYxxxGwFDh0lzdfETSPGNaqQc1vRyxV_SmwpCGPUZNpY8LX9UnZKQ';

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
angular.
  module('spotifyApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<artist-list-component></artist-list-component>'
        }).
        when('/detail/:id', {
          template: '<artist-detail-component></artist-detail-component>'
        }).
        when('/album/:id', {
          template: '<artist-track-component></artist-track-component>'
        }).
        when('/search', {
          template: '<artist-search-component></artist-search-component>'
        }).
        otherwise('/');
    }
  ]);
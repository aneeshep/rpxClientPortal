/*
	Angular Service to fetch data from RPX api
*/

'use strict';

angular.module('rpxClientPortalApp')
    .service('Npeprofiles', ['$http', function ($http) {

        delete $http.defaults.headers.common['X-Requested-With'];

        var apiUrl =  baseUri + '/npe_profiles.json';

        this.get = function (pagenum, count) {
            return $http.get(apiUrl + '?page=' + pagenum + '&per_page=' + count);
        };
    }]);
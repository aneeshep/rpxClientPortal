'use strict';

angular.module('rpxClientPortalApp')
    .controller('MainCtrl', function ($scope, Npeprofiles) {
  

        $scope.profiles = [];
        $scope.sortField = 'name';
        $scope.perpage = 5;
        $scope.currentPage = 1;
        $scope.activeNav = 'intelligence';




        $scope.changeSortField = function (field) {

            if ($scope.sortField === field) {
                    $scope.reverse = !$scope.reverse;
            } else {
                $scope.sortField = field;
                $scope.reverse = false;
            }
        };

        $scope.nextPage = function () {
    
            if ($scope.currentPage < $scope.totalPages) {
                $scope.currentPage++;
                $scope.getProfiles();
            }
        };

        $scope.prevPage = function () {
            if ($scope.currentPage > 1) {
                $scope.currentPage--;
                $scope.getProfiles();
            }
        };

        $scope.getPage = function (pageNum) {
            $scope.currentPage = pageNum;
            $scope.getProfiles();
        };

        $scope.paginate = function () {

            $scope.paginateStart = ($scope.currentPage - 1) * $scope.perpage + 1;
            $scope.paginateEnd = $scope.perpage - 1 + $scope.paginateStart;
      
            if ($scope.paginateEnd > $scope.totalProfiles) {
                $scope.paginateEnd = $scope.totalProfiles;
            }
        };

        $scope.getProfiles = function () {
            $scope.profiles = [];
            $scope.paginate();
            Npeprofiles.get($scope.currentPage, $scope.perpage)
                .success(function (profiles) {
                    $scope.profiles = profiles.response.npe_profiles;
                    if (!$scope.totalProfiles) {
                        $scope.totalProfiles = profiles.response.params.total_count;
                        $scope.totalPages = profiles.response.params.total_pages;
                    }
                });
        };
    });

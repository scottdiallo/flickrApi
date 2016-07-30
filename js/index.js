(function () {
    angular.module('myApp', [])
        .controller('myCtrl', myCtrl);
    myCtrl.$inject = ['$scope', '$http']

    function myCtrl($scope, $http) {
        $scope.results = [];
        $scope.isSearching = false;

        $scope.search = function () {
            $scope.isSearching = true;
            $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: 'f9030bd370f8974341617743433cb871',
                    text: $scope.searchTerm,
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function (data) {
                console.log(data);

                $scope.results = data;
                $scope.isSearching = false;
            }).error(function (error) {
                console.error(error);
                $scope.isSearching = true;
            });
        };
    }

})();

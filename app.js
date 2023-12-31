(function() {
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.message = '';
  
      $scope.checkItems = function() {
        const items = $scope.lunchItems.split(',');
        $scope.message = items.length <= 3 ? 'Enjoy!' : 'Too much!';
        if (!items.length) {
          $scope.message = 'Please enter data first';
          
        }
      };
    }
  })();
  
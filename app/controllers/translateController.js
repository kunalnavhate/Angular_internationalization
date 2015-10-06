app.controller('Ctrl', function ($scope, $translate) {
        $scope.changeLanguage = function (key) {
          $translate.use(key);
          //$translate.use(*)
        };
      });
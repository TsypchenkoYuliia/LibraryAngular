libraryApp.controller("authController", function ($scope) {

    $scope.submit = function (user) {
        localStorage.setItem("user", angular.toJson(user));
        $scope.close();
    };

    $scope.login = function (user) {
        var currentUser = JSON.parse(localStorage.getItem("user") || "[]");

        if (currentUser.name === user.name){
            angular.element($("#loginModal").modal('hide'));
        }
        else{
            angular.element($("#registerModal").modal('show'));
            angular.element($("#loginModal").modal('hide'));
        }
    };

    $scope.close = function () {
        user = {};
        angular.element($("#registerModal").modal('hide'));
    }

});

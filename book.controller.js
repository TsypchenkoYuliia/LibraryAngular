
var libraryApp = angular.module("libraryApp", []);

libraryApp.controller("bookController", function ($scope) {

    $scope.currentUser = JSON.parse(localStorage.getItem('user') || "[]").name;

    angular.element(function () {
        if(localStorage.getItem('user') === null){
            angular.element($("#loginModal").modal('show'))
        } 
    });

    $scope.books = JSON.parse(localStorage.getItem("books") || "[]");

    $scope.addItem = function (newbook) {
        newbook.added = $scope.currentUser;
        $scope.books.push(newbook);
        $scope.update();
        $scope.newbook = {};
    }

    $scope.updateCurrentBook = function (book) {
        var bookFromStorage = $scope.books.find(x=>x.title === book.title);
        var index = $scope.books.indexOf(bookFromStorage);

        $scope.books.splice(index, 1);
        $scope.books.push(book);
        $scope.update();
        $scope.updateBook = {};
    }

    $scope.reserve = function (book) {
        var user = JSON.parse(localStorage.getItem('user') || "[]");

        if (user === null){
            angular.element($("#registerModal").modal('show'));
        }
        else{
            var bookFromStorage = $scope.books.find(x=>x.title === book.title);
            var index = $scope.books.indexOf(bookFromStorage);

            $scope.books.splice(index, 1);
            book.reserve = user.name;
            $scope.books.push(book);
            $scope.update();
        }
    }

    $scope.return = function (book) {
        var bookFromStorage = $scope.books.find(x=>x.title === book.title);
        var index = $scope.books.indexOf(bookFromStorage);

        $scope.books.splice(index, 1);
    
        book.reserve = undefined;
        $scope.books.push(book);

        $scope.update();
    }

    $scope.edit = function (book) {
        $scope.updateBook = book;
    }

    $scope.update = function () {
        localStorage.removeItem("books");
        localStorage.setItem("books", angular.toJson($scope.books));
    }
});








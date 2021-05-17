
var model = {
    items: [
        { title: "Мастер и Маргарита", author: 'Михаил Булгаков', publishingHouse: 'MyHouse', year:'2020', reserve: 'Мария', added: '' },
        { title: "Мастер и Маргарита", author: 'Михаил Булгаков', publishingHouse: 'MyHouse', year:'2020', reserve: 'Оля', added: 'Оля' },
        { title: "Мастер и Маргарита", author: 'Михаил Булгаков', publishingHouse: 'MyHouse', year:'2020', reserve: 'Елена', added: '' },
        { title: "Мастер и Маргарита", author: 'Михаил Булгаков', publishingHouse: 'MyHouse', year:'2020', reserve: '', added: '' }
    ]
};

var book = {
    title: '', author: '', publishingHouse: '', year:'', reserve: '', added: ''
};

var libraryApp = angular.module("libraryApp", []);
    libraryApp.controller("bookController", function ($scope) {
    $scope.books = model;
    $scope.newbook = book;

    $scope.addItem = function (title, author, publishingHouse, year) {
       
        $scope.books.items.push({ title: title, author: author, publishingHouse: publishingHouse, year: year });
    }

});
  
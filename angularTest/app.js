/*global angular product*/

var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
   this.product = cars; 
});

var cars = [
        {
            name: "Ferrari",
            price: 250,
            image: "images/Ferrari.jpg",
            description: "Is really fast car.",
            specs: "700 hp",
            quantity: 10
        },
        {
            name: "Lamborghini",
            price: 500,
            image: "images/Lamborghini.jpg",
            description: "Is very faster car.",
            specs: "720 hp",
            quantity: 10
        },
        {
            name: "Bugatti",
            price: 750,
            image: "images/Bugatti.jpeg",
            description: "Car melts face off.",
            specs: "1500 hp",
            quantity: 10
        }
];

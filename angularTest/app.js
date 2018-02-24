var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
   this.product = cars; 
});

var cars = [
        {
            name: "Ferrari",
            price: 250,
            image: "Ferrari.jpg",
            description: "Is really fast car."
        },
        {
            name: "Lamborghini",
            price: 500,
            image: "Lamborghini.jpg",
            description: "Is very faster car."
        },
        {
            name: "Bugatti",
            price: 750,
            image: "Bugatti.jpeg",
            description: "Car melts face off."
        }
];
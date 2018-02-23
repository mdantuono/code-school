var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
   this.product = cars; 
});

var cars = [
        {
            name: "Ferrari",
            price: 100,
            image: "Ferrari.jpg"
        },
        {
            name: "Lamborghini",
            price: 200,
            image: "Lamborghini.jpg"
        },
        {
            name: "Bugatti",
            price: 300,
            image: "Bugatti.jpeg"
        }
];
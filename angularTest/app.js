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

if (cars.quantity == 0) {
    document.getElementById("left").innerHTML = "No cars available";
}
// function decrement() {
//     var num = product.quantity;
//     var Lnum = cars[1].quantity;
//     var Bnum = cars[2].quantity;
//     if(num == 0) {
//         document.getElementById("left").innerHTML = "No cars available";
//     }else {
//         Fnum--;
//         return Fnum;
//     }
//     // if(Lnum == 0) {
//     //     document.getElementById("left").innerHTML = "No cars available";
//     // }else {
//     //     Lnum--;
//     //     return Lnum;
//     // }
//     // if(Bnum == 0) {
//     //     document.getElementById("left").innerHTML = "No cars available";
//     // }else {
//     //     Bnum--;
//     //     return Bnum;
//     // }
//     console.log(Fnum, Lnum, Bnum);
// }
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]

console.log("Hello JAVA SCRIPT")
const tax = 1.20;
let finalPrice;
finalPrice += dishData[0]['price']*tax
console.log(finalPrice)
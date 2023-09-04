// Given variables
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
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let index = 0; index < dishData.length; index++) {
        let finalPrice;
        if (taxBoolean==true) {
            finalPrice = (dishData[index]['price']) * tax
            // console.log(finalPrice)
        } else if (taxBoolean==false) {
            finalPrice = (dishData[index]['price']) 
            // console.log(finalPrice)
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return
        }

        console.log(`Dish: ${dishData[index]['name']} Price(incl.tax):$ ${finalPrice}`)
        
    }
}
getPrices(true)
// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean)
    if (typeof(guests)=="number" && (0<guests<30)) {
        let discount = 0;
        if (guests < 5) {
            discount = 5
        } else if (guests >= 5) {
            discount = 10
        }
        console.log(`Discount is: $${discount}`)
    } else {
        console.log("The second argument must be a number between 0 and 30")
    }

    

}

// Call getDiscount()
// getDiscount(true, 2)
// getDiscount(false, 10)
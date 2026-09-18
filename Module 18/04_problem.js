/* 
    Arrow Function with Defauld parrameters & logic
    Write an arrow function that calculates shipping cost based on order amount. Free shipping if amount >= 1000, otherwise charge a default fee 60 taka

    Example: calculateShipping(1200) -> "Free Shipping"
    Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
    Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/

const calculateShipping = (price, shippingCharge = 60) => {
    // if(price >= 1000) return `Free Shipping`;
    // else return `Shipping Fee: ${shippingCharge} Taka`;

    // Using ternary
    return (price >= 1000)? `Free Shipping` : `Shipping Fee: ${shippingCharge} Taka`;
}

console.log(calculateShipping(1200));
console.log(calculateShipping(500));
console.log(calculateShipping(500, 100));
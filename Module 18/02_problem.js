/*
    Flexible Total Calculator
    calculatorTotal(...prices) using rest params, sums any number of prices, with a default discount = 0.

    ExampleP calculateTotal(0, 100, 200, 300) -> 600
    Example: calculatetotal(10, 100, 200) -> 270 (10 = discount%)

    Note: Discount is ALWAYS the first argument.
*/

const calculateTotal = (discount = 0, ...prices) => {
    let totalPrice = 0;
    for(let price of prices) totalPrice += price;

    return totalPrice - (totalPrice * discount/100);
}

console.log(calculateTotal(10, 100, 200));
console.log(calculateTotal(10, 100, 200, 50, 300));
/* 
    Bulk Discount Applier:
    applyDiscount(prices, rate) - apply a discount % to every price in the array and return a NEW array. The original prices array must stay exactly the same

    Input: 
        prices = [500, 1000,  250]
        rate = 10 (10% discount)

    Output: 
        [450, 900, 225]

    Original prices array must remain [500, 1000, 250] afterwards.
*/

const applyDiscount = (prices, rate = 0) => {
    let priceAfterDiscount = prices.map((elem, idx, arr) => {
        let discoutedPrice = elem - (elem*rate)/100;
        return discoutedPrice;
    });

    // console.log(priceAfterDiscount);
    return priceAfterDiscount;
}

let productPrices = [500, 1000, 250, 700, 400];
console.log(applyDiscount(productPrices, 10));
// console.log(productPrices);
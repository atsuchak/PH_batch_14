/* 
    Most Expensive Product: Given an object of product prices, use Object,keys() or Object.entries() + loop to find the most expensive the most expensive product.

    Example: {pen: 20, book: 150, bag: 500} -> "bag"
*/

const getMostExpensiveProduct = (product) => {
    const keys = Object.keys(product);
    let highest = 0;
    let expensiveProductName = "";

    for(let key of keys) {
        if(highest < product[key]) {
            highest = product[key];
            expensiveProductName = key;
        }
        // console.log(key, product[key]); 
    }

    return expensiveProductName;
}

console.log(getMostExpensiveProduct({pen: 20, book: 150, bag: 500, bat: 750}));
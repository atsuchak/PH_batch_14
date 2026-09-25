/* 
    Shopping Cart Total(reduce)
    getCartTotal(cart) - sum price * qty across every item in the cart using reduce().

    Input:
        cart = [
            {name: "Pen", price: 20, qty: 3},
            {name: "Notebook", price: 50, qty: 2}
        ]

    Output:
        160  (20*3 + 50*2)
*/

// let cart = [
//     {name: "Pen", price: 20, qty: 3},
//     {name: "Notebook", price: 50, qty: 2},
// ]

const getCartTotal = (cart) => {
    let total = cart.reduce((accumulator, elem) => {
        console.log(accumulator, elem);
        return accumulator + elem.price*elem.qty
    }, 0);

    return total;
}

let cart = [
    {name: "Pen", price: 20, qty: 3},
    {name: "Notebook", price: 50, qty: 2},
]

console.log(getCartTotal(cart));;
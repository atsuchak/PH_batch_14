/**
 * Receipt Generator (Template String)
 * Build a receipt generator using template strings - take item name, price qty as intpu, output formatted multiline receipt.
 * 
 * Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 taka"
 */

const receiptGenerator = (name, price, qty) => `${name} x${qty} = ${price} taka`;
console.log(receiptGenerator("Alu", 150, 5));
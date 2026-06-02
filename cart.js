const prompt = require("prompt-sync")();

let itemName = prompt("Enter the item Name you want to purchase : ");
let itemPrice = Number(prompt("Enter price: "));
let quantity = Number(prompt("Enter quantity: "));
let discount= 10;
console.log(`You got the total discount of ${discount}`);
let total = itemPrice * quantity;
let totalprice = total - discount
console.log(`Total price after discounting is : ${totalprice}`);
console.log(`you bought ${quantity} items of ${itemName}. Total after discount of RS ${discount}, Total price is ${totalprice}`);
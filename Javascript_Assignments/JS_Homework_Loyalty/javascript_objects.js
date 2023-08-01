let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart: [{
        item: "Shampoo",
        quantity: 2,
        price_$: 3,
    },
    {
        item: "Soap",
        quantity: 2,
        price_$: 2,
    },
    {
        item: "Toothpaste",
        quantity: 1,
        price_$: 3,
    },
   
]
}
console.log(`Hello, Welcome ${customer.customer_name} we are happy to see you today.`);
console.log(`Your total number of points is: ${customer.points}.`);

let  total_bill = 0;
let  total_points = customer.points;

for(i=0; i<customer.cart.length; i++){
({ item, quantity, price_$ } = customer.cart[i]);

const ItemPrice = quantity * price_$;
total_bill += ItemPrice;

const NewPoint = quantity * 1;
total_points += NewPoint;


console.log(`${quantity} x ${item} ----- $${price_$} = $${ItemPrice}`);
}
console.log("Total Bill: $" + total_bill);
console.log("Updated total points: "+ total_points);
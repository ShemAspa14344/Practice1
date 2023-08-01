

function discount(percentage, amount){
   return  amount - (amount*(percentage/100));
  
}

function AgeChecker(age){
return age >= 10;
 
}

function calculate(customer_grp, discount_func){ 

const group_count = customer_grp.length;
const sub_total = group_count * 299;
const all_aged_10_and_above = customer_grp.every(AgeChecker);
let discount = 0;
let grand_total;

if(group_count < 6){
    return `Sorry, No discount, your bill is: ${sub_total}`;
}

if(all_aged_10_and_above === true){
    discount = 15;
    grand_total = discount_func(discount, sub_total)
}
else{
    discount = 10;
    grand_total = discount_func(discount, sub_total)
}
return `${discount}% discount. Bill: ${grand_total.toFixed(2)}`;
}


const customer_group1 = [8, 12, 11, 11, 18, 24, 5, 10];
console.log(calculate(customer_group1, discount));

const customer_group2 = [10, 11, 11, 13, 19, 14];
console.log(calculate(customer_group2, discount));

const customer_group3 = [12, 12, 14];
console.log(calculate(customer_group3, discount));

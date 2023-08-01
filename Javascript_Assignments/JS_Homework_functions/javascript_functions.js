let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20,
}

function showData() {
console.log("First Number: "+ obj.num1);
console.log("Second Number: "+ obj.num2);
console.log("The Sum: "+ obj.sum);
console.log("The Difference: "+ obj.difference);
console.log("The Product: "+ obj.product);
console.log("The Quotient: "+ obj.quotient)
}

function add(num1, num2){
   sum = num1 + num2;
   return sum;
}
function substract(num1, num2){
    sub = num1 - num2;
    return sub;
}
function product(num1, num2){
    prod = num1 * num2;
    return prod;
}
function quotient(num1, num2){
    quo = num1 / num2;
    return quo;

}

function newSetOfNumbers(num1, num2){
    obj["num1"] = num1;
    obj["num2"] = num2;

    obj["sum"] = add(num1, num2);
    obj["substract"] = substract(num1, num2);
    obj["product"] = product(num1, num2);
    obj["quotient"] = quotient(num1, num2);
}

showData(obj);
console.log("--------------------------");
newSetOfNumbers(200, 10);
console.log("--------------------------");
showData(obj);
console.log("--------------------------");
newSetOfNumbers(500, 20);
console.log("--------------------------");
showData(obj);
console.log("--------------------------");

// function bank(name){
//     let balance = 0
//     console.log("Hi! "+ name)

//     function CheckBalance(){
//         console.log("Your total balance is: " + balance)
//     }
//     function deposit(num){
//         balance += num;
//         console.log("You deposited: "+ num +" to your account");
//     }
//     function withdraw(num){
       
//         if(num >= 499){
//             console.log("insuficient balance to withdraw minimum of 500")
//         }

//         else if(balance <= 0){
//             balance -= num;
//         console.log("You withdraw: "+ num +" to your account")

//         }
//         else{
//         console.log("Sorry not enough money to withdraw")
//         }
//     }

//     return {
//         dep: deposit,
//        check: CheckBalance,
//         with: withdraw,
//     }
// }

// bank = bank("Shem Aspa");
// bank.dep(500)
// bank.dep(300)
// bank.with(6499)
// bank.check()

const flowers = ["rose","star gazer","tulips","sun flower"]; 

for(let i = 0; i < flowers.length; i++){     
    console.log(flowers[i].length);
 }

 






















// const arr = [
//   "Web Developer",
//   "Web Developer",
//   "Refocus",
//   "Web Developer",
//   "Refocus",
//   "Awesome",
// ];

// var count = {};

// arr.forEach((value) => {
//   count = { ...count, [value]: (count[value] || 0) + 1 };
// });

// console.log(count);

// const numbers = [1,2,3,4,5,6,7];
// const squaredNumbers = numbers.map(num => num* num);

// console.log(squaredNumbers)
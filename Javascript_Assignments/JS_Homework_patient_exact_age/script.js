const current_month = new Date().getMonth()
let current_year = new Date().getFullYear();

let birth_month = 2;
const birth_year = 1978;


let age = current_year - birth_year;
console.log(`Patient's Age: ${age}`);

if(birth_month <= current_month){
    age++;
    console.log(`Patient's real age: ${age}`);
}
else{
    console.log(`Patient's Age is still: ${age}`);
}

var isLoggedIn = false;
var userID = null;


var ClothingStore = {
    Company : "SereneFit",
    adress: "Tahimik St. Imus City Cavite",
    unique_code: 14344,

    // CLIENTS / CUSTOMERSSS
    clients: [
        {
            name: "Shem",
            surname: "Aspa",
            age: 18,
            birthday: "10.24.2004",
            cart: [],
        },
        {
            name: "Luke",
            surname: "Aspa",
            age: 20,
            birthday: "8.28.2002",
            cart: [],
        }
    ],
    // CLOTHESSS & ITEMSS
    items: [ 
        {
            name: "Cotton Tee",
            category: "T-Shirts",
            price: 200,
            stocks: 300,
        },
        {
            name: "Oversized Tee",
            category: "T-Shirts",
            price: 250,
            stocks: 200,
        },
        {
            name: "Tri-Color Shorts",
            category: "Shorts",
            price: 150,
            stocks: 250,
        },
    ],
   
};


// ------------------------- FUNCTIONS FOR ADMINNNN -------------------------

function Admin(){

    // CHECK USERS
    function CheckClients(){
    console.log(ClothingStore.clients)
    }
    // ADD USERS
    function AddUsers(info){
        ClothingStore.clients.push(info)
        console.log("Client " + info.name + " " + info.surname + " has been added");
    }
    // REMOVE
    function RemoveUser(id){
     console.log(`Client ${ClothingStore.clients[id].name} has been removed`)
     ClothingStore.clients.splice(id, 1)
    }
    return{
        CheckClients,
        AddUsers,
        RemoveUser,
    }
}
// ------------------------- FUNCTIONS FOR USERSSSS --------------------------

function Clients(){

    // LOG INNNNN
    function Login(name, surname){
    ClothingStore.clients.forEach((element, index) => {
        if (name === element.name && surname === element.surname){
            isLoggedIn = true;
            userID = index;
            console.log("Hi "+ element.name +" "+ element.surname)
        }
    })  
        if (!isLoggedIn){
            isLoggedIn = false;
            userID = null;
            console.log("Invalid credentials")
        }
    }

    // BUYING FUNCTION
    function Buy(Id, quantity) {
        const item = ClothingStore.items.find(element => element.name === Id);
    
        if (isLoggedIn && item) {
            const total = item.price * quantity;
            console.log(`Good day ${ClothingStore.clients[userID].name}. You ordered ${item.name} with a quantity of ${quantity}. The total is ${total}`);
    
            const client = ClothingStore.clients[userID];
            client.cart.push({ Item: item, Quantity: quantity, Total: total });

            return total;
        } 
       
        else {
            console.log("Invalid Item");
        }
    }

    // SHOW CART FUNCTION
    function ShowOrder(){
        const client = ClothingStore.clients[userID];
       
        console.log(`hey ${client.name} your order:`);
        client.cart.forEach((cartItem, index) => {
            console.log(`Item ${index + 1}: ${cartItem.Quantity}x ${cartItem.Item.name}`);
            console.log(`   Total: ${cartItem.Total}`);
        });
        
    }
    
    // CONFIRMMMM & PAY & CHANGE & RECEIPT
    function Confirm(pay) {
        var client = ClothingStore.clients[userID];
        var carts = client.cart;
        var sum = 0;

    if(carts.every(cartItem => cartItem.Item.stocks > 0)){
        for (var i = 0; i < carts.length; i++) {
            var total = carts[i].Total;
            sum += total;
        }
        var change = pay - sum;
        
        if(pay >= sum && change !== 0){
        // RECEIPT FORMAT----------
        console.log(" ")
        console.log("................Here is your Receipt................")
        console.log(" ")
        console.log(ShowOrder())
        console.log(`The sum is: ${sum}`);
        console.log(`We received a total of ${pay}`)
        console.log(`Your change is ${change} Thankyou for buying, till next time and enjoy`)
        console.log(" ")
        console.log(`................Valid for 5 years...................`)
        console.log(" ")
        console.log(" ")

        for (var i = 0; i < carts.length; i++) {
            var item = carts[i].Item; 
            var quantity = carts[i].Quantity;
            item.stocks -= quantity;
        }
        client.cart = [];
        }
        else{
        console.log(`Sorry insufficient balance`)
        }
        
    }
    else{
        console.log("Sorry out of stocks")
    }
         
    }
    
    return{
        Login,
        Buy,
        ShowOrder,
        Confirm
    }
}


// ------------------------- FUNCTIONS FOR ITEMSSSS --------------------------

function Items(){

    // CHECK ITEMSSS
    function CheckItems(){
        console.log(ClothingStore.items);
    }
    // ADD ITEMSSS
    function AddItems(info){
        ClothingStore.items.push(info)
        console.log(`${info.name} has been added to the available items. with a stock of: ${info.stocks}`)
    }
    // REMOVE ITEMSS
    function RemoveItems(id){
        console.log(`Item: ${ClothingStore.items[id].name} has been removed`)
        ClothingStore.items.splice(id, 1)
    }
    // ADD STOCKS
    function AddStocks(id, newS){
        ClothingStore.items[id].stocks += newS;
        var result = ClothingStore.items[id].stocks;
        console.log(`You added stocks to item: ${ClothingStore.items[id].name} with new stocks of ${newS}`)
        console.log(`Updated stocks of ${ClothingStore.items[id].name} is: ${result}`)
    }
    // FUNCTION RETURRNNNSSS
    return{
        CheckItems,
        AddItems,
        RemoveItems,
        AddStocks,
    }
}






// ------------------------- EXECUTIOON AREEAAAAAA --------------------------

// ADMIN FUNCTIONNSSS
var admin = Admin()

admin.AddUsers({
    name: "Kim",
    surname: "Vida",
    age: 31,
    birthday: "10.24.1991",
    cart: [],
})
console.log("-----------------------------------------")

admin.CheckClients()

console.log("-----------------------------------------")
console.log("-----------------------------------------")

// USER FUNCTIONNSSS
var shem = Clients();

shem.Login("Shem", "Aspa")
shem.Buy("Cotton Tee", 20)
console.log(" ");
shem.Confirm(5000)

console.log("-----------------------------------------")
console.log("-----------------------------------------")

console.log(" ")
var kim = Clients();
kim.Login("Kim","Vida")
kim.Buy( "Oversized Tee", 5)
kim.Buy( "Tri-Color Shorts", 5)
kim.Buy("Cotton Tee", 2)


console.log(" ")
kim.ShowOrder();
console.log(" ")
kim.Confirm(5000)


console.log("-----------------------------------------")
console.log("-----------------------------------------")



// // ITEM FUNCTIONSSS
var Items = Items();
Items.AddItems({
            name: "Skinny Jeans",
            category: "Pants",
            price: 300,
            stocks: 150,
})

console.log("-----------------------------------------")
Items.AddStocks(1, 30)
console.log("-----------------------------------------")
Items.CheckItems()

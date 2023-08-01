


const store_inventory = [
    {item: "shampoo", quantity: 1, price: 3 },
    {item: "soap", quantity: 0, price: 2},
    {item: "toothpaste", quantity: 2, price: 3},
]
const new_deliveries = [
    {item: "shampoo", quantity: 5, price: 4,    inventory_index: 0 },
    {item: "soap", quantity: 10, price: 2,      inventory_index: 1 },
    {item: "toothpaste", quantity: 10, price: 3,inventory_index: 2 },
]

const processDeliveries = function(items_obj){
    store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory[items_obj.inventory_index].price = items_obj.price;

}
new_deliveries.forEach(store_inventory => {
    return processDeliveries(store_inventory)
});

function productSummary(items_obj){
    const item_id = items_obj.item.slice(0, 3).toLowerCase();
    let remarks = "good";
     
    if(items_obj.quantity < 10){
        remarks = "item stock is low"
    }
    let message = `itemID: ${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks:`
    message = message.concat(remarks)
    return(message)
    
}
const report_summary = store_inventory.map(productSummary);


// console.log(report_summary)

console.log("Delivered items have been added in the inventory");
console.log("New inventory summary:")
console.log(store_inventory)



/**
 * 1. DOM Selection
 * 2. Event Listner
 * 3. Back Validation
 * 4. Creating Element
 * 5. Append
 * 
 */

const product_name = document.getElementById("p_name");
const product_price = document.getElementById("p_price");
const product_quantity = document.getElementById("p_quantity");
const product_table = document.getElementById("product_table");
const product_submit = document.getElementById("p_submit");
var sl_number = 1;
product_submit.addEventListener("click", function(e){
    e.preventDefault();
    if(product_name.value == "" && product_price.value == "" && product_quantity.value == ""){
        alert('Bhai akta kichu den');
    }else{
        const newRow = document.createElement('tr');
        const newId = document.createElement('th');
        newId.innerHTML = sl_number;
        newRow.appendChild(newId);
        sl_number += 1;

        const newName = document.createElement('th');
        newName.innerHTML = product_name.value;
        newRow.appendChild(newName);

        const newPrice = document.createElement('th');
        newPrice.innerHTML = product_price.value;
        newRow.appendChild(newPrice);
        
        const newQuantity = document.createElement('th');
        newQuantity.innerHTML = product_quantity.value;
        newRow.appendChild(newQuantity);

        const newTotalPrice = document.createElement('th');
        newTotalPrice.innerHTML = product_quantity.value * product_price.value;
        newRow.appendChild(newTotalPrice);

        product_table.appendChild(newRow);
        document.getElementById('product-lis').reset();
    }
});
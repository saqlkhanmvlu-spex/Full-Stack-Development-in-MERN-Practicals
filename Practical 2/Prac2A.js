function generateBill(product, quantity, price)
{
    let total = quantity * price;
    let bill = total + (total * 0.09);

    console.log("Product : ", product);
    console.log("Quantity : ", quantity);
    console.log("Price Per Item : ", price);
    console.log("Total Bill : ", bill);
}

generateBill("Laptop",2,50000);

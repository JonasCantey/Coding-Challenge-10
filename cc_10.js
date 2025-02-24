//Task 1: Creating a Product Class
console.log("Task 1: Creating a Product Class");

class Product {     //created a product class
    constructor (name, id, price, stock) {  //initialized the properties using the constructor
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {  //created a method to console.log the information about a class object.
        return `Name: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    }

    updateStock(quantity){  //created method to update the stock amount when an order is placed.
        this.stock -= quantity;
    }
}

const prod1 = new Product("Laptop", 101, 1200, 10); //declared a class object
console.log(prod1.getDetails()); //called getDetails method.


prod1.updateStock(3);   //called updateStock method.
console.log(prod1.getDetails());    //called getDetails method again.

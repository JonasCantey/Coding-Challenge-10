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

//Task 2: Creating an Order Class
console.log("Task 2: Creating an Order Class")

class Order {   //created order class
    constructor (orderId, product, quantity) {  //initialized the properties orderId, product, and quantity
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;

        this.product.updateStock(+this.quantity)    //tells the updateStock method to account for the orders
    }

    getOrderDetails() { //added method getOrderDetails that takes product price and multiplies by 
        const totalPrice = this.product.price * this.quantity; //order quantity. 
        return `Product: ${this.product.name}, Order ID: ${this.orderId}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }   //Then it takes the product name, order ID, quantity, and totalPrice and console.logs them.
}


console.log(prod1.getDetails()); // Initial product details

const order1 = new Order(501, prod1, 2); // Create an order for 2 laptops
console.log(order1.getOrderDetails()); // Order details

console.log(prod1.getDetails()); // Updated product details after order
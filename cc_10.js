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


//Task 3: Creating an Inventory Class
console.log("Task 3: Creating an Inventory Class")

class Inventory {   //declared the inventory class
    constructor (products, orders) {    //initialized using the products array
        this.products = []      //saying that this.products is the array
        this.orders = []
    }

    addProduct(product) {       //added method to add a product to the inventory class
        this.products.push(product);
    }

    listProducts() {            //added method to list the products within the inventory class
        console.log("Current Inventory:")
        this.products.forEach(product => {  //saying for each product in the inventory, getDetails
            console.log(product.getDetails());
        });
    }

    //Task 4
    placeOrder(orderId, product, quantity) { //created new method using orderId, product, and quantity
        if (product.stock >= quantity) {    //saying that if we have the product in stock then 
            const order = new Order(orderId, product, quantity);    //to create an order object
            this.orders.push(order);    //push the object into the orders array
            console.log(`Order placed successfully: $${order.getOrderDetails()}`);  
        } else {    //if we don't have it in stock, print that we do not have enough stock
            console.log(`Error: Not enough stock for ${product.name}. Available stock: ${product.stock}`);
        }
    }

    listOrders(){   //created method listOrders
        console.log("Placed Orders:")
        this.orders.forEach(order => {  //goes through the array and console.logs the order details.
            console.log(order.getOrderDetails());
        });
    }
}

const inventory = new Inventory();  //makes the empty array that we then add products to
inventory.addProduct(prod1);        //adding prod1 to the array
inventory.listProducts();           //listing products in the array


//Task 4: Implementing Order Management
console.log("Task 4: Implementing Order Management")

inventory.placeOrder(601, prod1, 2);    //placing an order
inventory.listOrders(); //listing orders in the array
console.log("Updated product information:")
console.log(prod1.getDetails());    //console.logging the updated product details.
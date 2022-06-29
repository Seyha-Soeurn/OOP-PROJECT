import { Customer } from "../human/customer/Customer";
import { DateTime } from "./DateTime";
import { FoodOrder } from "./FoodOrder";
import { OrderCategory } from "./OrderCategory";


export abstract class Order {
    protected totalPrice : number = 0;
    protected foods : FoodOrder[] = [];
    protected isPaid : boolean = false;
    
    constructor(
        protected id : number, 
        protected customer : Customer, 
        protected category : OrderCategory, 
        protected orderDate : DateTime
        ) {}

    // Get id
    getId() : number {
        return this.id;
    }

    // Get all foods
    getFoods() : FoodOrder[] {
        return this.foods;
    }

    // Get customer
    getCustomer() : Customer {
        return this.customer;
    }

    // Get order category
    getCategory() : OrderCategory {
        return this.category;
    }

    // Get order date
    getOrderDate() : DateTime {
        return this.orderDate;
    }


    // Get total price
    getTotalPrice() {
        return this.totalPrice;
    }

    // Add foodOrders to order and increase the total price of order
    addFoodOrders(...foodOrders : FoodOrder[]) {
        this.foods = this.foods.concat(foodOrders);
        this.increaseTotalPrice(...foodOrders);
    }

    // Increase total price
    private increaseTotalPrice(...foodOrders : FoodOrder[]) {
        let totalPriceOfFoodOrders : number = 0;
        foodOrders.forEach(foodOrder => {
            let foodPrice : number = foodOrder.getMeal().getPrice() * foodOrder.getQuantity();
            totalPriceOfFoodOrders += foodPrice;
        })

        this.totalPrice += totalPriceOfFoodOrders;
    }

    // Make the order is paid
    payOrder() {
        this.isPaid = true;
    }

    // isEqua method
    isEqual(other : Order) : boolean {
        return this.customer === other.customer &&
        this.category === other.category &&
        this.id === other.id &&
        this.orderDate.isEqual(other.orderDate) &&
        this.totalPrice === other.totalPrice;
    }
}
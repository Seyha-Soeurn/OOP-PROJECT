import { Customer } from "../human/customer/Customer";
import { DeliveryPerson } from "../human/staff/DeliveryPerson";
import { DateTime } from "./DateTime";
import { InRestaurantOrder } from "./in_restaurant_order/InRestaurantOrder";
import { OnlineOrder } from "./online_order/OnlineOrder";
import { Order } from "./Order";
import { OrderCategory } from "./OrderCategory";


export class OrderManager {
    private orders : Order[] = [];

    // Get orders
    getOrders() : Order[] {
        return this.orders;
    }

    // Add order (order must have at least 1 food)
    addOrder(order : Order) {
        if (order.getFoods().length > 0) {
            this.orders.push(order);
        }
    }

    // Get customer orders
    getCustomerOrders(customer : Customer) : Order[] {
        let myOrders = this.orders;
        let customerOrders : Order[] = [];
        myOrders.forEach(order => {
            if (order.getCustomer().isEqual(customer)){
                customerOrders.push(order);
            }
        })

        return customerOrders;
    }

    // Get all online orders
    getOnlineOrders() : OnlineOrder[] {
        let myOrders = this.orders;
        let orderList : OnlineOrder[] = [];
        myOrders.forEach(order => {
            if (order.getCategory() === OrderCategory.ONLINE){
                orderList.push(order as OnlineOrder);
            }
        })

        return orderList;
    }

    // Get all In restaurant orders
    getInRestaurantOrders() : InRestaurantOrder[] {
        let myOrders = this.orders;
        let orderList : InRestaurantOrder[] = [];
        myOrders.forEach(order => {
            if (order.getCategory() === OrderCategory.IN_RESTAURANT){
                orderList.push(order as InRestaurantOrder);
            }
        })

        return orderList;
    }

    // Get orders by date
    getOrdersByDate(date : DateTime) : Order[] {
        let orders = this.orders;
        let ordersOnDate : Order[] = [];
        orders.forEach(eachOrder => {
            if (eachOrder.getOrderDate().isEqual(date)) {
                ordersOnDate.push(eachOrder);
            }
        })

        return ordersOnDate;
    }

    // Get orders that total price less than
    getOrdersPriceLessThan(price : number) : Order[] {
        let orders = this.orders;
        let orderlist : Order[] = [];
        orders.forEach(eachOrder => {
            if (eachOrder.getTotalPrice() < price) {
                orderlist.push(eachOrder);
            }
        })

        return orderlist;
    }

    // Get orders that total price greater than
    getOrdersPriceGreaterThan(price : number) : Order[] {
        let orders = this.orders;
        let orderlist : Order[] = [];
        orders.forEach(eachOrder => {
            if (eachOrder.getTotalPrice() > price) {
                orderlist.push(eachOrder);
            }
        })

        return orderlist;
    }

    // Get one order 
    getOneOrder(otherOrder : Order) : Order | undefined {
        let orders = this.orders;
        let order : Order | undefined;
        orders.forEach(eachOrder => {
            if (eachOrder.isEqual(otherOrder)) {
                order = eachOrder;
            }
        })

        return order;
    }

    // Pay order (Make order as already paid)
    payOrder(order : Order) {
        if (this.getOneOrder(order) !== undefined) {
            order.payOrder();
        }
    }

    // Get total sell with specific date
    getTotalSellOnDate(date : DateTime) : number {
        let orders : Order[] = this.getOrdersByDate(date);
        let totalIncome : number = 0;
        orders.forEach(order => {
            totalIncome += order.getTotalPrice();
        });

        return totalIncome;
    }
}
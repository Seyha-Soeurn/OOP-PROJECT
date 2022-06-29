import { HumanManager } from "./human/HumanManager";
import { KitchenManager } from "./kitchen/KitchenManager";
import { OrderManager } from "./order/OrdersManager";
import { TablesManager } from "./tables/TablesManager";
import { Order } from "./order/Order";
import { Address } from "./human/Address";
import { DateTime } from "./order/DateTime";


export class Restaurant {
    private kitchen : KitchenManager = new KitchenManager();
    private human : HumanManager = new HumanManager();
    private tables : TablesManager = new TablesManager();
    private orders : OrderManager = new OrderManager();

    constructor(private name : string, private address : Address) {}

    // Get restaurant name
    getName() : string {
        return this.name;
    }

    // Get restaurant address
    getAddress() : Address {
        return this.address;
    }


    /**************** Kitchen ******************/
    // Get kitchen
    getKitchen() : KitchenManager {
        return this.kitchen;
    }


    /**************** Human ******************/
    // Get human
    getHuman() : HumanManager {
        return this.human;
    }


    /**************** Tables ******************/
    // Get all tables
    getTables() : TablesManager {
        return this.tables;
    }


    /**************** Orders ******************/ 
    // Get all orders
    getOrders() : OrderManager {
        return this.orders;
    }
    // Add an order to orders manager
    addOrder(order : Order) {
        let isOrderPossible : boolean = this.kitchen.isOrderPossible(order);
        if (isOrderPossible) {
            this.orders.addOrder(order);
        }
    }
    // Get total sell with specific date
    getTotalSellOnDate(date : DateTime) : number {
        return this.orders.getTotalSellOnDate(date);
    }
}
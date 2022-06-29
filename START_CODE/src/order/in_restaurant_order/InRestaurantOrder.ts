import { Customer } from "../../human/customer/Customer";
import { Waiter } from "../../human/staff/Waiter";
import { Table } from "../../tables/Table";
import { DateTime } from "../DateTime";
import { Order } from "../Order";
import { OrderCategory } from "../OrderCategory";


export class InRestaurantOrder extends Order {
    constructor(id : number, customer : Customer, orderDate : DateTime, private table : Table, private waiter : Waiter) {
        super(id, customer, OrderCategory.IN_RESTAURANT, orderDate);
    }

    // Get table
    getTable() : Table {
        return this.table;
    }

    // Get waiter
    getWaiter() : Waiter {
        return this.waiter;
    }
}

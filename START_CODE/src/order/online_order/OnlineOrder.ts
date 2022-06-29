import { Customer } from "../../human/customer/Customer";
import { DeliveryPerson } from "../../human/staff/DeliveryPerson";
import { DateTime } from "../DateTime";
import { Order } from "../Order";
import { OrderCategory } from "../OrderCategory";


export class OnlineOrder extends Order {
    constructor(
        id : number, 
        customer : Customer, 
        orderDate : DateTime, 
        private deliverDate : DateTime, 
        private deliveryPerson : DeliveryPerson, 
        private deliveryService : number
        ) {
        super(id, customer, OrderCategory.ONLINE, orderDate);
    }

    // Get delivery person
    getDeliveryPerson() : DeliveryPerson {
        return this.deliveryPerson;
    }

    // Get deliver date
    getDeliverDate() : DateTime {
        return this.deliverDate;
    }

    // Get delivery service price
    getDeliveryService() {
        return this.deliveryService;
    }
}

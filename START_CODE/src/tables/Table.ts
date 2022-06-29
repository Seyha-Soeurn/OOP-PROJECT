import { Customer } from "../human/customer/Customer";
import { TableStatus } from "./TableStatus";


export class Table{
    private maxCustomer? : number;
    private customers : Customer[] = [];
    
    constructor(private id : number, private status : TableStatus) {}

    // Get id
    getId() : number {
        return this.id;
    }

    // Get status
    getStatus() : TableStatus {
        return this.status;
    }

    // Set maximum number of customers
    setMaxCustomers(numberOfCustomer : number) {
        this.maxCustomer = numberOfCustomer;
    }

    // Get maximum number of customers
    getMaxCustomers() : number | undefined {
        return this.maxCustomer;
    }

    // Get all customers
    getCustomers() : Customer[] {
        return this.customers;
    }

    // Add a customer
    addCustomer(customer : Customer) {
        if (this.maxCustomer !== undefined) {
            if (this.customers.length < this.maxCustomer) {
                this.customers.push(customer);
            }
        } else if (this.maxCustomer === undefined) {
            this.customers.push(customer);
        }
    }

    // Is Equal
    isEqual(other : Table) : boolean {
        return this.id === other.id && this.status === other.status;
    }

    // Check if table is free (no customer)
    tableIsFree() : boolean {
        return this.customers.length < 1;
    }
}
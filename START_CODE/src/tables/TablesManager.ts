import { Customer } from "../human/customer/Customer";
import { TableStatus } from "./TableStatus";
import { Table } from "./Table";


export class TablesManager {
    private maxTables? : number;
    private tables : Table[] = [];

    // Set maximum number of tables
    setMaxTables(numberOfTable : number) {
        this.maxTables = numberOfTable;
    }
    
    // Get maximum number of tables
    getMaxTables() : number | undefined {
        return this.maxTables;
    }
    
    // Get all tables in restaurant
    getTables() : Table[] {
        return this.tables;
    }

    // Get one table
    getOneTable(other : Table) : Table | undefined {
        let tables = this.tables;
        let result : Table | undefined;
        tables.forEach(table => {
            if (table.isEqual(other)) {
                result = table;
            }
        })

        return result;
    }

    // Add a table to restaurant
    addTable(table : Table) {
        if (this.maxTables !== undefined) {
            if (this.tables.length < this.maxTables) {
                this.tables.push(table);
            }
        } else {
            this.tables.push(table);
        }
    }

    // Get free table that has no any customer
    getFreeTables() : Table[] {
        let tables = this.tables;
        let freeTable : Table[] = [];
        tables.forEach(table => {
            if (table.tableIsFree()) {
                freeTable.push(table);
            }
        })

        return freeTable;
    }

    // Get new tables
    getNewTables() : Table[] {
        let tables = this.tables;
        let newTables : Table[] = [];
        tables.forEach(table => {
            if (table.getStatus() === TableStatus.NEW) {
                newTables.push(table);
            }
        })

        return newTables;
    }

    // Get old tables
    getOldTables() : Table[] {
        let tables = this.tables;
        let oldTables : Table[] = [];
        tables.forEach(table => {
            if (table.getStatus() === TableStatus.OLD) {
                oldTables.push(table);
            }
        })

        return oldTables;
    }

    // Add customer to table
    addCustomerToTable(table : Table, customer : Customer) {
        if (this.getOneTable(table)) {
            table.addCustomer(customer);
        }
    }

    // Set maximum customers of a table 
    setMaxCustomersOfTable(table : Table, numberOfCustomer : number) {
        if (this.getOneTable(table) !== undefined) {
            table.setMaxCustomers(numberOfCustomer);
        }
    }

    // Get maximum customers of a table 
    getMaxCustomersOfTable(table : Table) : number | undefined{
        if (this.getOneTable(table) !== undefined) {
            return table.getMaxCustomers();
        }
    }
}
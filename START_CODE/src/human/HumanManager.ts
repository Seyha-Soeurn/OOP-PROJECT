import { FoodType } from "../kitchen/food/FoodType";
import { DateTime } from "../order/DateTime";
import { Customer } from "./customer/Customer";
import { Cashier } from "./staff/Cashier";
import { Chef } from "./staff/Chef";
import { Cleaner } from "./staff/Cleaner";
import { DeliveryPerson } from "./staff/DeliveryPerson";
import { Staff } from "./staff/Staff";
import { StaffCategory } from "./staff/StaffCategory";
import { Waiter } from "./staff/Waiter";


export class HumanManager {
    private customers : Customer[] = [];
    private staffs : Staff[] = [];

    // Get customers
    getCustomers() : Customer[] {
        return this.customers;
    }

    // Get al staffs
    getStaffs() : Staff[] {
        return this.staffs;
    }

    // Add a staff
    addStaff(...staffs : Staff[]) {
        this.staffs = this.staffs.concat(staffs);
    }

    // Add a customer
    addCustomer(...customers : Customer[]) {
        this.customers = this.customers.concat(customers);
    }

    // Get staff that are Waiter
    getAllWaiters() : Waiter[] {
        let staffs = this.staffs;
        let waiters : Waiter[] = [];
        staffs.forEach(staff => {
            if (staff.getCategory() === StaffCategory.WAITER) {
                waiters.push(staff as Waiter);
            }
        });

        return waiters;
    }

    // Get staff that are Chef
    getAllCheves() : Chef[] {
        let staffs = this.staffs;
        let cheves : Chef[] = [];
        staffs.forEach(staff => {
            if (staff.getCategory() === StaffCategory.CHEF) {
                cheves.push(staff as Chef);
            }
        });

        return cheves;
    }

    // Get staff that are DeliveryPerson
    getAllDeliveryPerson() : DeliveryPerson[] {
        let staffs = this.staffs;
        let deliveryPersons : DeliveryPerson[] = [];
        staffs.forEach(staff => {
            if (staff.getCategory() === StaffCategory.DELIVERY_PERSON) {
                deliveryPersons.push(staff as DeliveryPerson);
            }
        });

        return deliveryPersons;
    }

    // Get staff that are Cashier
    getAllCashiers() : Cashier[] {
        let staffs = this.staffs;
        let cashiers : Cashier[] = [];
        staffs.forEach(staff => {
            if (staff.getCategory() === StaffCategory.CASHIER) {
                cashiers.push(staff as Cashier);
            }
        });

        return cashiers;
    }

    // Get staff that are Cleaner
    getAllCleaners() : Cleaner[] {
        let staffs = this.staffs;
        let cleaners : Cleaner[] = [];
        staffs.forEach(staff => {
            if (staff.getCategory() === StaffCategory.CLEANER) {
                cleaners.push(staff as Cleaner);
            }
        });

        return cleaners;
    }

    // Get all cheves with speciality
    getAllChevesWithSkill(foodType : FoodType) : Chef[] {
        let cheves = this.getAllCheves();
        let chevesWithSkill : Chef[] = [];
        cheves.forEach(chef => {
            if (chef.getSpeciality() === foodType) {
                chevesWithSkill.push(chef);
            }
        })

        return chevesWithSkill;
    }

    // Get a first chef with speciality
    getFirstChefWithSkill(foodType : FoodType) : Chef | undefined {
        let cheves = this.getAllCheves();
        let chefWithSkill : Chef | undefined;
        cheves.forEach(chef => {
            if (chefWithSkill === undefined) {
                if (chef.getSpeciality() === foodType) {
                    chefWithSkill = chef;
                }
            }
        })

        return chefWithSkill;
    }
}
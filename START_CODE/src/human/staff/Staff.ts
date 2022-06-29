import { Gender } from "../Gender";
import { Person } from "../Person";
import { StaffCategory } from "./StaffCategory";


export class Staff extends Person {
    private salary : number = 0;

    constructor(id : number, name : string, age : number, gender : Gender, protected category : StaffCategory) {
        super(id, name, age, gender);
    }

    // Set salary of staff
    setSalary(salary: number) {
        this.salary = salary;
    }

    // Get salary of staff
    getSalary() : number {
        return this.salary;
    }

    // Get staff category
    getCategory() : StaffCategory {
        return this.category;
    }

    // isEqual method
    isEqual(other : Staff) {
        return this.id === other.id && 
        this.name === other.name && 
        this.age === other.age &&
        this.gender === other.gender && 
        this.category === other.category;
    }
}
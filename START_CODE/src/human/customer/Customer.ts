import { Gender } from "../Gender";
import { Person } from "../Person";


export class Customer extends Person {
    constructor(id : number, name : string, age : number, gender : Gender) {
        super(id, name, age, gender);
    }

    // isEqual method
    isEqual(other : Customer) : boolean {
        return this.id === other.id && 
        this.name === other.name && 
        this.age === other.age && 
        this.gender === other.gender;
    }
}
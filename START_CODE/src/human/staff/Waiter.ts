import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategory";


export class Waiter extends Staff {
    constructor(id : number, name : string, age : number, gender : Gender) {
        super(id, name, age, gender, StaffCategory.WAITER);
    } 
}
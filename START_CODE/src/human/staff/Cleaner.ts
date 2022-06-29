import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategory";


export class Cleaner extends Staff {
    constructor(id : number, name : string, age : number, gender : Gender) {
        super(id, name, age, gender, StaffCategory.CLEANER);
    }
}
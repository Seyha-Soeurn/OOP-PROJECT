import { FoodType } from "../../kitchen/food/FoodType";
import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategory";


export class Chef extends Staff {
    private speciality? : FoodType;

    constructor(id : number, name : string, age : number, gender : Gender) {
        super(id, name, age, gender, StaffCategory.CHEF);
    } 

    // Set sepciality
    setSpeciality(foodCategory : FoodType) {
        this.speciality = foodCategory;
    }

    // Check if the chef has speciality
    hasSpeciality() : boolean {
        return this.speciality !== undefined;
    }

    // Get speciality
    getSpeciality() : FoodType | undefined {
        return this.speciality;
    }
}
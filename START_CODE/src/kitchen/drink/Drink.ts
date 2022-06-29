import { Meal } from "../Meal";
import { MealCategory } from "../MealCategory";
import { DrinkType } from "./DrinkType";


export class Drink extends Meal {
    constructor(id : number, name : string, price : number, private type : DrinkType) {
        super(id, name, price, MealCategory.DRINK);
    }

    // Get drink type
    getType() : DrinkType {
        return this.type;
    }
}
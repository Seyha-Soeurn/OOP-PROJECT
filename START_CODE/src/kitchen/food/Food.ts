import { Meal } from "../Meal";
import { MealCategory } from "../MealCategory";
import { FoodType } from "./FoodType";


export class Food extends Meal {
    constructor(id : number, name : string, price : number, private type : FoodType) {
        super(id, name, price, MealCategory.FOOD);
    }

    // Get food type
    getType() : FoodType {
        return this.type;
    }
}
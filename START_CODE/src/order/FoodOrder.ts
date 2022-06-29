import { Meal } from "../kitchen/Meal";


export class FoodOrder {
    constructor(private meal : Meal, private quantity : number) {}

    // Get all meals
    getMeal() : Meal {
        return this.meal;
    }

    // Get quantity
    getQuantity() : number {
        return this.quantity;
    }
}
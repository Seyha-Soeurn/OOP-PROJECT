import { Meal } from "./Meal";


export class FoodStock {
    constructor(private meal : Meal, private quantity : number) {}

    // Get name of resource
    getMeal() : Meal {
        return this.meal;
    }

    // Get quantity of resource
    getQuantity() : number {
        return this.quantity;
    }
}
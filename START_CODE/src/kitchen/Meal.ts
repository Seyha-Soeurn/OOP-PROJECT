import { MealCategory } from "./MealCategory";


export abstract class Meal {
    constructor(protected id : number, protected name : string, protected price : number, protected category : MealCategory) {}

    // Get id
    getId() : number {
        return this.id;
    }

    // Get name of meal
    getName() : string {
        return this.name;
    }

    // Get price of meal
    getPrice() : number {
        return this.price;
    }

    // Get category of meal
    getCategory() : MealCategory {
        return this.category;
    }

    isEqual(other : Meal) : boolean {
        return this.id === other.id &&
        this.name === other.name &&
        this.price === other.price &&
        this.category === other.category;
    }
}
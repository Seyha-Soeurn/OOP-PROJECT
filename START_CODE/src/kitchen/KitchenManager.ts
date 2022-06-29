import { Meal } from "./Meal";
import { FoodStock } from "./FoodStock";
import { FoodOrder } from "../order/FoodOrder";
import { Order } from "../order/Order";
import { MealCategory } from "./MealCategory";
import { Drink } from "./drink/Drink";
import { Food } from "./food/Food";


export class KitchenManager {
    private menu : Meal[] = [];
    private foodStocks : FoodStock[] = [];

    // Get all foodStocks in the kitchen
    getFoodStock() : FoodStock[] {
        return this.foodStocks;
    }

    // Get the menu (menu is a list of foods)
    getMenu() : Meal[] {
        return this.menu;
    }

    // A a meal to menu
    addMeal(meal : Meal) {
        this.menu.push(meal);
    }

    // Add foodStocks to the kitchen
    addFoodStock(...foodStocks : FoodStock[]) {
        this.foodStocks = this.foodStocks.concat(foodStocks);
    }

    // Get one foodStock from kitchen
    getOneFoodStockByMeal(meal : Meal) : FoodStock {
        let foodStocks = this.foodStocks;
        let result : FoodStock = this.foodStocks[0];
        foodStocks.forEach(foodStock => {
            if (foodStock.getMeal().isEqual(meal)) {
                result = foodStock;
            }
        })

        return result;
    }

    // Check if the food is enoug with the required amount
    isFoodEnough(foodOrder : FoodOrder) : boolean {
        let foodStock = this.getOneFoodStockByMeal(foodOrder.getMeal());
        return foodStock.getQuantity() >= foodOrder.getQuantity();
    }

    // Check if the order is possible or impossible
    isOrderPossible(order : Order) : boolean {
        let foodOrders = order.getFoods();
        let isOrderSuccess = true;
        foodOrders.forEach(foodOrder => {
            if (!this.isFoodEnough(foodOrder)){
                isOrderSuccess = false;
            }
        })

        return isOrderSuccess;
    }

    // Get all drinks
    getDrinks() : Drink[] {
        let meals = this.menu;
        let drinks : Drink[] = [];
        meals.forEach(meal => {
            if (meal.getCategory() === MealCategory.DRINK){
                drinks.push(meal as Drink);
            }
        })

        return drinks;
    }

    // Get all foods
    getFoods() : Food[] {
        let meals = this.menu;
        let foods : Food[] = [];
        meals.forEach(meal => {
            if (meal.getCategory() === MealCategory.FOOD){
                foods.push(meal as Food);
            }
        })

        return foods;
    }
}
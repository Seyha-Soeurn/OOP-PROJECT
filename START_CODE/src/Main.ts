import { Address } from "./human/Address";
import { Customer } from "./human/customer/Customer";
import { Gender } from "./human/Gender";
import { Cashier } from "./human/staff/Cashier";
import { Chef } from "./human/staff/Chef";
import { Cleaner } from "./human/staff/Cleaner";
import { DeliveryPerson } from "./human/staff/DeliveryPerson";
import { Waiter } from "./human/staff/Waiter";
import { Drink } from "./kitchen/drink/Drink";
import { DrinkType } from "./kitchen/drink/DrinkType";
import { Food } from "./kitchen/food/Food";
import { FoodType } from "./kitchen/food/FoodType";
import { FoodStock } from "./kitchen/FoodStock";
import { DateTime } from "./order/DateTime";
import { FoodOrder } from "./order/FoodOrder";
import { InRestaurantOrder } from "./order/in_restaurant_order/InRestaurantOrder";
import { OnlineOrder } from "./order/online_order/OnlineOrder";
import { Restaurant } from "./Restaurant";
import { TableStatus } from "./tables/TableStatus";
import { Table } from "./tables/Table";
import { VehicleCategory } from "./human/staff/VehicleCategory";





let address1 = new Address('2004B', 'Sensok', 'Phnom Penh');
let address2 = new Address('200', 'Toul Kork', 'Phnom Penh');
let address3 = new Address('48A', 'Sensok', 'Phnom Penh');
let address4 = new Address('304C', 'Dongkao', 'Phnom Penh');
let address5 = new Address('2004', 'Maenchey', 'Phnom Penh');

// Create restaurant
let restaurant = new Restaurant('Sasaki', address1);


// Create meals and add to menu
let food1 = new Food(1, 'Bay chha', 2, FoodType.FRIES);
let food2 = new Food(2, 'Fries beef', 15, FoodType.MEAT);
let food3 = new Food(3, 'Omelet', 1, FoodType.FRIES);
let food4 = new Food(4, 'Chocolate Ice-cream', 3, FoodType.DESERT);
let food5 = new Food(5, 'Max vegetables fries', 5, FoodType.VEGETABLE);
let drink1 = new Drink(6, 'Nes-cafe', 1, DrinkType.COFFEE);
let drink2 = new Drink(7, 'Cambodia', 1, DrinkType.BEER);
let drink3 = new Drink(8, 'Orange Juice', 1, DrinkType.JUICE);
let drink4 = new Drink(9, 'Ichitan', 1, DrinkType.TEA);
restaurant.getKitchen().addMeal(food1);
restaurant.getKitchen().addMeal(food2);
restaurant.getKitchen().addMeal(food3);
restaurant.getKitchen().addMeal(food4);
restaurant.getKitchen().addMeal(food5);
restaurant.getKitchen().addMeal(drink1);
restaurant.getKitchen().addMeal(drink2);
restaurant.getKitchen().addMeal(drink3);
restaurant.getKitchen().addMeal(drink4);

// Add food to the stock in kitchen
restaurant.getKitchen().addFoodStock(new FoodStock(food1, 100));
restaurant.getKitchen().addFoodStock(new FoodStock(food2, 150));
restaurant.getKitchen().addFoodStock(new FoodStock(food3, 200));
restaurant.getKitchen().addFoodStock(new FoodStock(food4, 120));
restaurant.getKitchen().addFoodStock(new FoodStock(food5, 80));
restaurant.getKitchen().addFoodStock(new FoodStock(drink1, 400));
restaurant.getKitchen().addFoodStock(new FoodStock(drink2, 400));
restaurant.getKitchen().addFoodStock(new FoodStock(drink3, 400));
restaurant.getKitchen().addFoodStock(new FoodStock(drink4, 400));


// Set maximum tables of restaurant
restaurant.getTables().setMaxTables(8);

// Crete tables and chair, and add to restaurant
let table1 = new Table(1, TableStatus.NEW);
let table2 = new Table(2, TableStatus.OLD);
let table3 = new Table(3, TableStatus.NEW);
let table4 = new Table(4, TableStatus.OLD);
let table5 = new Table(5, TableStatus.NEW);
let table6 = new Table(6, TableStatus.NEW);

restaurant.getTables().addTable(table1);
restaurant.getTables().addTable(table2);
restaurant.getTables().addTable(table3);
restaurant.getTables().addTable(table4);
restaurant.getTables().addTable(table5);
restaurant.getTables().addTable(table6);

restaurant.getTables().setMaxCustomersOfTable(table3, 6);
restaurant.getTables().setMaxCustomersOfTable(table4, 4);
restaurant.getTables().setMaxCustomersOfTable(table1, 1);


// Create, and Add Customers and Staff
let customerRonan = new Customer(1, 'Ronan', 18, Gender.MALE);
customerRonan.setPhone(98765432);
customerRonan.setAddress(address2);
let customerSoriya = new Customer(2, 'Soriya', 19, Gender.FEMALE);
customerSoriya.setAddress(address3);
let customerThida = new Customer(3, 'Thida', 25, Gender.FEMALE);
customerThida.setPhone(87345698);
let customerAlucard = new Customer(4, 'Alucard', 22, Gender.MALE);
customerAlucard.setPhone(97869402);
customerAlucard.setAddress(address4);

// Add customers to chairs
restaurant.getTables().addCustomerToTable(table1, customerRonan);
restaurant.getTables().addCustomerToTable(table3, customerSoriya);
restaurant.getTables().addCustomerToTable(table5, customerThida);
restaurant.getTables().addCustomerToTable(table6, customerAlucard);

// Cashier
let cashierSreyNeang = new Cashier(5, 'Sreyneang', 30, Gender.FEMALE);
cashierSreyNeang.setAddress(address5);
cashierSreyNeang.setSalary(350);
cashierSreyNeang.setPhone(884325343);

// Waiters
let waiterRatha = new Waiter(6, 'Ratha', 27, Gender.MALE);
waiterRatha.setAddress(address5);
waiterRatha.setSalary(250);
cashierSreyNeang.setPhone(88547343);
let waiterSamnang = new Waiter(7, 'Samnang', 31, Gender.MALE);
waiterSamnang.setAddress(address5);
waiterSamnang.setPhone(889670343);
let waiterNalang = new Waiter(8, 'Nalang', 20, Gender.FEMALE);
waiterNalang.setAddress(address5);
waiterNalang.setSalary(250);
waiterNalang.setPhone(88434343);
let waiterSros = new Waiter(9, 'Sros', 23, Gender.FEMALE);
waiterSros.setAddress(address5);
waiterSros.setSalary(250);
waiterSros.setPhone(88528443);
let waiterNaroth = new Waiter(10, 'Narong', 19, Gender.MALE);
waiterNaroth.setAddress(address5);
waiterNaroth.setPhone(80765443);
let waiterSok = new Waiter(11, 'Sok', 28, Gender.MALE);
waiterSok.setSalary(250);
waiterSok.setPhone(884534243);

// Delivery person
let deliveryChhat = new DeliveryPerson(12, 'Chhat', 24, Gender.MALE, VehicleCategory.MOTORCYCLE);
deliveryChhat.setAddress(address4);
let deliveryChhay = new DeliveryPerson(13, 'Chhay', 20, Gender.MALE, VehicleCategory.TUCTUC);
deliveryChhay.setAddress(address5);
deliveryChhay.setPhone(884345343);
let deliveryUdom = new DeliveryPerson(14, 'Udom', 31, Gender.MALE, VehicleCategory.MOTORCYCLE);
deliveryUdom.setAddress(address2);
deliveryUdom.setPhone(88865343);

// Cheves
let chefVuthy = new Chef(15, 'Vuthy', 35, Gender.FEMALE);
chefVuthy.setAddress(address4);
chefVuthy.setSalary(400);
chefVuthy.setSpeciality(FoodType.MEAT);
let ChefNoun = new Chef(16, 'Sreyneang', 25, Gender.FEMALE);
ChefNoun.setSalary(400);
ChefNoun.setPhone(88458793);
ChefNoun.setSpeciality(FoodType.VEGETABLE);
let chefJinger = new Chef(17, 'Jinger', 20, Gender.FEMALE);
chefJinger.setAddress(address3);
chefJinger.setSalary(400);
chefJinger.setPhone(88769843);
chefJinger.setSpeciality(FoodType.MEAT);

// Cleaners
let cleanerChetra = new Cleaner(18, 'Chetra', 37, Gender.MALE);
cleanerChetra.setAddress(address3);
cleanerChetra.setSalary(250);
let cleanerChanna = new Cleaner(19, 'Channa', 30, Gender.FEMALE);
cleanerChanna.setAddress(address5);
cleanerChanna.setPhone(88769645);
let cleanerTheara = new Cleaner(20, 'Theara', 22, Gender.FEMALE);
cleanerTheara.setAddress(address2);
cleanerTheara.setSalary(250);
cleanerTheara.setPhone(8879856);

// Add customers and staff to restaurant
restaurant.getHuman().addCustomer(
    customerRonan, 
    customerSoriya, 
    customerThida, 
    customerAlucard
    );
restaurant.getHuman().addStaff(
    cashierSreyNeang, 
    waiterNalang, 
    waiterNaroth, 
    waiterRatha, 
    waiterSamnang, 
    waiterSok, 
    waiterSros,
    deliveryChhat, 
    deliveryChhay, 
    deliveryUdom,
    chefJinger, 
    ChefNoun, 
    chefVuthy, 
    cleanerChanna, 
    cleanerChetra, 
    cleanerTheara
    )

// Create date and orders
let date1 = new DateTime(18, 8, 2021, 13);
let date2 = new DateTime(19, 8, 2021, 15);
let date3 = new DateTime(6, 11, 2022, 9);
let date4 = new DateTime(6, 11, 2022, 10);
let date5 = new DateTime(30, 2, 2020, 12);
let date6 = new DateTime(30, 2, 2020, 14);
let date7 = new DateTime(30, 2, 2020, 9);
let date8 = new DateTime(30, 2, 2020, 16);

let order1 = new OnlineOrder(1, customerRonan, date5, date6, deliveryChhat, 2);
let order2 = new OnlineOrder(2, customerRonan, date1, date2, deliveryChhay, 1.5);
let order3 = new OnlineOrder(3, customerSoriya, date7, date8, deliveryUdom, 2);
let order4 = new InRestaurantOrder(4, customerSoriya, date3, table1, waiterNalang);
let order5 = new InRestaurantOrder(5, customerAlucard, date6, table2, waiterNaroth);
let order6 = new InRestaurantOrder(6, customerAlucard, date5, table3, waiterRatha);
let order7 = new InRestaurantOrder(4, customerSoriya, date4, table1, waiterNalang);

// Add foods to order
order1.addFoodOrders(new FoodOrder(food1, 2), new FoodOrder(food2, 1), new FoodOrder(drink2, 3));
order2.addFoodOrders(new FoodOrder(food2, 1), new FoodOrder(food5, 1));
order3.addFoodOrders(new FoodOrder(food5, 2), new FoodOrder(food2, 3), new FoodOrder(drink1, 1));
order4.addFoodOrders(new FoodOrder(food4, 1), new FoodOrder(drink4, 3));
order5.addFoodOrders(new FoodOrder(food3, 5), new FoodOrder(food5, 1), new FoodOrder(drink2, 3));
order6.addFoodOrders(new FoodOrder(food3, 2), new FoodOrder(food1, 1));
order7.addFoodOrders(new FoodOrder(food5, 4), new FoodOrder(food3, 2));

// Add orders to restaurant
restaurant.addOrder(order1);
restaurant.addOrder(order2);
restaurant.addOrder(order3);
restaurant.addOrder(order4);
restaurant.addOrder(order5);
restaurant.addOrder(order6);
restaurant.addOrder(order7);

// Pay on order
restaurant.getOrders().payOrder(order1);
restaurant.getOrders().payOrder(order2);
restaurant.getOrders().payOrder(order4);
restaurant.getOrders().payOrder(order5);



/*********** Methods in tables **********/
// console.log(restaurant.getTables().getMaxCustomersOfTable(table1));
// console.log(restaurant.getTables().getMaxTables());
// console.log(restaurant.getTables().getTables());
// console.log(restaurant.getTables().getFreeTables());
// console.log(restaurant.getTables().getOneTable(table1));
// console.log(restaurant.getTables().getNewTables());
// console.log(restaurant.getTables().getOldTables());


/**************** Methods in human *****************/
// console.log(restaurant.getHuman().getCustomers());
// console.log(restaurant.getHuman().getStaffs());
// console.log(restaurant.getHuman().getAllCashiers());
// console.log(restaurant.getHuman().getAllCheves());
// console.log(restaurant.getHuman().getAllCleaners());
// console.log(restaurant.getHuman().getAllDeliveryPerson());
// console.log(restaurant.getHuman().getAllWaiters());
// console.log(restaurant.getHuman().getAllChevesWithSkill(FoodType.MEAT));
// console.log(restaurant.getHuman().getFirstChefWithSkill(FoodType.MEAT));


/**************** Methods in kitchen *****************/
// console.log(restaurant.getKitchen().getMenu());
// console.log(restaurant.getKitchen().getFoodStock());
// console.log(restaurant.getKitchen().getOneFoodStockByMeal(food1));
// console.log(restaurant.getKitchen().getDrinks());
// console.log(restaurant.getKitchen().getFoods());


/**************** Methods in orders *****************/
// console.log(restaurant.getOrders().getOrders());
// console.log(restaurant.getOrders().getCustomerOrders(customerRonan));
// console.log(restaurant.getOrders().getOnlineOrders());
// console.log(restaurant.getOrders().getInRestaurantOrders());
// console.log(restaurant.getOrders().getOrdersPriceLessThan(15));
// console.log(restaurant.getOrders().getOrdersPriceGreaterThan(20));
console.log(restaurant.getOrders().getOrdersByDate(date5));
console.log(restaurant.getTotalSellOnDate(date5));




////////////////////////////////////////
// console.log(restaurant);
// console.log(restaurant.getTables());
// console.log(restaurant.getHuman());
// console.log(restaurant.getKitchen());
// console.log(restaurant.getOrders());
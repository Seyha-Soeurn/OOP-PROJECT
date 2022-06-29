import { Gender } from "../Gender";
import { Staff } from "./Staff";
import { StaffCategory } from "./StaffCategory";
import { VehicleCategory } from "./VehicleCategory";


export class DeliveryPerson extends Staff {
    constructor(id : number, name : string, age : number, gender : Gender, private vehicle : VehicleCategory) {
        super(id, name, age, gender, StaffCategory.DELIVERY_PERSON);
    } 

    // Get vehicle
    getVehicle() : VehicleCategory {
        return this.vehicle;
    }
}
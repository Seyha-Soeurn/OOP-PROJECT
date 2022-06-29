

export class Address {
    constructor(private street : string, private district : string, private city : string) {}

    // Get street
    getStreet() : string {
        return this.street;
    }

    // Get district
    getDistrict() : string {
        return this.district
    }

    // Get city
    getCity() : string {
        return this.city;
    }

    // isEqual method
    isEqual(other : Address) : boolean {
        return this.city === other.city &&
        this.district === other.district &&
        this.street === other.street;
    }
}
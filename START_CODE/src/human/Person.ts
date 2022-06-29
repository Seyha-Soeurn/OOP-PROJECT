import { Address } from "./Address";
import { Gender } from "./Gender";


export abstract class Person {
    protected phone? : number;
    protected address? : Address;
  
    constructor(
      protected id : number,
      protected name : string,
      protected age : number,
      protected gender : Gender
    ) {}
  
    // Set phone
    setPhone(phone : number) {
      this.phone = phone;
    }

    // Set address
    setAddress(address : Address) {
      this.address = address;
    }

    // Get phone
    getPhone() : number | undefined {
      return this.phone;
    }

    // Get phone
    getAddress() : Address | undefined {
      return this.address;
    }

    // Get id
    getId() : number {
      return this.id;
    }

    // Get name
    getName() : string {
      return this.name;
    }

    // Get age
    getAge() : number {
      return this.age;
    }

    // Get gender
    getGender() : Gender {
      return this.gender;
    }

  }
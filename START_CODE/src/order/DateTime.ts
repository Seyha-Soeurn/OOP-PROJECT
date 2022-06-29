

export class DateTime {
    constructor(private day : number, private month : number, private year : number, private time : number) {}

    // Get day
    getDay() : number {
        return this.day;
    }

    // Get month
    getMonth() : number {
        return this.month;
    }

    // Get year
    getYear() : number {
        return this.year;
    }

    // Get year
    getTime() : number {
        return this.time;
    }

    // isEqual method
    isEqual(other : DateTime) : boolean {
        return this.day === other.day &&
        this.month === other.month && 
        this.year === other.year;
    }


}
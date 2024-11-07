// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        const currentYear = new Date().getFullYear();

        if (year > currentYear) {
            throw new Error(`Whoa! Planning ahead, are we? ${year} hasn't happened yet!`);
        } else if (year < 0) {
            throw new Error("Negative year? Did you invent time travel?");
        }

        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
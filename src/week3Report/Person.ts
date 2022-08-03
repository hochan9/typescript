import {Greeter} from "./Greeter";

export class Person implements Greeter{
    protected name: string;

    constructor(name) {
        this.name = name;
    }

    introduce(): void {
        console.log(`이름 : ${this.name}`);
    }
}
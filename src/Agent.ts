export class Agent {
    private name: string;

    constructor(name = 'FA') {
        this.name = name;
    }

    introduce(): void {
        console.log(`에이전트 : ${this.name}\n`);
    }
}
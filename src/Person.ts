import {Agent} from "./Agent";

export class Person {
    private name: string;
    private team: string;
    private contractPeriodMonth: number;
    private agent: Agent;

    constructor(name: string, team = "FA", contractPeriodMonth = 0, agent: Agent) {
        this.name = name;
        this.team = team;
        this.contractPeriodMonth = contractPeriodMonth;
        this.agent = agent ? agent : new Agent();
    }

    introduce(): void {
        console.log(`이름 : ${this.name}\n소속팀 : ${this.team}\n계약기간: ${this.contractPeriodMonth} 개월`);
        this.agent.introduce()
    }

    join(team: string, contractMonth: number): void {
        this.team = team;
        this.contractPeriodMonth = contractMonth;
    }

    leave(): void {
        this.team = "FA";
    }

    extendContract(periodMonth: number): void {
        this.contractPeriodMonth += periodMonth;
    }

    managedBy(agent: Agent) {
        this.agent = agent;
    }
}
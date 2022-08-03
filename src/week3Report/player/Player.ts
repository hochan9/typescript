import {FreeAgent} from "../agent/FreeAgent";
import {Teams} from "./Teams";
import {Agent} from "../agent/Agent";

export class Player {
    private name: string;
    private team: Teams;
    private contractPeriodMonth: number;
    private agent: Agent;

    constructor(name: string) {
        this.name = name;
        this.team = Teams.NA;
        this.contractPeriodMonth = 0;
        this.agent = new Agent();
    }

    introduce(): void{
        console.log(`이름 : ${this.name}\n소속팀: ${this.team.valueOf()}\n계약기간: ${this.contractPeriodMonth}`);
        this.agent.introduce()
    }


    join(team: Teams, contractMonth: number): void {
        this.team = team;
        this.contractPeriodMonth = contractMonth;
    }

    leave(): void {
        this.team = Teams.NA;
    }

    extendContract(periodMonth: number): void {
        this.contractPeriodMonth += periodMonth;
    }

    managedBy(agent: Agent): void {
        this.agent = agent;
    }

}
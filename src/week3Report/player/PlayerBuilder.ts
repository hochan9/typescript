import {Teams} from "./Teams";
import {Agent} from "../agent/Agent";
import {Player} from "./Player";

export class PlayerBuilder {
    private readonly _name: string;
    private _team!: Teams;
    private _contractPeriodMonth!: number;
    private _agent!: Agent;


    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get team(): Teams {
        return this._team;
    }

    setTeam(team: Teams): PlayerBuilder {
        this._team = team;
        return this;
    }

    get contractPeriodMonth() {
        return this._contractPeriodMonth;
    }

    setContractPeriodMonth(contractPeriodMonth: number): PlayerBuilder {
        this._contractPeriodMonth = contractPeriodMonth;
        return this;
    }

    get agent() {
        return this._agent;
    }

    setAgent(agnet: Agent): PlayerBuilder {
        this._agent = agnet;
        return this;
    }

    build(): Player {
        return new Player(this);
    }
}
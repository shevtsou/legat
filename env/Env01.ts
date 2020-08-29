import { Env } from "./api/Env";
import { Manipulator } from "./api/Manipulator";

export class Env01 implements Env {

    valueTable: {"1": number, "0": number} = undefined

    setValueTable(valueTable: {"1": number, "0": number}) {
        this.valueTable = valueTable
    }

    generateManipulator(): Env01Manipulator {
        return new Env01Manipulator(this.valueTable);
    }

}


export class Env01Manipulator implements Manipulator {

    valueTable: {"1": number, "0": number} = undefined;

    currentKey: number;

    lastReward: number = 0;

    constructor(valueTable: {"1": number, "0": number}) {
        this.valueTable = valueTable
        this.currentKey = Math.round(Math.random())
    }
 
    get(): number[] {
        return [this.currentKey, this.lastReward]
    }

    put(input: number[]) {
        if (input.length === 1) {
            if (input[0] === this.valueTable[this.currentKey]) {
                this.lastReward = 1
            } else {
                this.lastReward = 0
            }
        } else {
            this.lastReward = 0
        }
        this.currentKey = Math.round(Math.random())
    }

}
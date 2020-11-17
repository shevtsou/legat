import { Agent } from "./Agent";

export class A0Agent implements Agent{

    getName() {
        return "A0Agent"
    }

    get({ data }): number[] {
        const value = data[0];
        return [value];
    }

}

/*

[current_operation, output, i1, i2, 4, 5]

SET 1
SET 0
MOV


*/
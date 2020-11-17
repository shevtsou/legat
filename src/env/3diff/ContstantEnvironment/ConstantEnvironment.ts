import { randomInt } from "../../../utils/utils";
import { Env } from "../../api/Env";
import { Manipulator } from "../../api/Manipulator";
import { ConstantEnvironmentManipulator } from "./ConstantEnvironmentManipulator";

export class ConstantEnvironment implements Env {
    constructor(private environmentValue: number) {}

    generateManipulator(): Manipulator {
        return new ConstantEnvironmentManipulator(this.environmentValue);
    }

}
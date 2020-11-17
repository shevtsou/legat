import { randomInt } from "../../../utils/utils";
import { Env } from "../../api/Env";
import { EnvFactory } from "../../api/EnvFactory";
import { ConstantEnvironment } from "./ConstantEnvironment";

export class ConstantEnvironmentFactory implements EnvFactory {
    generateInstance(): Env {
        return new ConstantEnvironment(randomInt(0, 1000));
    }
    
}
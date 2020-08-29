import { Env } from "./Env";

export interface EnvFactory {
    generateInstance(): Env;
}
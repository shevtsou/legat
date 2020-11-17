import { EnvResponse } from "../env/api/EnvResponse";

export interface Agent {
    getName(): string;
    get(input: EnvResponse): number[]
}
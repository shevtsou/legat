import { EnvResponse } from "./EnvResponse";

export interface Manipulator {
    get(): EnvResponse;
    put(input: number[])
    getTotalScore(): number;
}
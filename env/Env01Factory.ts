import { EnvFactory } from "./api/EnvFactory";
import { Env01 } from './Env01'

export class Env01Factory implements EnvFactory {
    generateInstance(): Env01 {
        const env = new Env01();
        const valueTable = {}
        for (let x = 0; x <=1; x++) {
            valueTable[x] = Math.round(Math.random() * 1)
        }
        //@ts-ignore
        env.setValueTable(valueTable)
        return env
    }
}
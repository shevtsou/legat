import { Env01Factory } from "./env/Env01Factory"
import * as user from 'readline-sync'

const input = [1, 2, 3, 4]



const envFactory = new Env01Factory()
const env = envFactory.generateInstance()
const manipulator = env.generateManipulator()


while (true) {
    console.log(manipulator.get().join(""))
    const command = user.question(">")
    manipulator.put([parseInt(command)])
}
/**

if i === 1 then
else




*/
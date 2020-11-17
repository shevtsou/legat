// import { Env01Factory } from "./env/Env01Factory"
// import * as user from 'readline-sync'

import { ConstantEnvironmentFactory } from "./env/3diff/ContstantEnvironment/ConstantEnvironmentFactory";
import { Env } from "./env/api/Env";
import { Manipulator } from "./env/api/Manipulator";
import * as readline from 'readline-sync'
import { Estimator } from "./estimator/Estimator";
import { A0Agent } from "./agents/A0Agent";

// const input = [1, 2, 3, 4]



// const envFactory = new Env01Factory()
// const env = envFactory.generateInstance()
// const manipulator = env.generateManipulator()


// while (true) {
//     console.log(manipulator.get().join(""))
//     const command = user.question(">")
//     manipulator.put([parseInt(command)])
// }
// /**

// if i === 1 then
// else




// */
// const env: Env = new ConstantEnvironmentFactory().generateInstance();
// const manipulator: Manipulator =  env.generateManipulator();

// while (true) {
//     const question = readline.question("> ");
//     manipulator.put([parseFloat(question)]);
//     let res = manipulator.get()
//     console.log(`Response: `, res.data)
//     console.log(`Response Score: `, res.score)
//     console.log(`Total Score: `, manipulator.getTotalScore())

// }


const estimator = new Estimator();
estimator.addAgent(new A0Agent())
estimator.addEnvFactory(new ConstantEnvironmentFactory())
console.log(estimator.getEstimations(100))
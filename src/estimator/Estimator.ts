import { Agent } from "../agents/Agent";
import { Env } from "../env/api/Env";
import { EnvFactory } from "../env/api/EnvFactory";

export interface EstimationEntry {
    envName: string;
    agentName: string;
    score: number;


}

export class Estimator {

    private envFactories: EnvFactory[] = [];
    private agents: Agent[] = [];


    addEnvFactory(envFactory: EnvFactory) {
        this.envFactories.push(envFactory);
    }

    addAgent(agent: Agent) {
        this.agents.push(agent);
    }

    getEstimations(envIterations: number): EstimationEntry[] {
        const estimations: EstimationEntry[] = [];
        for (const envFactory of this.envFactories) {
            const envInstance = envFactory.generateInstance();
            for (const agent of this.agents) {

                

                const manipulator = envInstance.generateManipulator();
                for (let i = 0; i < envIterations; i++) {
                    const envResponse = manipulator.get();
                    const agentResponse = agent.get(envResponse)
                    manipulator.put(agentResponse);
                }

                estimations.push({
                    agentName: agent.getName(),
                    envName: envInstance.getName(),
                    score: manipulator.getTotalScore()
                })

            }
        }
        return estimations;
    }
}
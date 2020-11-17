import { Manipulator } from "./Manipulator";

export interface Env {
    getName(): string;
    generateManipulator(): Manipulator;
}

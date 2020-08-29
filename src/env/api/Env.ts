import { Manipulator } from "./Manipulator";

export interface Env {
    generateManipulator(): Manipulator;
}

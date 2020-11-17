import { EnvResponse } from "../../api/EnvResponse";
import { Manipulator } from "../../api/Manipulator";

export class ConstantEnvironmentManipulator implements Manipulator {

  private totalScore: number = 0;

  private lastAnswerCorrect: boolean;

  constructor(private environmentValue: number) {}

  get(): EnvResponse {
    return {
      score: this.lastAnswerCorrect ? 1 : 0,
      data: [this.environmentValue],
    };
  }

  put(input: number[]) {
    if (input.length !== 1) {
      this.lastAnswerCorrect = false;
    } else if (input[0] !== this.environmentValue) {
      this.lastAnswerCorrect = false;
    } else {
      this.totalScore++;
      this.lastAnswerCorrect = true;
    }
  }
 
  getTotalScore(): number {
    return this.totalScore;
  }
}

import { Random } from "@woowacourse/mission-utils";

class RandomNumber {
  createNumber() {
    const number = Random.pickNumberInRange(1, 9);
    return number;
  }

}

export default RandomNumber;
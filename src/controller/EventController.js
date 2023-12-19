import RandomNumber from "../domain/RandomNumber";
import { Console } from "@woowacourse/mission-utils";

class EventController {
  startGame() {
    const createNumber = RandomNumber.createNumber();
    Console.print(createNumber);
  }
}

export default EventController;
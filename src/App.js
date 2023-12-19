import EventController from "./controller/EventController";

class App {
  async play() {
    const controller = new EventController();
    controller.startGame();
  }
}

export default App;

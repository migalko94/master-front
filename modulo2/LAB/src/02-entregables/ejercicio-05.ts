console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  coins = 0;

  coinStatus() {
    console.log("You inserted " + this.coins + " coins");
  }

  play() {
    this.coins++;
    let roulette1: boolean = Math.random() >= 0.5;
    let roulette2: boolean = Math.random() >= 0.5;
    let roulette3: boolean = Math.random() >= 0.5;

    const winHandler = () => {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    };
    const lossHandler = () => console.log("Good luck next time!!");

    roulette1 && roulette2 && roulette3 ? winHandler() : lossHandler();
  }
}

const machine1 = new SlotMachine();
const machine2 = new SlotMachine();
const machine3 = new SlotMachine();

console.log("*** PARTIDA MÁQUINA 1 ***");
machine1.coinStatus();
machine1.play();
machine1.coinStatus();
machine1.play();
machine1.coinStatus();

console.log("*** PARTIDA MÁQUINA 2 ***");
machine2.coinStatus();
machine2.play();
machine2.coinStatus();
machine2.play();
machine2.coinStatus();

console.log("*** PARTIDA MÁQUINA 3 ***");
machine3.coinStatus();
machine3.play();
machine3.coinStatus();
machine3.play();
machine3.coinStatus();

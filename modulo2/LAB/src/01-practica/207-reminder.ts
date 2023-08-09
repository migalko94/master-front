console.log(`*****207 reminder --> se muestra al final de la consola*****
Hay que modificar a arrow function para la correcta asignación del contexto`);

class Reminder {
  text: string;
  constructor(text: string) {
    this.text = text;
  }

  remindMe(delay: number) {
    //Hay que modificar a arrow function para la correcta asignación del contexto
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const practiceReminder = new Reminder("You need to practice more JS!!");

practiceReminder.remindMe(2);

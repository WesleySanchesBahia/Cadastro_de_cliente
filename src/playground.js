import database from "./database";
import Customer from "./app/models/Customers";

class Playground {
  static async play() {
    new database();
    const customers = await Customer.create(
      {
        name: "Mercado Laurindo Nunes ", 
        email: "contato@Laurindonunes.com"
      }
    );
   
    console.log(JSON.stringify(customers, null, 2));
  }
}

Playground.play();

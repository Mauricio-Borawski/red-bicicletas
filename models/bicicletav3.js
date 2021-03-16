const fs = require("fs").promises;

class Bicicleta {
  constructor(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
  }

  static async getBicis() {
    const data = await fs.readFile("./bicis.json", "utf8");
    return data;
  }

  static async addBicis(bici) {
    const table = await Bicicleta.getBicis();
    console.log(table);
    const parsedTable = JSON.parse(table);
    const objt = {
      users: [],
    };
    if (parsedTable) parsedTable.users.map((user) => objt.users.push(user));
    const parsedBici = JSON.parse(bici);
    objt.users.push(parsedBici);
    const json = JSON.stringify(objt);
    await fs.writeFile("./bicis.json", json);
  }
}
module.exports = Bicicleta;

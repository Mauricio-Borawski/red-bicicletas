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
}
module.exports = Bicicleta;

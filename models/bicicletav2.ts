//Completar con el de js.
import fs from "fs";

interface BicicletaInterface {
  id: string | number;
  color: string;
  modelo: string;
  ubicacion: number[];
}

interface BicicletaConstructor {
  new (
    id: string | number,
    color: string,
    modelo: string,
    ubicacion: number[]
  ): BicicletaInterface;
}

export function createBicicleta(
  ctor: BicicletaConstructor,
  id: string | number,
  color: string,
  modelo: string,
  ubicacion: number[]
): BicicletaInterface {
  return new ctor(id, color, modelo, ubicacion);
}

export class Bicicleta implements BicicletaInterface {
  constructor(
    id: string | number,
    color: string,
    modelo: string,
    ubicacion: number[]
  ) {
    id = id;
    color = color;
    modelo = modelo;
    ubicacion = ubicacion;
  }

  id: string | number;
  color: string;
  modelo: string;
  ubicacion: number[];

  static getBicis() {
    fs.readFile("../bici.json", "utf8", (err, data) => {
      if (err) console.log(err);
      else {
        console.log(data);
      }
    });
  }
}

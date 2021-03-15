"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = exports.createBicicleta = void 0;
//Completar con el de js.
const fs_1 = __importDefault(require("fs"));
function createBicicleta(ctor, id, color, modelo, ubicacion) {
    return new ctor(id, color, modelo, ubicacion);
}
exports.createBicicleta = createBicicleta;
class Bicicleta {
    constructor(id, color, modelo, ubicacion) {
        id = id;
        color = color;
        modelo = modelo;
        ubicacion = ubicacion;
    }
    static getBicis() {
        fs_1.default.readFile("../bici.json", "utf8", (err, data) => {
            if (err)
                console.log(err);
            else {
                console.log(data);
            }
        });
    }
}
exports.Bicicleta = Bicicleta;
//# sourceMappingURL=bicicletav2.js.map
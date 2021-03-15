const Bicicleta = function(id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = () => "id: " + this.id + " | color: " + this.color;

Bicicleta.allBicis = [];
Bicicleta.add = function(bici) { 
  Bicicleta.allBicis.push(bici)
};

const a = new Bicicleta(0, "rojo", "urbana", [-34.494304, -58.583124]);
const b = new Bicicleta(0, "rojo", "urbana", [-34.628393, -58.466300]);

Bicicleta.add(a)
Bicicleta.add(b)

module.exports = Bicicleta;
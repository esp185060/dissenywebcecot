/* constructor d'objectes per a components */
var imagenes = [];
imagenes ["gtr_1"] = "../img/gtr_1.webp"
imagenes ["gtr_2"] = "../img/gtr_2.webp"
imagenes ["gtr_3"] = "../img/gtr_3.jpg"
imagenes ["gtr_4"] = "../img/gtr_4.jpg"
imagenes ["gtr_5"] = "../img/gtr_5.jpg"
imagenes ["gtr_6"] = "../img/gtr_6.webp"

class instrument
{
  constructor (unidad, category, marca, forma, precio) 
  {
    this.unidad = unidad;
    this.category = category;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.imagen = imagen;
  }
  
}

var storage = [];

storage.push(new instrument (unidad, category, marca, modelo, precio));

console.log(gtr_1);
console.log(gtr_2);
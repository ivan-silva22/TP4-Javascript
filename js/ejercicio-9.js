class Animal{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
        alert("El animal emite el sonido");
    }

}

class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    emitirSonido(){
        alert("Guau guau!!");
    }
}

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    emitirSonido(){
        alert("Miau miau!!");
    }
}

let perro = new Perro("Ayudante de Santa", 3);
let gato = new Gato("Bola de nieves", 2);

perro.emitirSonido();
gato.emitirSonido();
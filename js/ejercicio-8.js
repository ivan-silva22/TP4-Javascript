class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar(){
        alert(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`);    
    }

    despedirse(){
        alert("Adiós, que tengas un buen día")
    }
}

const persona1 = new Persona("Iván", 24, "programador");
const persona2 = new Persona("Mario", 35, "Arquitecto");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();
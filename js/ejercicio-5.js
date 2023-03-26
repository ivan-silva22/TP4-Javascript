let  persona ={
    nombre: "",
    edad: 0,
    dni: 0,
    sexo: "",
    peso: 0,
    altura: 0,
    anioDeNacimiento: 0,

    mostrarGeneracion(){
        this.anioDeNacimiento = anioDeNacimiento;
        if(this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948){
            document.write("<p>Pertenece a: Silent Generation</p>");
            document.write("<p>Rasgo característico: Austeridad</p>");
        }else if(this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968){
            document.write("<p>Pertenece a: Baby Boom</p>");
            document.write("<p>Rasgo característico: Ambicion</p>");
        }else if(this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980){
            document.write("<p>Pertenece a: Generacion X</p>");
            document.write("<p>Rasgo característico: Obsesion por el exito</p>");
        }else if(this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993){
            document.write("<p>Pertenece a: Generacion Y</p>");
            document.write("<p>Rasgo característico: Frustracion</p>");
        }
        else if(this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            document.write("<p>Pertenece a: Generacion Z</p>");
            document.write("<p>Rasgo característico: Irreverencia</p>");
        }
    },
    esMayorDeEdad (){
        this.nombre = nombre;
        this.edad = edad
        if(this.edad >= 18){
            document.write(`<p>${this.nombre} es mayor de edad</p>`);
        }
    },
    generaDNI (){
        this.dni = Math.floor(100000000 * Math.random()); 
    },
    mostrarDatos (){
        
        this.nombre = nombre;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        
        document.write(`Nombre: ${this.nombre} <br> Edad: ${this.edad} <br> DNI: ${this.dni} <br> Sexo: ${this.sexo} <br> Peso: ${this.peso} <br> Altura: ${this.altura} <br> Año de nacimiento: ${this.anioDeNacimiento}`);
        
    }
    
}

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let sexo = prompt("Ingrese el sexo: H (Hombre), M (Mujer)");
let peso = parseInt(prompt("Ingrese su peso"));
let altura = parseInt(prompt("Ingrese su altura"));
let anioDeNacimiento = parseInt(prompt("Ingrese la fecha de nacimiento"));


persona.mostrarGeneracion();
persona.esMayorDeEdad();
persona.generaDNI();
persona.mostrarDatos();

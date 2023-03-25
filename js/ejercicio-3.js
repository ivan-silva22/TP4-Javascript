let rectangulo = {
    alto: 0,
    ancho: 0,
    area: 0,
    perimetro: 0,
    modificarAlto: function (alto){
        rectangulo.alto = alto;
        document.write(`<p>Alto del rectángulo: ${this.alto}</p>`);
    },
    modificarAncho: function (ancho){
        rectangulo.ancho = ancho;
        document.write(`<p>Ancho del rectángulo: ${this.ancho}</p>`);
    },
    calcularArea: function (alto, ancho){
        rectangulo.area = alto * ancho;
        document.write(`<p>Área del rectángulo: ${rectangulo.area}</p>`);
    },
    calcularPerimetro: function (alto, ancho){
        rectangulo.perimetro = alto + alto + ancho + ancho;
        document.write(`<p>Perímetro del rectángulo: ${rectangulo.perimetro}</p>`);
    }
}

let alto = parseInt(prompt("Ingrese el alto del rectángulo"));
let ancho = parseInt(prompt("Ingrese el ancho del rectángulo"));

rectangulo.modificarAlto(alto);
rectangulo.modificarAncho(ancho);
rectangulo.calcularArea(alto,ancho);
rectangulo.calcularPerimetro(alto,ancho);
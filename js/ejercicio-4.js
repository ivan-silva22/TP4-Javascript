let  producto = {
    codigo:0,
    nombre:"",
    precio:0,
    arrayProductos: [],

    imprimirDatos: function (){
        document.write(`<p>Codigo: ${this.arrayProductos[0]}</p>`);
        document.write(`<p>Nombre: ${this.arrayProductos[1]}</p>`);
        document.write(`<p>Precio: $${this.arrayProductos[2]}</p>`);
    }  
    
}

let codigo = parseInt(prompt("Ingrese el código del producto:"));
let nombre = prompt("Ingrese el nombre del producto:");
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
 
producto.arrayProductos.push(codigo);
producto.arrayProductos.push(nombre);
producto.arrayProductos.push(precio);

producto.imprimirDatos();
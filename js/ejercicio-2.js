let dinero = parseInt(prompt("Ingrese el dinero a su cuenta"));

let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: (saldo)=>{
        cuenta.saldo = saldo;
        document.write(`<p>Se ingreso $${saldo} a su cuenta</p>`); 
    },
    extraer: (cantidad) =>{
        cuenta.saldo = cuenta.saldo - cantidad;
        document.write(`<p>Extrajo $${cantidad} de su cuenta</p>`);
    },
    informar: function (){
        document.write(`<p>Estado de su cuenta $${this.saldo}</p>`);
    }
}

cuenta.ingresar(dinero);

if(confirm("Desea extraer dinero?")){
    let extraerDinero = parseInt(prompt("Ingrese el monto a extrae"));
    cuenta.extraer(extraerDinero);
}

cuenta.informar();

let auto = {
    color: "Blanco",
    marca: "Volkswagen",
    modelo: 2020,
    encender: function (){
        document.write('<p>Auto encendido</p>');
    },
    apagar: ()=>{
        document.write('<p>El auto se apagó</p>');
    }

}

auto.encender();
auto.apagar();
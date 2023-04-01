class Contacto{
    constructor(nombre,telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda{
    constructor(tamanio = 10){
        this.contactos =  [];
        this.tamanio = tamanio;
    }

    aniadirContacto(contacto){
        if(this.contactos.length >= this.tamanio){
            alert("Agenda llena, no se puede añadir el contacto.");
        }else if (this.existeContacto(contacto)){
            alert("El contacto ya existe en la agenda");
        }else{
            this.contactos.push(contacto);
            alert("Contacto añadido");
        }
    }

    existeContacto(contacto){
        return this.contactos.some(e => e.nombre === contacto.nombre); 
    }

    listarContactos(){
        document.write("Lista de contactos");
        this.contactos.forEach(c => document.write(`${c.nombre}: ${c.telefono}`));
    }

    buscarContacto(nombre){
        const contacto = this.contactos.find(c => c.nombre === nombre);
        if(contacto){
            alert(`Teléfono de ${contacto.nombre}: ${contacto.telefono}`);
        }else{
            alert(`No se encontro el contacto ${contacto.nombre}`);
        }
    }

    eliminarContacto(contacto){
        const eliminar = this.contactos.findIndex(c => c.nombre === contacto.nombre);
        if(eliminar !== -1){
            this.contactos.slice(eliminar, 1);
            alert("Contacto eliminado");
        }else{
            alert("El contacto no existe en la agenda");
        }
    }

    agendaLlena(){
        return this.contactos.length >= this.tamanio;
    }

    huecosLibres(){
        const libres = this.tamanio - this.contactos.length;
        alert(`Quedan ${libres} huecos libres en la agenda`);
    }
}

const agenda = new Agenda(10);

do {
    const opcion = prompt(`Seleccione una opción:
    1. Añadir contacto
    2. Buscar contacto
    3. Eliminar contacto
    4. Listar contactos
    5. Huecos libres
    `);

  switch (opcion) {
    case "1":
      const nombre = prompt("Introduce el nombre del contacto:");
      const telefono = prompt("Introduce el teléfono del contacto:");
      const contacto = new Contacto(nombre, telefono);
      agenda.aniadirContacto(contacto);
      break;
      case "2":
      const nombreBusqueda = prompt("Introduce el nombre del contacto a buscar:");
      agenda.buscarContacto(nombreBusqueda);
      break;
    case "3":
      const nombreEliminar = prompt("Introduce el nombre del contacto a eliminar:");
      const contactoEliminar = new Contacto(nombreEliminar, "");
      agenda.eliminarContacto(contactoEliminar);
      break;
    case "4":
      agenda.listarContactos();
      break;
    case "5":
      agenda.huecosLibres();
      break;
    default:
        alert("Opción no válida.");
  }
} while (confirm("Desea seguir en la agenda?"));







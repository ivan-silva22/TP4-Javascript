class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        alert(`¡${pasajero} ha abordado el avión ${this.nombre} con destino a ${this.destino}!`);
      } else {
        alert(`Lo siento, el avión ${this.nombre} con destino a ${this.destino} está lleno.`);
      }
    }
  }
  
  class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      for (let i = 0; i < this.listaAviones.length; i++) {
        if (this.listaAviones[i].nombre === nombreAvion) {
          alert(`Información del avión ${nombreAvion}:`);
          alert(`Destino: ${this.listaAviones[i].destino}`);
          alert(`Capacidad: ${this.listaAviones[i].capacidad}`);
          alert(`Pasajeros a bordo: ${this.listaAviones[i].listaPasajeros}`);
          return;
        }
      }
      alert(`Lo siento, no se encontró el avión ${nombreAvion}.`);
    }
  }
  
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
  const avion1 = new Avion("Vuelo 001", 150, "Nueva York");
  const avion2 = new Avion("Vuelo 002", 200, "Londres");
  const avion3 = new Avion("Vuelo 003", 100, "París");
  
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  aeropuertoInternacional.buscarAvion("Vuelo 002");
  avion2.abordar("Juan");
  avion2.abordar("Ana");
  avion2.abordar("Carlos");
  
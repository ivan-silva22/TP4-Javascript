do {
    let opcionUsuario = prompt(`Elija una opción:
    1. Piedra
    2. Papel
    3. Tijera`);   
    let opcionesCpu = ["piedra","papel","tijera"];
    let opcionCpu = [Math.floor(Math.random() * opcionesCpu.length)];

    alert(`Eligió: ${opcionUsuario}`);
    alert(`Eligió: ${opcionesCpu[opcionCpu]}`);

    if(opcionUsuario === opcionesCpu[opcionCpu]){
        alert("Empate");
    }else if(opcionUsuario === "piedra" && opcionesCpu[opcionCpu] === "tijera" || opcionUsuario === "papel" && opcionesCpu[opcionCpu] === "piedra" || opcionUsuario === "tijera" && opcionesCpu[opcionCpu] === "papel"){
        alert("Ganaste!!");
    }else{
        alert("Perdiste!!");
    }
} while (confirm("¿Desea seguir jugando?"));
  
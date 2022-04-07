let numJuegos = parseInt(prompt("Ingrese la cantidad de veces que desea jugar"));
if(numJuegos>0){
    for(let i=0; i<numJuegos; i++){
        let respuestaUsuario = prompt(`Jugada número ${i+1}. Ingrese su opción (piedra/papel/tijera)`);
        let respuestaMaquina = Math.floor((Math.random() * 3) + 1); //1=piedra, 2=papel, 3=tijera
        switch (respuestaUsuario){
            case "piedra": case "Piedra":
              switch (respuestaMaquina){
                    case 1:
                      alert("Es un empate! La respuesta de la máquina es piedra.");
                      break;
                    case 2:
                      alert("Has perdido! La respuesta de la máquina es papel.");
                      break;
                    case 3:
                      alert("Felicidades, ganaste!! La respuesta de la máquina es tijera.");
                      break;
              }
              break;
            case "papel": case "Papel":
              switch (respuestaMaquina){
                    case 1:
                      alert("Felicidades, ganaste!! La respuesta de la máquina es piedra.");
                      break;
                    case 2:
                      alert("Es un empate! La respuesta de la máquina es papel.");
                      break;
                    case 3:
                      alert("Has perdido! La respuesta de la máquina es tijera.");
                      break;
              }
              break;
            case "tijera" : case "Tijera":
              switch (respuestaMaquina){
                    case 1:
                      alert("Has perdido! La respuesta de la máquina es piedra.");
                      break;
                    case 2:
                      alert("Felicidades, ganaste!! La respuesta de la máquina es papel.");
                      break;
                    case 3:
                      alert("Es un empate! La respuesta de la máquina es tijera.");
                      break;
                }
                break;
            default:
              alert("Respuesta no válida. Has perdido el turno!")
              break;
            }
        
      }
      alert("GAME OVER")  
}
else{
    alert("Por favor, ingrese una respuesta válida. Recargue la página para reintentarlo.");
}
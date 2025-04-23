function pelear() {
    const mewtwo = { ataque: 110, defensa: 90, vida: 100 };
    const pikachu = { ataque: 55, defensa: 40, vida: 100 };
  
    const dañoMewtwo = Math.max(0, mewtwo.ataque - pikachu.defensa);
    const dañoPikachu = Math.max(0, pikachu.ataque - mewtwo.defensa);
  
    const vidaPikachu = pikachu.vida - dañoMewtwo;
    const vidaMewtwo = mewtwo.vida - dañoPikachu;
  
    let resultado = `
      Mewtwo le hizo ${dañoMewtwo} de daño a Pikachu.<br>
      Pikachu le hizo ${dañoPikachu} de daño a Mewtwo.<br><br>
    `;
  
    if (vidaMewtwo > vidaPikachu) {
      resultado += "Mewtwo gana";
    } else if (vidaPikachu > vidaMewtwo) {
      resultado += "Pikachu gana";
    } else {
      resultado += "Empate";
    }
  
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
      resultadoDiv.innerHTML = resultado;
    }
  }
  
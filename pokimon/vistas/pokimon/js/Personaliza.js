function guardarDatos() {
    const entrenador = {
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      telefono: document.getElementById("telefono").value,
      email: document.getElementById("email").value
    };
  
    const pokemon = {
      nombre: document.getElementById("nombrePokemon").value,
      tipo: document.getElementById("tipo").value,
      ataque: parseInt(document.getElementById("ataque").value),
      defensa: parseInt(document.getElementById("defensa").value)
    };
  
    // Puedes guardar estos datos en localStorage para usarlos luego en Pelea.html
    localStorage.setItem("entrenador", JSON.stringify(entrenador));
    localStorage.setItem("pokemon", JSON.stringify(pokemon));
  }
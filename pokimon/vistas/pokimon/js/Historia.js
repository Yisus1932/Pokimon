// Arreglo de Pokemones con imágenes
const pokemones = [
    {
      nombre: "Pikachu",
      tipo: "Eléctrico",
      ataque: 55,
      defensa: 40,
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"
    },
    {
      nombre: "Charmillion",
      tipo: "Fuego / Volador",
      ataque: 84,
      defensa: 78,
      imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png"
    },
    {
      nombre: "Mewtwo",
      tipo: "Psíquico",
      ataque: 110,
      defensa: 90,
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png"
    }
  ];
  
  // Funciones para navegar entre pantallas
  function irASeleccion() {
    window.location.href = 'Entrenador.html';
  }
  
  function irAPersonalizar() {
    window.location.href = 'Personaliza.html';
  }
  
  // Si necesitas saludar con nombre en la historia
  function saludarUsuario(nombre) {
    const saludo = document.getElementById("saludo");
    if (saludo) {
      saludo.textContent = `Hola ${nombre}, prepárate para tu aventura.`;
    }
  }
  
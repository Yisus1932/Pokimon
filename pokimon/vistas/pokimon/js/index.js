function Loguear() {
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('clave').value.trim();
  
    // Validación directa (puedes reemplazar con datos del localStorage si más adelante usas registro)
    if (username === "jesus" && password === "123456") {
      alert("Bienvenido, " + username);
      window.location.href = "../vistas/Entrenador.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
  
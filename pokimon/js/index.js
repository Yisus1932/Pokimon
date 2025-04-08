function Loguear() {
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('clave').value;

    
    let user = JSON.parse(localStorage.getItem("user"));

    
    if (!user) {
        alert('No tienes cuenta, regístrate primero');
        window.location.href = "../vistas/registrar.html";
    } else if (user.username === username && user.password === password) {
        alert('Usuario válido');
        
        localStorage.setItem("userActivo", username);

        window.location.href = "../vistas/genero.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

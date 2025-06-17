function historia(){
    let nombre = document.querySelector(".corner-info");
    nombre.style.position ="relative"
    nombre.style.margin = "5%"
    let cara = document.querySelector(".cara");
    cara.style.margin = "10%";
    cara.style.width = "30%";
    document.getElementById("curriculum").innerHTML=' <div class="aparece-desde-abajo"><img src="images/Carlos_Curriculum.jpg" alt="" width="80%" ><a href="./index.html"><img src="images/x.png" alt="" width="50"> </a>'
    let mainContent = document.querySelector(".main-content");
    mainContent.style.display = "none";
    let formulario = document.querySelector("#formulario");
    formulario.style.display = "none";

    document.querySelector("#curriculum").style.display = "block"; // o "flex"
}

function formulario() {
    let nombre = document.querySelector(".corner-info");
    nombre.style.position = "relative";
    nombre.style.margin = "5%";
    let cara = document.querySelector(".cara");
    cara.style.margin = "10%";

    document.getElementById("formulario").innerHTML = `
        <form action="https://formsubmit.co/carlinhos78.csc@gmail.com" method="POST" class="formulario-contacto aparece-desde-abajo">
            <h2>Contacto</h2>
            <input type="text" name="nombre" placeholder="Tu nombre" required>
            <input type="email" name="email" placeholder="Tu correo electrónico" required>
            <textarea name="mensaje" placeholder="Escribe tu mensaje aquí..." required></textarea>
            <button type="submit">Enviar mensaje</button>
        </form>

    `;

    let mainContent = document.querySelector(".main-content");
    mainContent.style.display = "none";
    let curriculum = document.querySelector("#curriculum");
    curriculum.style.display = "none";
    document.querySelector("#formulario").style.display = "block"; // o "flex"
}

// HTML de la página de Contacto a partir de JS (DOM)

const contenedorformularioContacto = document.getElementById("formularioContacto");
const formularioContacto = document.createElement("article");

// titulo ingresado por js

const contenidoSuperior = {
    titulo: "¿Te interesa empezar con alguno de los servicios que ves?",
    texto: "Te invito a contactarme por cualquier información que necesites"
};

formularioContacto.innerHTML = `
                    <div class= "text-center">
                    <h4>${contenidoSuperior.titulo}</h4>
                    <p>${contenidoSuperior.texto}</p>
                    </div>
                `;


contenedorformularioContacto.appendChild(formularioContacto);

// Modal cuando la persona toca Enviar

const abrirModalDeRutina = document.getElementById("enviar")
const cerrarRutina = document.getElementById("cerrarRutina")
const modalContainerRutinas = document.getElementsByClassName("modalContainerRutinas")[0]

abrirModalDeRutina.addEventListener("click", (e) =>{
    e.preventDefault();
        // si el usuario no ingresa su nombre y mail no se abre el modal de que fue enviado
        if((document.getElementById("nombreUsuario").value === "") || (document.getElementById("emailUsuario").value === "")){
            return;
        }
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})

cerrarRutina.addEventListener("click", () =>{
    modalContainerRutinas.classList.toggle("modalRutinasActive")
})

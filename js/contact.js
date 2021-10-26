// HTML de la página de Contacto a partir de JS (DOM)

const contenedorformularioContacto = document.getElementById("formularioContacto");
const formularioContacto = document.createElement("article");

// titulo ingresado por js

const contenidoSuperior = {
    titulo: "¿Te interesa empezar con alguno de los servicios que ves?",
    texto: "Te invito a contactarme por cualquier información que necesites"
};

formularioContacto.innerHTML = `
                    <div class= "text-center mx-3">
                    <h4>${contenidoSuperior.titulo}</h4>
                    <p>${contenidoSuperior.texto}</p>
                    </div>
                `;


contenedorformularioContacto.appendChild(formularioContacto);

// Modal cuando la persona toca Enviar

const abrirModal = document.getElementById("enviar")
const cerrarModal = document.getElementById("cerrarModal")
const modalContainer = document.getElementsByClassName("modalContainer")[0]

abrirModal.addEventListener("click", (e) =>{
    e.preventDefault();
        // si el usuario no ingresa su nombre y mail no se abre el modal de que fue enviado
        if((document.getElementById("nombreUsuario").value === "") || (document.getElementById("emailUsuario").value === "")){
            return;
        }
    modalContainer.classList.toggle("modalActive")
})

cerrarModal.addEventListener("click", () =>{
    modalContainer.classList.toggle("modalActive")
})

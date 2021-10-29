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

// VALIDACIÓN FORMULARIO




const abrirModal = document.getElementById("enviar")
const cerrarModal = document.getElementById("cerrarModal")
const modalContainer = document.getElementsByClassName("modalContainer")[0]



// FORMULARIO DE CONTACTO

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textareas = document.querySelectorAll('#formulario textarea');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s-0-9_,.+-]{10,100}$/, // Letras, espacios, números, pueden llevar acentos.
}

const campos = {
    nombre: false,
    telefono: false,
    correo: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono')
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
            break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje')
            break;
    }
}

const validarCampo = (expresion, input, campo,) => {
    if (expresion.test(input.value)) { //comprueba la expresion regular de usuario en el campo de usuario.
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

textareas.forEach((textarea) => {
    textarea.addEventListener('keyup', validarFormulario);
    textarea.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (campos.nombre && campos.correo && campos.telefono && campos.mensaje) {
        formulario.reset();

        modalContainer.classList.toggle("modalActive")
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
        
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 5000);
    }
});

/*

// ENVIO REAL DEL FORMULARIO SIN BACKEND
const cerrarModal = document.getElementById("cerrarModal")
const modalContainer = document.getElementsByClassName("modalContainer")[0]
const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        this.reset()
        /////////////
        modalContainer.classList.toggle("modalActive")
    }
}*/
cerrarModal.addEventListener("click", () => {
    modalContainer.classList.toggle("modalActive")
})

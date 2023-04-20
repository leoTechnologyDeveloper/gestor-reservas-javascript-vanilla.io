// VARIABLES ********************************

const form = document.querySelector('#nueva-cita');
const inputNombre = document.querySelector('#nombre');
const inputTelefono = document.querySelector('#telefono');
const inputFecha = document.querySelector('#fecha');
const inputHora = document.querySelector('#hora');
const inputCantidad = document.querySelector('#cantidad');

// EVENT LISTENERS ********************************

form.addEventListener('submit', nuevaCita)
inputNombre.addEventListener('change', datosCita)
inputTelefono.addEventListener('change', datosCita)
inputFecha.addEventListener('change', datosCita)
inputHora.addEventListener('change', datosCita)
inputCantidad.addEventListener('change', datosCita)

// CLASES Y OBJETOS ********************************

const citaObj = {
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    cantidad: ''
}


class Citas {
    constructor(){
        this.citas = [];
    }
}

class UI{
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'rounded-md', 'w-full', 'absolute', 'py-6');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('bg-red-600', 'text-white');
        } else {
             divMensaje.classList.add('bg-lime-600', 'text-white');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#main').insertBefore( divMensaje, document.querySelector('.contenido'));

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }
}


const administrarCitas = new Citas();
const ui = new UI();


// FUNCIONES ********************************

// Agrega datos al objeto de Cita
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}


function nuevaCita(e) {
     e.preventDefault();
    const {nombre, telefono, fecha, hora, cantidad } = citaObj;

    // Validar
    if( nombre === '' || telefono === '' || fecha === ''  || hora === '' || cantidad === '' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;
    }

    
}


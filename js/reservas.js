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

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        console.log(this.citas);
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


//    imprimirCitas({citas}) { // Se puede aplicar destructuring desde la función...
       
//     this.limpiarHTML();

//     citas.forEach(cita => {
//         const {nombre, telefono, fecha, hora, cantidad, id } = cita;

//         const divCita = document.createElement('div');
//         divCita.classList.add('bg-white', 'p-3');
//         divCita.dataset.id = id;

//         // scRIPTING DE LOS ELEMENTOS...
//         const mascotaParrafo = document.createElement('h2');
//         mascotaParrafo.classList.add('bg-yellow', 'text-gray-800');
//         mascotaParrafo.innerHTML = `${nombre}`;

//         const propietarioParrafo = document.createElement('p');
//         propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

//         const telefonoParrafo = document.createElement('p');
//         telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefono}`;

//         const fechaParrafo = document.createElement('p');
//         fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

//         const horaParrafo = document.createElement('p');
//         horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

//         const sintomasParrafo = document.createElement('p');
//         sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${sintomas}`;

//         // Agregar un botón de eliminar...
//         const btnEliminar = document.createElement('button');
//         btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
//         btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
//         btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

//         // Añade un botón de editar...
//         const btnEditar = document.createElement('button');
//         btnEditar.onclick = () => cargarEdicion(cita);

//         btnEditar.classList.add('btn', 'btn-info');
//         btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

//         // Agregar al HTML
//         divCita.appendChild(mascotaParrafo);
//         divCita.appendChild(propietarioParrafo);
//         divCita.appendChild(telefonoParrafo);
//         divCita.appendChild(fechaParrafo);
//         divCita.appendChild(horaParrafo);
//         divCita.appendChild(sintomasParrafo);
//         divCita.appendChild(btnEliminar)
//         divCita.appendChild(btnEditar)

//         contenedorCitas.appendChild(divCita);
//     });    
// }
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

// generar un id único
citaObj.id = Date.now();

// Creando una nueva cita
administrarCitas.agregarCita({...citaObj});

// Reiniciar el formulario
form.reset();
    
    // Imprimir el HTML de citas
    // ui.imprimirCitas(administrarCitas);

}


// Reiniciar el objeto

function reiniciarObjeto() {
    citaObj.nombre = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.cantidad = '';
}


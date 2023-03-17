
// Formulario para agregar un cliente
var form = document.getElementById('form1')

// Se añade el evento de envio al formulario cuando la página haya cargado
document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener('submit', validarFormulario);
});

// Función que valida el rfc recibido como parametro y usa expresiones regulares para validar si está bien escrito
function rfcValido(rfc) {
    const re = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
    //var validado = rfc.match(re);
    var validado = re.test(rfc)
    return validado
}

// Método para validar un formulario
function validarFormulario(e) {
	e.preventDefault();
	// Todos los campos por validar
	var name = document.getElementById('name');
	var lastp = document.getElementById('apellidop');
    var lastm = document.getElementById('apellidom');
	var email = document.getElementById('email');
	var tel = document.getElementById('tel');
	var dir = document.getElementById('dire');
    var rfc = document.getElementById('rfc');

	// Se quita la clase de inválido antes de comprobar si lo son o no
	name.classList.remove('is-invalid');
	lastp.classList.remove('is-invalid');
    lastm.classList.remove('is-invalid');
	email.classList.remove('is-invalid');
	tel.classList.remove('is-invalid');
	dir.classList.remove('is-invalid');
    rfc.classList.remove('is-invalid');

	let validation = true;
	let desc = ''

	// Se valida que los campos no estén vacios
	if(name.value.length == 0) {
		name.classList.add('is-invalid');
		desc = desc + '<p>El campo nombre está vacio</p>'
	  	validation = false
	}

	if (lastp.value.length == 0) {
		lastp.classList.add('is-invalid');
		desc = desc + '<p>El campo apellido paterno está vacio</p>'
		validation = false
	}

	if (lastm.value.length == 0) {
		lastm.classList.add('is-invalid');
		desc = desc + '<p>El campo apellido materno está vacio</p>'
		validation = false
	}

	if (email.value.length == 0) {
		email.classList.add('is-invalid');
		desc = desc + '<p>El campo email tiene un valor incorrecto</p>'
		validation = false
	}

    if (tel.value.length == 0) {
		tel.classList.add('is-invalid');
		desc = desc + '<p>El campo telefono tiene un valor incorrecto</p>'
		validation = false
	}

    if (dir.value.length == 0) {
		dir.classList.add('is-invalid');
		desc = desc + '<p>El campo dirección está vacio</p>'
		validation = false
	}

	// Se valida el rfc a partir de la función
    if (!rfcValido(rfc.value)){
        rfc.classList.add('is-invalid');
        desc = desc + '<p>El campo rfc tiene un valor incorrecto</p>'
        validation = false
    }
	
	// Cuando la validación es falsa, el modal de error se muestra
	if (!validation) {
		$('#modal-danger').modal('show');
		document.getElementById("desc1").innerHTML = desc
		return;
	}

	// Si se valido correctamente se muestra el modal con el contenido deseado
	$('#modal-success').modal('show');
	desc = `<p>Nombre: ${name.value} </p>
           <p>Apellido paterno: ${lastp.value} </p>  
           <p>Apellido materno: ${lastm.value} </p>  
           <p>Email: ${email.value} </p>  
           <p>Telefono: ${tel.value} </p> 
           <p>Dirección: ${dir.value} </p> 
           <p>RFC: ${rfc.value} </p>`
	document.getElementById("desc2").innerHTML = desc
}
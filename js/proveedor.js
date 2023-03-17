
// Formulario para agregar un proveedor
var form = document.getElementById('form1')

// Cuando cargue la página se añade el evento al formulario
document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener('submit', validarFormulario);
});

// Función que se ejecuta al suceder el evento del formulario
function validarFormulario(e) {
	e.preventDefault();
	// Se obtienen los campos del formulario
	var name = document.getElementById('name');
	var lastp = document.getElementById('apellidop');
    var lastm = document.getElementById('apellidom');
	var email = document.getElementById('email');
	var tel = document.getElementById('tel');

	// Se remueve los estilos de estar incorrecto el valor
	name.classList.remove('is-invalid');
	lastp.classList.remove('is-invalid');
    lastm.classList.remove('is-invalid');
	email.classList.remove('is-invalid');
	tel.classList.remove('is-invalid');

	let validation = true;
	let desc = ''

	// Empieza la validación de cada campo, para cersiorar si no está vacio
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

	// Cuando la validación sea falsa, se muestra un mensaje de error en un modal
	if (!validation) {
		$('#modal-danger').modal('show');
		document.getElementById("desc1").innerHTML = desc
		return;
	}
	
	// Caso contrario si la validación resulta exitosa. Se muestra un modal de exito
	$('#modal-success').modal('show');
	desc = `<p>Nombre: ${name.value} </p>
           <p>Apellido paterno: ${lastp.value} </p>  
           <p>Apellido materno: ${lastm.value} </p>  
           <p>Email: ${email.value} </p>  
           <p>Telefono: ${tel.value} </p>`
	document.getElementById("desc2").innerHTML = desc
}
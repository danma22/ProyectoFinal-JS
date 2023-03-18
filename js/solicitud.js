
const formSolicitud = document.getElementById("solicitudForms")
const buton = document.getElementById("guardarJSON")
const botonDescargar = document.getElementById("descargar")
var data = {}

// Evento que se ejecuta cuando se carga el dom. Se prepara el event del submit del formulario
window.addEventListener("DOMContentLoaded", function(){
    botonDescargar.style.display = "none"
    formSolicitud.addEventListener("submit", function(e){
        e.preventDefault()
        generarJSON()
    });

    botonDescargar.addEventListener("click", function(){
        var downloadLink = document.createElement("a");
        downloadLink.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data)));
        downloadLink.setAttribute("download", "solicitud-empleo.json");

        // Simular clic en el enlace de descarga
        downloadLink.click();       
    });
});

// Generar el objeto JSON para determinar los elementos del formulario
function generarJSON(){
    let camposText = document.querySelectorAll('input[type="text"]');
    let camposTel = document.querySelectorAll('input[type="tel"]');
    let camposNumber = document.querySelectorAll('input[type="number"]');
    let camposDate = document.querySelectorAll('input[type="date"]');
    let camposRadio = document.querySelectorAll('input[type="radio"]:checked')
    let camposCheckbox = document.querySelectorAll('input[type="checkbox"]:checked')

    let validations = validarCampos(camposText, camposTel, camposNumber, camposDate, camposRadio)

    if (!validations){
        return
    }

    data['CamposText'] = {}
    camposText.forEach((campo) => {
        data['CamposText'][campo.id] = campo.value
    });

    data['CamposTel'] = {}
    camposTel.forEach((campo) => {
        data['CamposTel'][campo.id] = campo.value
    });

    data['CamposNumber'] = {}
    camposNumber.forEach((campo) => {
        data['CamposNumber'][campo.id] = campo.value
    });

    data['camposDate'] = {}
    camposDate.forEach((campo) => {
        data['camposDate'][campo.id] = campo.value
    });

    data['camposRadio'] = {}
    camposRadio.forEach((campo) => {
        data['camposRadio'][campo.id] = true
    });

    if (camposCheckbox != null){
        data['camposCheckbox'] = {}
        camposCheckbox.forEach((campo) => {
            data['camposCheckbox'][campo.id] = true
        });
    }

    let loaderOverlay = document.getElementById("loader-overlay");

    loaderOverlay.classList.remove("d-none");

    setTimeout(function() {
        loaderOverlay.classList.add("d-none");
    }, 3000);
    showData()

    botonDescargar.style.display = ""
    buton.style.display = "none"
}

// Functión para vakudar campos
function validarCampos(camposText, camposTel, camposNumber, camposDate, camposRadio){
    let validation = true;

    camposText.forEach((campo) => {
        campo.classList.remove("is-invalid")
        if (campo.value.length == 0){
            validation = false
            campo.classList.add("is-invalid")
        }
    });

    camposTel.forEach((campo) => {
        campo.classList.remove("is-invalid")
        if (campo.value.length == 0){
            validation = false
            campo.classList.add("is-invalid")
        }
    });

    camposNumber.forEach((campo) => {
        campo.classList.remove("is-invalid")
        if (campo.value.length == 0){
            validation = false
            campo.classList.add("is-invalid")
        }
    });

    camposDate.forEach((campo) => {
        campo.classList.remove("is-invalid")
        if (campo.value.length == 0){
            validation = false
            campo.classList.add("is-invalid")
        }
    });

    if(camposRadio != null){
        if (camposRadio.length < 14){
            validation = false
        }
    } else {
        validation = false
    }

    if (!validation){
        $('#modal-danger').modal('show');
    }

    return validation
}

// Mostrar los datos en el formulario
function showData() {
    let form = document.getElementById("solicitudForms");

    let inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
        input.setAttribute("readonly", true);
        if (input.type == "radio") {
            input.setAttribute("disable", "disable")
        }
    });

    Object.keys(data['CamposText']).forEach((i) => {
        let campo = document.getElementById(i);

        campo.value = data['CamposText'][i]
    });

    Object.keys(data['CamposTel']).forEach((i) => {
        let campo = document.getElementById(i);

        campo.value = data['CamposTel'][i]
    });

    Object.keys(data['CamposNumber']).forEach((i) => {
        let campo = document.getElementById(i);

        campo.value = data['CamposNumber'][i]
    });

    Object.keys(data['camposDate']).forEach((i) => {
        let campo = document.getElementById(i);

        campo.value = data['camposDate'][i]
    });

    Object.keys(data['camposRadio']).forEach((i) => {
        let campo = document.getElementById(i);

        campo.checked = data['camposRadio'][i]
    });

    if (Object.keys(data['camposCheckbox']).length == 0) {
        Object.keys(data['camposCheckbox']).forEach((i) => {
            let campo = document.getElementById(i);
    
            campo.checked = data['camposCheckbox'][i]
        });
    }
    
}




const formSolicitud = document.getElementById("solicitudForms")

formSolicitud.addEventListener("submit", function(e){
    e.preventDefault()
    validarForms()
});

function validarForms(){
    let valGeneral = validarGeneral();
    let valDatosPersonales = validarDatosPersonales();
    let valDocumentacion = validarDocumentacion();
    let valEstadoSalud = validarEstadoSalud();
    let valDatosFamiliares = validarDatosFamiliares();
    let valEscolaridad = validarEscolaridad();
    let valConocimientoGeneral = validarConocimientoGeneral();
    let valEmpleo = validarEmpleo();
    let valReferencias = validarReferencias();
    let valDatosGenerales = validarDatosGenerales();
}

function validarGeneral() {
    let general = ""
    let puesto = document.getElementById("puesto");
    let sueldo = document.getElementById("sueldo");
    let date = document.getElementById("date");
    let sueldoApr = document.getElementById("sueldoApr");
    let dateCon = document.getElementById("dateCon");
    let validation = true;

    if (puesto.value.length == 0){
        validation = false
    }

    if (sueldo.value.length == 0){
        validation = false
    }

    if (date.value.length == 0){
        validation = false
    }

    if (sueldoApr.value.length == 0){
        validation = false
    }

    if (dateCon.value.length == 0){
        validation = false
    }

    if (validation){
        general = {
            PuestoSolicitado: puesto,
            SueldoMensualDeseado: sueldo
            
        }

    }

    return validation
}

function validarDatosPersonales() {
    let apPat = document.getElementById("apPat");
    let apMat = document.getElementById("apMat");
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let elementoActivo = document.querySelector('input[name="sexo"]:checked');
    let address = document.getElementById("address");
    let col = document.getElementById("col");
    let CP = document.getElementById("CP");
    let phone = document.getElementById("phone");
    let birth = document.getElementById("birth");
    let cityState = document.getElementById("cityState");
    let birthPlace = document.getElementById("birthPlace");
    let nac = document.getElementById("nac");
    let validation = true;

    if (apPat.value.length == 0){
        validation = false
    }

    if (apMat.value.length == 0){
        validation = false
    }

    if (name.value.length == 0){
        validation = false
    }

    if (age.value.length == 0){
        validation = false
    }

    if(!elementoActivo) {
        validation = false
    }

    if (address.value.length == 0){
        validation = false
    }

    if (col.value.length == 0){
        validation = false
    }

    if (CP.value.length == 0){
        validation = false
    }

    if (phone.value.length == 0){
        validation = false
    }

    if (phone.value.length == 0){
        validation = false
    }

    if (birth.value.length == 0){
        validation = false
    }

    if (cityState.value.length == 0){
        validation = false
    }

    if (birthPlace.value.length == 0){
        validation = false
    }

    if (nac.value.length == 0){
        validation = false
    }

    return validation
}

function validarDocumentacion() {
    return true
}

function validarEstadoSalud() {
    return true
}

function validarDatosFamiliares() {
    return true
}

function validarEscolaridad() {
    return true
}

function validarConocimientoGeneral() {
    return true
}

function validarEmpleo() {
    return true
}

function validarReferencias() {
    return true
}

function validarDatosGenerales() {
    return true
}

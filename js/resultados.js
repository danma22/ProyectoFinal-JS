
const formResultado = document.getElementById("solicitudForms")

window.addEventListener("DOMContentLoaded", function(){
    let inputs = formResultado.querySelectorAll("input");
    inputs.forEach((i) => {
        i.setAttribute('readonly', true);
    });


    // var data = sessionStorage.getItem("data");
    // console.log(data);
    
    // data['CamposText'].keys().forEach((id) => {
    //     console.log(id)
    // });
});



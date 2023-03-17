'use strict'

// Datos para la tabla
const data = [
    {
      id: 1,
      nombre: "Daniel",
      apaterno: "Macias",
      amaterno: "Estrada",
      email: "2030068@upv.edu.mx",
      telefono: "8342556155",
      dirección: "Naciones Unidas 818",
      RFC: "MAED020602J23",
      categoria: "Regular"
    },
    {
      id: 2,
      nombre: "Jonathan",
      apaterno: "Canales",
      amaterno: "Puga",
      email: "2030451@upv.edu.mx",
      telefono: "8346981265",
      dirección: "Libertad 189",
      RFC: "CAPJ080914H73",
      categoria: "Completo"
    },
    {
      id: 3,
      nombre: "Nubia Esmeralda",
      apaterno: "Cantú",
      amaterno: "Sanchez",
      email: "2030210@upv.edu.mx",
      telefono: "8341897564",
      dirección: "Girasoles 333",
      RFC: "CASN010502L78",
      categoria: "Servicios"
    },
    {
      id: 4,
      nombre: "Jose Rodolfo",
      apaterno: "Cervantes",
      amaterno: "Cabrera",
      email: "1930267@upv.edu.mx",
      telefono: "8346574832",
      dirección: "Platon 122",
      RFC: "CECA021101O47",
      categoria: "Servicios"
    },
    {
      id: 5,
      nombre: "Jorge Luis",
      apaterno: "Charles",
      amaterno: "Torres",
      email: "2030340@upv.edu.mx",
      telefono: "8347551488",
      dirección: "Atenas 911",
      RFC: "CHTO100710Gw7",
      categoria: "Regular"
    },
    {
      id: 6,
      nombre: "Jose Antonio",
      apaterno: "Cumpean",
      amaterno: "Morales",
      email: "2030367@upv.edu.mx",
      telefono: "8344118533",
      dirección: "Camarena 101",
      RFC: "CUMO060703GR8",
      categoria: "Regular"
    },
    {
      id: 7,
      nombre: "Cesar Aldahir",
      apaterno: "Flores",
      amaterno: "Gamez",
      email: "2030070@upv.edu.mx",
      telefono: "8341776912",
      dirección: "Italia 211",
      RFC: "FLGA250211T43",
      categoria: "Efectivo"
    },
    {
      id: 8,
      nombre: "Vanessa Itzaiana",
      apaterno: "Garcia",
      amaterno: "Cervantes",
      email: "2030208@upv.edu.mx",
      telefono: "8341518411",
      dirección: "Chile 200",
      RFC: "GACE280202I7P",
      categoria: "Efectivo"
    },
    {
      id: 9,
      nombre: "Lilian Sayli",
      apaterno: "Garcia",
      amaterno: "Puente",
      email: "2030270@upv.edu.mx",
      telefono: "8341112536",
      dirección: "Las Torres 704",
      RFC: "GAPU220812O99",
      categoria: "Servicios"
    },
    {
      id: 10,
      nombre: "Jorge",
      apaterno: "Guevara",
      amaterno: "Garcia",
      email: "2030192@upv.edu.mx",
      telefono: "8347192264",
      dirección: "Tampico 844",
      RFC: "GUGA040506L95",
      categoria: "Completo"
    }
  ];


// Función para llenar la tabla 
function fillTable(){
    let table = document.getElementById("contentTable")
    // Contenido de la tabla con toda la información
    let contentTable = data.map(function (p) {
        return `<tr>
          <td>${p.nombre}</td>
          <td>${p.apaterno}</td>
          <td>${p.amaterno}</td>
          <td>${p.email}</td>
          <td>${p.telefono}</td>
          <td>${p.dirección}</td>
          <td>${p.RFC}</td>
          <td>${p.categoria}</td>
        </tr>`
    });
    // Se une todo el contenido del array
    contentTable = contentTable.join("");

    table.innerHTML = contentTable
}

// Cuando se cargue la página se llena la tabla
document.addEventListener("DOMContentLoaded", function() {
  fillTable()
});

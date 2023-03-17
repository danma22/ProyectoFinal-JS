'use strict'

// Datos para la tabla
const data = [
    {
      id: 1,
      nombre: "Kevin Alejandro",
      apaterno: "Hernández",
      amaterno: "Campillo",
      email: "2030284@upv.edu.mx",
      telefono: "4221856432",
      dirección: "Revolucion 191",
      RFC: "HECA012402J82",
      categoria: "Regular"
    },
    {
      id: 2,
      nombre: "Mauricio",
      apaterno: "Hernández",
      amaterno: "Cepeda",
      email: "2030285@upv.edu.mx",
      telefono: "8346132278",
      dirección: "Rio de Janeiro 450",
      RFC: "HECE031801P43",
      categoria: "Completo"
    },
    {
      id: 3,
      nombre: "Jose Andrik",
      apaterno: "Martínez",
      amaterno: "Rodríguez",
      email: "2030152@upv.edu.mx",
      telefono: "8341454597",
      dirección: "Trebol 1495",
      RFC: "MARO040602",
      categoria: "Servicios"
    },
    {
      id: 4,
      nombre: "Yanel Azucena",
      apaterno: "Mireles",
      amaterno: "Sena",
      email: "2030055@upv.edu.mx",
      telefono: "8347141558",
      dirección: "Tulum 470",
      RFC: "MISE070809R23",
      categoria: "Servicios"
    },
    {
      id: 5,
      nombre: "Hector Javier",
      apaterno: "Morales",
      amaterno: "Alanis",
      email: "2030103@upv.edu.mx",
      telefono: "8349674152",
      dirección: "Xochitl 199",
      RFC: "MOAL030502GT4",
      categoria: "Regular"
    },
    {
      id: 6,
      nombre: "Sonia Lizbeth",
      apaterno: "Muñoz",
      amaterno: "Barrientos",
      email: "2030114@upv.edu.mx",
      telefono: "8341772944",
      dirección: "Bolsonaro 222",
      RFC: "MUBA010101M44",
      categoria: "Regular"
    },
    {
      id: 7,
      nombre: "Osiel Alejandro",
      apaterno: "Ordoñez",
      amaterno: "Cruz",
      email: "2030023@upv.edu.mx",
      telefono: "8341652121",
      dirección: "Australia 888",
      RFC: "ORCR030112U54",
      categoria: "Efectivo"
    },
    {
      id: 8,
      nombre: "Humberto Erubiel",
      apaterno: "Ortega",
      amaterno: "Lujano",
      email: "2030511@upv.edu.mx",
      telefono: "8341117835",
      dirección: "USA 148",
      RFC: "ORLU190509Y23",
      categoria: "Efectivo"
    },
    {
      id: 9,
      nombre: "Christopher Emmanuel",
      apaterno: "Perez",
      amaterno: "Duque",
      email: "2030358@upv.edu.mx",
      telefono: "8347539514",
      dirección: "Guerrero 14",
      RFC: "PEDU110906B43",
      categoria: "Servicios"
    },
    {
      id: 10,
      nombre: "Jorge Jhovan",
      apaterno: "Rodríguez",
      amaterno: "Moreno",
      email: "2030295@upv.edu.mx",
      telefono: "8341597538",
      dirección: "Veracruz 44",
      RFC: "ROMO030301C31",
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

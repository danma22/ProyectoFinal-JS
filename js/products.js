
'use strict'


// Array con todos los productos de la lista
const menu = [
    {
      id: 1,
      title: "Bicicleta Urbana Vintage UrbanFit",
      category: "bicicletas",
      price: 2949.00,
      img: "imgs/bici1.jpg",
      desc: `Con la bicicleta urbana vintage de UrbanFit Pro podrás trasladarte a todos lados de manera sencilla y con el estilo único con la que está hecha.`,
    },
    {
      id: 2,
      title: "Bicicleta Montaña Starbike",
      category: "bicicletas",
      price: 2899.00,
      img: "imgs/bici2.jpg",
      desc: `Bicicleta de montaña rodada 26 con 18 velocidades. Perfecta para iniciar en el deporte del ciclismo.`,
    },
    {
      id: 3,
      title: "iNFANCiA FELiZ Triciclo Transformable",
      category: "triciclos",
      price: 1499.00,
      img: "imgs/tri2.jpg",
      desc: `Triciclo, Bicicleta entrenadora, con Manubrio y Llantas traseras plegables y pedales desmontables.`,
    },
    {
      id: 4,
      title: "MUSA Patineta Profesional",
      category: "skateboards",
      price: 1399.00,
      img: "imgs/sk1.jpg",
      desc: `Nuestras patinetas cuentan con una cubierta cóncava media con forma de paleta simétrica, que la vuelve perfecta para patinadores de todo nivel.`,
    },
    {
      id: 5,
      title: "Bicicleta Plegable Flink Monk",
      category: "bicicletas",
      price: 6824.99,
      img: "imgs/bici3.jpg",
      desc: `Es una bicicleta pensada para todas las personas que quieren participar en el ciclismo recreativo, amateur y aficionado.`,
    },
    {
      id: 6,
      title: "Quest Skateboards Native Spirit",
      category: "skateboards",
      price: 1973.10,
      img: "imgs/sk3.jpg",
      desc: `El diseño de rueda abierta garantiza que no haya mordida de la rueda para una seguridad óptima a velocidad.`,
    },
    {
      id: 7,
      title: "Chicago Skates Classic Rink",
      category: "patines",
      price: 1307.71,
      img: "imgs/pat2.jpg",
      desc: `Patines clásicos de cuatro ruedas con bota alta y sistema de fácil amarre.`,
    },
    {
      id: 8,
      title: "SEASKY Patineta Completa",
      category: "skateboards",
      price: 699.00,
      img: "imgs/sk2.jpg",
      desc: `Esta patineta completa tiene una apariencia única, doble cabeza en forma de U + patrón de serpiente codiciosa.`,
    },
    {
      id: 9,
      title: "Red Rider Trike",
      category: "zapatos",
      price: 1657.95,
      img: "imgs/tri1.jpg",
      desc: `Este robusto triciclo cuenta con construcción de acero, manillar de agarre cómodo y ruedas de conducción silenciosas.`,
    },
    {
      id: 10,
      title: "RUIFUDA Patinete Plegable",
      category: "scooters",
      price: 809.00,
      img: "imgs/sco2.jpg",
      desc: `Vehículo portátil para el transporte de niños y deportes de ocio, diseño plegable, fácil de usar.`,
    },
    {
      id: 11,
      title: "Apache Triciclo clásico",
      category: "triciclos",
      price: 999.0,
      img: "imgs/tri3.jpg",
      desc: `¡Diversión sobre ruedas! El uso del triciclo ayuda a mejorar la tonificación de los músculos y aumenta su coordinación.`,
    },
    {
      id: 12,
      title: "YOMYM Patines en línea",
      category: "patines",
      price: 1099.0,
      img: "imgs/pat1.jpg",
      desc: `Si está buscando un par de patines sólidos, cómodos y bien hechos para salir a divertirse, entonces nuestros patines son los adecuados.`,
    },
    {
      id: 13,
      title: "Xiaomi Mi Electric Scooter",
      category: "scooters",
      price: 8877.10,
      img: "imgs/sco1.jpg",
      desc: `Mi Electric Scooter Essential está diseñado para las personas que quieren mantenerlo ligero y fácil.`,
    },
    {
      id: 14,
      title: "Rollerface Hipskates Soul",
      category: "patines",
      price: 2441.40,
      img: "imgs/pat3.jpg",
      desc: `Patines en paralelo color negro. Freno de tope ajustable.`,
    },
    {
      id: 15,
      title: "Razor A5 Air Scooter",
      category: "scooters",
      price: 4031.19,
      img: "imgs/sco3.jpg",
      desc: `El A5 Air está construido como una navaja resistente para los desplazamientos diarios en terrenos urbanos accidentados.`,
    },
  ];

// Al cargar la pagina, a traves de las funciones displayMenuItems y cargarBotones, se muestra el contenido dinámico
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    cargarBotones(menu);
});

// Función para mostrar las tarjetas de cada producto a partir del array de productos
function diplayMenuItems(menuItems) {
    let content = "";
    let lastLeftElement = Math.trunc(menuItems.length / 2); // Forma de identificar cuando empezará la siguiente columna
    let container = document.getElementById('leftCards') // Contenedor de las tarjetas

    // Se recorre el array con los elementos y se crea el contenido de su tarjeta correspondiente
    menuItems.forEach((e, i) => {
        content += `<div class="card">
            <div class="row g-0">
            <div class="col-6 col-md-7">
                <div class="card-body d-flex flex-column">
                <div class="h-100">
                    <h3 class="card-title">${e.category}</h3>
                </br>
                    <h2 class="card-title">${e.title}</h2>
                    <p class="card-text">
                    ${e.desc}
                    </p>
                    <h4 class="card-title mb-3">$${e.price}</h4>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-primary btn-block">
                    <i class="fa fa-shopping-bag"></i> Comprar
                    </button>
                </div>
                </div>
            </div>
            <div class="col-6 col-md-5">
                <img src="${e.img}" class="card-img img-fluid rounded-start" alt="bici1">
            </div>
            </div>
        </div>`;

        // Cuando el indice llega al limite de la columna izquierda, se cambia el contenedor donde se agregarán las tarjetas
        if (i == lastLeftElement) {
            container.innerHTML = content
            content = '';
            container = document.getElementById('rightCards')
        }

        // Cuando llegué al último elemento, se muestra en la columna derecha
        if (i == menuItems.length-1){
            container.innerHTML = content
        }
    });
}

// Función para mostrar los botones
function cargarBotones(menuItems){
    //Se identifican las categorias a partir de la lista de elementos
    let categories = new Array();
    let btnsContainer = document.getElementById('btnsCategoria');
    let contentBtns = `<label class="btn bg-primary active"> 
        <input type="radio" class="btnsCat" name="options" id="todo" autocomplete="off" checked> Todo
    </label>`; // Se crea el contenido del primer botón, que representa todos los productos
    menuItems.forEach((e) => {
        categories.push(e.category);
    }); // Se añaden las categorias de todos los elementos 

    let result = categories.filter((item,index)=>{
        return categories.indexOf(item) === index;
    }); // Se filtra el resultado de categories y se obtiene un nuevo array: result
    
    // Se recorre el arreglo result para definir los botones que apareceran
    result.forEach((e) => {
        let cat = e.charAt(0).toUpperCase() + e.slice(1);
        contentBtns += `<label class="btn bg-primary">
            <input type="radio" class="btnsCat" name="options" id="${e}" autocomplete="off"> ${cat}
        </label>`;
    })

    btnsContainer.innerHTML = contentBtns; // Se agrega los botones y se obtiene en un array los botones creados
    let filterBtns = btnsContainer.querySelectorAll('.btnsCat');

    // Se recorren los botones para agregarles un evento de click
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function (e){
            //Cada vez que se de click, como el id del boton es igual a la categoria en cada elemento del arreglo principal
            //Se compara el id del boton con la categoria del item principal en un recorrido foreach
            let category = btn.id;

            let menuCategory = menuItems.filter(function (item) {
                // Si coincide con la categoría escogida, se añade a un nuevo arreglo
                if (item.category === category) {
                    return item;
                }
            });

            // Se identifica si se dio click al boton tood y se muestras las tarjetas filtradas
            if (category == "todo") {
                diplayMenuItems(menuItems);
              } else {
                diplayMenuItems(menuCategory);
              }
        });
    })
}






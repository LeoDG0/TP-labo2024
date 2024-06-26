document.addEventListener("DOMContentLoaded", onInit); // importante no poner parentesis

function onInit() {

  //actualizar año footer
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('year');
  yearElement.textContent = currentYear;
  modificarDetallesNosotros();
}

function modificarDetallesNosotros() {
  const arr = getFromApi();
  var divDad = document.getElementById("container-details");

  for (let i = 0; i < arr.length; i++) {
    const aux = arr[i];
    
    var divChild = document.createElement("div");
    divChild.className = 'container-detail';

    var imgChild = document.createElement("img");
    imgChild.src = aux.img;

    var titleChild = document.createElement("h3");
    titleChild.textContent = aux.title;

    var pChild = document.createElement("p");
    pChild.textContent = aux.text;

    divChild.appendChild(imgChild);
    divChild.appendChild(titleChild);
    divChild.appendChild(pChild);

    divDad.appendChild(divChild);
  }
}

function getFromApi() {
  return [
    { id: 1, img: './assets/images/icono3.svg', alt: 'Icono 2', title: 'Mejor Precio', text: 'Contenido 1' },
    { id: 2, img: './assets/images/icono3.svg', alt: 'Icono 2', title: 'Seguridad', text: 'Contenido 2' },
  ];
}

function sumar(param1, param2) {
  console.log(param1 + param2);
}

function cargarPaises() {
  console.log("Cargó los paises");
}

function onSubmit() {
  const form = document.getElementById("form-usuario");

  form.addEventListener("submit", (event) => {
    
    event.preventDefault();
    let arrData = [];

    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        let val = element.value;

        if(element.type === 'radio') {
            val = element.checked;
        }

        const aux = { key: element.name, value: val };
        arrData.push(aux)
    }

    const rta = checkDatosDelFormulario(arrData);

    if(rta) {
        console.log("directo al back");
    }
    else {
        console.log("Ups!");
    }
  });
}
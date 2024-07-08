document.addEventListener("DOMContentLoaded", onInit); // importante no poner parentesis

function onInit() {

  //actualizar año footer
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('year');
  yearElement.textContent = currentYear;
  modificarDetallesNosotros();
}

//templates
document.addEventListener('DOMContentLoaded', function () {
  const properties = [
    { image: './assets/images/anuncio1.jpg', title: 'Casa de lujo en el lago', description: 'Lorem ipsum dolor sit amet.', price: 'U$S350.000', bathrooms: 3, bedrooms: 4, parking: 3 },
    { image: './assets/images/anuncio2.jpg', title: 'Casa terminados de lujo', description: 'Lorem ipsum dolor sit amet.', price: 'U$S275.000', bathrooms: 3, bedrooms: 4, parking: 3 },
    { image: './assets/images/anuncio3.jpg', title: 'Casa con pileta', description: 'Lorem ipsum dolor sit amet.', price: 'U$S250.000', bathrooms: 3, bedrooms: 4, parking: 3 }
  ];

  const cardContainer = document.getElementById('cardsContainer');
  const template = document.getElementById('propertyCardTemplate');

  properties.forEach(property => {
    const clone = document.importNode(template.content, true);
    clone.querySelector('.card-img-top').src = property.image;
    clone.querySelector('.card-title').textContent = property.title;
    clone.querySelector('.card-text').textContent = property.description;
    clone.querySelector('.price').textContent = property.price;
    clone.querySelector('.icon img[src$="icono_wc.svg"] + div').textContent = property.bathrooms;
    clone.querySelector('.icon img[src$="icono_dormitorio.svg"] + div').textContent = property.bedrooms;
    clone.querySelector('.icon img[src$="icono_estacionamiento.svg"] + div').textContent = property.parking;

    cardContainer.appendChild(clone);
  });
});

//animacion boton ver mas
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('animatedButton');
  
  button.addEventListener('mouseenter', function() {
    const text = this.textContent;
    this.innerHTML = `<span>${text}</span>`;
    const span = this.querySelector('span');
    
    span.style.display = 'inline-block';
    span.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
      span.style.transform = 'translateY(100%)';
      
      setTimeout(() => {
        span.style.transform = 'translateY(-100%)';
        
        setTimeout(() => {
          span.style.transform = 'translateY(0)';
        }, 10);
      }, 150);
    }, 0);
  });
});

//animar boton contactanos
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('contactBtn');
  
  const topCurtain = document.createElement('div');
  const bottomCurtain = document.createElement('div');
  
  const curtainStyle = `
    position: absolute;
    width: 95%;
    height: 40%;
    background-color: #e08709;
    transition: transform 0.5s;
  `;
  topCurtain.style.cssText = curtainStyle + 'top: -10px; left: 3%;';
  bottomCurtain.style.cssText = curtainStyle + 'bottom: -10px; left: 3%;';
  
  btn.appendChild(topCurtain);
  btn.appendChild(bottomCurtain);
  
  function handleHover(isHovering) {
    const transform = isHovering ? 'scale(0)' : 'scale(1)';
    topCurtain.style.transform = transform;
    bottomCurtain.style.transform = transform;
    
    btn.style.boxShadow = isHovering ? 'inset 0px 0px 25px #149CEA' : 'none';
    btn.style.backgroundColor = isHovering ? 'transparent' : '#e08709';
  }
  
  btn.addEventListener('mouseenter', () => handleHover(true));
  btn.addEventListener('mouseleave', () => handleHover(false));
});



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
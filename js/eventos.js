const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Lista de Platos de Comida";
    setTimeout(function(){
        subtitle2.textContent = "Y mis preferencias";
    }, 1000);
}, 1000);

//arrays de las listas de comida

const comidas = [
    {
        "nombre": "Pollo a Brasa",
        "favorito": true,
        "calificacion":"* * * * *"
    },
    {
        "nombre": "Causa limeña",
        "favorito": true,
        "calificacion":"* * * *"
    },
    {
        "nombre": "Frejoles",
        "favorito": false,
        "calificacion":"*"
    },
    {
        "nombre": "Quinua",
        "favorito": true,
        "calificacion":"* * * *"
    },
    {
        "nombre": "Caldo de gallina",
        "favorito": true,
        "calificacion":"* * * *"
    },
    {
        "nombre": "Cau Cau",
        "favorito": false,
        "calificacion":"*"
    },
];


const comidasElement = document.getElementById("Platos");
let contenido = "";
comidas.forEach(function(comida) {    
    let claseicon = "rico";
    if (comida.favorito) {
        claseicon = "rico";
    } else {
        claseicon = "no-rico";
    }
    const template = `
        <div class="comida">
            <div class="icon icon-${claseicon}"></div>
            <div class="data">
                <h4>${comida.nombre}</h4>
            </div>
            <div class="califi">
                ${comida.calificacion}
            </div>
        </div>
    `;
    contenido = contenido + template;
});

comidasElement.innerHTML = contenido;
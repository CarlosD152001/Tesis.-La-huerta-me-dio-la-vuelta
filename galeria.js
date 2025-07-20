/*INICIO Script galeria*/
let imagenes = [

    {
        "url": "Imagenes/imagen hambre 2.jpeg",
        "nombre": "Proyecto 01",
        "descripción":"Referencia"
    },
    {
        "url": "Imagenes/imagen hambre 1.png",
        "nombre": "Proyecto 01",
        "descripción":"Referencia"
    },
    {
        "url": "Imagenes/imagen hambre 3.png",
        "nombre": "Proyecto 01",
        "descripción":"Referencia"
    },
    {
        "url": "Imagenes/imagen hambre 5.jpg",
        "nombre": "Proyecto 01",
        "descripción":"Referencia"
    },

]
let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1
    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="imagen 1" class="img" loading="lazy"></img>`
    texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripción}</p>`
    posicionCarrusel()
})

adelante.addEventListener('click', function(){
    actual +=1
    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="imagen 1" class="img" loading="lazy"></img>`
    texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripción}</p>`

    posicionCarrusel()
})

function posicionCarrusel() {
    puntos.innerHTML = ""
    for(var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    }
}
/*FINAL Script galeria*/
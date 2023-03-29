const ImgSlider = [
    './slider/Promo1.jpeg',
    './slider/Promo2.jpeg',
    './slider/Promo3.jpeg',
    './slider/Promo4.jpeg'
]

const img = document.getElementById('Slider')

let i = 0

const slideshow = () => {
    img.src = ImgSlider[i]
    i = ( i < ImgSlider . length - 1) ? i+1 : 0
}

const interval = () => {
    setInterval( slideshow, 2000)
}

// Slider manual
var Images = [
    '.Slider2/Ms1.png',
    '.Slider2/Ms2.png',
    '.Slider2/Ms3.png',
    '.Slider2/Ms4.png',
    '.Slider2/Ms5.png',
    '.Slider2/Ms6.png',
    '.Slider2/Ms7.png',
    '.Slider2/Ms8.png'
    // './Slider2/Ms9.png'
    // './Slider2/Ms10.png',
    // './Slider2/Ms11.png',
    // './Slider2/Ms12.png'
    ];

document.Imagen.src = Images[0];

var SliderDerecho = document.querySelector(".FDe");
var SliderIzquierda = document.querySelector(".FIz");
var Contador = 0;

function MoverDerecha(){
    Contador++;
    if(Contador > Images.length - 1){
        Contador = 0;
    }
    document.Imagen.src = Images[Contador];
}
SliderDerecho.addEventListener("click", MoverDerecha)

function MoverIzquierda (){
    Contador--;
    if(Contador < 0){
        Contador = Images.length - 1;
    }
    document.Imagen.src = Images[Contador];
}
SliderIzquierda.addEventListener("click", MoverIzquierda)

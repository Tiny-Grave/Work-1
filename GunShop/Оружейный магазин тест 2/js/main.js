const sliderTrack = document.getElementById('sliderTrack');
const textTrack = document.getElementById('textTrack');
const text_slide = document.getElementById('text-slide')
let currentIndex = 0;

function changeSlide(index) {
    currentIndex = index;
    const slideWidth = sliderTrack.clientWidth; // Ширина одного слайда
    const textHeight = textTrack.clientHeight; // Высота одного текстового блока

    // Перемещаем изображения
    sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    // Перемещаем текстовые блоки
    textTrack.style.transform = `translateY(-${text_slide.clientHeight * currentIndex}px)`;
}
// Модальное окно
const catalogLink = document.getElementById('catalog-link');
const modal = document.getElementById('catalog-modal');
const closeBtn = document.querySelector('.close');

// При нажатии на "Каталог"
catalogLink.addEventListener('click', () => {
    modal.classList.add('show'); // Добавляем класс для показа окна
});

// При нажатии на кнопку закрытия
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show'); // Убираем класс для скрытия окна
});

// При клике вне окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show'); // Убираем класс при клике вне окна
    }
});
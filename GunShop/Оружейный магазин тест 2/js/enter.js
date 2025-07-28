// Получаем элементы
const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');
const loginContainer = document.querySelector('.form-container.enter');
const registerContainer = document.querySelector('.form-container.regis');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Функция для закрытия всех форм
function closeAllForms() {
    loginContainer.classList.remove('active'); // Убираем активный класс у контейнера
    registerContainer.classList.remove('active'); // Убираем активный класс у контейнера
    loginForm.classList.remove('active'); // Закрываем форму
    registerForm.classList.remove('active'); // Закрываем форму
}

// Переключение для формы входа
loginToggle.addEventListener('click', () => {
    if (loginForm.classList.contains('active')) {
        closeAllForms(); // Закрыть все формы
    } else {
        closeAllForms(); // Закрыть все формы
        loginContainer.classList.add('active'); // Добавляем активный класс контейнеру
        loginForm.classList.add('active'); // Открываем форму входа
    }
});

// Переключение для формы регистрации
registerToggle.addEventListener('click', () => {
    if (registerForm.classList.contains('active')) {
        closeAllForms(); // Закрыть все формы
    } else {
        closeAllForms(); // Закрыть все формы
        registerContainer.classList.add('active'); // Добавляем активный класс контейнеру
        registerForm.classList.add('active'); // Открываем форму регистрации
    }
});
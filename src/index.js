import loginPage from "./pages/login/index";
import registrationPage from "./pages/registration/index";
import {serverErrorTemplate} from "./pages/error-500/error-500";
import userErrorTemplate from "./pages/error-400/index";
import userSettingsPage from "./pages/user-settings/index";
import inputTemplate from "./components/input/index";
import templateButton from "./components/button/index";
import chatPage from "./pages/chats/index";


const main = document.querySelector('.main');

const getLoginPage = (event) => {
    event.preventDefault();
    main.innerHTML = loginPage();
    document.querySelector('.login__form-nickname').innerHTML = inputTemplate("text", "Логин");
    document.querySelector('.login__form-password').innerHTML = inputTemplate("password", "Пароль");
    document.querySelector('.login__btn').innerHTML = templateButton("Авторизоваться");
}

const getRegistrationPage = (event) => {
    event.preventDefault();
    main.innerHTML = registrationPage();
    document.querySelector('.registration__form-email').innerHTML = inputTemplate("text", "Почта");
    document.querySelector('.registration__form-login').innerHTML = inputTemplate("text", "Логин");
    document.querySelector('.registration__form-name').innerHTML = inputTemplate("text", "Имя");
    document.querySelector('.registration__form-surname').innerHTML = inputTemplate("text", "Фамилия");
    document.querySelector('.registration__form-phone').innerHTML = inputTemplate("text", "Телефон");
    document.querySelector('.registration__form-pass').innerHTML = inputTemplate("password", "Пароль");
    document.querySelector('.registration__form-second-pass').innerHTML = inputTemplate("password", "Пароль ещё раз");
    document.querySelector('.registration__btn').innerHTML = templateButton('Зарегистрироваться');
}


document.querySelector('#login').addEventListener('click', (event) => {
    getLoginPage(event);
    document.querySelector('.login__registration').addEventListener('click', event => getRegistrationPage(event));
});

document.querySelector('#registration').addEventListener('click', (event) => {
    getRegistrationPage(event);
    document.querySelector('.registration__login').addEventListener('click', event => getLoginPage(event));
});

document.querySelector('#user-settings').addEventListener('click', (event) => {
    event.preventDefault();
    main.innerHTML = userSettingsPage();
    document.querySelector('.user-settings__btn').innerHTML = templateButton("Сохранить");
});

document.querySelector('#server-error').addEventListener('click', (event) => {
    event.preventDefault();
    main.innerHTML = serverErrorTemplate('505', 'Мы уже фиксим');
});

document.querySelector('#user-error').addEventListener('click', (event) => {
    event.preventDefault();
    main.innerHTML = userErrorTemplate('404', 'Упс, не туда');
});

document.querySelector('#chats').addEventListener('click', (event) => {
    event.preventDefault();
    main.innerHTML = chatPage();
})












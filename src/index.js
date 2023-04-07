import loginPage from "./pages/login/index.js";
import registrationPage from "./pages/registration/index.js";
import {serverErrorTemplate} from "./pages/error-500/error-500";
import userErrorTemplate from "./pages/error-400/index.js";
import userSettingsPage from "./pages/user-settings/index.js";
import inputTemplate from "./components/input/index.js";
import templateButton from "./components/button/index.js";
import chatPage from "./pages/chats/index.js";


const root = document.querySelector('.root');

const getLoginPage = (event) => {
    event.preventDefault();
    root.innerHTML = loginPage();
    document.querySelector('.login__form-nickname').innerHTML = inputTemplate("text", "Логин", 'login');
    document.querySelector('.login__form-password').innerHTML = inputTemplate("password", "Пароль", 'password');
    document.querySelector('.login__btn').innerHTML = templateButton("Авторизоваться");
}

const getRegistrationPage = (event) => {
    event.preventDefault();
    root.innerHTML = registrationPage();
    document.querySelector('.registration__form-email').innerHTML = inputTemplate("text", "Почта", 'email');
    document.querySelector('.registration__form-login').innerHTML = inputTemplate("text", "Логин", 'login');
    document.querySelector('.registration__form-name').innerHTML = inputTemplate("text", "Имя", 'first_name');
    document.querySelector('.registration__form-surname').innerHTML = inputTemplate("text", "Фамилия", 'second_name');
    document.querySelector('.registration__form-phone').innerHTML = inputTemplate("text", "Телефон", 'phone');
    document.querySelector('.registration__form-pass').innerHTML = inputTemplate("password", "Пароль", 'password');
    document.querySelector('.registration__form-second-pass').innerHTML = inputTemplate("password", "Пароль ещё раз", 'password');
    document.querySelector('.registration__btn').innerHTML = templateButton('Зарегистрироваться');
}


document.querySelector('#login').addEventListener('click', (event) => {
    getLoginPage(event);
})


document.querySelector('#registration').addEventListener('click', (event) => {
    getRegistrationPage(event);
    document.querySelector('.registration__login').addEventListener('click', event => getLoginPage(event));
});

document.querySelector('#user-settings').addEventListener('click', (event) => {
    event.preventDefault();
    root.innerHTML = userSettingsPage();
    document.querySelector('.user-settings__btn').innerHTML = templateButton("Сохранить");
});

document.querySelector('#server-error').addEventListener('click', (event) => {
    event.preventDefault();
    root.innerHTML = serverErrorTemplate('505', 'Мы уже фиксим');
});

document.querySelector('#user-error').addEventListener('click', (event) => {
    event.preventDefault();
    root.innerHTML = userErrorTemplate('404', 'Упс, не туда');
});

document.querySelector('#chats').addEventListener('click', (event) => {
    event.preventDefault();
    root.innerHTML = chatPage();
})

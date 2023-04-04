import registrationPage from "./registration.hbs";
import inputTemplate from "../../components/input";
import templateButton from "../../components/button";
import "./registration.css";

export const registrationPage = () => {
    window.onload = () => {
        document.querySelector('.registration__form-email').innerHTML = inputTemplate("text", "Почта");
        document.querySelector('.registration__form-login').innerHTML = inputTemplate("text", "Логин");
        document.querySelector('.registration__form-name').innerHTML = inputTemplate("text", "Имя");
        document.querySelector('.registration__form-surname').innerHTML = inputTemplate("text", "Фамилия");
        document.querySelector('.registration__form-phone').innerHTML = inputTemplate("text", "Телефон");
        document.querySelector('.registration__form-pass').innerHTML = inputTemplate("password", "Пароль");
        document.querySelector('.registration__form-second-pass').innerHTML = inputTemplate("password", "Пароль ещё раз");
        document.querySelector('.registration__btn').innerHTML = templateButton('Зарегистрироваться');

    }
    return registrationPage();
}




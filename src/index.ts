import {LoginPage} from "./pages/login";
import {RegistrationPage} from "./pages/registration";
import {formSubmit} from "./utils/formSubmit";
import {Chats} from "./pages/chats";
import {messageValidate} from "./utils/validator";
import {UserSettings} from "./pages/user-settings";
import {UserError} from "./pages/error-400";
import {ServerError} from "./pages/error-500";
import {UserEdit} from "./pages/editUser-settings";
import Router from './utils/Router';


const root = document.querySelector('.root');
const login = document.querySelector('#login');
const registration = document.querySelector('#registration');
const chats = document.querySelector('#chats');
const settings = document.querySelector('#user-settings');
const userError = document.querySelector('#user-error');
const serverError = document.querySelector('#server-error');
const userEdit = document.querySelector('#edit-user');

const userErrorPage = new UserError({
    errorNumber: '400',
    errorMessage: 'Упс, не туда зашли'
});

const serverErrorPage = new ServerError({
    errorNumber: '500',
    errorMessage: 'Мы уже фиксим'
});



window.addEventListener('DOMContentLoaded', () => {
    Router
        .use('/', LoginPage, {})
        .use('/registration', RegistrationPage, {})
        .use('/chats', Chats, {})
        .use('/user-settings', UserSettings, {})
        .use('/user-settings-edit', UserEdit, {})
        .use('/server-error', ServerError, { errorNumber: '500',
            errorMessage: 'Мы уже фиксим'})
        .use('/user-error', ServerError, {errorNumber: '400',
            errorMessage: 'Упс, не туда зашли'})
        .start();
})



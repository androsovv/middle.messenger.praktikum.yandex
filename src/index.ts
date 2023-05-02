import {LoginPage} from "./pages/login";
import {RegistrationPage} from "./pages/registration";
import {formSubmit} from "./utils/formSubmit";
import {Chats} from "./pages/chats";
import {messageValidate} from "./utils/validator";
import {UserSettings} from "./pages/user-settings";
import {UserError} from "./pages/error-400";
import {ServerError} from "./pages/error-500";
import {UserEdit} from "./pages/editUser-settings";


const root = document.querySelector('.root');
const login = document.querySelector('#login');
const registration = document.querySelector('#registration');
const chats = document.querySelector('#chats');
const settings = document.querySelector('#user-settings');
const userError = document.querySelector('#user-error');
const serverError = document.querySelector('#server-error');
const userEdit = document.querySelector('#edit-user');


const loginPage = new LoginPage({
    events: {
        submit: event => {
            formSubmit(event);
            console.log('shla');
        }
    }
});
const registrationPage = new RegistrationPage({
    events: {
        submit: event => {
            formSubmit(event);
        }
    }
});

const chatsPage = new Chats({
    events: {
        submit: event => {
            formSubmit(event);
            chatsPage.children.error.setProps({ text: messageValidate(event)});
        }
    }
});

const userSettingsPage = new UserSettings({});

const userErrorPage = new UserError({
    errorNumber: '400',
    errorMessage: 'Упс, не туда зашли'
});

const serverErrorPage = new ServerError({
    errorNumber: '500',
    errorMessage: 'Мы уже фиксим'
});

const userEditPage = new UserEdit({
    events: {
        submit: event => {
            formSubmit(event);
        }
    }
});

const getContent = (page: any)  => {
    root?.replaceChildren(page.getContent());
}

window.addEventListener('DOMContentLoaded', () => {
    root?.append(userEditPage.getContent()!);
})

login?.addEventListener('click', event => {
    event.preventDefault();
    getContent(loginPage);
})

registration?.addEventListener('click', event => {
    event.preventDefault();
    getContent(registrationPage);
})

chats?.addEventListener('click', event => {
    event.preventDefault();
    getContent(chatsPage);
})

settings?.addEventListener('click', event => {
    event.preventDefault();
    getContent(userSettingsPage);
})

userError?.addEventListener('click', event => {
    event.preventDefault();
    getContent(userErrorPage);
})

serverError?.addEventListener('click', event => {
    event.preventDefault();
    getContent(serverErrorPage);
})

userEdit?.addEventListener('click', event => {
    event.preventDefault();
    getContent(userEditPage);
})


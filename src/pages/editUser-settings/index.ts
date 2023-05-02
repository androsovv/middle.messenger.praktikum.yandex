import userEditTpl from "./editUser.hbs";
import './editUser.css';
import Block from "../../utils/Block";
import {Button} from "../../components/button";
import {EditInput} from "../../components/editInput";
import {emailValidate, loginValidate, nameValidate, phoneValidate} from "../../utils/validator";

type userEditProps = {
    events?: {
        submit: (event: SubmitEvent) => void;
    }
}

export class UserEdit extends Block{
    constructor(props: userEditProps) {
        super('div', props);
    }

    protected init() {
        this.children.button = new Button({
            label: 'Сохранить'
        });

        this.children.emailInput = new EditInput({
            name: 'email',
            type: 'text',
            class: 'user-settings_input',
            value: 'user@yandex.ru',
            events: {
                focusin: event  => this.children.emailInput.children.error.setProps({ text: emailValidate(event) }),
                focusout: event => this.children.emailInput.children.error.setProps({ text: emailValidate(event) }),
            },
        });
        this.children.loginInput = new EditInput({
            name: 'login',
            type: 'text',
            class: 'user-settings_input',
            value: 'PussyDestroyer9000',
            events: {
                focusin: event  => this.children.loginInput.children.error.setProps({ text: loginValidate(event) }),
                focusout: event => this.children.loginInput.children.error.setProps({ text: loginValidate(event) }),
            },
        });
        this.children.nameInput = new EditInput({
            name: 'first_name',
            type: 'text',
            class: 'user-settings_input',
            value: 'Николай',
            events: {
                focusin: event  => this.children.nameInput.children.error.setProps({ text: nameValidate(event) }),
                focusout: event => this.children.nameInput.children.error.setProps({ text: nameValidate(event) }),
            },
        });
        this.children.surnameInput = new EditInput({
            name: 'second_name',
            type: 'text',
            class: 'user-settings_input',
            value: 'Булочкин',
            events: {
                focusin: event  => this.children.surnameInput.children.error.setProps({ text: nameValidate(event) }),
                focusout: event => this.children.surnameInput.children.error.setProps({ text: nameValidate(event) }),
            },
        });
        this.children.chatNameInput = new EditInput({
            name: 'chatName',
            type: 'text',
            class: 'user-settings_input',
            value: 'ღ::..Одино4ка..::ღ ',
        });
        this.children.phoneInput = new EditInput({
            name: 'phone',
            type: 'text',
            class: 'user-settings_input',
            value: '+79037777777',
            events: {
                focusin: event  => this.children.phoneInput.children.error.setProps({ text: phoneValidate(event) }),
                focusout: event => this.children.phoneInput.children.error.setProps({ text: phoneValidate(event) }),
            },
        });

    }

    render(): DocumentFragment {
        return this.compile(userEditTpl, this.props);
    }
}

import registrationPageTpl from "./registration.hbs";
import "./registration.css";
import Block from "../../utils/Block";
import {Input} from "../../components/input";
import {Button} from "../../components/button";


export class RegistrationPage extends Block {
    constructor(props) {
        super('div', props);
    }

    init() {
        this.children.emailInput = new Input({
            overText: "Почта",
            inputType: 'text',
            name: 'email',
            error: ''
        });
        this.children.loginInput = new Input({
            overText: "Логин",
            inputType: 'text',
            name: 'login',
            error: ''
        });
        this.children.nameInput = new Input({
            overText: "Имя",
            inputType: 'text',
            name: 'first_name',
            error: ''
        });
        this.children.surnameInput = new Input({
            overText: "Фамилия",
            inputType: 'text',
            name: 'second_name',
            error: ''
        });
        this.children.phoneInput = new Input({
            overText: "Телефон",
            inputType: 'text',
            name: 'phone',
            error: ''
        });
        this.children.passwordInput = new Input({
            overText: "Пароль",
            inputType: 'password',
            name: 'password',
            error: ''
        });
        this.children.secondPasswordInput = new Input({
            overText: "Пароль (ещё раз)",
            inputType: 'password',
            name: 'password',
            error: ''
        });
        this.children.button = new Button({
            label: 'Зарегистрироваться'
        });

    }

    protected render() {
        console.log('render');
        return this.compile(registrationPageTpl, this.props);
    }

}

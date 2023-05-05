import registrationPageTpl from "./registration.hbs";
import "./registration.css";
import Block from "../../utils/Block";
import {Input} from "../../components/input";
import {Button} from "../../components/button";
import {
    emailValidate,
    loginValidate,
    nameValidate,
    passwordValidate,
    phoneValidate
} from "../../utils/validator";

type registrationProps = {
    events?: {
      submit: (event: SubmitEvent) => void;
    }
  }

export class RegistrationPage extends Block {
    constructor(props: registrationProps) {
        super('div', props);
    }

    init() {
        this.children.emailInput = new Input({
            overText: "Почта",
            inputType: 'text',
            name: 'email',
            events: {
                focusin: event => this.children.emailInput.children.error.setProps({text: emailValidate(event)}),
                focusout: event => this.children.emailInput.children.error.setProps({text: emailValidate(event)})
            }
        });
        this.children.loginInput = new Input({
            overText: "Логин",
            inputType: 'text',
            name: 'login',
            events: {
                focusin: event => this.children.loginInput.children.error.setProps({text: loginValidate(event)}),
                focusout: event => this.children.loginInput.children.error.setProps({text: loginValidate(event)})
            }
        });
        this.children.nameInput = new Input({
            overText: "Имя",
            inputType: 'text',
            name: 'first_name',
            events: {
                focusin: event => this.children.nameInput.children.error.setProps({text: nameValidate(event)}),
                focusout: event => this.children.nameInput.children.error.setProps({text: nameValidate(event)})
            }
        });
        this.children.surnameInput = new Input({
            overText: "Фамилия",
            inputType: 'text',
            name: 'second_name',
            events: {
                focusin: event => this.children.surnameInput.children.error.setProps({text: nameValidate(event)}),
                focusout: event => this.children.surnameInput.children.error.setProps({text: nameValidate(event)})
            }
        });
        this.children.phoneInput = new Input({
            overText: "Телефон",
            inputType: 'text',
            name: 'phone',
            events: {
                focusin: event => this.children.phoneInput.children.error.setProps({text: phoneValidate(event)}),
                focusout: event => this.children.phoneInput.children.error.setProps({text: phoneValidate(event)})
            }
        });
        this.children.passwordInput = new Input({
            overText: "Пароль",
            inputType: 'password',
            name: 'password',
            events: {
                focusin: event => this.children.passwordInput.children.error.setProps({text: passwordValidate(event)}),
                focusout: event => this.children.passwordInput.children.error.setProps({text: passwordValidate(event)})
            }
        });
        this.children.secondPasswordInput = new Input({
            overText: "Пароль (ещё раз)",
            inputType: 'password',
            name: 'password',
            events: {
                focusin: event => this.children.secondPasswordInput.children.error.setProps({text: passwordValidate(event)}),
                focusout: event => this.children.secondPasswordInput.children.error.setProps({text: passwordValidate(event)})
            }
        });
        this.children.button = new Button({
            label: 'Зарегистрироваться'
        });

    }

    protected render() {
        return this.compile(registrationPageTpl, this.props);
    }

}

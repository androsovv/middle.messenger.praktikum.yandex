import template from "./login.hbs";
import "./login.css";
import Block from "../../utils/Block";
import {Button} from "../../components/button";
import {Input} from "../../components/input";
import {loginValidate, passwordValidate} from "../../utils/validator";

export class LoginPage extends Block {
    constructor(props) {
        super('div', props);
    }

     init() {
        this.children.button = new Button({
            label: 'Авторизоваться'
        });

        this.children.login = new Input({
            overText: 'Логин',
            inputType: 'text',
            name: 'login',
            events: {
                focusin: event => this.children.login.children.error.setProps({text: loginValidate(event)}),
                focusout: event => this.children.login.children.error.setProps({text: loginValidate(event)})
            }
        });

         this.children.password = new Input({
             overText: 'Пароль',
             inputType: 'password',
             name: 'password',
             events: {
                 focusin: event => this.children.password.children.error.setProps({text: passwordValidate(event)}),
                 focusout: event => this.children.password.children.error.setProps({text: passwordValidate(event)})
             }
         })

    }

    protected render(): DocumentFragment {

        return this.compile(template, this.props);
    }
}

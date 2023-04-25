import template from "./login.hbs";
import "./login.css";
import Block from "../../utils/Block";
import {Button} from "../../components/button";
import {Input} from "../../components/input";

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
            name: 'login'
        });

         this.children.password = new Input({
             overText: 'Пароль',
             inputType: 'password',
             name: 'password'
         })

    }

    protected render(): DocumentFragment {

        return this.compile(template, this.props);
    }
}

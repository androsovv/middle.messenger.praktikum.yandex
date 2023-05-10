import template from './login.hbs';
import './login.css';
import Block from '../../utils/Block';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import {loginValidate, messageValidate, passwordValidate} from '../../utils/validator';
import {formSubmit} from "../../utils/formSubmit";

type loginProps = {
  events?: {
    submit: (event: SubmitEvent) => void;
  }
}

export class LoginPage extends Block {
  constructor(props: loginProps) {
    super('div', {...props, 
      events: {
        submit: (event: SubmitEvent) => {
            formSubmit(event);
        }
    }
    });
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
        focusin: event  => this.children.login.children.error.setProps({ text: loginValidate(event) }),
        focusout: event => this.children.login.children.error.setProps({ text: loginValidate(event) }),
      },
    });

    this.children.password = new Input({
      overText: 'Пароль',
      inputType: 'password',
      name: 'password',
      events: {
        focusin: event => this.children.password.children.error.setProps({ text: passwordValidate(event) }),
        focusout: event => this.children.password.children.error.setProps({ text: passwordValidate(event) }),
      },
    });

  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

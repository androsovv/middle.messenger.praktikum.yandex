import chatPageTpl from "./chats.hbs";
import "./chats.css";
import Block from "../../utils/Block";
import {SimpleInput} from "../../components/simpleInput/simpleInput";
import {ErrorText} from "../../components/error";
import {formSubmit} from "../../utils/formSubmit";
import {messageValidate} from "../../utils/validator";

type chatsProps = {
    events?: {
        submit: (event: SubmitEvent) => void;
    }
}
export class Chats extends Block {
    constructor(props: chatsProps) {
        super('div', {...props,
            events: {
                submit: (event: SubmitEvent) => {
                    formSubmit(event);
                    this.children.error.setProps({ text: messageValidate(event)});
                }
            }
        });
    }
    init() {
        this.children.input = new SimpleInput({
            name: 'message',
            class: 'message-input',
            type: 'text',
            placeholder: 'Сообщение',
        });

        this.children.error = new ErrorText({
            text: '',
        })

    }
    render() {
        return this.compile(chatPageTpl, this.props);
    }
}

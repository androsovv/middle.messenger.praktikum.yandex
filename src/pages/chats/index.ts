import chatPageTpl from "./chats.hbs";
import "./chats.css";
import Block from "../../utils/Block";
import {SimpleInput} from "../../components/simpleInput/simpleInput";
import {ErrorText} from "../../components/error";

type chatsProps = {
    events?: {
        submit: (event: SubmitEvent) => void;
    }
}
export class Chats extends Block {
    constructor(props: chatsProps) {
        super('div', props);
    }
    init() {
        this.children.input = new SimpleInput({
            name: 'message',
            class: 'message-input',
            type: 'text',
        });

        this.children.error = new ErrorText({
            text: '',
        })

    }
    render() {
        return this.compile(chatPageTpl, this.props);
    }
}

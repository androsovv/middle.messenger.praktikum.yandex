import inputTpl from "./input.hbs";
import "./input.css";
import Block from "../../utils/Block";
import {ErrorText} from "../error";

type inputProps = {
    overText: string,
    inputType: string,
    name: string,
    events?: {
        focusin: (event: FocusEvent) => void,
        focusout: (event: FocusEvent) => void,
    }
};

export class Input extends Block {
    constructor(props: inputProps) {
        super('div', props);

        this.element!.classList.add('input-box');
    }


    render() {
        this.children.error = new ErrorText({
            text: ''
        })
        return this.compile(inputTpl, this.props);
    }
}

import inputTpl from "./input.hbs";
import "./input.css";
import Block from "../../utils/Block";
import {ErrorText} from "../error";

export class Input extends Block {
    constructor(props) {
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

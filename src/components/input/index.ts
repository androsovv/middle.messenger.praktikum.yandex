import inputTpl from "./input.hbs";
import "./input.css";
import Block from "../../utils/Block";

export class Input extends Block {
    constructor(props) {
        super('div', props);

        this.element!.classList.add('input-box');
    }

    render() {
        return this.compile(inputTpl, this.props);
    }
}

import buttonTpl from "./button.hbs";
import "./button.css";
import Block from '../../utils/Block';

export class Button extends Block {
    constructor(props) {
        super('button', props);

        this.element!.classList.add('btn');
    }

    render() {
        return this.compile(buttonTpl, this.props);
    }
}

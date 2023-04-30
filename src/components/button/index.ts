import buttonTpl from "./button.hbs";
import "./button.css";
import Block from '../../utils/Block';


type buttonProps = {
    label: string
};
export class Button extends Block {
    constructor(props: buttonProps) {
        super('button', props);

        this.element!.classList.add('btn');
    }

    render() {
        return this.compile(buttonTpl, this.props);
    }
};

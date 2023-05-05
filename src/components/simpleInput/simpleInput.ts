import tmpl from "./simpleInput.hbs";
import './simpleInput.css';
import Block from "../../utils/Block";

type simpleInputProps = {
    name: string,
    type: string,
    class?: string,
    value?: string,
    placeholder?: string
}

export class SimpleInput extends Block {
    constructor(props: simpleInputProps) {
        super('div', props);
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}

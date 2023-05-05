import errorTpl from "./error.hbs";
import Block from '../../utils/Block';
import "./error.css";

type errorProps = {
    text: string
};
export class ErrorText extends Block {
    constructor(props: errorProps) {
        super('span', props);

        this.element?.classList.add('error');
    }

    protected render() {
        return this.compile(errorTpl, this.props);
    }
}

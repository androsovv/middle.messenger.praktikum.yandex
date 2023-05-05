import error400Tpl from "./error-400.hbs";
import "./error-400.css"
import Block from "../../utils/Block";

type userErrorProps = {
    errorNumber: string,
    errorMessage: string
}

export class UserError extends Block {
    constructor(props: userErrorProps) {
        super('div', props);
    }

     render(): DocumentFragment {
        return this.compile(error400Tpl, this.props);
    }
}

import error500Tpl from "./error-500.hbs";
import "./error-500.css";
import Block from "../../utils/Block";

type serverErrorProps = {
    errorNumber: string,
    errorMessage: string
}
export class ServerError extends Block {
    constructor(props: serverErrorProps) {
        super('div', props);
    }

    protected render(): DocumentFragment {
        return this.compile(error500Tpl, this.props);
    }
}

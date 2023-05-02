import Block from "../../utils/Block";
import tmpl from "./editInput.hbs";
import {ErrorText} from "../error";

type editInputProps = {
    name: string,
    type: string,
    class?: string,
    value?: string,
    events?: {
        focusin: (event: FocusEvent) => void,
        focusout: (event: FocusEvent) => void,
        submit?: (event: SubmitEvent) => void
    }
}

export class EditInput extends Block {
    constructor(props: editInputProps) {
        super('div', props);
    }

    protected render(): DocumentFragment {
        this.children.error = new ErrorText({
            text: ''
        })

        return this.compile(tmpl, this.props);
    }
}

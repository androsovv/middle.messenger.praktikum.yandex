import Block from '../../utils/Block';
import template from './home.hbs';
import {Button} from "../../components/button";

export class HomePage extends Block {
    constructor(props) {
        super('div', props);
    }

    init() {
        this.children.button = new Button({
            label: 'Click me',
            events: {
                click: () => console.log('clicked'),
            },
        });
    }

    render() {
        const button = new Button({
            label: 'Click me',
        })

        return this.compile(template, this.props);
    }
}

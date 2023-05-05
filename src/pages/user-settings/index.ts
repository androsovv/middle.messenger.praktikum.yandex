import userSettingsPageTpl from "./userSettings.hbs";
import "./userSettings.css";
import Block from "../../utils/Block";

export class UserSettings extends Block{
    constructor() {
        super('div');
    }


    render(): DocumentFragment {
        return this.compile(userSettingsPageTpl, this.props);
    }
}

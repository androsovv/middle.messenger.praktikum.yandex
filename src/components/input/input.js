import inputTpl from "./input.hbs";
import "./input.css";

export const inputTemplate = (inputType, overText, name) => {
    return inputTpl({inputType, overText, name});
}

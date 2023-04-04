import inputTpl from "./input.hbs";
import "./input.css";

export const inputTemplate = (inputType, overText) => {
    return inputTpl({inputType, overText});
}
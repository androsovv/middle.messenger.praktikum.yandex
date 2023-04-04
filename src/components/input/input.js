import inputTemplate from "./input.hbs";
import "./input.css";

export const inputTemplate = (inputType, overText) => {
    return inputTemplate({inputType, overText});
}
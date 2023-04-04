import error400Tpl from "./error-400.hbs";
import "./error-400.css"


export const userErrorTemplate = (errorNumber, errorMessage) => {
    return error400Tpl({errorNumber, errorMessage});
}
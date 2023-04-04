import error400 from "./error-400.hbs";
import "./error-400.css"


export const userErrorTemplate = (errorNumber, errorMessage) => {
    return error400({errorNumber, errorMessage});
}
import error500Tpl from "./error-500.hbs";
import "./error-500.css";

export const serverErrorTemplate = (errorNumber, errorMessage) => {
    return error500Tpl({errorNumber, errorMessage});
}

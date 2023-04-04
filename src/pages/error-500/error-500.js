import error500 from "./error-500.hbs";
import "./error-500.css";

export const serverErrorTemplate = (errorNumber, errorMessage) => {
    return error500({errorNumber, errorMessage});
}

import {LoginPage} from "./pages/login";
import {RegistrationPage} from "./pages/registration";
import {getData} from "./utils/formSubmit";


const root = document.querySelector('.root');

window.addEventListener('DOMContentLoaded', () => {
     const loginPage = new LoginPage({
        events: {
            submit: (event) => {
                getData(event);
            }
        }
    });

    const registrationPage = new RegistrationPage({
        events: {
            submit: (event) => {
               getData(event);
            }
        }
    });


    root.append(registrationPage.getContent()!);
})


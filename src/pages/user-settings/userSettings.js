import userSettingsPage from "./userSettings.hbs";
import templateButton from "../../components/button/index";
import "./userSettings.css";

export const userSettingsPage = () => {
    const context = {
      email: "pochta@yandex.ru",
      login: "leroyjenkins",
      name: "Leroy",
      surname: "Jenkins",
      chatName: "pussydestroyer3000",
      phone: "+7 (909) 967 30 30",
    }

    return userSettingsPage(context);
}
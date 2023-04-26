

const oneCapitalLetter = /[A-ZА-Я]+/;
const firstCapitalLetter = /^[A-ZА-Я]+.*$/;
const onlyLettersAndDash = /^[A-ZА-Яa-zа-я-]+$/;
const latinLetters = /[a-zA-z]+/;
const oneDigit = /[0-9]+/;
const allDigits = /^\d+$/;
const spaceSymbol = /^\S*$/;
const specialCharacters = /[^\s\w\dа-яА-ЯёЁ]/;
const emailCharacters = /^\S+@\S+\.([A-Za-z]{2,4})$/;
const noDigits = /[a-zA-Z\(\)\ -]/;
const phoneSymbols = /^[\d\+][\d\(\)\ -]\d$/;

export const loginValidate = event => {
    const value = event.target.value;
    if (!value.length) {
        return 'Логин не может быть пустым';
    }
    if (value.length < 3 || value.length > 20) {
        return 'Логин должен содержать от 3х до 20 символов';
    }
    if (value.match(allDigits)) {
        return 'Логин должен содержать хотябы одну букву';
    }
    if (!value.match(latinLetters)) {
        return 'Логин должен использовать только латинские буквы';
    }
    if (!value.match(spaceSymbol)) {
        return 'В логине не должно быть пробелов';
    }
    if (value.match(specialCharacters)) {
        return 'В логине не должно быть специальных символов'
    }
}

export const nameValidate = event => {
    const value = event.target.value;
    if (!value.length) {
        return 'Поля имени и фамилии не могут быть пустыми';
    }
    if (!value.match(firstCapitalLetter)) {
        return 'Первая буква должна быть заглавная';
    }
    if (!value.match(onlyLettersAndDash)) {
        return 'Можно использовать только буквы и дефис';
    }
}

export const passwordValidate = event => {
    const value = event.target.value;

    if (!value.length) {
        return 'Пароль не должен быть пустым';
    }
    if (value.length < 8 || value.length > 40) {
        return 'Пароль должен содержать от 8 до 40 символов';
    }
    if (!value.match(oneCapitalLetter)) {
        return 'Пароль должен иметь минимум одну заглавную букву';
    }
    if (!value.match(oneDigit)) {
        return 'Пароль должен содержать минимум одну цифру';
    }
}

export const emailValidate = event => {
    const value = event.target.value;

    if (!value.length) {
        return 'Email не должен быть пустым';
    }
    if (!value.match(emailCharacters)) {
        return 'Некорректный email'
    }
}

export const phoneValidate = event => {
    const value = event.target.value;

    if (!value.length) {
        return 'Телефон не должен быть пустым';
    }
    if (value.length < 10 || value.length > 15) {
        return 'Телефон должен содержать от 10 до 15 цифр';
    }
    if (value.match(noDigits)) {
        return 'В телефоне могут быть только цифры';
    }
    if (!value.match(phoneSymbols)) {
        return 'Неправильный номер телефона';
    }
}

export const messageValidate = event => {
    const value = event.target.value;

    if (!value.length) {
        return 'Ваше сообщение пустое';
    }
}
